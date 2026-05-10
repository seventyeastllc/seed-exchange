import { useState } from 'react'
import { Link } from 'react-router-dom'

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.885v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)
const IconSubstack = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
  </svg>
)
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

function ContactForm() {
  const [form, setForm] = useState({
    name: '', org: '', email: '', reason: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to backend / email handler
    console.log('Contact form:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" style={{ padding: '32px 40px' }}>
        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', marginBottom: '12px' }}>
          Message received.
        </h4>
        <p>
          TSE will be in touch within 2–3 business days. If you'd like to move faster,
          book a discovery call directly on the calendar — no waiting required.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name *</label>
          <input id="name" className="form-input" type="text" value={form.name} onChange={set('name')} required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="org">Organization <span style={{ opacity: 0.5 }}>(optional)</span></label>
          <input id="org" className="form-input" type="text" value={form.org} onChange={set('org')} />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email address *</label>
        <input id="email" className="form-input" type="email" value={form.email} onChange={set('email')} required />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="reason">What brings you here? *</label>
        <select id="reason" className="form-select" value={form.reason} onChange={set('reason')} required>
          <option value="">Select one</option>
          <option value="provider-partnership">Provider exploring partnership</option>
          <option value="nofo">Housing Navigation NOFO inquiry</option>
          <option value="individual">Individual seeking support</option>
          <option value="lattice">Lattice early access</option>
          <option value="roundtable">The Field Table or facilitation inquiry</option>
          <option value="media">Media or speaking request</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">What would you like to talk about? *</label>
        <textarea
          id="message"
          className="form-textarea"
          value={form.message}
          onChange={set('message')}
          placeholder="The more you share, the better the conversation."
          required
          style={{ minHeight: '160px' }}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
        Send Message
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <main>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="page-hero" style={{ minHeight: '45vh' }} aria-label="Contact TSE">
        <div className="page-hero-content">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Let's talk
          </span>
          <h1>Whether you're ready<br />or just curious.</h1>
          <p>
            Whether you're exploring a partnership, looking for support, or just
            want to know if TSE is the right fit — we want to hear from you.
            No pitch. Just a real conversation.
          </p>
        </div>
      </section>

      {/* ============================================================
          CALENDAR — full-width, dark, high contrast
      ============================================================ */}
      <div className="calendly-block" aria-label="Book a discovery call">
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>
          30 minutes. No pitch.
        </span>
        <h3>Book a discovery call.</h3>
        <p className="sub">
          No agenda beyond figuring out whether TSE belongs in what you're building —
          or can help you find your way through.
        </p>
        <div className="calendly-embed-wrap">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3TyleaNRyAFgI-gYzCoRvJjeknpgzzYj0Yfu6wqwE9gJsjQRN5tx-eWyoU5JkoEHSb3TI0fDd5?gv=true"
            frameBorder="0"
            title="Book a discovery call with TSE"
          />
        </div>
      </div>

      {/* ============================================================
          CONTACT FORM + COMMUNITY LINKS
      ============================================================ */}
      <section className="section" aria-label="Contact options">
        <div className="container">
          <div className="contact-layout">
            {/* Sidebar — community links + socials */}
            <aside className="contact-sidebar">
              <div className="contact-links">
                <span className="eyebrow">Find your community</span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', marginBottom: '24px', marginTop: '8px' }}>
                  Not ready to reach out directly?
                </h4>

                <a href="https://www.facebook.com/share/g/17aSVDX53z/" className="contact-link-card" target="_blank" rel="noopener noreferrer">
                  <div className="contact-link-icon">CG</div>
                  <div className="contact-link-text">
                    <h5>Community Garden</h5>
                    <p>For service providers and partners — the relationship-building space</p>
                  </div>
                </a>

                <a href="https://www.facebook.com/share/g/1avMjhRuw8/" className="contact-link-card" target="_blank" rel="noopener noreferrer">
                  <div className="contact-link-icon" style={{ background: 'var(--teal)', color: 'var(--white)' }}>TB</div>
                  <div className="contact-link-text">
                    <h5>The Bridge</h5>
                    <p>For individuals navigating housing crisis — a community space</p>
                  </div>
                </a>
              </div>

              {/* Socials */}
              <div style={{ marginTop: '40px' }}>
                <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px', opacity: 0.5 }}>
                  Follow TSE
                </p>
                <div className="socials-row">
                  <a href="https://www.facebook.com/profile.php?id=61578142387617" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <IconFacebook />
                  </a>
                  <a href="https://www.instagram.com/seedxga" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <IconInstagram />
                  </a>
                  <a href="https://substack.com/@theseedexchangega" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Substack">
                    <IconSubstack />
                  </a>
                  <a href="https://www.linkedin.com/in/ravonda-medley/" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <IconLinkedIn />
                  </a>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="contact-form-wrap">
              <span className="eyebrow">Send a message</span>
              <h3>Tell us what's on your mind.</h3>
              <p style={{ marginBottom: '40px', fontSize: '16px', lineHeight: 1.75 }}>
                Every message is read personally. No ticketing system, no auto-responder
                loop, no sales team. Just a real person who will read what you wrote
                and write back.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ALTERNATIVE PATHS
      ============================================================ */}
      <section className="section section--light" aria-label="Other ways to connect">
        <div className="container">
          <div className="section-header section-header--center text-center">
            <span className="eyebrow">Other ways in</span>
            <h2>Know exactly what you need?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '48px' }}>
            {[
              {
                title: 'Partner With Us',
                desc: 'Service providers, funded organizations, and CoC partners exploring a formal coordination partnership.',
                cta: 'Explore Partnership',
                href: '/partner',
                internal: true,
              },
              {
                title: 'Lattice Early Access',
                desc: 'Organizations and navigators who want to join the Lattice network when it launches fall 2026.',
                cta: 'Get Early Access',
                href: '/lattice',
                internal: true,
              },
              {
                title: 'Bring The Field Table to Your Team',
                desc: 'Organizations that want TSE to facilitate a structured provider conversation for their team or network.',
                cta: 'Learn About The Field Table',
                href: '/roundtables',
                internal: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '48px 40px',
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  transition: 'border-color var(--transition)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(29,158,117,0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <h4 style={{ fontSize: '22px', marginBottom: '14px' }}>{item.title}</h4>
                <p style={{ fontSize: '15px', lineHeight: 1.72, marginBottom: '32px' }}>{item.desc}</p>
                {item.internal ? (
                  <Link to={item.href} className="btn btn-outline-teal">
                    {item.cta}
                  </Link>
                ) : (
                  <a href={item.href} className="btn btn-outline-teal" target="_blank" rel="noopener noreferrer">
                    {item.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
