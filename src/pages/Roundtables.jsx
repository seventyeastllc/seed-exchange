import { Link } from 'react-router-dom'
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal'

// ============================================================
// UPCOMING EVENTS
// To add events: fill in the UPCOMING_EVENTS array below.
// Leave it empty to show the "no events scheduled" state.
// ============================================================
const UPCOMING_EVENTS = [
  // Example format — uncomment and fill in to add an event:
  // {
  //   id: 1,
  //   day: '15',
  //   monthYear: 'May 2026',
  //   title: 'Referral Flow Breakdowns: Why Handoffs Fail',
  //   format: 'Virtual',
  //   time: '11:00 AM – 12:30 PM ET',
  //   topic: 'Referral coordination',
  //   body: 'An honest conversation about why referrals fall apart between agencies — and what practitioners are actually doing about it.',
  //   registrationLink: '#', // REPLACE with actual registration URL
  // },
]

const PAST_EVENTS = [
  {
    id: 1,
    date: 'Jul 2026',
    title: 'FY2026 CoC NOFO: What Applications Due August 26 Actually Require',
    topic: 'NOFO implementation',
    upcoming: true,
  },
  {
    id: 2,
    date: 'May 2026',
    title: 'Provider Capacity and Burnout: The Coordination Cost Nobody Is Measuring',
    topic: 'Sector health',
  },
  {
    id: 3,
    date: 'Apr 2026',
    title: 'When Case Management Ends and Coordination Needs to Continue',
    topic: 'Handoff & follow-through',
  },
  {
    id: 4,
    date: 'Mar 2026',
    title: 'Elderly and Disabled Populations: Navigation Beyond Standard Pathways',
    topic: 'Priority populations',
  },
  {
    id: 5,
    date: 'Feb 2026',
    title: "Navigating Complex Households: When One System Isn't Enough",
    topic: 'Case complexity',
  },
  {
    id: 6,
    date: 'Jan 2026',
    title: 'CoC Navigation 101: What Providers Need to Know',
    topic: 'CoC systems',
  },
  {
    id: 7,
    date: 'Dec 2025',
    title: 'Data Quality in Housing Navigation: What the Numbers Miss',
    topic: 'Data & reporting',
  },
]

