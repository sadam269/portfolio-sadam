import { motion } from 'framer-motion'
import projects from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' } }),
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

function LinkButtons({ liveUrl, githubUrl }) {
  if (!liveUrl && !githubUrl) return null
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '7px 16px', borderRadius: '3px', backgroundColor: 'var(--accent)', color: '#fff',
          textDecoration: 'none', transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          ↗ Voir le projet
        </a>
      )}
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '7px 16px', borderRadius: '3px', backgroundColor: 'transparent',
          color: 'var(--fg-muted)', border: '1px solid var(--border)',
          textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg-muted)' }}
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
    <div style={{ paddingTop: '64px', backgroundColor: 'var(--bg)' }}>

      {/* Header */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '80px 24px 56px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp} custom={0} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Réalisations
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, color: 'var(--fg)', marginBottom: '16px' }}>
            Projets & expériences
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--fg-muted)', maxWidth: '520px', lineHeight: 1.8 }}>
            Travaux académiques, stage en IA et développement web — projets concrets orientés résultats.
          </motion.p>
        </motion.div>
      </section>

      {/* Rule */}
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* Content */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '64px 24px 80px' }}>

        {/* Featured */}
        {featured && (
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            style={{ marginBottom: '48px' }}
          >
            <SectionLabel>Projet phare</SectionLabel>
            <div style={{
              display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
              border: '1px solid var(--border)', borderTop: '2px solid var(--accent)',
              borderRadius: '6px', overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(26,26,26,0.06)',
            }}>
              {/* Left */}
              <div style={{ flex: '0 0 260px', backgroundColor: 'var(--bg-muted)', padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid var(--border)' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '8px' }}>
                    {featured.tag}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--fg-muted)', letterSpacing: '0.06em' }}>
                    {featured.period}
                  </span>
                </div>
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '0' }}>
                    {featured.skills.map(skill => (
                      <span key={skill} style={{
                        fontFamily: 'var(--font-sans)', fontSize: '0.72rem', padding: '4px 10px',
                        border: '1px solid var(--border)', borderRadius: '3px',
                        color: 'var(--fg-muted)', backgroundColor: 'var(--card)',
                      }}>{skill}</span>
                    ))}
                  </div>
                  <LinkButtons liveUrl={featured.liveUrl} githubUrl={featured.githubUrl} />
                </div>
              </div>
              {/* Right */}
              <div style={{ flex: '1 1 340px', backgroundColor: 'var(--card)', padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--fg)', lineHeight: 1.3, marginBottom: '16px' }}>
                  {featured.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--fg-muted)', lineHeight: 1.8 }}>
                  {featured.desc}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other cards */}
        <SectionLabel>Autres expériences</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden', backgroundColor: 'var(--border)' }}>
          {rest.map((project, i) => (
            <motion.div key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i + 1}
              style={{ backgroundColor: 'var(--card)', padding: '32px', display: 'flex', flexDirection: 'column', transition: 'background-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-muted)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--card)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  {project.tag}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--fg-muted)', whiteSpace: 'nowrap', letterSpacing: '0.04em' }}>
                  {project.period}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '12px', lineHeight: 1.4 }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--fg-muted)', lineHeight: 1.75, flex: 1, marginBottom: '16px' }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                {project.skills.map(skill => (
                  <span key={skill} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', padding: '3px 10px', border: '1px solid var(--border)', borderRadius: '3px', color: 'var(--fg-muted)' }}>
                    {skill}
                  </span>
                ))}
              </div>
              <LinkButtons liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
