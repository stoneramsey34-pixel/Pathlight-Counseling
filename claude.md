# CLAUDE.md — Pathlight Counseling Website Rebuild

## About This Practice
Pathlight Counseling is a private practice founded in 2017 in Woodstock, GA. They serve teens (13–17) and adults with individual counseling, Intensive Outpatient Programs (IOP), veteran services, residential substance abuse treatment, and Family Treatment Court support. Their teen IOP is the only one in Northern Georgia.

**Canonical domain**: pathlightga.org (use this exclusively — pathlightga.com must 301 redirect here, confirm with client before launch)
**Address**: 4390 Earney Road, Suite 140, Woodstock, GA 30188
**Phone**: 470-249-4499 (use this consistently on every page — confirm with client which is primary)
**Email**: help@pathlightga.com
**Service area**: Cherokee, North Fulton, Cobb, Forsyth, Dawson, and Pickens counties

---

## The Rebuild Goal
The current site has real depth — 10+ pages, individual therapist bios, real testimonials, genuine differentiators — but the design, navigation, and homepage don't communicate any of it. A competitor with half their services but a well-designed site is winning the Google click. This rebuild fixes that gap without inventing new content.

---

## Brand Identity

### The Name as a Design Story
"Pathlight" suggests a path forward and light breaking through darkness. Every design decision should echo this — warmth cutting through struggle, hope that feels grounded and real, not corporate or clinical.

### Color Palette
- Primary background: Soft off-white `#F7F4EF`
- Deep forest green: `#3B5345` (headings, nav, footer)
- Warm amber/gold: `#C98A3E` (CTA buttons, accents — used sparingly)
- Muted sage: `#7A9E89` (section accents, dividers)
- Warm sand: `#E8DDD0` (alternate section backgrounds, cards)
- Body text: `#2C2C2C` (never pure black)

