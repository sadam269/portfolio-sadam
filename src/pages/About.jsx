import { motion } from 'framer-motion'
import profilePhoto from '../assets/image copy.png'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const skills = [
  { category: 'Data Science & IA', color: '#818cf8', items: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'Visualisation de données'] },
  { category: 'Développement Web', color: '#60a5fa', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'PHP', 'Django'] },
  { category: 'Big Data & Ingénierie', color: '#34d399', items: ['Big Data', 'Traitement de données', 'Pipeline de données', 'Modélisation'] },
  { category: 'Méthodes & Outils', color: '#fbbf24', items: ['Environnement agile', 'Gestion de projet', 'KPIs & reporting', 'Travail en équipe'] },
]

const parcours = [
  {
    annee: '2023 – 2025',
    titre: 'Master Big Data & Digital Business',
    lieu: "Sup'Management — Fès",
    desc: "Formation orientée data science, intelligence artificielle appliquée au business, stratégie digitale et traitement de données massives.",
  },
  {
    annee: '2021 – 2022',
    titre: 'Licence Sciences Mathématiques et Informatique',
    lieu: 'Faculté des Sciences Ibn Zohr — Agadir',
    desc: "Formation scientifique axée sur les mathématiques, l'algorithmique et les fondements de l'informatique.",
  },
  {
    annee: '2015 – 2016',
    titre: 'Baccalauréat Scientifique',
    lieu: 'Lycée Mixte de Mutsamudu',
    desc: '',
  },
]

export default function About() {
  return (
    <div>
      {/* Dark banner avec photo */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)',
        padding: '120px 24px 72px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
          <motion.div initial="hidden" animate="visible" style={{ flex: '1 1 400px' }}>
            <motion.p variants={fadeUp} custom={0}
              style={{ color: '#818cf8', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
              À propos
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1}
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Mon parcours
            </motion.h1>
            <motion.p variants={fadeUp} custom={2}
              style={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: '520px', lineHeight: 1.8 }}>
              Ingénieur Big Data spécialisé en Data Science et développement web. Curieux et motivé par les défis techniques,
              à l'aise en équipe et en environnement agile — compétences solides en modélisation et traitement de données.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            style={{ flex: '0 0 auto', position: 'relative' }}
          >
            <div style={{ position: 'absolute', inset: '-10px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)', filter: 'blur(14px)', pointerEvents: 'none' }} />
            <img
              src={profilePhoto}
              alt="Sadam Soufiani"
              style={{ position: 'relative', width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(165,180,252,0.3)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Formation */}
      <section style={{ backgroundColor: '#ffffff', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}
          >
            <span style={{ width: '32px', height: '3px', backgroundColor: '#4f46e5', borderRadius: '2px', display: 'inline-block' }} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Formation académique</h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {parcours.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                style={{ display: 'flex', gap: '24px', paddingBottom: i < parcours.length - 1 ? '32px' : '0' }}
              >
                {/* Timeline column */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20px', flexShrink: 0 }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#4f46e5', border: '2px solid #e0e7ff', boxShadow: '0 0 0 4px rgba(79,70,229,0.1)', marginTop: '4px', flexShrink: 0 }} />
                  {i < parcours.length - 1 && (
                    <div style={{ width: '2px', flex: 1, backgroundColor: '#e0e7ff', marginTop: '8px' }} />
                  )}
                </div>
                {/* Content */}
                <div style={{ flex: 1, paddingBottom: i < parcours.length - 1 ? '8px' : '0' }}>
                  <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, color: '#4f46e5', backgroundColor: '#eef2ff', padding: '2px 10px', borderRadius: '20px', marginBottom: '8px' }}>
                    {item.annee}
                  </span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>{item.titre}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: item.desc ? '8px' : '0', fontStyle: 'italic' }}>{item.lieu}</p>
                  {item.desc && <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section style={{ backgroundColor: '#f8fafc', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}
          >
            <span style={{ width: '32px', height: '3px', backgroundColor: '#4f46e5', borderRadius: '2px', display: 'inline-block' }} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Compétences & outils</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px',
                  borderTop: `3px solid ${group.color}`,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: group.color }} />
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {group.category}
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.items.map(skill => (
                    <span key={skill} style={{
                      padding: '5px 12px',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      color: '#475569',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      transition: 'background-color 0.15s, color 0.15s',
                      cursor: 'default',
                    }}
                      onMouseEnter={e => { e.target.style.backgroundColor = group.color + '18'; e.target.style.color = group.color; e.target.style.borderColor = group.color + '40' }}
                      onMouseLeave={e => { e.target.style.backgroundColor = '#f8fafc'; e.target.style.color = '#475569'; e.target.style.borderColor = '#e2e8f0' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
