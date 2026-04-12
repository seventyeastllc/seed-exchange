import { Link } from 'react-router-dom'
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal'

export default function HowWeWork() {
  const pathwayRef = useMultiReveal()
  const latticeRef = useScrollReveal()

  return (
    <main>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="page-hero" aria-label="How TSE works">
        <div className="page-hero-content">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
            The model
          </span>
          <h1>Built for both sides of the gap.</h1>
          <p>
            TSE works alongside service providers and alongside the people providers
            are trying to reach. The coordination goes both directions.
          </p>
        </div>
      </section>

      {/* ============================================================
          TWO-AUDIENCE SPLIT
      ============================================================ */}
      <section className="audience-split" aria-label="Who TSE works with">
        {/* Provider side */}
        <div className="audience-pane audience-pane--provider">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
            For service providers
          </span>
          <h3>Your services. Extended further.</h3>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '8px', fontSize: '16px', lineHeight: 1.75 }}>
            TSE partners with your organization to strengthen the coordination layer —
            so your services reach the people they were built for, and complex cases
            don't fall apart between departments, agencies, or intake windows.
          </p>

          <ul className="audience-list" role="list">
            <li>Referral coordination and tracking — from initial handoff through resolution</li>
            <li>Case conferencing support on complex, multi-system cases</li>
            <li>System visibility into why cases stall — and what it takes to move them forward</li>
            <li>Outcome reporting alignment so your data tells the right story</li>
            <li>Navigation support for clients who are difficult to reach or serve</li>
          </ul>

          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', fontStyle: 'italic', lineHeight: 1.7, marginTop: '8px' }}>
            TSE does not duplicate your services. It closes the gap between your
            services and the people they were built to reach.
          </p>

          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/partner" className="btn btn-primary">
              Partner With Us
            </Link>
            <a href="https://www.facebook.com/share/g/17aSVDX53z/" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Join the Community Garden
            </a>
          </div>
        </div>

        {/* Community side */}
        <div className="audience-pane audience-pane--community">
          <span className="eyebrow">For individuals &amp; families</span>
          <h3>You don't have to figure this out alone.</h3>
          <p style={{ color: 'var(--body)', marginBottom: '8px', fontSize: '16px', lineHeight: 1.75 }}>
            If you are navigating housing crisis — or if you've been navigating it for
            a while without finding solid ground — TSE connects people to the support
            they qualify for, including programs and benefits they may not know exist.
          </p>

          <ul className="audience-list" role="list">
            <li>Connection to housing programs, benefits, and services you may qualify for</li>
            <li>Navigation through systems that can feel designed to confuse, not clarify</li>
            <li>Follow-through — someone who stays on the case until something moves</li>
            <li>Community through The Bridge — people who have been here and found their way</li>
          </ul>

          <p style={{ color: 'var(--body)', opacity: 0.65, fontSize: '15px', fontStyle: 'italic', lineHeight: 1.7, marginTop: '8px' }}>
            The Bridge is not a hotline. It is not an intake form. It is a community
            — people who have walked this road and want to light the way for someone else.
          </p>

          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://www.facebook.com/share/g/1avMjhRuw8/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Join The Bridge
            </a>
            <Link to="/contact" className="btn btn-outline-dark">
              Talk to TSE
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          PATHWAY TO PARTNERSHIP
      ============================================================ */}
      <section className="section pathway-section" aria-label="Partnership pathway">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">For service providers</span>
            <h2>The path to partnership.</h2>
            <p>
              Formal coordination partnerships are built on real relationships.
              Here's how organizations typically move through TSE's ecosystem —
              from first connection to full partnership.
            </p>
          </div>

          <div ref={pathwayRef} className="pathway-steps">
            <div className="pathway-step reveal">
              <div className="step-circle" aria-hidden="true">1</div>
              <h4 className="step-label">Community Garden</h4>
              <p className="step-desc">
                Join TSE's provider network. Build relationships. Share resources.
                Learn the system. This is where formal partnerships start.
              </p>
            </div>

            <div className="pathway-step reveal reveal-delay-2">
              <div className="step-circle" aria-hidden="true">2</div>
              <h4 className="step-label">Discovery Call</h4>
              <p className="step-desc">
                A 30-minute conversation about your organization's work, your coordination
                challenges, and what a TSE partnership could actually look like.
              </p>
            </div>

            <div className="pathway-step reveal reveal-delay-3">
              <div className="step-circle" aria-hidden="true">3</div>
              <h4 className="step-label">Formal Partnership</h4>
              <p className="step-desc">
                Contracted coordination capacity — navigation, referral tracking,
                case conferencing support, and outcome alignment. Built for your program.
              </p>
            </div>

            <div className="pathway-step reveal reveal-delay-4">
              <div className="step-circle" aria-hidden="true">4</div>
              <h4 className="step-label">Lattice Access</h4>
              <p className="step-desc">
                TSE network members gain access to Lattice (fall 2026) — Georgia's
                governed resource directory for warm handoffs and live availability.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/partner" className="btn btn-primary btn-lg">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT TSE IS NOT
      ============================================================ */}
      <section className="section" aria-label="What TSE is not">
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow">
              Let's be clear
            </span>
            <h2 style={{ color: '#1A2E4A', marginBottom: '32px' }}>
              What TSE is — and isn't.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              {[
                {
                  isNot: 'A referral agency that sends handoffs and closes the case',
                  is: 'A coordination partner that stays with the case until something actually resolves',
                },
                {
                  isNot: 'A case management organization',
                  is: 'A coordination partner that supports case managers and the cases they carry',
                },
                {
                  isNot: 'A replacement for HMIS or Coordinated Entry',
                  is: 'A complement to those systems — with follow-through where the data trail ends',
                },
                {
                  isNot: 'A competing service taking clients from providers',
                  is: 'The connective tissue that makes existing services reach further',
                },
                {
                  isNot: 'A grant-funded program dependent on the next funding cycle',
                  is: 'A contracted coordination partner with a defined scope and clear deliverables',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '36px 40px',
                    background: '#F9F9F7',
                    border: '1px solid #E0E0E0',
                  }}
                >
                  <p style={{ fontSize: '13px', color: '#999999', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500 }}>
                    Not this
                  </p>
                  <p style={{ color: '#999999', fontSize: '15px', marginBottom: '20px', textDecoration: 'line-through' }}>
                    {item.isNot}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--teal)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500 }}>
                    This
                  </p>
                  <p style={{ color: '#1A2E4A', fontSize: '15px', lineHeight: 1.68 }}>
                    {item.is}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          LATTICE TEASER
      ============================================================ */}
      <section className="section section--light" aria-label="Lattice preview">
        <div className="container">
          <div ref={latticeRef} className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}>
            <div>
              <div className="coming-badge" style={{ marginBottom: '20px' }}>Coming Fall 2026</div>
              <span className="eyebrow">Lattice</span>
              <h2 style={{ marginBottom: '24px' }}>
                A resource directory that actually stays current.
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.78, marginBottom: '22px' }}>
                Right now, providers across Georgia have resources their clients need —
                but those resources aren't visible to the people who need to refer to them.
                Waitlists change. Programs close. Eligibility shifts.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.78, marginBottom: '36px' }}>
                Lattice is TSE's answer to that: a curated, governed resource directory
                for TSE network members. Live availability. Warm handoffs with follow-through
                built in. No PHI. Membership-based. Intentionally small at launch.
              </p>
              <Link to="/lattice" className="btn btn-primary">
                Get Early Access
              </Link>
            </div>

            <div style={{ background: '#1A2E4A', padding: '56px 48px' }}>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
                What Lattice solves
              </span>
              {[
                'Referrals that go to dead ends because programs have changed',
                "Hours spent on calls to verify what's actually available",
                'Clients waiting longer because nobody had a current contact',
                'Navigators working in isolation without shared visibility',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    gap: '14px',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.62,
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: 'var(--teal)', flexShrink: 0 }}>→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
