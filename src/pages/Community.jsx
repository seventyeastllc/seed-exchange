import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Community() {
  const gardenRef = useScrollReveal()
  const bridgeRef = useScrollReveal()

  return (
    <main>
      {/* ============================================================
          COMMUNITY GARDEN — full width
      ============================================================ */}
      <section ref={gardenRef} className="community-full community-full--garden reveal" aria-label="Community Garden">
        <div className="community-full-inner">
          <div className="community-full-text">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>
              For service providers
            </span>
            <h2>Community Garden</h2>
            <p className="community-sub">
              For providers who believe coordination is a discipline — not an afterthought.
            </p>
            <p className="community-desc">
              The Community Garden is TSE's governed Facebook Group for service providers,
              case managers, housing navigators, and community partners. This is not a
              broadcast channel. It is a working space — where providers come to share
              resources, work through real challenges together, and build the relationships
              that make direct, trusted connections possible before a referral is ever needed.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '28px', fontStyle: 'italic' }}>
              Who belongs: anyone doing housing-related service work in Georgia and beyond.
              Case managers. Program directors. CoC navigators. Outreach workers.
              If you're in this work, you belong here.
            </p>
            <a
              href="https://www.facebook.com/share/g/17aSVDX53z/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Community Garden
            </a>
          </div>

          <div className="community-full-features">
            <div className="community-feature">
              Virtual Garden Meetings hosted by TSE — structured conversations about
              what's moving and what needs attention across the sector
            </div>
            <div className="community-feature">
              Resource sharing threads: what's available, what's changed, what nobody
              knows about yet but should
            </div>
            <div className="community-feature">
              Case complexity discussion at the structural level — not individual clients,
              but the coordination patterns that keep surfacing across providers
            </div>
            <div className="community-feature">
              The kind of honest provider conversation that only happens when people
              feel like they're among colleagues, not at a conference
            </div>
            <div className="community-feature">
              A governed space — participation is intentional, not passive. TSE hosts
              and maintains the quality of the room.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE BRIDGE — full width
      ============================================================ */}
      <section ref={bridgeRef} className="community-full community-full--bridge reveal" aria-label="The Bridge">
        <div className="community-full-inner community-full-inner--reverse">
          <div className="community-full-text">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>
              For individuals &amp; families
            </span>
            <h2>The Bridge</h2>
            <p className="community-sub">
              For people navigating crisis — and those who want to light the way.
            </p>
            <p className="community-desc">
              The Bridge is TSE's community space for individuals navigating housing
              instability — and for those who have walked that road and found their way
              through. It was built on a simple belief: the knowledge that got you through
              your hardest moment is exactly what someone else needs right now.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', marginBottom: '28px', fontStyle: 'italic' }}>
              Who belongs: people in crisis. People who have been through crisis.
              Family members. Advocates. Anyone who wants to show up for someone
              who needs it.
            </p>
            <a
              href="https://www.facebook.com/share/g/1avMjhRuw8/"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: 'rgba(255,255,255,0.6)', color: 'var(--white)' }}
            >
              Join The Bridge
            </a>
          </div>

          <div className="community-full-features">
            <div className="community-feature" style={{ borderBottomColor: 'rgba(255,255,255,0.15)' }}>
              A place to ask questions without judgment — about programs, applications,
              eligibility, and what to do when you don't know what to do
            </div>
            <div className="community-feature" style={{ borderBottomColor: 'rgba(255,255,255,0.15)' }}>
              Shared knowledge from people who have navigated the same systems —
              what worked, what didn't, and what you should know going in
            </div>
            <div className="community-feature" style={{ borderBottomColor: 'rgba(255,255,255,0.15)' }}>
              Connection to others who understand what this experience actually feels
              like — because housing crisis is isolating, and it doesn't have to be
            </div>
            <div className="community-feature" style={{ borderBottomColor: 'rgba(255,255,255,0.15)' }}>
              Not a hotline. Not a case management intake. Not a place to be processed.
              A community — with the warmth and honesty that word is supposed to mean.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW THEY CONNECT
      ============================================================ */}
      <section className="section" aria-label="How the community platforms connect">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">How they connect</span>
              <h2 style={{ marginBottom: '28px' }}>
                The Garden feeds The Bridge.<br />
                The Bridge informs the Garden.
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '24px' }}>
                These are not separate programs. They are two sides of the same
                coordination ecosystem — the provider community and the people those
                providers serve, both given a deliberate space to build knowledge,
                relationships, and capacity.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '24px' }}>
                What providers share in the Garden shapes what becomes visible to
                people in The Bridge. The questions that come up in The Bridge
                surface system-level patterns that matter to providers in the Garden.
                The exchange is intentional. That's the point.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.8 }}>
                TSE maintains both spaces with care. Governance is not bureaucracy —
                it is the thing that makes a space safe enough to be honest in.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                background: '#1A2E4A',
                padding: '40px',
                borderLeft: '3px solid var(--teal)',
              }}>
                <h4 style={{ color: 'var(--white)', fontSize: '20px', marginBottom: '12px' }}>
                  Community Garden
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                  The provider network. Build relationships before you need them.
                  Share what's working. Surface what's broken. Show up as a colleague.
                </p>
                <a href="https://www.facebook.com/share/g/17aSVDX53z/" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Join the Garden →
                </a>
              </div>

              <div style={{
                background: 'var(--teal)',
                padding: '40px',
              }}>
                <h4 style={{ color: 'var(--white)', fontSize: '20px', marginBottom: '12px' }}>
                  The Bridge
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                  The community space. Find people who understand. Ask what you need
                  to ask. Share what you wish you'd known sooner.
                </p>
                <a href="https://www.facebook.com/share/g/1avMjhRuw8/" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Find Your Community →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          VIRTUAL GARDEN MEETINGS
      ============================================================ */}
      <section className="section section--light" aria-label="Virtual Garden Meetings">
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <span className="eyebrow">What happens inside</span>
            <h2 style={{ marginBottom: '24px' }}>Virtual Garden Meetings.</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.78, marginBottom: '22px' }}>
              TSE hosts recurring virtual Garden Meetings inside the Community Garden —
              structured, facilitated conversations for service providers. Not a
              presentation. Not a training. A working conversation about what's
              actually moving — and what's not.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.78, marginBottom: '22px' }}>
              Topics come from the community — what referral flows are breaking down,
              what's shifted in eligibility windows, where complex households keep hitting
              barriers, and what the FY2026 NOFO means for the organizations in the room
              trying to navigate it. The goal is not to report on the problem. It is to
              solve it, together, in real time, with the people who are closest to it.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.78, marginBottom: '36px' }}>
              Garden Meeting dates are posted inside the group. Join to stay in the loop.
            </p>
            <a href="https://www.facebook.com/share/g/17aSVDX53z/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Join the Community Garden
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          PARTNER CTA
      ============================================================ */}
      <section className="section section--dark" aria-label="Partnership invitation">
        <div className="container text-center" style={{ maxWidth: '640px' }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Go deeper
          </span>
          <h2 style={{ color: 'var(--white)', marginBottom: '20px' }}>
            Ready for a formal coordination partnership?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', lineHeight: 1.78, marginBottom: '40px' }}>
            Community Garden membership is where many TSE partnerships begin.
            When you're ready to formalize, TSE's coordination partnership is designed
            to extend what your organization is already doing — with follow-through built in.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/partner" className="btn btn-primary">
              Partner With Us
            </Link>
            <Link to="/partner" className="btn btn-outline">
              Start an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
