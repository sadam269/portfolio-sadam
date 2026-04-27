import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/image copy.png'
import logoSoinaa from '../assets/image.png'
import logoBahati from '../assets/image copy 2.png'

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

const ventures = [
  {
    name: 'Soinaa-tech',
    initials: 'ST',
    logo: logoSoinaa,
    role: 'Co-fondateur',
    url: 'https://soinatech.com',
    desc: "Studio digital spécialisé dans la transformation numérique des entreprises, écoles et entrepreneurs aux Comores et au Maroc. Création web, développement d'applications métiers et intégration de solutions IA scalables.",
  },
  {
    name: 'Bahati Marketplace',
    initials: 'BH',
    logo: logoBahati,
    role: 'Co-fondateur',
    url: 'https://bahati-marketplace.tech',
    desc: 'Première marketplace 100% comorienne. Les vendeurs créent leur boutique en quelques minutes, les acheteurs trouvent vêtements, artisanat, électronique et services — tout en ligne, entre Comoriens. Inscription gratuite.',
  },
]

const highlights = [
  { label: 'Data Science & IA', desc: "Machine Learning, Deep Learning, Python — modèles prédictifs et détection d'anomalies en conditions réelles." },
  { label: 'Big Data & Ingénierie', desc: 'Traitement de données à grande échelle, pipelines robustes et modélisation orientée performance.' },
  { label: 'Digital Business', desc: 'Stratégie e-commerce, KPIs, intelligence économique — transformer les données en décisions concrètes.' },
]

