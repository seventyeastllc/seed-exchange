import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MAINTENANCE_MODE } from '../maintenance.js'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/partner', label: 'Partner With Us' },
  { to: '/community', label: 'Community' },
  { to: '/lattice', label: 'Lattice' },
  { to: '/roundtables', label: 'The Field Table' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <>
      <nav className={`nav ${solid ? 'nav--solid' : 'nav--transparent'}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          {/* Logo — always links home */}
          <Link to="/" className="nav-logo" aria-label="The Seed Exchange — Home">
            <div className="nav-logo-img-wrap">
              <img src="/logo-icon.png" alt="The Seed Exchange" className="nav-logo-img" />
            </div>
            <span className="nav-logo-text">
              The Seed <em>Exchange</em>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="nav-links" role="list">
            {NAV_LINKS.map((link) =>
              MAINTENANCE_MODE ? (
                /* Titles visible, not clickable */
                <span
                  key={link.to}
                  role="listitem"
                  className="nav-link"
                  style={{ cursor: 'default', opacity: 0.5, pointerEvents: 'none' }}
                  aria-disabled="true"
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  role="listitem"
                  className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          {MAINTENANCE_MODE ? (
            <Link to="/contact" className="btn btn-primary nav-desktop-cta">
              Learn More
            </Link>
          ) : (
            <Link to="/partner" className="btn btn-primary nav-desktop-cta">
              Start an Inquiry
            </Link>
          )}

          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="nav-mobile-brand">
          <img src="/logo-icon.png" alt="The Seed Exchange" className="nav-logo-img" />
          <span className="nav-logo-text">The Seed <em>Exchange</em></span>
        </div>

        {NAV_LINKS.map((link) =>
          MAINTENANCE_MODE ? (
            <span
              key={link.to}
              className="nav-link"
              style={{ cursor: 'default', opacity: 0.5, pointerEvents: 'none' }}
              aria-disabled="true"
            >
              {link.label}
            </span>
          ) : (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          )
        )}

        <div className="nav-mobile-cta">
          {MAINTENANCE_MODE ? (
            <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              Learn More
            </Link>
          ) : (
            <Link to="/partner" className="btn btn-primary">
              Start an Inquiry
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
