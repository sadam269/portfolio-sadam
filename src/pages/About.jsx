import { motion } from 'framer-motion'
import profilePhoto from '../assets/image copy.png'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' } }),
}

const SectionLabel = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
    <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent)' }} />
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
      {children}
    </span>
  </div>
)

const skills = [
  { category: 'Data Science & IA', color: '#B8860B', items: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'Visualisation de données'] },
  { category: 'Développement Web', color: '#6B7A8D', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'PHP', 'Django'] },
  { category: 'Big Data & Ingénierie', color: '#5C7A5C', items: ['Big Data', 'Traitement de données', 'Pipeline de données', 'Modélisation'] },
  { category: 'Méthodes & Outils', color: '#8D6B5C', items: ['Environnement agile', 'Gestion de projet', 'KPIs & reporting', 'Travail en équipe'] },
]

const parcours = [
  { annee: '2023 – 2025', titre: 'Master Big Data & Digital Business', lieu: "Sup'Management — Fès", desc: "Formation orientée data science, intelligence artificielle appliquée au business, stratégie digitale et traitement de données massives." },
  { annee: '2021 – 2022', titre: 'Licence Sciences Mathématiques et Informatique', lieu: 'Faculté des Sciences Ibn Zohr — Agadir', desc: "Formation scientifique axée sur les mathématiques, l'algorithmique et les fondements de l'informatique." },
  { annee: '2015 – 2016', titre: 'Baccalauréat Scientifique', lieu: 'Lycée Mixte de Mutsamudu', desc: '' },
]

export default function About() {
  return (
    <div style={{ paddingTop: '64px', backgroundColor: 'var(--bg)' }}>

      {/* Hero */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '80px 24px 64px' }}>
        <motion.div initial="hidden" animate="visible"
          style={{ display: 'flex', alignItems: 'center', gap: '56px', flexWrap: 'wrap' }}>

          {/* Photo */}
          <motion.div variants={fadeUp} custom={0} style={{ flex: '0 0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-12px', borderRadius: '50%', border: '1px solid var(--border)' }} />
            <img src={profilePhoto} alt="Sadam Soufiani" style={{
              position: 'relative', width: '160px', height: '160px', borderRadius: '50%',
              objectFit: 'cover', border: '2px solid var(--accent)',
              boxShadow: '0 4px 20px rgba(184,134,11,0.12)',
            }} />
          </motion.div>

          <div style={{ flex: '1 1 380px' }}>
            <motion.div variants={fadeUp} custom={0} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                À propos
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, color: 'var(--fg)', marginBottom: '20px' }}>
              Mon parcours
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--fg-muted)', lineHeight: 1.8, maxWidth: '520px' }}>
              Ingénieur Big Data spécialisé en Data Science et développement web. Curieux et motivé par les défis techniques, à l'aise en équipe et en environnement agile — compétences solides en modélisation et traitement de données.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Rule */}
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* Formation + Skills */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '72px' }}>

          {/* Formation */}
          <div>
            <SectionLabel>Formation académique</SectionLabel>
            <div>
              {parcours.map((item, i) => (
                <motion.div key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                  style={{ display: 'flex', gap: '20px', paddingBottom: i < parcours.length - 1 ? '32px' : '0', marginBottom: i < parcours.length - 1 ? '0' : '0' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '16px', flexShrink: 0 }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--accent)', border: '2px solid var(--bg)', boxShadow: '0 0 0 2px var(--accent)', marginTop: '5px', flexShrink: 0 }} />
                    {i < parcours.length - 1 && <div style={{ width: '1px', flex: 1, backgroundColor: 'var(--border)', marginTop: '8px' }} />}
                  </div>
                  <div style={{ flex: 1, paddingBottom: i < parcours.length - 1 ? '8px' : '0' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '6px' }}>
                      {item.annee}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '4px', lineHeight: 1.4 }}>
                      {item.titre}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--fg-muted)', fontStyle: 'italic', marginBottom: item.desc ? '8px' : '0' }}>
                      {item.lieu}
                    </p>
                    {item.desc && <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--fg-muted)', lineHeight: 1.7 }}>{item.desc}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compétences */}
          <div>
            <SectionLabel>Compétences & outils</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {skills.map((group, i) => (
                <motion.div key={group.category}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: group.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
                      {group.category}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {group.items.map(skill => (
                      <span key={skill} style={{
                        fontFamily: 'var(--font-sans)', fontSize: '0.8rem', padding: '5px 12px',
                        borderRadius: '3px', backgroundColor: 'var(--card)', border: '1px solid var(--border)',
                        color: 'var(--fg-muted)', transition: 'border-color 0.2s, color 0.2s', cursor: 'default',
                      }}
                        onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
                        onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--fg-muted)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
