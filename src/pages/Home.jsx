import { Link } from 'react-router-dom'
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal'

export default function Home() {
  const missionRef = useScrollReveal()
  const pillarsRef = useMultiReveal()
  const ecosystemRef = useMultiReveal()
  const servesRef = useMultiReveal()
  const ctaRef = useScrollReveal()

  return (
    <main>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="home-hero" aria-label="Hero">
        <div className="home-hero-glow" aria-hidden="true" />
        <div className="home-hero-glow2" aria-hidden="true" />
        <div className="home-hero-bg-word" aria-hidden="true">TSE</div>

        <div className="home-hero-content">
          <div className="home-hero-eyebrow" aria-hidden="true">
            Care Coordination &amp; Navigation — Georgia
          </div>

          <h1 className="home-hero-headline">
            Visibility.<br />
            Access.<br />
            <span className="accent">Resolution.</span>
          </h1>

          <p className="home-hero-sub">
            The support exists. The programs are there.
            What's missing is someone holding the thread between them.
            That's the work TSE does.
          </p>

          <div className="home-hero-ctas">
            <Link to="/partner" className="btn btn-primary btn-lg">
              Partner With Us
            </Link>
            <a
              href="https://www.facebook.com/share/g/1avMjhRuw8/"
              className="btn btn-outline btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Your Community
            </a>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ============================================================
          MISSION
      ============================================================ */}
      <section className="mission-section" aria-label="Mission">
        <div>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.3)' }}>
            The belief everything is built on
          </span>
          <blockquote
            ref={missionRef}
            className="mission-belief reveal"
          >
            "Stability grows when people have access to the right support,
            at the right time, through coordination that holds."
          </blockquote>
          <p className="mission-attr">— The Seed Exchange</p>
        </div>
      </section>

      {/* ============================================================
          THREE PILLARS
      ============================================================ */}
      <section className="section" aria-label="What TSE makes possible">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">The work</span>
            <h2>What TSE makes possible.</h2>
            <p>
              The distance between a person and their stability is rarely about resources.
              It's about visibility, follow-through, and someone working the case
              with the urgency the situation actually demands.
              That's what TSE brings — with follow-through, not just referrals.
            </p>
          </div>
        </div>
        <div
          ref={pillarsRef}
          className="pillars-grid"
          style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--gutter)' }}
        >
          <article className="pillar-card reveal">
            <div className="pillar-number" aria-hidden="true">01</div>
            <h3 className="pillar-title">Visibility</h3>
            <span className="pillar-sub">The knowledge barrier</span>
            <p className="pillar-text">
              The programs exist. The eligibility is there. The knowledge isn't.
              A person who qualifies for housing support may never know the program
              exists. A provider may not know their client is already enrolled somewhere
              else. TSE makes the invisible visible — for people, and for the organizations
              trying to reach them.
            </p>
          </article>

          <article className="pillar-card reveal reveal-delay-2">
            <div className="pillar-number" aria-hidden="true">02</div>
            <h3 className="pillar-title">Access</h3>
            <span className="pillar-sub">The follow-through</span>
            <p className="pillar-text">
              A referral made is not a referral resolved. Someone has to follow through
              until the door actually opens — until the application gets submitted,
              the intake call gets answered, the document gets uploaded. TSE is the
              follow-through. Not a referral sent. Resolution pursued.
            </p>
          </article>

          <article className="pillar-card reveal reveal-delay-4">
            <div className="pillar-number" aria-hidden="true">03</div>
            <h3 className="pillar-title">Resolution</h3>
            <span className="pillar-sub">The urgency it deserves</span>
            <p className="pillar-text">
              Stability should be treated with urgency — not held at the pace of an
              intake process designed for workflow, not for the person waiting on the
              other side of it. A family navigating a housing decision cannot afford
              to wait for the process to catch up. TSE works each case with the
              urgency the situation actually demands.
            </p>
          </article>
        </div>
      </section>

      {/* ============================================================
          ECOSYSTEM
      ============================================================ */}
      <section className="section section--light" aria-label="The TSE ecosystem">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">The ecosystem</span>
            <h2>Where coordination happens.</h2>
            <p>
              TSE's work extends beyond direct partnership into the community platforms
              that make coordination possible — and sustainable — at scale.
            </p>
          </div>

          <div ref={ecosystemRef} className="ecosystem-grid">
            <article className="ecosystem-card reveal">
              <div className="ecosystem-card-label">For service providers</div>
              <h3>Community Garden</h3>
              <p>
                A governed space for service providers, case managers, housing navigators,
                and community partners. This is where the relationships that make warm
                trusted connections get built — before the referral is ever needed.
                TSE hosts virtual Garden Meetings here.
              </p>
              <a href="https://www.facebook.com/share/g/17aSVDX53z/" className="btn btn-outline-teal" target="_blank" rel="noopener noreferrer">
                Join the Community Garden
              </a>
            </article>

            <article className="ecosystem-card reveal reveal-delay-2">
              <div className="ecosystem-card-label">For individuals &amp; families</div>
              <h3>The Bridge</h3>
              <p>
                A community space for people navigating housing crisis — and for those
                who have walked that road and want to share what they know. The knowledge
                that got you through your hardest moment is exactly what someone else
                needs right now.
              </p>
              <a href="https://www.facebook.com/share/g/1avMjhRuw8/" className="btn btn-outline-teal" target="_blank" rel="noopener noreferrer">
                Find Your Community
              </a>
            </article>

            <article className="ecosystem-card ecosystem-card--coming reveal reveal-delay-4">
              <div className="coming-badge">Coming Fall 2026</div>
              <div className="ecosystem-card-label">Partner resource platform</div>
              <h3>Lattice</h3>
              <p>
                TSE's Partner Management Platform — a curated, governed resource directory
                for TSE network members across Georgia. Live availability. Trusted connections
                built in. No PHI. Membership-based.
              </p>
              <Link to="/lattice" className="btn btn-outline-teal">
                Get Early Access
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHO TSE SERVES
      ============================================================ */}
      <section className="section section--dark" aria-label="Who TSE serves">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Priority populations
            </span>
            <h2 style={{ color: 'var(--white)' }}>The people who need the most deliberate coordination to reach stability.</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '640px' }}>
              TSE was built specifically to serve the people who sit outside traditional
              intervention pathways — because those are the people who need the most
              deliberate, sustained coordination to reach stability.
            </p>
          </div>

          <div ref={servesRef} className="serves-grid">
            <article className="serve-item reveal">
              <h4>Elderly individuals experiencing homelessness</h4>
              <p>
                Adults 55 and older navigating housing crisis face layered barriers —
                limited mobility, fixed income, health complexity, and invisibility
                in systems designed for younger populations. Coordination for this
                population requires patience, persistence, and knowledge of programs
                that most navigators never encounter.
              </p>
            </article>

            <article className="serve-item reveal reveal-delay-2">
              <h4>Individuals with disabilities in housing crisis</h4>
              <p>
                The intersection of disability and homelessness creates documentation
                barriers, eligibility complexity, and coordination failures that require a
                dedicated navigator — someone who knows the system, knows the waivers,
                and will not stop at the first closed door.
              </p>
            </article>

            <article className="serve-item reveal reveal-delay-1">
              <h4>Families raising children with special needs</h4>
              <p>
                Parents managing a child's disability while navigating a housing crisis
                are navigating two complex systems at once — often alone. TSE coordinates
                across those systems so families can focus on what only they can do:
                showing up for their children.
              </p>
            </article>

            <article className="serve-item reveal reveal-delay-3">
              <h4>Those outside traditional intervention pathways</h4>
              <p>
                Some people don't fit the profiles that existing programs were designed
                for. They cycle through systems without stabilizing. TSE works specifically
                for the people no other program is built to hold —
                the ones coordination keeps passing over.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA
      ============================================================ */}
      <section className="section section--teal" aria-label="Call to action">
        <div className="container text-center">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>
            The next step
          </span>
          <h2 ref={ctaRef} className="reveal" style={{ color: 'var(--white)', marginBottom: '20px' }}>
            Access without coordination is not access.
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '540px',
            margin: '0 auto 44px',
            fontSize: '18px',
            lineHeight: '1.7',
          }}>
            Whether you're a service provider, a funded organization, or someone
            looking for support — the right place to start is a conversation.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/partner" className="btn btn-outline">
              Partner With Us
            </Link>
            <Link to="/contact" className="btn btn-white">
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
