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
            FY2026 CoC NOFO — August 26, 2026 Application Deadline
          </span>
          <h1>HUD just released<br />the FY2026 CoC NOFO.</h1>
          <p>
            HUD released the FY2026 Continuum of Care NOFO on June 1, 2026.
            Applications are due August 26, 2026. TSE is accepting navigator
            partnership inquiries now — for organizations building or expanding
            housing navigation capacity before the deadline.{' '}
            <a
              href="https://www.hud.gov/hud-partners/community-coc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              View the NOFO on HUD Exchange ↗
            </a>
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
              <h2 style={{ marginBottom: '28px' }}>The FY2026 CoC NOFO is open.</h2>
              <p className="partner-lead" style={{ marginBottom: '24px' }}>
                HUD released the{' '}
                <a
                  href="https://www.hud.gov/hud-partners/community-coc"
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
                  FY2026 Continuum of Care NOFO
                </a>
                {' '}on June 1, 2026. Applications are due August 26, 2026. Organizations
                pursuing or preparing CoC funding are expected to demonstrate qualified
                coordination capacity — not just referral systems, not just case managers.
                Partners who can show the navigation infrastructure to serve the populations
                the funding is designed to reach.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.78, marginBottom: '24px' }}>
                TSE is that partner. Built on a legacy navigation program model, with the
                relationships, documented approach, and coordination capacity to make your
                housing navigation work perform — not just comply.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.78 }}>
                For organizations funded under Georgia DCA's Housing Navigation program with
                a July 1, 2026 implementation date — TSE is also ready to partner from day
                one on that work.
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
                <Link to="/partner" className="btn btn-primary" style={{ width: '100%' }}>
                  Start an Inquiry
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
                  TSE navigates directly for your highest-barrier clients — from first contact
                  through resolution, across programs, systems, and agencies. Contracted
                  coordination capacity for organizations with housing navigation responsibilities.
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
                System visibility and documentation — barriers, paused cases, what's required to reach resolution
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

          {/* Entry-level pilot tiers */}
          <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Navigator Coaching Pilot */}
            <div style={{
              background: 'var(--light-bg)',
              border: '1px solid rgba(42,175,169,0.25)',
              padding: '40px 48px',
            }}>
              <div style={{
                display: 'inline-block',
                background: 'var(--teal)',
                color: 'var(--white)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                marginBottom: '16px',
              }}>
                New · Limited Slots
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: '16px', color: 'var(--dark)' }}>
                Navigator Coaching Pilot
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.78, color: 'var(--body)', marginBottom: '28px' }}>
                A 30-day coaching engagement for housing navigators and case managers —
                focused on the specific cases and coordination challenges your team is
                actively carrying. TSE works alongside your staff on up to 5 client
                situations to build coordination capacity from the inside.
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 300, color: 'var(--dark)', lineHeight: 1, marginBottom: '6px' }}>
                $897
              </div>
              <div style={{ fontSize: '14px', color: 'var(--body)', opacity: 0.65, marginBottom: '24px' }}>
                30-day engagement · up to 5 clients
              </div>
              <Link to="/partner" className="btn btn-outline-teal">
                Ask About Availability →
              </Link>
            </div>

            {/* 60-Day Coordination Pilot */}
            <div style={{
              background: 'var(--light-bg)',
              border: '1px solid rgba(42,175,169,0.25)',
              padding: '40px 48px',
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(42,175,169,0.12)',
                color: 'var(--teal)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                marginBottom: '16px',
                border: '1px solid rgba(42,175,169,0.3)',
              }}>
                Entry Point · Limited Availability
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: '16px', color: 'var(--dark)' }}>
                60-Day Coordination Pilot
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.78, color: 'var(--body)', marginBottom: '28px' }}>
                Not ready to commit to a full partnership? The 60-Day Pilot is a
                lower-commitment entry point — the same coordination model, the same
                follow-through, scoped for two months. It is how some organizations
                get started before formalizing. Slots are limited.
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 300, color: 'var(--dark)', lineHeight: 1, marginBottom: '6px' }}>
                $897
              </div>
              <div style={{ fontSize: '14px', color: 'var(--body)', opacity: 0.65, marginBottom: '24px' }}>
                per month · 60-day commitment
              </div>
              <Link to="/partner" className="btn btn-outline-teal">
                Ask About Availability →
              </Link>
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
              Beyond the core partnership, TSE offers focused engagements across each of the three
              coordination areas — Visibility, Access, and Resolution — available at per-session
              or per-service rates.
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
                TSE brings proximity — to the populations, to the programs, and to the
                space between them. This practice was built from the inside of the work:
                as a direct practitioner, as a caregiver navigating the same systems,
                and as the person who stayed on the case long past the point where anyone
                expected them to.
              </p>
            </article>
            <article className="why-item reveal reveal-delay-2">
              <h4>A partner, not overhead</h4>
              <p>
                TSE is a coordination partner that brings its own model, its own
                documentation systems, and its own follow-through practices. You get
                real capacity without adding headcount.
              </p>
            </article>
            <article className="why-item reveal reveal-delay-4">
              <h4>Complement, not competition</h4>
              <p>
                TSE's model is designed to extend what your organization already does —
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
              href="/partner#inquiry-form"
              className="btn btn-primary btn-lg"
              aria-label="Request TSE Capability Statement"
            >
              Request Capability Statement
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          START WITH AN INQUIRY
      ============================================================ */}
      <div className="calendly-block" aria-label="Start with an inquiry">
        <span className="eyebrow">
          The next step
        </span>
        <h3>Start with an inquiry.</h3>
        <p className="sub">
          Not sure if this is the right fit? Fill out the inquiry form below
          and TSE will be in touch within 2–3 business days. The more context
          you share, the better the conversation will be.
        </p>
        <a href="#inquiry-form" className="btn btn-primary btn-lg" style={{ marginTop: '8px' }}>
          Go to Inquiry Form →
        </a>
      </div>

      {/* ============================================================
          INQUIRY FORM
      ============================================================ */}
      <section id="inquiry-form" className="section section--light" aria-label="Partnership inquiry form">
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
