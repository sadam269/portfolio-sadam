import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/image copy.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

const highlights = [
  { icon: '🤖', label: 'Data Science & IA', desc: 'Machine Learning, Deep Learning, Python — modèles prédictifs et détection d\'anomalies' },
  { icon: '📊', label: 'Big Data & Ingénierie', desc: 'Traitement de données à grande échelle, pipelines de données, modélisation' },
  { icon: '💼', label: 'Digital Business', desc: 'Stratégie e-commerce, KPIs, intelligence économique appliquée au terrain' },
]

export default function Home() {
  return (
    <div>
      {/* Hero — Dark Navy */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px 72px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-120px', left: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
          <motion.div initial="hidden" animate="visible" style={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <motion.p variants={fadeUp} custom={0}
              style={{ color: '#818cf8', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Bonjour, je suis
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '12px' }}>
              Sadam Soufiani
            </motion.h1>
            <motion.p variants={fadeUp} custom={2}
              style={{ fontSize: '1.2rem', color: '#a5b4fc', fontWeight: 600, marginBottom: '20px' }}>
              Data Scientist · Ingénieur Big Data & Digital Business
            </motion.p>
            <motion.p variants={fadeUp} custom={3}
              style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '40px', maxWidth: '540px' }}>
              Ingénieur Big Data spécialisé en Data Science et développement web.
              Je conçois des modèles de machine learning, traite des données à grande échelle
              et développe des applications orientées résultats.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/projects"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 26px', borderRadius: '8px', backgroundColor: '#4f46e5', color: 'white', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(79,70,229,0.45)' }}>
                Voir mes projets
              </Link>
              <Link to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 26px', borderRadius: '8px', border: '1.5px solid rgba(255,255,255,0.18)', color: '#e2e8f0', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none', backgroundColor: 'transparent' }}>
                Me contacter
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
            style={{ flex: '0 0 auto', position: 'relative' }}
          >
            <div style={{ position: 'absolute', inset: '-10px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)', filter: 'blur(16px)', pointerEvents: 'none' }} />
            <img
              src={profilePhoto}
              alt="Sadam Soufiani"
              style={{ position: 'relative', width: '240px', height: '240px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(165,180,252,0.35)', boxShadow: '0 0 0 1px rgba(99,102,241,0.25)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ backgroundColor: '#ffffff', padding: '88px 24px', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ textAlign: 'center', color: '#4f46e5', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}
          >
            Expertises
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#0f172a', marginBottom: '56px' }}
          >
            Ce que j'apporte
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i}
                style={{ padding: '32px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(79,70,229,0.12)'; e.currentTarget.style.borderColor = '#c7d2fe' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#e2e8f0' }}
              >
                <span style={{ fontSize: '2.2rem', marginBottom: '18px', display: 'block' }}>{item.icon}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0f172a', marginBottom: '10px' }}>{item.label}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#f8fafc', padding: '96px 24px', textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0}
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
            Intéressé par mon profil ?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1}
            style={{ color: '#64748b', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Que ce soit pour une opportunité professionnelle, un projet ou une collaboration,
            je suis disponible pour échanger.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link to="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 34px', borderRadius: '8px', backgroundColor: '#4f46e5', color: 'white', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(79,70,229,0.35)' }}>
              Prendre contact
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
