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
          <h1>Built from proximity.<br />Not from a distance.</h1>
          <p>
            TSE exists because coordination failures are not hypothetical. They are lived.
            Every barrier this work addresses, this team has navigated firsthand.
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
              There's a version of this page that leads with credentials, a polished timeline,
              and a clean founding story. That version exists somewhere. It's just not here.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.85, marginBottom: '22px', color: 'var(--body)' }}>
              What I can tell you is where this actually came from.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.85, marginBottom: '22px', color: 'var(--body)' }}>
              I've been the caregiver who didn't know the waiver existed. I've been the
              person on hold with a program that closed its waitlist three months ago —
              and nobody said a word. I've made referrals that went nowhere, followed up
              anyway, tracked down the right contact, and stayed on the case long past
              the point where anyone expected me to.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.85, marginBottom: '22px', color: 'var(--body)' }}>
              Not because the job description said to. Because I understood that if I let
              go, nobody else was holding on.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.85, marginBottom: '32px', color: 'var(--body)' }}>
              TSE is not a program I designed from the outside. It is a response I built
              from inside the work — because I had been on both sides of the coordination
              failure, and I knew exactly what was missing.
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
                The Seed Exchange did not start with a whiteboard. It started with the work.
              </p>

              <p>
                There is a principle embedded in this name. Seedtime and harvest —
                what you put in is what you get out. Every referral followed through.
                Every case held past the point where most people let go. Every relationship
                built before the crisis, so that when someone needs a warm connection,
                there is actually warmth there. That is the seed. What grows from it
                is stability. Visibility. Resolution. Real outcomes for real people.
              </p>

              <p>
                This team knows what it looks like when coordination breaks down. Not
                from reports. From experience. Being the caregiver who didn't know the
                waiver existed. Being on hold with a program that closed its waitlist
                three months ago and told nobody. Advocating for people on waitlists
                nobody was watching. Making the referral, following up when it went
                nowhere, tracking down the right contact, and staying on the case.
              </p>

              <p>
                Not because it was required. Because if we let go, nobody else was holding on.
              </p>

              <blockquote className="pull-quote">
                "Access without coordination is not access. We have lived that sentence.
                TSE exists to make sure fewer people have to."
              </blockquote>

              <p>
                That proximity — to the systems, to the people those systems were not
                built for, and to the space between them — is what TSE is made of.
                This is not a program. It is a response. A deliberate, practiced,
                built-from-experience response to the coordination failures that
                stability-seeking people cannot afford.
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
                  The issue is rarely that resources don't exist. The issue is that
                  people can't find them, can't reach them, and can't get to resolution
                  fast enough.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.78 }}>
                  TSE works the three barriers that keep people from stability:
                  visibility, access, and urgency — with follow-through, human attention,
                  and the kind of persistence that intake processes are not designed to provide.
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
              TSE does not exist to add another program to the sector. It exists
              to make what's already there work — to connect what's available
              to what's actually reached, to turn a referral made into a case resolved.
            </p>
            <p style={{ color: '#2D2D2D', fontSize: '18px', lineHeight: 1.78, marginBottom: '28px' }}>
              The work is relational. It is followed through. It is sustained past the
              point where most referrals end. And it is grounded in a belief that the people
              most often passed over by existing programs deserve the most careful, deliberate
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
              and works it forward. When a complex case involves three agencies and nobody
              is taking point, TSE takes point. When a family qualifies for a program
              they've never heard of, TSE makes sure they hear about it — and stays with
              them until the door actually opens.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '22px' }}>
              TSE does not duplicate what providers do. It works in the space between
              what they do and where it ends. The navigation, the follow-through, the case
              conferencing support, the system visibility — that is TSE's lane, and TSE
              stays in it.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8 }}>
              The result is a sector where providers can do their work at a higher
              level, where complex cases actually reach resolution, and where people who have
              cycled through multiple programs without finding solid ground start finding their way through.
            </p>
          </div>

          {/* Visual diagram — mid-level ecosystem */}
          <div className="ecosystem-diagram" style={{
            background: 'var(--light-bg)',
            padding: '64px 56px',
            marginTop: '40px',
          }}>
            {/* Diagram header */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="eyebrow">How the coordination layer works</span>
              <p style={{ fontSize: '14px', color: 'var(--body)', opacity: 0.6, marginTop: '8px', maxWidth: '480px', margin: '8px auto 0' }}>
                TSE operates in the space between providers and people — the layer that makes referrals reach resolution.
              </p>
            </div>

            {/* Three-column diagram with connectors */}
            <div className="diagram-grid-5col" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 96px 1.25fr 96px 1fr',
              alignItems: 'stretch',
            }}>

              {/* SERVICE PROVIDERS */}
              <div style={{
                background: '#1A2E4A',
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.38)',
                  marginBottom: '14px',
                }}>
                  Service Providers
                </div>
                <h4 style={{ color: 'var(--white)', fontSize: '19px', fontWeight: 600, marginBottom: '10px', lineHeight: 1.3 }}>
                  Programs &amp; Resources
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.7, marginBottom: '28px' }}>
                  The organizations doing direct housing, crisis services, and case management work.
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginTop: 'auto' }}>
                  {[
                    'CoC network partners',
                    'HMIS-participating organizations',
                    'Emergency & transitional housing',
                    'Case management teams',
                    'Wraparound service programs',
                  ].map((item, i) => (
                    <div key={i} style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.55)',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}>
                      <span style={{ color: 'var(--teal)', fontSize: '8px', flexShrink: 0 }}>◆</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CONNECTOR: Providers ↔ TSE */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#EEECEA',
                gap: '28px',
                padding: '20px 10px',
              }}>
                {/* Flow: Providers → TSE */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: 'rgba(0,0,0,0.38)', lineHeight: 1.5, marginBottom: '7px', letterSpacing: '0.02em' }}>
                    Referrals<br />Case data
                  </div>
                  <div style={{ position: 'relative', width: '44px', height: '2px', background: 'var(--teal)', margin: '0 auto' }}>
                    <div style={{ position: 'absolute', right: '-5px', top: '-4px', width: 0, height: 0, borderLeft: '8px solid var(--teal)', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
                  </div>
                </div>
                {/* Flow: TSE → Providers */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ position: 'relative', width: '44px', height: '2px', background: '#1A2E4A', margin: '0 auto' }}>
                    <div style={{ position: 'absolute', left: '-5px', top: '-4px', width: 0, height: 0, borderRight: '8px solid #1A2E4A', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
                  </div>
                  <div style={{ fontSize: '10px', color: 'rgba(0,0,0,0.38)', lineHeight: 1.5, marginTop: '7px', letterSpacing: '0.02em' }}>
                    Updates<br />Follow-through
                  </div>
                </div>
              </div>

              {/* THE SEED EXCHANGE — center, taller */}
              <div style={{
                background: 'var(--teal)',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.48)',
                  marginBottom: '14px',
                }}>
                  The Coordination Layer
                </div>
                <h4 style={{ color: 'var(--white)', fontSize: '21px', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3 }}>
                  The Seed Exchange
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '13px', lineHeight: 1.7, marginBottom: '28px' }}>
                  The deliberate connection between what's available and what's actually reached.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Referral coordination', desc: 'Making sure connections reach resolution' },
                    { label: 'Case navigation', desc: 'Following the person, not the form' },
                    { label: 'Follow-through', desc: 'Staying until there is resolution' },
                    { label: 'Case conferencing', desc: 'Multi-agency alignment on complex cases' },
                    { label: 'System visibility', desc: 'Knowing what exists and who can reach it' },
                    { label: 'Outcome reporting', desc: 'Measuring what actually happened' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '11px 14px',
                      borderLeft: '2px solid rgba(255,255,255,0.45)',
                    }}>
                      <div style={{ color: 'var(--white)', fontSize: '12px', fontWeight: 600, marginBottom: '2px' }}>
                        {item.label}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONNECTOR: TSE ↔ People */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#EEECEA',
                gap: '28px',
                padding: '20px 10px',
              }}>
                {/* Flow: TSE → People */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: 'rgba(0,0,0,0.38)', lineHeight: 1.5, marginBottom: '7px', letterSpacing: '0.02em' }}>
                    Navigation<br />Access
                  </div>
                  <div style={{ position: 'relative', width: '44px', height: '2px', background: 'var(--teal)', margin: '0 auto' }}>
                    <div style={{ position: 'absolute', right: '-5px', top: '-4px', width: 0, height: 0, borderLeft: '8px solid var(--teal)', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
                  </div>
                </div>
                {/* Flow: People → TSE */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ position: 'relative', width: '44px', height: '2px', background: '#1A2E4A', margin: '0 auto' }}>
                    <div style={{ position: 'absolute', left: '-5px', top: '-4px', width: 0, height: 0, borderRight: '8px solid #1A2E4A', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
                  </div>
                  <div style={{ fontSize: '10px', color: 'rgba(0,0,0,0.38)', lineHeight: 1.5, marginTop: '7px', letterSpacing: '0.02em' }}>
                    Needs<br />Context
                  </div>
                </div>
              </div>

              {/* PEOPLE SEEKING STABILITY */}
              <div style={{
                background: '#1A2E4A',
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.38)',
                  marginBottom: '14px',
                }}>
                  People Seeking Stability
                </div>
                <h4 style={{ color: 'var(--white)', fontSize: '19px', fontWeight: 600, marginBottom: '10px', lineHeight: 1.3 }}>
                  Access &amp; Resolution
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.7, marginBottom: '28px' }}>
                  The people the sector is designed to serve — too often navigating through programs without reaching solid ground.
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginTop: 'auto' }}>
                  {[
                    'Individuals in housing crisis',
                    'Complex households across systems',
                    'People passed through without resolution',
                    'Families navigating CoC pathways',
                    'Those eligible for programs they cannot find',
                  ].map((item, i) => (
                    <div key={i} style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.55)',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}>
                      <span style={{ color: 'var(--teal)', fontSize: '8px', flexShrink: 0 }}>◆</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>{/* end diagram grid */}

            <p className="diagram-caption" style={{ textAlign: 'center', marginTop: '36px' }}>
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
                follow-through. Two structures designed to meet people wherever they are
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
                other side of the referral — not by what got sent. Follow-through is
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
            TSE is designed for the providers, navigators, and organizations that believe
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
