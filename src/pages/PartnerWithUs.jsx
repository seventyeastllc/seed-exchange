import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal'

function InquiryForm() {
  const [form, setForm] = useState({
    org: '', name: '', title: '', county: '',
    serviceType: '', nofoStatus: '', referral: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to backend / CRM / email
    console.log('Partnership inquiry:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" style={{ padding: '32px 40px' }}>
        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', marginBottom: '12px' }}>
          Thank you for reaching out.
        </h4>
        <p>
          Someone from TSE will be in touch within 2–3 business days to schedule a discovery call.
          If you'd prefer to move faster, you can book directly on the calendar above.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="org">Organization name *</label>
          <input id="org" className="form-input" type="text" value={form.org} onChange={set('org')} required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Your name *</label>
          <input id="name" className="form-input" type="text" value={form.name} onChange={set('name')} required />
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="title">Your title *</label>
          <input id="title" className="form-input" type="text" value={form.title} onChange={set('title')} required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="county">County / Region served *</label>
          <input id="county" className="form-input" type="text" value={form.county} onChange={set('county')} placeholder="e.g., Fulton, DeKalb, statewide" required />
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="serviceType">Primary service type *</label>
          <select id="serviceType" className="form-select" value={form.serviceType} onChange={set('serviceType')} required>
            <option value="">Select one</option>
            <option value="housing-nav">Housing Navigation</option>
            <option value="case-management">Case Management</option>
            <option value="shelter">Emergency Shelter</option>
            <option value="transitional">Transitional Housing</option>
            <option value="rapid-rehousing">Rapid Rehousing</option>
            <option value="prevention">Homelessness Prevention</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="nofoStatus">Housing Navigation NOFO status</label>
          <select id="nofoStatus" className="form-select" value={form.nofoStatus} onChange={set('nofoStatus')}>
            <option value="">Select one</option>
            <option value="exploring">Exploring the funding opportunity</option>
            <option value="applied">Application submitted</option>
            <option value="awarded">Funding awarded</option>
            <option value="na">Not applicable to my work</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="referral">How did you hear about TSE?</label>
        <input id="referral" className="form-input" type="text" value={form.referral} onChange={set('referral')} />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Tell us about your organization and what you're building</label>
        <textarea
          id="message"
          className="form-textarea"
          value={form.message}
          onChange={set('message')}
          placeholder="The more context you share, the better the discovery call will go."
          style={{ minHeight: '160px' }}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg">
        Submit Partnership Inquiry
      </button>
    </form>
  )
}

export default function PartnerWithUs() {
  const whyRef = useMultiReveal()
  const enrichRef = useMultiReveal()

  return (
    <main>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="page-hero" style={{ minHeight: '60vh' }} aria-label="Partner with TSE">
        <div className="page-hero-content">
          <span className="eyebrow" style={{ color: 'var(--teal)' }}>
            Georgia DCA Housing Navigation NOFO — July 2026
          </span>
          <h1>Georgia is funding<br />housing navigation.</h1>
          <p>
            Organizations receiving this funding are expected to have a qualified
            coordination partner — not just referral systems, not just case managers.
            TSE is that partner. Applications are due July 2026.
          </p>
        </div>
      </section>

      {/* ============================================================
          THE OPPORTUNITY
      ============================================================ */}
      <section className="section" aria-label="The funding opportunity">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>
            <div>
              <span className="eyebrow">The opportunity</span>
              <h2 style={{ marginBottom: '28px' }}>Georgia is funding housing navigation.</h2>
              <p className="partner-lead" style={{ marginBottom: '24px' }}>
                Georgia's Department of Community Affairs has released a{' '}
                <a
                  href="https://dca.georgia.gov/affordable-housing/special-needs-housing/housing-navigation-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#FFF176',
                    color: 'inherit',
                    padding: '1px 3px',
                    textDecoration: 'none',
                    boxDecorationBreak: 'clone',
                    WebkitBoxDecorationBreak: 'clone',
                  }}
                >
                  Housing Navigation
                </a>
                {' '}funding opportunity — and organizations receiving this funding are expected
                to have qualified coordination partners. Not just referral systems. Not just
                case managers. Partners who can demonstrate the navigation capacity to serve
                the populations the funding is designed to reach.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.78, marginBottom: '24px' }}>
                TSE is that partner. Grounded in a legacy navigation program model, with the
                relationships, documented approach, and coordination capacity to make your
                housing navigation work perform — not just comply.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.78 }}>
                The application period has closed — awards were announced May 4, 2026, with
                a required implementation date of July 1, 2026. If your organization was
                funded and is now building out your housing navigation program, TSE is ready
                to partner from day one.
              </p>
            </div>

            <div style={{ background: '#1A2E4A', padding: '56px 48px' }}>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
                What funded organizations need
              </span>
              {[
                'A qualified housing navigation partner with documented capacity',
                'Coordination capacity that complements existing staff — without adding headcount',
                'Outcome reporting alignment across program deliverables',
                'A partner who understands the populations the funding is designed to reach',
                'Relationship-based navigation built on real proximity to the work',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    gap: '14px',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.65,
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: 'var(--teal)', flexShrink: 0, fontWeight: 700 }}>✓</span>
                  {item}
                </div>
              ))}

              <div style={{ marginTop: '40px' }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FLAGSHIP PACKAGE
      ============================================================ */}
      <section className="section section--light" aria-label="Partnership package">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">The partnership</span>
            <h2>Housing Navigator Partnership.</h2>
            <p>
              TSE provides contracted navigation capacity so your organization can fulfill
              its program requirements without a full W-2 hire — with the coordination
              model, the documentation, and the follow-through already in place.
            </p>
          </div>

          <div className="package-card">
            <div className="package-header">
              <div className="package-price-block">
                <div className="package-price">$3,499</div>
                <div className="package-period">per month · contracted partnership</div>
              </div>
              <div className="package-name-block">
                <div className="package-name">Housing Navigator Partnership</div>
                <p className="package-sub">
                  Built on TSE's legacy program model. Purpose-built for organizations
                  entering or expanding housing navigation work. TSE is a coordination partner —
                  not an employee, not a vendor. Capacity that's already built, already working.
                </p>
              </div>
            </div>

            <p className="package-includes-label">What's included</p>
            <ul className="package-list" role="list">
              <li className="package-item">
                Referral coordination and tracking — from first contact through resolution
              </li>
              <li className="package-item">
                Client housing navigation support for complex, multi-barrier cases
              </li>
              <li className="package-item">
                Internal case conferencing support — TSE participates, facilitates, or both
              </li>
              <li className="package-item">
                System visibility and documentation — barriers, paused cases, eligibility complexity
              </li>
              <li className="package-item">
                Outcome reporting alignment so your data reflects what's actually happening
              </li>
            </ul>

            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
              Capacity is governed. TSE takes on a limited number of formal partnerships
              to ensure quality of coordination. Reach out early.
            </p>
          </div>

          {/* Entry-level pilot tier */}
          <div style={{
            marginTop: '32px',
            background: 'var(--light-bg)',
            border: '1px solid rgba(42,175,169,0.25)',
            padding: '40px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
          }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--teal)', marginBottom: '12px' }}>
                Entry point · Limited availability
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: '16px', color: 'var(--dark)' }}>
                60-Day Coordination Pilot
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.78, color: 'var(--body)', marginBottom: '0' }}>
                Not ready to commit to a full partnership? The 60-Day Pilot is a
                lower-commitment entry point — the same coordination model, the same
                follow-through, scoped for two months. It is how some organizations
                get started before formalizing. Slots are limited.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 300, color: 'var(--dark)', lineHeight: 1 }}>
                $897
              </div>
              <div style={{ fontSize: '14px', color: 'var(--body)', opacity: 0.65, marginBottom: '28px', marginTop: '6px' }}>
                per month · 60-day commitment
              </div>
              <a href="/contact" className="btn btn-outline-teal">
                Ask About Availability →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ENRICHMENT SERVICES
      ============================================================ */}
      <section className="section" aria-label="Enrichment services">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">À la carte</span>
            <h2>Enrichment services.</h2>
            <p>
              Beyond the core partnership, TSE offers focused engagements for organizations
              that need targeted capacity — available at per-session or per-service rates.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--teal)', marginTop: '10px', fontStyle: 'italic', fontWeight: 400 }}>
              Enrichment services are available as separate, per-engagement contracts — independent of the core partnership rate.
            </p>
          </div>

          <div ref={enrichRef} className="enrichment-grid">
            <article className="enrichment-card reveal">
              <div className="eyebrow" style={{ fontSize: '11px', marginBottom: '10px', color: 'var(--teal)' }}>Access</div>
              <h4>Staff Training</h4>
              <p>
                Coordination as a practice — not a policy. Training for case managers,
                navigators, and intake staff on the skills that actually move cases forward.
              </p>
            </article>
            <article className="enrichment-card reveal reveal-delay-1">
              <div className="eyebrow" style={{ fontSize: '11px', marginBottom: '10px', color: 'var(--teal)' }}>Visibility</div>
              <h4>Cohort Facilitation</h4>
              <p>
                Structured peer learning for housing navigators and service providers.
                The kind of honest conversation that happens when people feel like
                they're among colleagues, not at a conference.
              </p>
            </article>
            <article className="enrichment-card reveal reveal-delay-2">
              <div className="eyebrow" style={{ fontSize: '11px', marginBottom: '10px', color: 'var(--teal)' }}>Resolution</div>
              <h4>Workflow Consulting</h4>
              <p>
                TSE reviews your organization's coordination workflow and identifies
                where referrals break down, where follow-through falls off, and what restoring it requires.
              </p>
            </article>
            <article className="enrichment-card reveal reveal-delay-3">
              <div className="eyebrow" style={{ fontSize: '11px', marginBottom: '10px', color: 'var(--teal)' }}>Visibility</div>
              <h4>Community Convenings</h4>
              <p>
                Facilitated Roundtables for your team, your CoC partners, or your
                provider network. Structured for honest conversation, not performance.
              </p>
            </article>
            <article className="enrichment-card reveal reveal-delay-4">
              <div className="eyebrow" style={{ fontSize: '11px', marginBottom: '10px', color: 'var(--teal)' }}>Access</div>
              <h4>NOFO Strategy Support</h4>
              <p>
                For organizations navigating the Housing Navigation funding opportunity —
                TSE supports your application with the partnership documentation,
                coordination capacity evidence, and program design language funders
                are looking for.
              </p>
            </article>
            <article className="enrichment-card reveal reveal-delay-5">
              <div className="eyebrow" style={{ fontSize: '11px', marginBottom: '10px', color: 'var(--teal)' }}>Visibility</div>
              <h4>Navigation Capacity Assessment</h4>
              <p>
                A structured review of your organization's current navigation capacity —
                where you are strong, where the pauses are, and what partnership would
                realistically move things forward.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY TSE
      ============================================================ */}
      <section className="section section--light" aria-label="Why TSE">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why TSE</span>
            <h2>The case for coordination partnership.</h2>
          </div>

          <div ref={whyRef} className="why-tse-grid">
            <article className="why-item reveal">
              <h4>Lived expertise, not just credentialed expertise</h4>
              <p>
                TSE brings proximity — to the populations, to the system, and to the
                space between them. This team has navigated these systems from the inside:
                as case managers, as Coordinated Entry specialists, as the person still
                working the case after everyone else moved on. That is not a talking point.
                It is the foundation of how TSE operates.
              </p>
            </article>
            <article className="why-item reveal reveal-delay-2">
              <h4>A partner, not overhead</h4>
              <p>
                TSE is not a W-2 employee. It is a coordination partner that brings
                its own model, its own documentation systems, and its own follow-through
                practices. You get real capacity without adding headcount.
              </p>
            </article>
            <article className="why-item reveal reveal-delay-4">
              <h4>Complement, not competition</h4>
              <p>
                TSE's model is built to extend what your organization already does —
                not to build something that competes with it. Every partnership is
                designed around what you're doing and what forward movement actually requires.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          CAPABILITY STATEMENT
      ============================================================ */}
      <section className="section" aria-label="Capability statement">
        <div className="container">
          <div className="capability-block">
            <div>
              <span className="eyebrow">Documentation</span>
              <h3>TSE Capability Statement</h3>
              <p>
                TSE's capability statement is available for grant applications, program
                documentation, and internal review. Includes organizational overview,
                service model, and partnership scope. Request a copy directly.
              </p>
            </div>
            {/* TODO: Upload completed TSE-Capability-Statement.pdf to /public to enable download */}
            <a
              href="/contact"
              className="btn btn-primary btn-lg"
              aria-label="Request TSE Capability Statement"
            >
              Request Capability Statement
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          CALENDLY / DISCOVERY CALL
      ============================================================ */}
      <section className="section" aria-label="Book a discovery call">
        <div className="container">
          <div className="calendly-block">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
              30 minutes. No pitch.
            </span>
            <h3>Book a discovery call.</h3>
            <p className="sub">
              Not sure if this is the right fit? Start with a 30-minute discovery call.
              No pitch. Just a real conversation about what you're building and
              whether TSE belongs in it.
            </p>

            <div style={{ width: '100%', overflowX: 'auto', marginTop: '8px' }}>
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3TyleaNRyAFgI-gYzCoRvJjeknpgzzYj0Yfu6wqwE9gJsjQRN5tx-eWyoU5JkoEHSb3TI0fDd5?gv=true"
                style={{ border: 0, width: '100%', minHeight: '600px' }}
                frameBorder="0"
                title="Book a discovery call with TSE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          INQUIRY FORM
      ============================================================ */}
      <section className="section section--light" aria-label="Partnership inquiry form">
        <div className="container">
          <div className="inquiry-form-wrap">
            <span className="eyebrow">Tell us about your organization</span>
            <h2 style={{ marginBottom: '12px' }}>Partnership inquiry.</h2>
            <p style={{ marginBottom: '48px', maxWidth: '560px', fontSize: '16px', lineHeight: 1.75 }}>
              Fill out the form below and TSE will follow up within 2–3 business days
              to schedule a discovery call. The more context you share, the better the
              conversation will be.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* ============================================================
          NOT READY CTA
      ============================================================ */}
      <section className="section section--light" aria-label="Community Garden invitation">
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="eyebrow">
            Not ready to formalize?
          </span>
          <h2 style={{ marginBottom: '20px' }}>
            The Community Garden is where we build relationships first.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.78, marginBottom: '36px' }}>
            Formal partnership starts with trust, and trust starts with knowing each
            other's work. The Community Garden is TSE's provider network — a governed
            space where service providers, navigators, and CoC partners come to build
            the relationships that make real coordination possible.
            Join before you're ready. That's usually the right time.
          </p>
          <a href="https://www.facebook.com/share/g/17aSVDX53z/" className="btn btn-outline-teal" target="_blank" rel="noopener noreferrer">
            Join the Community Garden
          </a>
        </div>
      </section>
    </main>
  )
}
