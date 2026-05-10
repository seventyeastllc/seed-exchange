import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal'

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to email backend for Lattice waitlist
    console.log('Lattice waitlist:', { email, org })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{
        padding: '24px 32px',
        background: 'rgba(29,158,117,0.12)',
        borderLeft: '3px solid var(--teal)',
        color: 'rgba(255,255,255,0.78)',
        fontSize: '16px',
        maxWidth: '520px',
        margin: '0 auto',
        textAlign: 'left',
      }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--white)', marginBottom: '8px' }}>
          You're on the list.
        </p>
        <p>
          Founders Circle access is limited to 20 organizations. TSE will be in touch
          before the fall 2026 launch to discuss fit and next steps.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="waitlist-form">
      <input
        type="email"
        className="form-input"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email address"
      />
      <input
        type="text"
        className="form-input"
        placeholder="Organization name (optional)"
        value={org}
        onChange={(e) => setOrg(e.target.value)}
        aria-label="Organization name"
      />
      <button type="submit" className="btn btn-primary">
        Request Early Access
      </button>
    </form>
  )
}

export default function Lattice() {
  const featuresRef = useMultiReveal()
  const timelineRef = useScrollReveal()

  return (
    <main>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="page-hero lattice-hero" aria-label="Lattice platform">
        <div className="lattice-grid-overlay" aria-hidden="true" />
        <div className="page-hero-content">
          <div className="coming-badge" style={{ marginBottom: '20px' }}>Coming Fall 2026</div>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Lattice — Partner Management Platform
          </span>
          <h1>A resource directory<br />designed to stay accurate.</h1>
          <p>
            Providers across Georgia have resources their clients need. The problem
            is those resources aren't visible to the people who need to refer to them —
            in real time, with real accuracy. Lattice changes that.
          </p>
        </div>
      </section>

      {/* ============================================================
          THE PROBLEM
      ============================================================ */}
      <section className="section section--dark" aria-label="The problem Lattice solves">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
                The problem
              </span>
              <h2 style={{ color: 'var(--white)', marginBottom: '32px' }}>
                The referral that goes nowhere.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.8, marginBottom: '24px' }}>
                Right now, navigators across Georgia spend hours on calls to verify what's
                actually available. Programs they learned about six months ago have closed
                their waitlists. Eligibility windows have shifted. The contact person moved.
                Nobody updated the list.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.8, marginBottom: '24px' }}>
                The result is that referrals go to dead ends. Clients wait longer than they
                should while navigators work backward from the referral that didn't land.
                And the resources that could reach them remain invisible — not because
                they don't exist, but because nobody has a live, accurate, accountable
                view of what's actually accessible right now.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.8 }}>
                This is a solvable problem. Lattice is the solution.
              </p>
            </div>

            <div>
              {[
                { stat: '1 in 3', label: 'referrals — in TSE\'s field experience — reaches a stale or closed resource' },
                { stat: '4–6 hrs', label: 'what navigators in TSE\'s network report spending weekly to verify what\'s actually available' },
                { stat: '0', label: "governed, real-time resource directories designed for Georgia's CoC ecosystem — until now" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '40px 48px',
                    background: i === 1 ? 'var(--teal)' : 'rgba(255,255,255,0.03)',
                    border: i === 1 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                    marginBottom: '2px',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '56px',
                    fontWeight: 300,
                    color: i === 1 ? 'var(--white)' : 'var(--teal)',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}>
                    {item.stat}
                  </div>
                  <p style={{
                    color: i === 1 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.55)',
                    fontSize: '15px',
                    lineHeight: 1.65,
                    marginBottom: 0,
                  }}>
                    {item.label}
                  </p>
                </div>
              ))}
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', marginTop: '16px', fontStyle: 'italic' }}>
                Figures reflect TSE's direct field observations across Georgia's CoC ecosystem. Research-sourced benchmarks will be published at platform launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT LATTICE IS
      ============================================================ */}
      <section className="section" aria-label="What Lattice is">
        <div className="container">
          <div className="section-header section-header--center text-center">
            <span className="eyebrow">What Lattice is</span>
            <h2>Not a database. Not a list.<br />A governed network.</h2>
            <p>
              Members are allies, not listings. Lattice is curated, maintained, and
              accountable — because a resource directory that's out of date is worse
              than no directory at all.
            </p>
          </div>

          <div ref={featuresRef} className="lattice-feature-grid">
            <article className="lattice-feature reveal">
              <div className="lattice-feature-num" aria-hidden="true">01</div>
              <h4>Live availability</h4>
              <p>
                TSE network members maintain their own profiles — capacity, eligibility
                windows, current availability. What you see in Lattice reflects what's
                actually accessible now, not what was true at time of entry.
              </p>
            </article>

            <article className="lattice-feature reveal reveal-delay-2">
              <div className="lattice-feature-num" aria-hidden="true">02</div>
              <h4>Connections that close</h4>
              <p>
                Lattice enables provider-to-provider connection with follow-through
                built in — not just a phone number passed in a hallway. The connection
                is tracked. The receiving provider confirms. The referral is resolved,
                not just made.
              </p>
            </article>

            <article className="lattice-feature reveal reveal-delay-4">
              <div className="lattice-feature-num" aria-hidden="true">03</div>
              <h4>Governed for accuracy</h4>
              <p>
                TSE maintains the network. Members who go inactive are flagged.
                Information is verified, not just submitted. The quality of the
                directory is TSE's responsibility — and TSE takes it seriously.
              </p>
            </article>

            <article className="lattice-feature reveal">
              <div className="lattice-feature-num" aria-hidden="true">04</div>
              <h4>No PHI. No compromise.</h4>
              <p>
                Lattice is built around provider capacity and resource availability —
                not client data. Zero protected health information passes through
                the platform. Privacy is structural, not a setting.
              </p>
            </article>

            <article className="lattice-feature reveal reveal-delay-2">
              <div className="lattice-feature-num" aria-hidden="true">05</div>
              <h4>Membership-based</h4>
              <p>
                Lattice is not open to all. Membership is governed — because the
                value of the directory depends entirely on the quality of who's in it.
                TSE will keep it intentionally small at launch to maintain that quality.
              </p>
            </article>

            <article className="lattice-feature reveal reveal-delay-4">
              <div className="lattice-feature-num" aria-hidden="true">06</div>
              <h4>Georgia-first, growing with the network</h4>
              <p>
                Lattice launches with TSE's existing network across Georgia. The model
                is designed to expand — by geography, by service type, by population —
                as the network grows and the governance model proves itself.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS
      ============================================================ */}
      <section className="section section--light" aria-label="How Lattice works">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">How it works</span>
            <h2>From resource to resolution.</h2>
            <p>
              Lattice removes the friction between identifying a resource and
              connecting a person to it — so navigators spend their time on
              people, not on phone trees.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginTop: '48px', borderTop: '2px solid rgba(29,158,117,0.15)' }}>
            {[
              {
                step: '1',
                title: 'Navigator identifies a need',
                body: "A navigator working a case identifies a specific need — housing, benefits, services — and searches Lattice for what's actually available right now.",
              },
              {
                step: '2',
                title: 'Lattice returns live options',
                body: 'The platform surfaces providers with current capacity, accurate eligibility windows, and confirmed availability — not a static list.',
              },
              {
                step: '3',
                title: 'Connection is made',
                body: 'The navigator initiates a connection through Lattice. The receiving provider is notified. The connection is logged and tracked.',
              },
              {
                step: '4',
                title: 'Resolution is confirmed',
                body: 'Follow-through is built in. The platform tracks whether the referral landed. TSE monitors for unresolved connections and works them to resolution.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '40px 32px 40px 0',
                  position: 'relative',
                  paddingTop: '36px',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-7px',
                  left: 0,
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: i === 0 ? 'var(--teal)' : 'rgba(29,158,117,0.25)',
                  boxShadow: i === 0 ? '0 0 0 4px rgba(29,158,117,0.12)' : 'none',
                }} />
                <p style={{ fontSize: '12px', color: 'var(--teal)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Step {item.step}
                </p>
                <h4 style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', lineHeight: 1.72 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          LAUNCH TIMELINE
      ============================================================ */}
      <section className="section" aria-label="Lattice launch timeline">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What's ahead</span>
            <h2>The road to launch.</h2>
          </div>

          <div ref={timelineRef} className="lattice-timeline reveal">
            {[
              {
                active: true,
                date: 'Now — Spring 2026',
                title: 'Early Access Interest',
                body: 'TSE is collecting interest from providers and organizations across Georgia. Add your name to be considered for the Founders Circle — limited to 20 organizations.',
              },
              {
                date: 'Summer 2026',
                title: 'Founders Circle — Demo Access',
                body: 'A founding cohort of up to 20 vetted organizations receives demo access to Lattice ahead of the public launch. This is preview access — not the full platform. Founders help stress-test the network and shape how the governance model works at scale.',
              },
              {
                date: 'Fall 2026',
                title: 'Lattice Launch',
                body: 'The platform goes live for TSE network members. Live availability. Trusted connections. Governed accuracy. Designed for the work.',
              },
              {
                date: '2027 +',
                title: 'Expansion',
                body: 'Geographic expansion, additional service categories, and deeper integration with TSE partnership workflows.',
              },
            ].map((item, i) => (
              <div key={i} className={`timeline-step ${item.active ? 'active' : ''}`}>
                <p className="timeline-date">{item.date}</p>
                <h4 style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', lineHeight: 1.72 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WAITLIST CTA
      ============================================================ */}
      <div className="lattice-waitlist" aria-label="Early access waitlist">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Founders Circle — limited to 20 organizations
          </span>
          <h2>Request early access to Lattice.</h2>
          <p>
            Founders Circle access is limited, governed, and intentional. Organizations that join
            early help shape how the platform works before it goes public. Add your name —
            TSE will be in touch to discuss fit before fall 2026.
          </p>
          <WaitlistForm />
          <p style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            Lattice is membership-based. Interest list submission does not guarantee access.
            TSE will reach out directly to discuss fit and next steps.
          </p>
          <div style={{ marginTop: '32px' }}>
            <Link to="/partner" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px' }}>
              Learn more about TSE partnership →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
