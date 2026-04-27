import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const contacts = [
  { href: 'mailto:soufianisadam01@gmail.com', label: 'Email', value: 'soufianisadam01@gmail.com', icon: '✉', external: false },
  { href: 'tel:+212638405286', label: 'Téléphone', value: '+212 638 405 286', icon: '📞', external: false },
  { href: 'https://www.linkedin.com/in/sadam-soufiani-3bb32a320', label: 'LinkedIn', value: 'Sadam Soufiani', icon: 'in', external: true },
  { href: 'https://github.com/sadam269', label: 'GitHub', value: 'sadam269', icon: 'GH', external: true },
  { href: null, label: 'Localisation', value: 'Kenitra, Maroc', icon: '📍', external: false },
]

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
    <div>
      {/* Dark banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)',
        padding: '120px 24px 72px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0}
              style={{ color: '#818cf8', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Contact
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1}
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Parlons de votre projet
            </motion.h1>
            <motion.p variants={fadeUp} custom={2}
              style={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: '520px', lineHeight: 1.75 }}>
              Disponible pour des opportunités professionnelles, stages, alternances ou collaborations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: '#f8fafc', padding: '64px 24px 80px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px' }}>

          {/* Coordonnées */}
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <span style={{ width: '32px', height: '3px', backgroundColor: '#4f46e5', borderRadius: '2px', display: 'inline-block' }} />
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>Coordonnées</h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {contacts.map((c, i) => {
                const Tag = c.href ? 'a' : 'div'
                const linkProps = c.href ? {
                  href: c.href,
                  ...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                } : {}

                return (
                  <motion.div key={c.label} variants={fadeUp} custom={i + 1}>
                    <Tag
                      {...linkProps}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '16px 18px',
                        borderRadius: '14px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        textDecoration: 'none',
                        transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s',
                        cursor: c.href ? 'pointer' : 'default',
                      }}
                      onMouseEnter={c.href ? e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(79,70,229,0.1)'; e.currentTarget.style.borderColor = '#c7d2fe' } : undefined}
                      onMouseLeave={c.href ? e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e2e8f0' } : undefined}
                    >
                      <div style={{
                        width: '42px', height: '42px',
                        borderRadius: '10px',
                        backgroundColor: '#eef2ff',
                        color: '#4f46e5',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: c.icon.length > 1 ? '0.75rem' : '1.1rem',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}>
                        {c.icon}
                      </div>
                      <div>
                        <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>{c.label}</p>
                        <p style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 500 }}>{c.value}</p>
                      </div>
                    </Tag>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <span style={{ width: '32px', height: '3px', backgroundColor: '#4f46e5', borderRadius: '2px', display: 'inline-block' }} />
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>Envoyer un message</h2>
            </motion.div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '48px 32px', borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid #d1fae5', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 16px' }}>✓</div>
                <p style={{ color: '#065f46', fontWeight: 600, fontSize: '1rem', marginBottom: '6px' }}>Votre messagerie va s'ouvrir.</p>
                <p style={{ color: '#6ee7b7', fontSize: '0.875rem' }}>Merci de votre intérêt !</p>
              </motion.div>
            ) : (
              <motion.div
                variants={fadeUp} custom={1}
                style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}
              >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Nom complet</label>
                    <input
                      type="text" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jean Dupont"
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '0.9rem', color: '#0f172a', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                      onFocus={e => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Email</label>
                    <input
                      type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jean@exemple.com"
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '0.9rem', color: '#0f172a', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                      onFocus={e => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Message</label>
                    <textarea
                      required rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Votre message..."
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '0.9rem', color: '#0f172a', outline: 'none', resize: 'none', boxSizing: 'border-box', fontFamily: 'inherit', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                      onFocus={e => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ width: '100%', padding: '13px', borderRadius: '10px', backgroundColor: '#4f46e5', color: 'white', fontWeight: 600, fontSize: '0.9rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(79,70,229,0.35)', transition: 'background-color 0.2s, transform 0.1s' }}
                    onMouseEnter={e => { e.target.style.backgroundColor = '#4338ca' }}
                    onMouseLeave={e => { e.target.style.backgroundColor = '#4f46e5' }}
                  >
                    Envoyer le message
                  </button>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
