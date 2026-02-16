# Harlowe Enterprises Website

Professional, high-trust website for Executive Diagnostic Intelligence services.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: Netlify Forms
- **Hosting**: Ready for Netlify deployment

## Getting Started

### Prerequisites

- Node.js 18.17+ (with npm)
- Git

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Home page
│   ├── what-we-do/         # Service description
│   ├── deliverables/       # What clients receive
│   ├── who-its-for/        # Use cases & target buyers
│   ├── how-it-works/       # Process & methodology
│   ├── proof/              # Case studies & examples
│   ├── faq/                # FAQ
│   ├── contact/            # Contact form (Netlify Forms)
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms & disclaimer
│   └── globals.css         # Global styles & Tailwind imports
├── components/
│   ├── Navigation.tsx      # Header navigation
│   └── Footer.tsx          # Footer
└── public/                 # Static assets (favicon, etc.)

tailwind.config.ts          # Tailwind CSS configuration
tsconfig.json              # TypeScript configuration
next.config.ts             # Next.js configuration
package.json               # Dependencies
```

## Pages

- **Home** - Hero, value proposition, process overview, CTA
- **What We Do** - Service definition, what it is/isn't, outcomes
- **Deliverables** - Executive Brief, Decision Matrix, Slide Deck, add-ons
- **Who It's For** - Use cases, target customers, when it's not a fit
- **How It Works** - 4-step process, timeline, inputs needed
- **Proof** - Sanitized case studies with patterns & risks
- **FAQ** - 15+ common questions with clear answers
- **Contact** - Netlify form with validation, calendar link placeholder
- **Privacy Policy** - Data handling, retention, rights
- **Terms & Disclaimer** - Legal disclaimers, liability limitations

## Features

✓ Mobile-responsive design  
✓ Fast performance (Lighthouse optimized)  
✓ Accessible HTML5 semantics  
✓ Netlify Forms integration (spam protection ready)  
✓ Client-side form validation  
✓ Minimal, premium aesthetic (calm, professional)  
✓ No external dependencies beyond Next.js/Tailwind  
✓ SEO-friendly with proper meta tags  
✓ Deep blue accent color (#1e3a5f)  
✓ Comprehensive brand positioning copy  

## Styling

Colors:
- Primary accent: `#1e3a5f` (deep blue)
- Dark: `#1a1a1a`
- Light bg: `#f8f8f8`

Global component classes available in `globals.css`:
- `.container-custom` - Responsive container
- `.section-spacing` - Standard vertical spacing
- `.heading-lg`, `.heading-md`, `.heading-sm` - Typography
- `.btn-primary`, `.btn-secondary`, `.btn-tertiary` - Buttons
- `.text-accent` - Accent color text
- `.divider` - Section separator

## Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Enable Netlify Forms in Site Settings
6. Add environment variables if needed

### Form Handling

Contact form uses Netlify Forms. To enable:

1. Deploy to Netlify
2. Go to Site Settings → Forms
3. Enable form spam filtering (optional: add reCAPTCHA)
4. Form submissions will appear in Forms dashboard

## Customization

### Update Contact Email

Search for `info@harloweinvest.com` and replace with your email throughout:
- `src/app/contact/page.tsx`
- `src/components/Footer.tsx`
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`

### Update Phone Number

Search for `832-319-9795` and replace throughout:
- `src/app/contact/page.tsx`
- `src/components/Footer.tsx`
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`

### Add Calendar Link

Update `src/app/contact/page.tsx`:
```jsx
<a href="https://cal.com/your-calendar-link" className="...">
```

Note: Currently uses `href="#schedule"` as placeholder.

### Add Logo/Branding

Text wordmark used in `src/components/Navigation.tsx`:
```jsx
Harlowe<span className="text-harlowe-blue">.</span>
```

To add image logo, update Navigation component with `<Image />` component.

## Performance

- Static HTML generation for all pages (fast builds)
- CSS is minified and tree-shaken by Tailwind
- No JavaScript bloat (minimal client interactivity)
- Contact form uses plain HTML + Netlify (no external JS libraries)
- Optimized for Core Web Vitals

## Security

- Content Security Policy ready (via Netlify headers)
- No third-party tracking beyond basic analytics
- Netlify spam filtering available for forms
- HTTPS by default on Netlify
- SQL injection not applicable (static site)

## SEO

All pages include:
- Proper meta tags (title, description)
- Open Graph tags for social sharing
- Semantic HTML5 (nav, section, article, etc.)
- Mobile-responsive viewport meta tag
- No noindex tags (all pages indexable)

Suggested keywords covered in content:
- operational diagnostic
- executive clarity
- decision rights matrix
- escalation bottleneck
- organizational friction
- process breakdown
- governance and risk

## Support & Maintenance

- Update content in individual page files (`src/app/[page]/page.tsx`)
- Rebuild and test locally with `npm run dev`
- Push to GitHub to trigger Netlify redeploy
- Check Netlify Analytics & Forms dashboard for submissions

## Next Steps (Post-Launch)

- [ ] Set up Calendly/Cal.com account, update calendar link in contact page
- [ ] Add logo image (replace text wordmark if desired)
- [ ] Add professional headshot to about section (optional)
- [ ] Set up email forwarding from Netlify forms
- [ ] Add analytics (Plausible/Fathom recommended for privacy-first tracking)
- [ ] Create case study download landing page
- [ ] Monitor Lighthouse scores in CI/CD
- [ ] A/B test CTA copy if desired

## License

© 2026 HARLOWE Enterprises, LLC. All rights reserved.
