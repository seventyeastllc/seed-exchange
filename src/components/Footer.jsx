import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About TSE' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/partner', label: 'Partner With Us' },
  { to: '/community', label: 'Community' },
  { to: '/lattice', label: 'Lattice' },
  { to: '/roundtables', label: 'Roundtables' },
  { to: '/contact', label: 'Book a Call' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [segment, setSegment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to email backend (Mailchimp, ConvertKit, etc.)
    console.log('Footer email signup:', { email, segment })
    setSubmitted(true)
    setEmail('')
    setSegment('')
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand column */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div className="nav-logo-img-wrap">
                <img src="/logo-icon.png" alt="The Seed Exchange" className="nav-logo-img" />
              </div>
              <div className="footer-logo-text" style={{ marginBottom: 0 }}>
                The Seed <em>Exchange</em>
              </div>
            </div>
            <p className="footer-tagline">Visibility. Access. Resolution.</p>
            <p className="footer-belief">
              Stability grows when people have access to the right support,
              at the right time, through coordination that holds.
            </p>
            <p style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.28)',
              marginTop: '16px',
              lineHeight: 1.6,
              letterSpacing: '0.02em',
            }}>
              The Good Ground Collaborative is the nonprofit extension of The Seed Exchange —
              deepening community impact through the same coordination model.
            </p>
          </div>

          {/* Navigate column */}
          <div>
            <p className="footer-col-head">Navigate</p>
            <div className="footer-col-links">
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to}>{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Community column */}
          <div>
            <p className="footer-col-head">Community</p>
            <div className="footer-col-links">
              <a href="https://www.facebook.com/share/g/17aSVDX53z/" target="_blank" rel="noopener noreferrer">
                Community Garden ↗
              </a>
              <a href="https://www.facebook.com/share/g/1avMjhRuw8/" target="_blank" rel="noopener noreferrer">
                The Bridge ↗
              </a>
              <Link to="/lattice">Lattice (Fall 2026)</Link>
              <Link to="/roundtables">Roundtables</Link>
            </div>
          </div>

          {/* Connect column */}
          <div>
            <p className="footer-col-head">Connect</p>
            <div className="footer-col-links">
              <Link to="/partner">Partner With Us</Link>
              <Link to="/contact">Book a Discovery Call</Link>
              <a href="https://www.facebook.com/profile.php?id=61578142387617" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
              <a href="https://www.instagram.com/seedxga" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
              <a href="mailto:info@seedxga.com">info@seedxga.com</a>
            </div>
          </div>
        </div>

        {/* Email capture */}
        <div className="footer-capture">
          <h4>Stay connected to what's moving.</h4>
          <p className="sub">
            Updates from TSE — when they matter, not just when they're scheduled.
          </p>

          {submitted ? (
            <div style={{
              padding: '16px 24px',
              background: 'rgba(29,158,117,0.12)',
              borderLeft: '3px solid var(--teal)',
              color: 'rgba(255,255,255,0.75)',
              fontSize: '15px',
              maxWidth: '480px',
            }}>
              You're in. We'll be in touch.
            </div>
          ) : (
            <form className="footer-email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <select
                className="form-select"
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
                required
                aria-label="I am a..."
              >
                <option value="">I am a...</option>
                <option value="provider">Service Provider / Partner</option>
                <option value="community">Community Member</option>
                <option value="nofo">Exploring NOFO Partnership</option>
                <option value="other">Other</option>
              </select>
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} The Seed Exchange. All rights reserved. seedxga.com
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61578142387617" className="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              Fb
            </a>
            <a href="https://www.instagram.com/seedxga" className="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Ig
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
