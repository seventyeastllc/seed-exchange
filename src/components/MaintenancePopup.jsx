import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MAINTENANCE_UNTIL, CONTACT_EMAIL } from '../maintenance.js'

export default function MaintenancePopup() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible || dismissed) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setDismissed(true)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 16, 30, 0.72)',
          backdropFilter: 'blur(4px)',
          zIndex: 9000,
          animation: 'fadeIn 0.35s ease',
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site under maintenance"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9001,
          width: 'min(560px, calc(100vw - 40px))',
          background: '#1B2A4A',
          borderTop: '4px solid #C8622A',
          borderRadius: '4px',
          padding: '48px 44px 44px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
          animation: 'slideUp 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '18px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '22px',
            lineHeight: 1,
            cursor: 'pointer',
            padding: '4px 8px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
        >
          ✕
        </button>

        {/* Eyebrow */}
        <p style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#C8622A',
          marginBottom: '16px',
        }}>
          We'll be back {MAINTENANCE_UNTIL}
        </p>

        {/* Headline */}
        <h2 style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 400,
          color: '#ffffff',
          lineHeight: 1.3,
          marginBottom: '20px',
        }}>
          Something better<br />is almost ready.
        </h2>

        {/* Body */}
        <p style={{
          fontSize: '15px',
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.72)',
          marginBottom: '12px',
        }}>
          We're in the middle of a full rebrand — and we're doing it right.
          New look. Same work. Same commitment. The Seed Exchange is still very
          much here, we're just getting our house in order before we open
          the front door wide.
        </p>

        <p style={{
          fontSize: '15px',
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.72)',
          marginBottom: '32px',
        }}>
          If you need to connect before then — don't wait.
          Reach us at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              color: '#2AAFA9',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            {CONTACT_EMAIL}
          </a>
          {' '}or use the form below.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link
            to="/contact"
            onClick={() => setDismissed(true)}
            style={{
              display: 'inline-block',
              padding: '13px 28px',
              background: '#2AAFA9',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#239a95'}
            onMouseLeave={e => e.currentTarget.style.background = '#2AAFA9'}
          >
            Send Us a Message →
          </Link>

          <button
            onClick={() => setDismissed(true)}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.45)',
              fontSize: '13px',
              cursor: 'pointer',
              padding: '8px 4px',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            I'll come back July 6th
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, calc(-50% + 24px)) }
          to   { opacity: 1; transform: translate(-50%, -50%) }
        }
      `}</style>
    </>
  )
}
