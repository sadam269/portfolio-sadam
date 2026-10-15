import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile.webp'

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
  { category: 'Langages', color: '#B8860B', items: ['Python', 'SQL', 'JavaScript', 'PHP'] },
  { category: 'Développement web', color: '#6B7A8D', items: ['Flask', 'API REST', 'HTMX', 'Alpine.js', 'Bootstrap 5', 'React', 'Next.js', 'MedusaJS', 'Flutter', 'Firebase'] },
  { category: 'Bases de données', color: '#5C7A5C', items: ['PostgreSQL', 'MySQL', 'Modélisation', "Contrôle d'accès"] },
  { category: 'Data Science & IA', color: '#8D6B5C', items: ['Pandas', 'Scikit-learn', 'XGBoost', 'Keras', 'TensorFlow', 'PyTorch', 'YOLO', 'U-Net', 'CNN'] },
  { category: 'Outils & déploiement', color: '#7A6B8D', items: ['Docker / Compose', 'Nginx', 'VPS Linux', 'Git / GitHub', 'n8n', 'Stripe Connect', 'Vercel'] },
  { category: 'Infrastructure (en cours)', color: '#8D8A6B', items: ['VMware ESXi 8', 'Workstation', 'Gestion de VM'] },
]

const experiences = [
  { annee: '2024 – Présent', titre: 'Co-fondateur, DSI & Développeur Full Stack', lieu: 'SOINAA-TECH — Startup digitale, Comores & Maroc', desc: "Sites web, applications mobiles et systèmes automatisés pour PME et institutions aux Comores et au Maroc : analyse des besoins, modélisation des données, développement et déploiement." },
  { annee: 'Juin 2026', titre: 'Enquêteur terrain — Diagnostic Participatif SAT', lieu: 'Projet Ulanga Mali (AFD / Union Européenne)', desc: "Sélectionné parmi 15 candidats formés : réunions publiques dans 12 localités sur 4 préfectures et collecte de données socio-territoriales (environnement, agriculture, risques, gouvernance) pour un projet de 20 M€." },
  { annee: '06/2024 – 09/2024', titre: 'Ingénieur Intelligence Artificielle (Stage)', lieu: 'CFHT SARL', desc: "Développement et entraînement de modèles Deep Learning (CNN, YOLO, U-Net) pour des projets clients ; intégration dans des applications existantes en méthode Agile/Scrum." },
]

const parcours = [
  { annee: '2026 — en cours', titre: 'Formation continue — Infrastructure', lieu: 'Virtualisation, admin. système, réseau, Cloud, DevOps', desc: '' },
  { annee: '2023 – 2025', titre: 'Master Spécialisé Big Data & Digital Business — Mention Bien', lieu: "Sup'Management Fès (reconnu par l'État)", desc: "Formation orientée data science, intelligence artificielle appliquée au business, stratégie digitale et traitement de données massives." },
  { annee: '2021 – 2022', titre: 'Licence Mathématiques et Informatique', lieu: 'Faculté des Sciences Ibn Zohr — Agadir', desc: '' },
]

const langues = [
  { langue: 'Comorien', niveau: 'Langue maternelle' },
  { langue: 'Français', niveau: 'Courant' },
  { langue: 'Arabe', niveau: 'Lecture' },
  { langue: 'Anglais', niveau: 'Notions — lecture' },
]

const Timeline = ({ items }) => (
  <div>
    {items.map((item, i) => (
      <motion.div key={i}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={i}
        style={{ display: 'flex', gap: '20px', paddingBottom: i < items.length - 1 ? '32px' : '0' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '16px', flexShrink: 0 }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--accent)', border: '2px solid var(--bg)', boxShadow: '0 0 0 2px var(--accent)', marginTop: '5px', flexShrink: 0 }} />
          {i < items.length - 1 && <div style={{ width: '1px', flex: 1, backgroundColor: 'var(--border)', marginTop: '8px' }} />}
        </div>
        <div style={{ flex: 1, paddingBottom: i < items.length - 1 ? '8px' : '0' }}>
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
)

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
              Ingénieur Big Data & Data Scientist (Master spécialisé, mention Bien) avec une double compétence en machine learning et en développement web Full Stack. Co-développeur de Bahati, marketplace comorienne en production, et co-fondateur de SOINAA-TECH, startup de digitalisation aux Comores et au Maroc. En formation continue sur la virtualisation et l'administration système. Autonome, rigoureux et orienté résultats.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Rule */}
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* Expérience */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '72px 24px 0' }}>
        <SectionLabel>Expérience professionnelle</SectionLabel>
        <Timeline items={experiences} />
      </section>

      {/* Formation + Skills */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '72px' }}>

          {/* Formation + Langues */}
          <div>
            <SectionLabel>Formation</SectionLabel>
            <Timeline items={parcours} />

            <div style={{ marginTop: '56px' }}>
              <SectionLabel>Langues</SectionLabel>
              {langues.map(l => (
                <div key={l.langue} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--fg)' }}>{l.langue}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--fg-muted)' }}>{l.niveau}</span>
                </div>
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
