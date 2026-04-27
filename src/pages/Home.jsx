import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/image copy.png'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
}

const SectionLabel = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
    <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
      {children}
    </span>
    <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
  </div>
)

const highlights = [
  { label: 'Data Science & IA', desc: 'Machine Learning, Deep Learning, Python — modèles prédictifs et détection d\'anomalies en conditions réelles.' },
  { label: 'Big Data & Ingénierie', desc: 'Traitement de données à grande échelle, pipelines robustes et modélisation orientée performance.' },
  { label: 'Digital Business', desc: 'Stratégie e-commerce, KPIs, intelligence économique — transformer les données en décisions concrètes.' },
]

export default function Home() {
  return (
    <div style={{ paddingTop: '64px', backgroundColor: 'var(--bg)' }}>

      {/* Hero */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '96px 24px 80px', position: 'relative' }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,134,11,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '64px', flexWrap: 'wrap' }}>
          <motion.div initial="hidden" animate="visible" style={{ flex: '1 1 420px', maxWidth: '580px' }}>

            {/* Small caps label */}
            <motion.div variants={fadeUp} custom={0} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Bonjour, je suis
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', fontWeight: 400, color: 'var(--fg)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Sadam Soufiani
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.02em', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}>
              Data Scientist · Ingénieur Big Data & Digital Business
            </motion.p>

            <motion.p variants={fadeUp} custom={3} style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '40px', maxWidth: '520px' }}>
              Ingénieur Big Data spécialisé en Data Science et développement web. Je conçois des modèles de machine learning, traite des données à grande échelle et développe des applications orientées résultats.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/projects" style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '12px 28px', borderRadius: '4px', backgroundColor: 'var(--accent)', color: '#fff',
                textDecoration: 'none', border: '1px solid var(--accent)',
                boxShadow: '0 2px 8px rgba(184,134,11,0.25)', transition: 'background-color 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent-light)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(184,134,11,0.35)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(184,134,11,0.25)' }}
              >
                Voir mes projets
              </Link>
              <Link to="/contact" style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '12px 28px', borderRadius: '4px', backgroundColor: 'transparent', color: 'var(--fg)',
                textDecoration: 'none', border: '1px solid var(--border)', transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg)' }}
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ flex: '0 0 auto', position: 'relative' }}
          >
            <div style={{ position: 'absolute', inset: '-16px', borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.6 }} />
            <div style={{ position: 'absolute', inset: '-32px', borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.3 }} />
            <img src={profilePhoto} alt="Sadam Soufiani" style={{
              position: 'relative', width: '220px', height: '220px', borderRadius: '50%',
              objectFit: 'cover', border: '2px solid var(--accent)',
              boxShadow: '0 4px 24px rgba(184,134,11,0.15)',
            }} />
          </motion.div>
        </div>
      </section>

      {/* Rule */}
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* Highlights */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <SectionLabel>Expertises</SectionLabel>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'var(--border)' }}
          >
            {highlights.map((item, i) => (
              <motion.div key={item.label} variants={fadeUp} custom={i}
                style={{ backgroundColor: 'var(--card)', padding: '36px 32px', borderTop: '2px solid var(--accent)', transition: 'background-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-muted)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--card)'}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '12px' }}>
                  {item.label}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rule */}
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--bg-muted)', padding: '96px 24px', textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ maxWidth: '560px', margin: '0 auto' }}>
          <SectionLabel>Contact</SectionLabel>
          <motion.h2 variants={fadeUp} custom={0} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 400, color: 'var(--fg)', marginBottom: '20px' }}>
            Intéressé par mon profil ?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '36px' }}>
            Que ce soit pour une opportunité professionnelle, un projet ou une collaboration, je suis disponible pour échanger.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link to="/contact" style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '14px 36px', borderRadius: '4px', backgroundColor: 'var(--accent)', color: '#fff',
              textDecoration: 'none', border: '1px solid var(--accent)',
              boxShadow: '0 2px 8px rgba(184,134,11,0.25)', display: 'inline-block', transition: 'background-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-light)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--accent)'}
            >
              Prendre contact
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
