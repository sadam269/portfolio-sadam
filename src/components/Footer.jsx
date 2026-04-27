import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-muted)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '48px 24px' }}>

        {/* Rule + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            Sadam Soufiani
          </span>
          <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { to: '/about', label: 'À propos', internal: true },
              { to: '/projects', label: 'Projets', internal: true },
              { to: '/contact', label: 'Contact', internal: true },
              { to: 'https://www.linkedin.com/in/sadam-soufiani-3bb32a320', label: 'LinkedIn', internal: false },
              { to: 'https://github.com/sadam269', label: 'GitHub', internal: false },
            ].map(({ to, label, internal }) =>
              internal ? (
                <Link key={label} to={to} style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--fg-muted)',
                  textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--fg-muted)'}
                >{label}</Link>
              ) : (
                <a key={label} href={to} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--fg-muted)',
                  textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--fg-muted)'}
                >{label}</a>
              )
            )}
          </nav>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--fg-muted)', letterSpacing: '0.08em', opacity: 0.6 }}>
            © {new Date().getFullYear()} — Data Scientist · Ingénieur Big Data
          </p>
        </div>
      </div>
    </footer>
  )
}