export default function Home() {
  return (
    <div style={{ paddingTop: '64px', backgroundColor: 'var(--bg)' }}>
      <style>{`
        .hero-section { padding: 80px 24px 72px; }
        .hero-name { font-size: clamp(2.4rem, 7vw, 4rem); }
        .hero-label { flex-direction: row; }
        .hero-ctas { justify-content: center; }
        .hero-cta-btn { width: auto; text-align: center; }
        .highlights-grid { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
        .ventures-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

        @media (max-width: 640px) {
          .hero-section { padding: 48px 20px 56px; }
          .hero-name { font-size: 2.2rem !important; }
          .hero-label { flex-direction: column; align-items: center; gap: 8px; }
          .hero-ctas { flex-direction: column; align-items: stretch; }
          .hero-cta-btn { text-align: center; padding: 14px 20px !important; }
          .highlights-grid { grid-template-columns: 1fr !important; }
          .ventures-grid { grid-template-columns: 1fr !important; }
          .section-pad { padding: 56px 20px !important; }
          .rule-pad { padding: 0 20px !important; }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-section { padding: 64px 32px 64px; }
          .highlights-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important; }
          .ventures-grid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important; }
          .section-pad { padding: 64px 32px !important; }
        }
      `}</style>

      {/* Hero — photo en haut, centré */}
      <section className="hero-section" style={{ maxWidth: '72rem', margin: '0 auto', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,134,11,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.div initial="hidden" animate="visible">

          {/* Photo centrée en haut */}
          <motion.div
            variants={fadeUp} custom={0}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ position: 'absolute', inset: '-14px', borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.5 }} />
              <div style={{ position: 'absolute', inset: '-28px', borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.25 }} />
              <img
                src={profilePhoto}
                alt="Sadam Soufiani"
                style={{
                  position: 'relative',
                  width: '148px', height: '148px',
                  borderRadius: '50%', objectFit: 'cover',
                  border: '2px solid var(--accent)',
                  boxShadow: '0 4px 28px rgba(184,134,11,0.18)',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>

          {/* Label — règles de part et d'autre */}
          <motion.div variants={fadeUp} custom={1}
            className="hero-label"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}
          >
            <span style={{ flex: 1, maxWidth: '80px', height: '1px', backgroundColor: 'var(--accent)', opacity: 0.6 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Bonjour, je suis
            </span>
            <span style={{ flex: 1, maxWidth: '80px', height: '1px', backgroundColor: 'var(--accent)', opacity: 0.6 }} />
          </motion.div>

          {/* Nom */}
          <motion.h1 variants={fadeUp} custom={2}
            className="hero-name"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, color: 'var(--fg)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}
          >
            Sadam Soufiani
          </motion.h1>

          {/* Titre */}
          <motion.p variants={fadeUp} custom={3}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.03em', marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid var(--border)', maxWidth: '520px', margin: '0 auto 28px' }}
          >
            Data Scientist · Ingénieur Big Data & Digital Business
          </motion.p>

          {/* Description */}
          <motion.p variants={fadeUp} custom={4}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--fg-muted)', lineHeight: 1.85, marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px' }}
          >
            Ingénieur Big Data spécialisé en Data Science et développement web. Je conçois des modèles de machine learning, traite des données à grande échelle et développe des applications orientées résultats.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={5}
            className="hero-ctas"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Link to="/projects" className="hero-cta-btn" style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '12px 32px', borderRadius: '4px', backgroundColor: 'var(--accent)', color: '#fff',
              textDecoration: 'none', border: '1px solid var(--accent)',
              boxShadow: '0 2px 8px rgba(184,134,11,0.25)', transition: 'background-color 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent-light)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(184,134,11,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(184,134,11,0.25)' }}
            >
              Voir mes projets
            </Link>
            <Link to="/contact" className="hero-cta-btn" style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '12px 32px', borderRadius: '4px', backgroundColor: 'transparent', color: 'var(--fg)',
              textDecoration: 'none', border: '1px solid var(--border)', transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg)' }}
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Rule */}
      <div className="rule-pad" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* Highlights */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <SectionLabel>Expertises</SectionLabel>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="highlights-grid"
            style={{ display: 'grid', gap: '1px', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'var(--border)' }}
          >
            {highlights.map((item, i) => (
              <motion.div key={item.label} variants={fadeUp} custom={i}
                style={{ backgroundColor: 'var(--card)', padding: '32px 28px', borderTop: '2px solid var(--accent)', transition: 'background-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-muted)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--card)'}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '10px' }}>
                  {item.label}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--fg-muted)', lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rule */}
      <div className="rule-pad" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* Ventures */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-muted)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <SectionLabel>Ventures & co-fondateur</SectionLabel>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="ventures-grid"
            style={{ display: 'grid', gap: '24px' }}
          >
            {ventures.map((v, i) => (
              <motion.a key={v.name} href={v.url} target="_blank" rel="noopener noreferrer"
                variants={fadeUp} custom={i}
                style={{
                  display: 'block', textDecoration: 'none',
                  backgroundColor: 'var(--card)', borderRadius: '6px',
                  border: '1px solid var(--border)', borderTop: '2px solid var(--accent)',
                  padding: '32px 28px',
                  boxShadow: '0 2px 12px rgba(26,26,26,0.04)',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(184,134,11,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(26,26,26,0.04)' }}
              >
                <div style={{ marginBottom: '20px' }}>
                  {v.logo ? (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: '#fff' }}>
                      <img src={v.logo} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border)', fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--accent)' }}>
                      {v.initials}
                    </div>
                  )}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}>
                  {v.role}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '10px', lineHeight: 1.3 }}>
                  {v.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '20px' }}>
                  {v.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.63rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Visiter le site</span>
                  <span>↗</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rule */}
      <div className="rule-pad" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* CTA */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-muted)', padding: '88px 24px', textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ maxWidth: '520px', margin: '0 auto' }}>
          <SectionLabel>Contact</SectionLabel>
          <motion.h2 variants={fadeUp} custom={0} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 400, color: 'var(--fg)', marginBottom: '16px' }}>
            Intéressé par mon profil ?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--fg-muted)', lineHeight: 1.85, marginBottom: '32px' }}>
            Que ce soit pour une opportunité professionnelle, un projet ou une collaboration, je suis disponible pour échanger.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link to="/contact" style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '13px 36px', borderRadius: '4px', backgroundColor: 'var(--accent)', color: '#fff',
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
