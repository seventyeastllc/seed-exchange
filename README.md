# The Seed Exchange — Website
## seedxga.com | Built April 2026

---

## Quick Start

```bash
npm install
npm run dev        # dev server at http://localhost:3000
npm run build      # production build → /dist
npm run preview    # preview production build locally
```

---

## What You Need to Replace Before Going Live

Search for `REPLACE` in the codebase to find every placeholder. The full list:

### 1. Logo
- Drop your logo file into `/public/` as `logo.svg` (or `logo.png`)
- In `src/components/Navigation.jsx` line ~38: uncomment the `<img>` tag and remove the text fallback
- In `src/components/Footer.jsx` line ~40: same — swap the text block for an `<img>` tag

### 2. Facebook Group URLs
All Facebook links currently point to `#`. Replace with actual URLs in these files:
- `src/pages/Home.jsx` — Community Garden link (line ~54), The Bridge link (line ~75)
- `src/pages/HowWeWork.jsx` — Community Garden link (line ~58), The Bridge (line ~90)
- `src/pages/PartnerWithUs.jsx` — Community Garden links (lines ~175, ~337, ~420)
- `src/pages/Community.jsx` — Community Garden CTA (line ~72), The Bridge CTA (line ~115)
- `src/pages/Contact.jsx` — Community Garden card (line ~148), The Bridge card (line ~157)
- `src/components/Footer.jsx` — both Facebook Group links (lines ~54, ~56)

### 3. Calendly
- `src/pages/PartnerWithUs.jsx` line ~400: replace the placeholder block with your Calendly embed widget
- `src/pages/Contact.jsx` line ~130: same — embed your Calendly widget and update the direct link
- Calendly embed format: `<div className="calendly-inline-widget" data-url="https://calendly.com/YOUR_LINK" style={{ minWidth: '320px', height: '630px' }} />`
- Also add Calendly's script tag to `/index.html`: `<script src="https://assets.calendly.com/assets/external/widget.js" async></script>`

### 4. Capability Statement PDF
- Upload `TSE-Capability-Statement.pdf` to the `/public/` folder
- The download button in `src/pages/PartnerWithUs.jsx` line ~336 already links to `/TSE-Capability-Statement.pdf`

### 5. Social Media URLs
- `src/components/Footer.jsx` lines ~62, ~64: Facebook page URL, Instagram URL
- `src/pages/Contact.jsx` lines ~185, ~189: same

### 6. Email Address
- `src/components/Footer.jsx` line ~66: update `hello@seedxga.com` to your actual address

### 7. Email / Form Backend
All forms currently log to the browser console. Connect them to your backend:
- **Footer email capture**: `src/components/Footer.jsx` → `handleSubmit` function
- **Lattice waitlist**: `src/pages/Lattice.jsx` → `WaitlistForm` component
- **Partnership inquiry**: `src/pages/PartnerWithUs.jsx` → `InquiryForm` component
- **Contact form**: `src/pages/Contact.jsx` → `ContactForm` component

Recommended: Mailchimp (email capture), Airtable or Notion (inquiry forms), or a simple Netlify Forms setup if deploying to Netlify.

### 8. Roundtable Events
- `src/pages/Roundtables.jsx` — the `UPCOMING_EVENTS` array (line ~12) is empty by design (shows "no events" state)
- To add events: uncomment the example block and fill in each field
- To add past events: add entries to `PAST_EVENTS` array (line ~24)

---

## File Structure

```
seed-exchange/
├── public/                    # Static assets (drop logo.svg, PDF here)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx     # Fixed nav, mobile hamburger
│   │   └── Footer.jsx         # Footer with email capture
│   ├── hooks/
│   │   └── useScrollReveal.js # Intersection Observer animation hooks
│   ├── pages/
│   │   ├── Home.jsx           # Homepage
│   │   ├── About.jsx          # About / origin story
│   │   ├── HowWeWork.jsx      # Model explanation, two audiences
│   │   ├── PartnerWithUs.jsx  # NOFO priority page, $3,499 package
│   │   ├── Community.jsx      # Community Garden + The Bridge
│   │   ├── Lattice.jsx        # Platform preview, waitlist
│   │   ├── Roundtables.jsx    # Events page
│   │   └── Contact.jsx        # Contact + Calendly
│   ├── App.jsx                # Router setup
│   ├── main.jsx               # React entry point
│   └── index.css              # All styles (no framework)
├── index.html                 # Includes Google Fonts
├── vite.config.js
└── package.json
```

---

## Design System

**Colors**
- Teal (primary): `#1D9E75`
- Dark: `#1A1A1A`
- Dark BG (hero): `#0a1510`
- Body text: `#444444`
- Light background: `#F0F7F7`

**Fonts** (loaded from Google Fonts in `index.html`)
- Headlines: Cormorant Garamond (300, 400, 600)
- Body: DM Sans (300, 400, 500)

**CSS Variables** — all defined in `src/index.css` `:root` block. Edit there to update globally.

---

## Deployment

The site builds to static files — deploy anywhere:

**Netlify (recommended)**
```bash
npm run build
# drag /dist folder to Netlify, or connect your Git repo
# build command: npm run build
# publish directory: dist
```

**Vercel**
```bash
npm run build
# connect repo to Vercel, settings auto-detected for Vite
```

**Custom server**
```bash
npm run build
# serve the /dist folder from any static file host
```

---

## Adding Content Over Time

- **New events**: Edit `UPCOMING_EVENTS` in `Roundtables.jsx`
- **New blog/news**: Add a `News.jsx` page and a route in `App.jsx`
- **Team bios**: Add a section to `About.jsx`
- **Testimonials/case studies**: Add a `Stories.jsx` page
- **Logo update**: Drop new file in `/public`, update `<img src>` in Nav + Footer

---

*The Seed Exchange — seedxga.com — Visibility. Access. Resolution.*
