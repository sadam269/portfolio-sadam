import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ paddingTop: '64px', backgroundColor: 'var(--bg)' }}>
      <section style={{ maxWidth: '520px', margin: '0 auto', padding: '120px 24px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '16px' }}>
            Erreur 404
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, color: 'var(--fg)', marginBottom: '16px' }}>
            Page introuvable
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
            Cette page n'existe pas ou a été déplacée.
          </p>
          <Link to="/" style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '13px 36px', borderRadius: '4px', backgroundColor: 'var(--accent)', color: '#fff',
            textDecoration: 'none', border: '1px solid var(--accent)', display: 'inline-block', transition: 'background-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-light)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--accent)'}
          >
            Retour à l'accueil
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
