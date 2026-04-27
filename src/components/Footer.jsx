import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>
            Sadam <span style={{ color: '#818cf8' }}>Soufiani</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/about" style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#94a3b8'}
              onMouseLeave={e => e.target.style.color = '#64748b'}>
              À propos
            </Link>
            <Link to="/projects" style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#94a3b8'}
              onMouseLeave={e => e.target.style.color = '#64748b'}>
              Projets
            </Link>
            <Link to="/contact" style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#94a3b8'}
              onMouseLeave={e => e.target.style.color = '#64748b'}>
              Contact
            </Link>
            <a href="https://www.linkedin.com/in/sadam-soufiani-3bb32a320" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#818cf8'}
              onMouseLeave={e => e.target.style.color = '#64748b'}>
              LinkedIn
            </a>
            <a href="https://github.com/sadam269" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#818cf8'}
              onMouseLeave={e => e.target.style.color = '#64748b'}>
              GitHub
            </a>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#334155', marginTop: '8px' }}>
            © {new Date().getFullYear()} Sadam Soufiani — Data Scientist · Ingénieur Big Data
          </p>
        </div>
      </div>
    </footer>
  )
}