export default function Roundtables() {
  const whatRef = useScrollReveal()
  const eventsRef = useMultiReveal()

  return (
    <main>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="page-hero" aria-label="The Field Table">
        <div className="page-hero-content">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
            The Field Table
          </span>
          <h1>What can you bring<br />to the table?</h1>
          <p>
            Not a webinar. Not a training. Not a pitch.
            A structured, facilitated conversation for community service providers
            who believe honesty is more useful than performance.
          </p>
        </div>
      </section>

      {/* ============================================================
          WHAT A ROUNDTABLE IS
      ============================================================ */}
      <section className="section" aria-label="What The Field Table is">
        <div className="container">
          <div ref={whatRef} className="rt-what reveal">
            <div className="rt-what-text">
              <span className="eyebrow">The format</span>
              <h2 style={{ marginBottom: '28px' }}>For the people doing the work.</h2>

              <p>
                The Field Table is TSE's ongoing forum for community service providers —
                case managers, program directors, housing navigators, CoC staff, and
                the people closest to the coordination failures that keep surfacing.
                The conversations are focused. The facilitator keeps them honest.
                The goal is not consensus — it is clarity.
              </p>

              <p>
                This is evergreen content. Topics come from the field — referral flow
                breakdowns, CoC navigation, complex household coordination, data quality,
                NOFO implementation, and more. If it shows up in your work week,
                it belongs at The Field Table.
              </p>

              <p>
                The Field Table is designed for the kind of honest provider conversation
                that only happens when people feel like they're among colleagues —
                not being evaluated, not performing for a funder, not pitching their
                program. Just talking about what's real.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '36px' }}>
                <Link to="/partner" className="btn btn-primary">
                  Reach Out About The Field Table
                </Link>
                <a href="https://www.facebook.com/share/g/17aSVDX53z/" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                  Join the Community Garden
                </a>
              </div>
            </div>

            <div className="rt-what-aside">
              <h4>Topics we've covered</h4>
              <div className="topic-list">
                {[
                  'Referral flow breakdowns — why connections fail between agencies',
                  'CoC navigation for providers new to Coordinated Entry',
                  'Complex household coordination across multiple systems',
                  'Data quality in housing navigation: what the numbers miss',
                  'NOFO implementation: what funded organizations are learning',
                  'Elderly and disabled populations: navigation beyond standard pathways',
                  'When case management ends and coordination needs to continue',
                  'Provider capacity and burnout: the coordination cost nobody is measuring',
                ].map((topic, i) => (
                  <div key={i} className="topic-item">{topic}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          UPCOMING EVENTS
      ============================================================ */}
      <section className="section section--light" aria-label="Upcoming Field Table sessions">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Upcoming</span>
            <h2>The Field Table — what's coming.</h2>
            <p>
              Sessions are free for Community Garden members and TSE network partners.
              Sign up to be notified when new dates are posted.
            </p>
          </div>

          <div ref={eventsRef} className="events-grid">
            {UPCOMING_EVENTS.length === 0 ? (
              <div className="events-empty">
                <h4>The next Field Table session is coming.</h4>
                <p style={{ marginBottom: '32px' }}>
                  Topics come from the field, and right now the field has no shortage of material.
                  Join the Community Garden or drop your email below to be first to know when
                  the next date is posted.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="https://www.facebook.com/share/g/17aSVDX53z/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Join the Community Garden
                  </a>
                  <Link to="/partner" className="btn btn-outline-dark">
                    Start an Inquiry
                  </Link>
                </div>
              </div>
            ) : (
              UPCOMING_EVENTS.map((event, i) => (
                <article key={event.id} className={`event-card reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
                  <div className="event-date-block">
                    <div className="event-day">{event.day}</div>
                    <div className="event-month-year">{event.monthYear}</div>
                  </div>

                  <h3 className="event-title">{event.title}</h3>

                  <div className="event-meta">
                    <div className="event-meta-item">
                      <b>Format</b> {event.format}
                    </div>
                    <div className="event-meta-item">
                      <b>Time</b> {event.time}
                    </div>
                    <div className="event-meta-item">
                      <b>Topic</b> {event.topic}
                    </div>
                  </div>

                  <p className="event-body">{event.body}</p>

                  {/* REPLACE: Update registrationLink with actual registration URL */}
                  <a
                    href={event.registrationLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          PAST ROUNDTABLES
      ============================================================ */}
      {PAST_EVENTS.length > 0 && (
        <section className="section" aria-label="Past Field Table sessions">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Archive</span>
              <h2>The Field Table — sessions on record.</h2>
              <p>
                A running record of what the community has worked through together.
                The conversation keeps going.
              </p>
            </div>

            <div className="past-events-list">
              {PAST_EVENTS.map((event) => (
                <div key={event.id} className="past-event-item" style={event.upcoming ? { borderLeft: '3px solid var(--teal)', paddingLeft: '16px' } : {}}>
                  <span className="past-event-date">{event.date}</span>
                  <h4 className="past-event-title">{event.title}</h4>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="past-event-tag">{event.topic}</span>
                    {event.upcoming && (
                      <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--teal)' }}>
                        Upcoming — Join the{' '}
                        <a href="https://www.facebook.com/share/g/17aSVDX53z/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                          Community Garden
                        </a>
                        {' '}to be notified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          HOST A ROUNDTABLE CTA
      ============================================================ */}
      <section className="section section--dark" aria-label="Bring The Field Table to your team">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Custom facilitation
              </span>
              <h2 style={{ color: 'var(--white)', marginBottom: '24px' }}>
                Bring The Field Table to your team.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.78, marginBottom: '24px' }}>
                TSE facilitates custom Field Table sessions for individual organizations,
                CoC bodies, provider coalitions, and network partners — structured around
                the specific coordination challenges your team is facing.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.78, marginBottom: '36px' }}>
                These are not off-the-shelf trainings. TSE works with you to identify
                the right focus, design the right conversation structure, and facilitate
                in a way that leaves your team with something usable — not just a debrief.
              </p>
              <Link to="/partner" className="btn btn-primary">
                Reach Out About Facilitation
              </Link>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '56px 48px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
                The Field Table is right for your team when
              </span>
              {[
                'Your provider coalition needs to work through referral flow honestly',
                'Your CoC partner group is preparing for NOFO implementation',
                'Your organization is building coordination capacity for the first time',
                'Your staff team is experiencing friction in referral follow-through',
                'Your funded program needs structured provider engagement built in',
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
                    lineHeight: 1.65,
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
