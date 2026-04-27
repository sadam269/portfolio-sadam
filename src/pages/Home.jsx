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

// Pour ajouter un logo : importe-le et remplace null par la variable importée
// ex: import logoSoinaa from '../assets/logo-soinaa.png'  → logo: logoSoinaa
const ventures = [
  {
    name: 'Soinaa-tech',
    initials: 'ST',
    logo: logoSoinaa,
    role: 'Co-fondateur',
    url: 'https://soinatech.com',
    desc: 'Studio digital spécialisé dans la transformation numérique des entreprises, écoles et entrepreneurs aux Comores et au Maroc. Création web, développement d\'applications métiers et intégration de solutions IA scalables.',
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

      {/* Ventures */}
      <section style={{ backgroundColor: 'var(--bg-muted)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <SectionLabel>Ventures & co-fondateur</SectionLabel>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}
          >
            {ventures.map((v, i) => (
              <motion.a
                key={v.name}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i}
                style={{
                  display: 'block', textDecoration: 'none',
                  backgroundColor: 'var(--card)', borderRadius: '6px',
                  border: '1px solid var(--border)', borderTop: '2px solid var(--accent)',
                  padding: '36px 32px',
                  boxShadow: '0 2px 12px rgba(26,26,26,0.04)',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(184,134,11,0.1)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(26,26,26,0.04)'; e.currentTarget.style.borderTop = '2px solid var(--accent)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.borderTopColor = 'var(--accent)' }}
              >
                {/* Logo */}
                <div style={{ marginBottom: '24px' }}>
                  {v.logo ? (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: '#fff' }}>
                      <img src={v.logo} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: '48px', height: '48px', borderRadius: '8px',
                      backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border)',
                      fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--accent)',
                    }}>
                      {v.initials}
                    </div>
                  )}
                </div>

                {/* Role badge */}
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--accent)', display: 'block', marginBottom: '8px',
                }}>
                  {v.role}
                </span>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {v.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
                  {v.desc}
                </p>

                {/* Link */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Visiter le site
                  </span>
                  <span style={{ fontSize: '0.75rem' }}>↗</span>
                </div>
              </motion.a>
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
