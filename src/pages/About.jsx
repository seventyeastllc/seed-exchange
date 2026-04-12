import { Link } from 'react-router-dom'
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal'

export default function About() {
  const originRef = useScrollReveal()
  const missionRef = useScrollReveal()
  const valuesRef = useMultiReveal()

  return (
    <main>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="page-hero" aria-label="About TSE">
        <div className="page-hero-content">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
            About The Seed Exchange
          </span>
          <h1>Built from proximity.<br />Not from a boardroom.</h1>
          <p>
            TSE exists because coordination gaps are not hypothetical. They are lived.
            Every gap TSE closes, Ravonda has stood inside one.
          </p>
        </div>
      </section>

      {/* ============================================================
          FOUNDER'S NOTE
      ============================================================ */}
      <section className="section section--light" aria-label="Founder's note">
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 2.2vw, 30px)',
              fontWeight: 400,
              marginBottom: '32px',
            }}>
              Founder's Note
            </h3>
            <p style={{ fontSize: '17px', lineHeight: 1.85, marginBottom: '22px', fontStyle: 'italic', color: 'var(--body)' }}>
              There's a version of this page that would give you credentials, a timeline,
              and a polished account of how The Seed Exchange was founded.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.85, marginBottom: '22px', fontStyle: 'italic', color: 'var(--body)' }}>
              That's not this page.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.85, marginBottom: '22px', color: 'var(--body)' }}>
              What you'll find here is where TSE actually came from — which is the same
              place it's going: inside the gaps. I've been the caregiver who didn't know
              the waiver existed. I've been the person on hold with a program that had
              already closed its waitlist, and nobody told me. I've made the referral,
              followed up when it went nowhere, and stayed on the case long past the point
              where anyone expected me to — because I understood that if I let go, nobody
              else was holding on.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.85, marginBottom: '32px', color: 'var(--body)' }}>
              TSE is not a program I designed. It is a response I built — from the inside out.
            </p>
            <p style={{
              fontSize: '16px',
              color: 'var(--body)',
              opacity: 0.65,
              fontStyle: 'italic',
              borderTop: '1px solid var(--border)',
              paddingTop: '24px',
            }}>
              — Ravonda Medley, Founder
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          ORIGIN STORY
      ============================================================ */}
      <section className="section" aria-label="The origin story">
        <div className="container">
          <div ref={originRef} className="origin-layout reveal">
            <div className="origin-text">
              <span className="eyebrow">The origin</span>
              <h2 style={{ marginBottom: '32px' }}>Where TSE came from.</h2>

              <p>
                Ravonda did not design The Seed Exchange in a room full of
                whiteboards. She built it from the inside of every gap it is meant to close.
                She knows what it feels like to be the caregiver who didn't know the waiver
                existed. She has been the person on hold with a program that had already
                closed its waitlist three months ago — and nobody told her.
              </p>

              <p>
                She has advocated for people sitting on waitlists that nobody was watching.
                She has made the referral, followed up when the referral went nowhere,
                tracked down the right contact, and stayed on the case until something
                actually moved. Not because it was the job description. Because she
                understood that if she let go, nobody else was holding on.
              </p>

              <p>
                That proximity — to the systems, to the people the systems were not
                built for, and to the gap between the two — is what TSE is made of.
                This is not a program. It is a response. A deliberate, practiced,
                built-from-experience response to the coordination failures that
                stability-seeking people cannot afford.
              </p>

              <blockquote className="pull-quote">
                "Access without coordination is not access. I have lived that sentence.
                TSE exists to make sure fewer people have to."
              </blockquote>

              <p>
                The Seed Exchange launched because the gap between a referral made and a
                referral resolved is where people fall. Not through negligence. Not through
                lack of care. Through the structural reality that service systems are
                designed for workflow, not for the human being waiting on the other side
                of it. TSE is designed for the human being.
              </p>
            </div>

            <div>
              <div style={{
                background: '#1A2E4A',
                padding: '56px 48px',
                marginBottom: '24px',
              }}>
                <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  The founding truth
                </span>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(24px, 2.5vw, 34px)',
                  fontWeight: 300,
                  color: 'var(--white)',
                  lineHeight: 1.4,
                  marginBottom: 0,
                }}>
                  "Access without coordination is not access."
                </p>
              </div>

              <div style={{
                background: 'var(--light-bg)',
                padding: '48px',
              }}>
                <span className="eyebrow">What drives the work</span>
                <p style={{ fontSize: '15px', lineHeight: 1.78, marginBottom: '20px' }}>
                  The issue is not usually that resources don't exist. The issue is
                  that people can't see them, can't get to them, and can't get them
                  resolved fast enough.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.78 }}>
                  TSE closes the knowledge gap, the proximity gap, and the urgency gap —
                  with follow-through, with human attention, and with the kind of
                  persistence the system is not designed to provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MISSION
      ============================================================ */}
      <section className="section" aria-label="TSE's mission">
        <div className="container">
          <div ref={missionRef} className="reveal" style={{ maxWidth: '840px' }}>
            <span className="eyebrow">
              The mission
            </span>
            <h2 style={{ color: '#1A2E4A', marginBottom: '32px' }}>
              Coordination is not a byproduct of service delivery. It is a discipline.
            </h2>
            <p style={{ color: '#2D2D2D', fontSize: '18px', lineHeight: 1.78, marginBottom: '28px' }}>
              TSE does not exist to add another program to the ecosystem. It exists
              to make the ecosystem work — to close the distance between what's available
              and what's actually reached, between a referral made and a case resolved.
            </p>
            <p style={{ color: '#2D2D2D', fontSize: '18px', lineHeight: 1.78, marginBottom: '28px' }}>
              The work is relational. It is followed through. It is sustained past the
              point where most handoffs stop. And it is built on a belief that the people
              who have been most failed by the system deserve the most careful, deliberate
              coordination — not the least.
            </p>
            <p style={{ color: '#2D2D2D', fontSize: '18px', lineHeight: 1.78 }}>
              That is what TSE shows up to do. Every time.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          ROLE IN THE ECOSYSTEM
      ============================================================ */}
      <section className="section" aria-label="TSE's role">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">The role</span>
            <h2>Connective tissue, not competition.</h2>
            <p>
              TSE is not a case management organization. It is not a replacement for
              HMIS or Coordinated Entry. It is the coordination layer that makes
              existing systems reach the people they were built for.
            </p>
          </div>

          <div style={{ maxWidth: '760px', margin: '0 0 60px' }}>
            <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '22px' }}>
              Think of TSE as the connective tissue between providers and the people
              they serve. When a referral gets made and goes nowhere, TSE finds out why
              and moves it forward. When a complex case involves three agencies and nobody
              is taking point, TSE takes point. When a family qualifies for a program
              they've never heard of, TSE makes sure they hear about it — and that
              someone walks them through the door.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '22px' }}>
              TSE does not duplicate what providers do. It closes the gap between what
              they do and where it ends. The navigation, the follow-through, the case
              conferencing support, the system visibility — that is TSE's lane, and TSE
              stays in it.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8 }}>
              The result is an ecosystem where providers can do their work at a higher
              level, where complex cases actually move, and where people who have been
              cycling through systems without stabilizing start finding their way through.
            </p>
          </div>

          {/* Visual diagram */}
          <div className="ecosystem-diagram" style={{
            background: 'var(--light-bg)',
            padding: '56px',
            marginTop: '40px',
          }}>
            <div className="diagram-row">
              <div className="diagram-box diagram-box--providers">
                <h5>Service Providers</h5>
                <div className="diagram-label">Programs. Resources. Capacity.</div>
              </div>
              <div className="diagram-arrow" aria-hidden="true">⟷</div>
              <div className="diagram-box diagram-box--tse">
                <h5>The Seed Exchange</h5>
                <div className="diagram-label" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--white)' }}>
                  Coordination. Navigation. Follow-through.
                </div>
              </div>
              <div className="diagram-arrow" aria-hidden="true">⟷</div>
              <div className="diagram-box diagram-box--people">
                <h5>People Seeking Stability</h5>
                <div className="diagram-label">Access. Resolution. Stability.</div>
              </div>
            </div>
            <p className="diagram-caption">
              TSE is the coordination layer — not a program, not a competing service, but the deliberate connection between what exists and who needs it.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE GOOD GROUND COLLABORATIVE
      ============================================================ */}
      <section className="section section--light" aria-label="The Good Ground Collaborative">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">The nonprofit extension</span>
              <h2 style={{ marginBottom: '24px' }}>
                The Good Ground Collaborative.
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '22px' }}>
                The Good Ground Collaborative (GGC) is the nonprofit extension of The Seed Exchange —
                carrying the same coordination model deeper into community-level impact work.
                Where TSE operates through contracted partnerships, GGC extends that reach
                into communities and populations where coordination is needed most
                and funded least.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.8 }}>
                TSE and GGC are complementary by design. The same proximity. The same
                follow-through. Two structures built to meet people wherever they are
                in the system — and wherever the system isn't reaching.
              </p>
            </div>

            <div style={{
              background: '#1A2E4A',
              padding: '56px 48px',
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(20px, 2vw, 28px)',
                fontWeight: 300,
                color: 'var(--white)',
                lineHeight: 1.5,
                marginBottom: '24px',
              }}>
                "GGC powered by TSE — the same coordination model, deeper in the community."
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}>
                <img
                  src="/logo-icon.png"
                  alt="The Seed Exchange"
                  style={{ height: '28px', width: 'auto' }}
                />
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  The Seed Exchange
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CORE VALUES
      ============================================================ */}
      <section className="section" aria-label="Core values">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">
              What guides the work
            </span>
            <h2>Core values.</h2>
            <p>
              These are not aspirational statements. They are operational commitments —
              the principles that determine how TSE shows up in every partnership,
              every case, and every conversation.
            </p>
          </div>

          <div ref={valuesRef} className="values-grid">
            <article className="value-card reveal">
              <div className="value-number" aria-hidden="true">01</div>
              <h3 className="value-title">Coordination Over Referral</h3>
              <p className="value-body">
                A referral is the beginning of coordination, not the end of it.
                TSE measures success by what actually happens for the person on the
                other side of the handoff — not by what got sent. Follow-through is
                not optional. It is the work.
              </p>
            </article>

            <article className="value-card reveal reveal-delay-2">
              <div className="value-number" aria-hidden="true">02</div>
              <h3 className="value-title">Practice Over Policy</h3>
              <p className="value-body">
                What works in practice is not always what looks right on paper.
                TSE operates in the space between policy and reality — the space where
                real people live — and we stay oriented to what actually moves cases
                forward, not what the process says should move them.
              </p>
            </article>

            <article className="value-card reveal reveal-delay-1">
              <div className="value-number" aria-hidden="true">03</div>
              <h3 className="value-title">Capacity Over Compliance</h3>
              <p className="value-body">
                Compliance frameworks matter. But they cannot become the ceiling.
                TSE is committed to building real coordination capacity — the kind
                that survives when the grant ends and the reporting period closes.
                Sustainable systems require more than checked boxes.
              </p>
            </article>

            <article className="value-card reveal reveal-delay-3">
              <div className="value-number" aria-hidden="true">04</div>
              <h3 className="value-title">Partnership Over Competition</h3>
              <p className="value-body">
                TSE does not compete with the organizations in this ecosystem.
                It builds with them. Every provider relationship is an opportunity
                to extend the reach of what already exists. Coordination is not a
                threat to existing services — it is the reason those services land.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA
      ============================================================ */}
      <section className="section" style={{ background: 'var(--teal)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--white)', marginBottom: '20px' }}>
            Ready to build something that reaches people?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px', margin: '0 auto 40px', fontSize: '17px' }}>
            TSE is built for the providers, navigators, and organizations that believe
            coordination is a discipline worth investing in.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/partner" className="btn btn-white">
              Partner With Us
            </Link>
            <Link to="/how-we-work" className="btn btn-outline">
              How We Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
