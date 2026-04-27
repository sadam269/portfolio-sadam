import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isDark = isHome && !scrolled

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      backgroundColor: isDark ? 'transparent' : 'white',
      borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f1f5f9',
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
      transition: 'background-color 0.3s, box-shadow 0.3s, border-color 0.3s',
    }}>
      <nav style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <NavLink to="/" style={{ fontWeight: 600, fontSize: '1.125rem', letterSpacing: '-0.02em', textDecoration: 'none', color: isDark ? '#ffffff' : '#0f172a' }}>
          Sadam <span style={{ color: isDark ? '#a5b4fc' : '#4f46e5' }}>Soufiani</span>
        </NavLink>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}
          className="hidden-mobile">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                style={({ isActive }) => ({
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: isActive
                    ? (isDark ? '#ffffff' : '#4f46e5')
                    : (isDark ? 'rgba(255,255,255,0.65)' : '#475569'),
                  transition: 'color 0.2s',
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className="hidden-mobile"
          style={{
            padding: '8px 18px',
            borderRadius: '8px',
            backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : '#4f46e5',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none',
            border: isDark ? '1px solid rgba(255,255,255,0.18)' : 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.18)' : '#4338ca'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.1)' : '#4f46e5'}
        >
          Me contacter
        </NavLink>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px' }}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: isDark ? '#e2e8f0' : '#334155', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: isDark ? '#e2e8f0' : '#334155', transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: isDark ? '#e2e8f0' : '#334155', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: isDark ? '#0f172a' : 'white', borderTop: '1px solid #f1f5f9', overflow: 'hidden' }}
          >
            <ul style={{ maxWidth: '1152px', margin: '0 auto', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none' }}>
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    style={({ isActive }) => ({
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isActive ? '#4f46e5' : (isDark ? '#94a3b8' : '#475569'),
                      textDecoration: 'none',
                    })}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </header>
  )
}
