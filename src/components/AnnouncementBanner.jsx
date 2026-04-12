import { useState, useEffect } from 'react'

// ============================================================
// ANNOUNCEMENT BANNER
// Add, edit, or remove announcements below.
// Each message should be no longer than ~200 characters.
// Set `active: false` to hide an announcement without deleting it.
// Leave the array empty to hide the banner entirely.
// ============================================================
const ANNOUNCEMENTS = [
  {
    id: 1,
    active: true,
    message: 'Housing Navigation NOFO awards have been announced — implementation begins July 1, 2026. If your organization was funded, TSE is ready to partner now.',
    link: 'https://dca.georgia.gov/affordable-housing/special-needs-housing/housing-navigation-program',
    linkLabel: 'Learn more',
  },
  {
    id: 2,
    active: false,
    message: 'New Roundtable coming soon — join the Community Garden to be first to know when it\'s announced.',
    link: null,
    linkLabel: null,
  },
  {
    id: 3,
    active: false,
    message: 'Lattice founding member interest is now open. Limited spots available for fall 2026 launch.',
    link: null,
    linkLabel: null,
  },
]

const ACTIVE = ANNOUNCEMENTS.filter((a) => a.active)
const INTERVAL_MS = 5500

export default function AnnouncementBanner() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (ACTIVE.length <= 1) return
    const timer = setInterval(() => advance(1), INTERVAL_MS)
    return () => clearInterval(timer)
  }, [current])

  if (!ACTIVE.length || !visible) return null

  function advance(dir) {
    setFading(true)
    setTimeout(() => {
      setCurrent((c) => (c + dir + ACTIVE.length) % ACTIVE.length)
      setFading(false)
    }, 220)
  }

  const item = ACTIVE[current]

  return (
    <div style={{
      position: 'fixed',
      top: '136px',
      left: 0,
      right: 0,
      zIndex: 190,
      background: 'rgba(196, 112, 63, 0.92)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(255,255,255,0.15)',
      display: 'flex',
      alignItems: 'center',
      minHeight: '40px',
      padding: '0 60px',
    }}>
      {/* Prev */}
      {ACTIVE.length > 1 && (
        <button
          onClick={() => advance(-1)}
          aria-label="Previous announcement"
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.55)',
            cursor: 'pointer',
            padding: '4px 8px 4px 0',
            fontSize: '14px',
            flexShrink: 0,
            lineHeight: 1,
          }}
        >
          ‹
        </button>
      )}

      {/* Message */}
      <p style={{
        flex: 1,
        textAlign: 'center',
        fontSize: '13px',
        color: 'var(--white)',
        lineHeight: 1.5,
        margin: '6px 0',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.22s ease',
        letterSpacing: '0.01em',
      }}>
        {item.message}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255,255,255,0.85)',
              marginLeft: '10px',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {item.linkLabel} ↗
          </a>
        )}
      </p>

      {/* Dot indicators + Next */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
        {ACTIVE.length > 1 && (
          <>
            {ACTIVE.map((_, i) => (
              <button
                key={i}
                onClick={() => advance(i - current)}
                aria-label={`Announcement ${i + 1}`}
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background 0.2s',
                }}
              />
            ))}
            <button
              onClick={() => advance(1)}
              aria-label="Next announcement"
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.55)',
                cursor: 'pointer',
                padding: '4px 0 4px 8px',
                fontSize: '14px',
                lineHeight: 1,
              }}
            >
              ›
            </button>
          </>
        )}

        {/* Dismiss */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.45)',
            cursor: 'pointer',
            padding: '4px 0 4px 12px',
            fontSize: '16px',
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
    </div>
  )
}