Never use harsh white (#FFF), pure black (#000), cold blues, neon colors, or purple gradients.

### Typography
- Headings: Lora (Google Fonts) — warm, trustworthy serif
- Body: Nunito (Google Fonts) — friendly and readable, never sterile
- Body size: 17px minimum, line height 1.8
- Never use Inter, Roboto, Arial, or system fonts

### Logo
- Location: `/public/images/logo.png`
- Use as-is — never stretch, recolor, or add effects
- If unavailable, use "Pathlight Counseling" set in Lora as a text fallback
- Note for client: current logo may not match the warmth of the rebuilt site — a refresh is worth considering but is their decision

---

## Team (Individual Bio Pages Already Exist — Preserve and Improve)
- **Britt Parramore** LPC, CAADC — Clinical Director, 11 years in the field, working on doctorate, veteran mental health specialist
- **Judy Relf** CADCII, CCDS
- **Adam E. Miller** CIT, CARES, CPS-AD
- **Scott Brown** CPS
- **Dr. Michael Reece Carpenter** — EMDR Specialist

Key story: staff are in personal recovery themselves — this is a powerful, underused differentiator that should appear on the About page and each bio page.

---

## Tone & Copy

### Voice
- Warm, direct, deeply human
- Always speak to the person in pain, not about the practice
- Second person always: "you" and "your"
- CTAs feel like an open door: "Let's talk" / "Take the first step" / "Reach out today"
- Faith-integrated language is appropriate but never heavy-handed — the practice integrates clinical and Christian principles and clients can choose their preferred approach

### What to Avoid
- Jargon without explanation: "evidence-based modalities", "biopsychosocial"
- Clichés: "unlock your potential", "transformative journey", "holistic healing"
- Institutional or clinical tone — this is not a hospital

### Hero Headline Direction
Lead with the client's struggle, not the practice name. Examples:
- "You don't have to carry this alone."
- "Hope isn't far. Help is closer than you think."
- "A path forward starts with one conversation."

---

## Site Structure

### Navigation (Current nav hides too much — rebuild it)
Primary nav:
- Home
- About (Our Story + Meet the Team)
- Services (dropdown)
- Veterans
- Contact / Get Started

Services dropdown:
- Individual Counseling
- Intensive Outpatient (IOP)
- Teen Programs
- Residential Treatment (RSAT)
- Family Treatment Court
- EMDR Therapy

### Full Page Inventory (Preserve all existing pages)
| Page | URL | Status |
|------|-----|--------|
| Home | `/` | Rebuild completely |
| About | `/about-us/` | Improve copy and design |
| Our Specialists | `/our-specialties/` | Improve layout |
| Britt Parramore | `/james-britt-parramore/` | Improve design |
| Judy Relf | `/judy-relf/` | Improve design |
| Adam Miller | `/adam-e-miller/` | Improve design |
| Scott Brown | (confirm URL) | Improve design |
| Dr. Carpenter | `/dr-michael-r-carpenter/` | Improve design |
| Services | `/services/` | Improve design |
| Counseling | `/counseling/` | Improve design |
| Outpatient Treatment | `/outpatient-treatment/` | Improve design |
| Veterans Programs | `/veterans-programs/` | Improve design |
| Residential Treatment | `/residential-substance-treatment/` | Add to nav |
| Family Treatment Court | `/family-treatment-court/` | Add to nav |
| Community Partners | `/our-community-partners/` | Improve design |
| RSAT Blog Post | `/forsyth-county-rsat-program/` | Keep as news/blog post |
| Forms & Assistance | `/forms-and-assistance/` | Improve design |
| Contact | `/contact-us/` | Improve design |

---

## Key Differentiators (Must Appear on Homepage)
These three things competitors cannot match — they must be front and center, not buried:
1. **Only teen IOP in Northern Georgia** — 4-month ASAM Level 2.1 program for ages 13–17
2. **Free veteran services** — fully grant-funded through COSSUP, free to veterans and all family members
3. **Staff in personal recovery** — clinicians bring both credentials and lived experience

---

## Testimonials (Real ones — use them strategically)
Spread across the site, not buried on one page:
- "Pathlight gave me the tools and support to rebuild my life." — Jessica P.
- "Our family is stronger and happier thanks to the guidance we received here." — The Martinez Family
- "As a veteran, I felt truly understood and supported throughout my recovery." — David R.
- "I'm a single mother and I appreciate all the help my therapist gave." — Jamie W.
- "Pathlight's Family Treatment Court program helped us regain stability." — Angela S.
- "With the support from Pathlight, I now have a stronger relationship with my children." — Robert F.

Place at least two on the homepage. One on each service page where relevant.

---

## Insurance & Forms (Important Trust Signal)
Accepted insurance: Humana, Anthem BC/BS, Blue Cross/Blue Shield, Oxford, Cigna, United Healthcare, Out of Network
- IOP clients: direct to portal at crm.bestnotes.com
- Individual counseling clients: 4 downloadable forms, return to info@pathlightga.com
- Always include privacy reassurance near forms: "All consultations are 100% confidential and free"

---

## SEO Priorities
- Every page title should include location: e.g. "Teen IOP Woodstock GA | Pathlight Counseling"
- Meta descriptions speak to the client, not just list services
- Each specialty page targets a distinct local keyword naturally in the H1
- Add LocalBusiness and MedicalBusiness schema markup sitewide
- NAP must be identical on every page (confirm canonical phone number with client)
- Do not link to or reference pathlightga.com anywhere in the build

---

## Photography
- Replace all stock photos with warm lifestyle imagery: hands around a mug, open journal, sunlight through trees, a path in nature
- Real team headshots exist — use them prominently on About and bio pages
- No images of people visibly distressed, crying, or in clinical settings
- Placeholder source if needed: Unsplash (search: "therapy warmth nature calm woodstock georgia")
- All images must have descriptive alt text

---

## Always Include on Every Page
- Phone number (470-249-4499) visible in the nav
- "Free confidential consultation" messaging above the fold on homepage
- Privacy reassurance near every form
- A warm, low-pressure CTA at the bottom of every page

## Always Avoid
- Stock therapy clichés (crying person, hands on shoulders, forced smiles)
- Autoplay video or audio
- Pop-ups or exit-intent modals
- Cluttered layouts or walls of text
- Referencing or linking to pathlightga.com

---

## Accessibility
- Color contrast minimum 4.5:1 for all body text
- All images need descriptive alt text
- Keyboard navigable throughout
- Semantic HTML: `<main>`, `<section>`, `<nav>`, `<article>`
- All form inputs must have visible labels
- Respect `prefers-reduced-motion` for any animations
