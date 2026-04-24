# ROCK AGRI — Marketing Website

## Original Problem Statement
Build a company website for ROCK AGRI using content extracted from two Word
documents (`website for rapeseeds.docx` and `WEBSITE CHANGES FILE..docx`).
The site showcases the company's agro-export business (spices, oil seeds, beans,
animal feed) and must include a sitewide WhatsApp button that redirects to the
owner's number (+91 9913404650).

## Target Users
- International B2B buyers & importers (Middle East, Africa, Asia, Europe)
- Food-processing companies, feed manufacturers, agro traders
- Existing clients looking for contact / catalog references

## Core Requirements (static)
- Multi-page React site: Home · About · Products · Product detail · Contact
- 37 products spread across 4 categories:
  - Animal Feed (5)
  - Spices (13)
  - Oil Seeds (7)
  - Beans & Pulses (12)
- Each product: name, image, description, specifications table, applications
- Contact page with inquiry form → stores in MongoDB + opens `mailto:info@rockagri.in`
- Google Maps embed of the Rajkot office address
- Floating WhatsApp FAB (every page) → `wa.me/919913404650`
- Premium Agro-Industrial visual design (earthy greens + harvest gold)

## Tech Stack
- Frontend: React 19 + React Router 7 + Tailwind CSS + lucide-react icons
- Backend: FastAPI + Motor (MongoDB)
- Fonts: Cormorant Garamond (display) + Manrope (body)

## What's Been Implemented (2026-04-24)
- Full content imported verbatim from provided Word docs
- All 37 product images copied to `/app/frontend/public/images/products/`
  and mapped to their product entries in `/src/data/products.js`
- Company logo (`/images/brand/logo.jpeg`) + hero background
  (`/images/brand/hero-bg.jpeg`) placed
- Home page: hero, welcome, 4 category cards, featured products, Why Us (6),
  5-step process, CTA strip
- About page: story, Mission, Vision, values strip, contact CTA
- Products listing page with All/Category tabs + individual category routes
  (`/products`, `/products/:categorySlug`)
- Product detail page (`/product/:slug`) with description, specs table,
  applications block, WhatsApp enquire button, related products
- Contact page with inquiry form, full address, Google Maps iframe, phone/email
- Backend endpoints:
  - `GET /api/`       service status
  - `GET /api/health` DB health-check
  - `POST /api/inquiries` create inquiry (name/email/phone/country/product/message)
  - `GET  /api/inquiries` list inquiries (admin-style, newest first)
- Floating WhatsApp FAB component rendered globally
- Full test suite: pytest backend + Playwright-based frontend E2E,
  **100% pass rate** (see `/app/test_reports/iteration_1.json`)

## Test Credentials
N/A — no authentication in scope.

## Prioritized Backlog (not blocking MVP)
- **P1** Real email delivery (SendGrid/Resend) so inquiries land directly
  in `info@rockagri.in` without relying on the user's mail client
- **P1** Admin dashboard (login-protected) to view submitted inquiries
- **P2** Product search / filter on the Products page
- **P2** Multilingual support (Arabic/French) for Middle-East & Africa buyers
- **P2** Downloadable product-spec PDF per item
- **P3** SEO polish — per-page meta tags, sitemap, structured data for products
- **P3** Testimonials / client logos section on Home
- **P3** Blog/News section for market updates & trade news

## Open Files of Note
- `/app/frontend/src/data/products.js` — single source of truth for catalog + company info
- `/app/frontend/src/components/WhatsAppButton.jsx` — floating CTA
- `/app/backend/server.py` — Inquiry storage API
