import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' } }),
}

const contacts = [
  { href: 'mailto:soufianisadam01@gmail.com', label: 'Email', value: 'soufianisadam01@gmail.com', external: false },
  { href: 'tel:+212638405286', label: 'Téléphone', value: '+212 638 405 286', external: false },
  { href: 'https://www.linkedin.com/in/sadam-soufiani-3bb32a320', label: 'LinkedIn', value: 'Sadam Soufiani', external: true },
  { href: 'https://github.com/sadam269', label: 'GitHub', value: 'sadam269', external: true },
  { href: null, label: 'Localisation', value: 'Kenitra, Maroc', external: false },
]

const inputStyle = {
  width: '100%', padding: '12px 0', borderRadius: '0',
  border: 'none', borderBottom: '1px solid var(--border)',
  fontSize: '0.95rem', color: 'var(--fg)', fontFamily: 'var(--font-sans)',
  outline: 'none', backgroundColor: 'transparent', boxSizing: 'border-box',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`)
    const body = encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`)
    window.location.href = `mailto:soufianisadam01@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div style={{ paddingTop: '64px', backgroundColor: 'var(--bg)' }}>

      {/* Header */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '80px 24px 56px' }}>
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp} custom={0} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Contact
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, color: 'var(--fg)', marginBottom: '16px' }}>
            Parlons de votre projet
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--fg-muted)', maxWidth: '480px', lineHeight: 1.8 }}>
            Disponible pour des opportunités professionnelles, stages, alternances ou collaborations.
          </motion.p>
        </motion.div>
      </section>

      {/* Rule */}
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* Content */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '72px' }}>

          {/* Coordonnées */}
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Coordonnées
              </span>
            </motion.div>
            <div>
              {contacts.map((c, i) => {
                const Tag = c.href ? 'a' : 'div'
                const linkProps = c.href ? { href: c.href, ...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {}
                return (
                  <motion.div key={c.label} variants={fadeUp} custom={i + 1}>
                    <Tag {...linkProps} style={{
                      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                      padding: '16px 0', borderBottom: '1px solid var(--border)',
                      textDecoration: 'none', cursor: c.href ? 'pointer' : 'default',
                      transition: 'opacity 0.2s',
                    }}
                      onMouseEnter={c.href ? e => e.currentTarget.style.opacity = '0.65' : undefined}
                      onMouseLeave={c.href ? e => e.currentTarget.style.opacity = '1' : undefined}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
                        {c.label}
                      </span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--fg)', fontWeight: 400 }}>
                        {c.value}
                      </span>
                    </Tag>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Envoyer un message
              </span>
            </motion.div>

            {sent ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ padding: '48px 0', borderTop: '2px solid var(--accent)' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--fg)', marginBottom: '8px' }}>
                  Message envoyé.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--fg-muted)' }}>
                  Votre messagerie va s'ouvrir. Merci de votre intérêt.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  { key: 'name', label: 'Nom complet', type: 'text', placeholder: 'Jean Dupont' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'jean@exemple.com' },
                ].map(({ key, label, type, placeholder }) => (
                  <motion.div key={key} variants={fadeUp} custom={1}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', display: 'block', marginBottom: '8px' }}>
                      {label}
                    </label>
                    <input type={type} required value={form[key]} placeholder={placeholder}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </motion.div>
                ))}
                <motion.div variants={fadeUp} custom={2}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', display: 'block', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea required rows={5} value={form.message} placeholder="Votre message..."
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </motion.div>
                <motion.div variants={fadeUp} custom={3}>
                  <button type="submit" style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '13px 32px', borderRadius: '4px', backgroundColor: 'var(--accent)', color: '#fff',
                    border: '1px solid var(--accent)', cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(184,134,11,0.2)', transition: 'background-color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-light)'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--accent)'}
                  >
                    Envoyer le message
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
