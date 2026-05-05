import { useState } from 'react'
import { Link } from 'react-router-dom'

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
          Ravonda will be in touch within 2–3 business days. If you'd like to move faster,
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
          <option value="roundtable">Roundtable or facilitation inquiry</option>
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
          MAIN CONTACT LAYOUT
      ============================================================ */}
      <section className="section" aria-label="Contact options">
        <div className="container">
          <div className="contact-layout">
            {/* Sidebar */}
            <aside className="contact-sidebar">
              <span className="eyebrow">Book a call</span>
              <h3>Discovery call with Ravonda.</h3>
              <p>
                Book a 30-minute discovery call. No agenda beyond figuring out whether
                TSE belongs in what you're building — or can help you find your way through.
              </p>

              <div style={{ width: '100%', overflowX: 'auto', marginBottom: '32px' }}>
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=c_7172e1da7e3901987cd06b8a6e5ba0600b679d68ca86d1c77f87ed7d1447679e%40group.calendar.google.com&ctz=America%2FNew_York"
                  style={{ border: 0, width: '100%', minHeight: '600px' }}
                  frameBorder="0"
                  title="Book a discovery call with Ravonda"
                />
              </div>

              {/* Community links */}
              <div className="contact-links">
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', marginBottom: '20px' }}>
                  Or find your community.
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
                  <a href="https://www.facebook.com/profile.php?id=61578142387617" className="social-btn" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/seedxga" className="social-btn" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="contact-form-wrap">
              <span className="eyebrow">Send a message</span>
              <h3>Tell us what's on your mind.</h3>
              <p style={{ marginBottom: '40px', fontSize: '16px', lineHeight: 1.75 }}>
                Every message goes to Ravonda directly. There's no ticketing system, no
                auto-responder loop, no sales team. Just a person who will read what
                you wrote and write back.
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
                title: 'Host a Roundtable',
                desc: 'Organizations that want TSE to facilitate a structured provider conversation for their team or network.',
                cta: 'Learn About Roundtables',
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
