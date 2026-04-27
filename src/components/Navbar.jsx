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

  useEffect(() => { setMenuOpen(false) }, [location])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      boxShadow: scrolled ? '0 1px 12px rgba(26,26,26,0.06)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      <nav style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none', fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--fg)', letterSpacing: '-0.01em' }}>
          Sadam <span style={{ color: 'var(--accent)' }}>Soufiani</span>
        </NavLink>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} style={({ isActive }) => ({
                fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
                color: isActive ? 'var(--accent)' : 'var(--fg-muted)',
                borderBottom: isActive ? '1px solid var(--accent)' : '1px solid transparent',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              })}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <NavLink to="/contact" className="hidden-mobile" style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '8px 20px', borderRadius: '4px',
          border: '1px solid var(--accent)', color: 'var(--accent)',
          textDecoration: 'none', backgroundColor: 'transparent',
          transition: 'background-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
        >
          Me contacter
        </NavLink>

        {/* Burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px' }}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px', backgroundColor: 'var(--fg)',
              transition: 'transform 0.25s, opacity 0.25s',
              transform: i === 0 && menuOpen ? 'rotate(45deg) translateY(6.5px)' : i === 2 && menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
              opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
            <ul style={{ maxWidth: '72rem', margin: '0 auto', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '18px', listStyle: 'none' }}>
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} style={({ isActive }) => ({
                    fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500,
                    color: isActive ? 'var(--accent)' : 'var(--fg-muted)', textDecoration: 'none',
                  })}>
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
