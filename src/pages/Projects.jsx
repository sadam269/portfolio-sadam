import { motion } from 'framer-motion'
import projects from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const tagColors = {
  'Projet académique':     { bg: 'rgba(99,102,241,0.15)',  color: '#818cf8', border: 'rgba(99,102,241,0.25)' },
  'Stage':                 { bg: 'rgba(16,185,129,0.15)',  color: '#34d399', border: 'rgba(16,185,129,0.25)' },
  'Projet web':            { bg: 'rgba(59,130,246,0.15)',  color: '#60a5fa', border: 'rgba(59,130,246,0.25)' },
  'Engagement associatif': { bg: 'rgba(245,158,11,0.15)', color: '#fbbf24', border: 'rgba(245,158,11,0.25)' },
}

function LinkButtons({ liveUrl, githubUrl, dark = false }) {
  if (!liveUrl && !githubUrl) return null
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', borderRadius: '8px',
            backgroundColor: dark ? 'rgba(255,255,255,0.12)' : '#4f46e5',
            color: dark ? '#e0e7ff' : 'white',
            border: dark ? '1px solid rgba(255,255,255,0.2)' : 'none',
            fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          ↗ Voir le projet
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', borderRadius: '8px',
            backgroundColor: 'transparent',
            color: dark ? '#94a3b8' : '#64748b',
            border: dark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #e2e8f0',
            fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.3)' : '#a5b4fc'; e.currentTarget.style.color = dark ? '#e2e8f0' : '#4f46e5' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.15)' : '#e2e8f0'; e.currentTarget.style.color = dark ? '#94a3b8' : '#64748b' }}
        >
          GH Code source
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <div>
      {/* Dark banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)',
        padding: '120px 24px 72px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0}
              style={{ color: '#818cf8', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Réalisations
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1}
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Projets & expériences
            </motion.h1>
            <motion.p variants={fadeUp} custom={2}
              style={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: '560px', lineHeight: 1.75 }}>
              Travaux académiques, stage en IA et développement web — projets concrets orientés résultats.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: '#f8fafc', padding: '64px 24px 80px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>

          {/* Featured card */}
          {featured && (
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              style={{ marginBottom: '32px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
            >
              {/* Left dark panel */}
              <div style={{
                flex: '0 0 300px',
                background: 'linear-gradient(160deg, #1e1b4b 0%, #312e81 100%)',
                padding: '40px 36px',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                minHeight: '260px',
              }}>
                <div>
                  <span style={{
                    display: 'inline-block', padding: '4px 12px', borderRadius: '20px',
                    backgroundColor: tagColors[featured.tag]?.bg, color: tagColors[featured.tag]?.color,
                    border: `1px solid ${tagColors[featured.tag]?.border}`,
                    fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px',
                  }}>
                    {featured.tag}
                  </span>
                  <p style={{ color: '#a5b4fc', fontSize: '0.8rem', fontWeight: 500 }}>{featured.period}</p>
                </div>
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '0' }}>
                    {featured.skills.map(skill => (
                      <span key={skill} style={{
                        fontSize: '0.7rem', padding: '4px 10px', borderRadius: '6px',
                        backgroundColor: 'rgba(255,255,255,0.08)', color: '#c7d2fe',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <LinkButtons liveUrl={featured.liveUrl} githubUrl={featured.githubUrl} dark={true} />
                </div>
              </div>

              {/* Right white content */}
              <div style={{ flex: '1 1 340px', backgroundColor: '#ffffff', padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '16px',
                  color: '#4f46e5', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  <span style={{ width: '16px', height: '2px', backgroundColor: '#4f46e5', display: 'inline-block' }} />
                  Projet phare
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3, marginBottom: '16px' }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.75 }}>
                  {featured.desc}
                </p>
              </div>
            </motion.div>
          )}

          {/* Other cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {rest.map((project, i) => {
              const tc = tagColors[project.tag] || tagColors['Projet académique']
              return (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i + 1}
                  style={{
                    backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px',
                    borderLeft: `4px solid ${tc.color}`,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    display: 'flex', flexDirection: 'column',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', gap: '8px' }}>
                    <span style={{
                      display: 'inline-block', padding: '4px 12px', borderRadius: '20px',
                      backgroundColor: tc.bg, color: tc.color, border: `1px solid ${tc.border}`,
                      fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>
                      {project.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>{project.period}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0f172a', marginBottom: '10px', lineHeight: 1.4 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>
                    {project.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.skills.map(skill => (
                      <span key={skill} style={{
                        fontSize: '0.72rem', padding: '3px 10px', borderRadius: '6px',
                        backgroundColor: '#f1f5f9', color: '#64748b', border: '1px solid #e2e8f0',
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <LinkButtons liveUrl={project.liveUrl} githubUrl={project.githubUrl} dark={false} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
