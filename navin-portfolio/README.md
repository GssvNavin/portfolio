# Navin Gssv — Portfolio

A production-grade Next.js 14 portfolio for a Lead Data & AI Architect.

## Tech Stack

- **Next.js 14** — App Router, static export
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Framer Motion** — Page animations, scroll reveals, hover interactions
- **Lucide React** — Clean icon set

## Design

- **Color palette**: Deep blue (navy) → mid blue → sky accent
- **Typography**: DM Serif Display (headings) + DM Sans (body)
- **Visual features**: Animated orbs, glassmorphism cards, noise texture overlay, scroll-triggered FadeIn, floating elements, active nav tracking, parallax-style hero grid lines

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

This outputs a static site to the `out/` folder — ready to deploy to **Vercel**, **Netlify**, or any static host.

## Deploying to Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

## Project Structure

```
navin-portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata + fonts
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Design tokens, global styles
├── components/
│   ├── FadeIn.tsx        # Reusable scroll-reveal wrapper
│   ├── Navbar.tsx        # Sticky nav with active section tracking
│   ├── Hero.tsx          # Hero with animated bg + avatar upload
│   ├── About.tsx         # Bio + highlight cards
│   ├── Skills.tsx        # Skill categories grid
│   ├── Experience.tsx    # Animated timeline
│   ├── Projects.tsx      # Project cards with screenshot upload
│   ├── Articles.tsx      # Medium articles on dark bg
│   ├── Certifications.tsx# Cert cards with placeholders
│   ├── Testimonials.tsx  # Testimonial cards
│   ├── Contact.tsx       # Contact links
│   └── Footer.tsx        # Footer
├── public/              # Static assets (add your favicon here)
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Personalisation Checklist

- [ ] Upload your headshot in the Hero section (click the avatar)
- [ ] Replace `[Company Name]` placeholders in Experience
- [ ] Replace `[20XX – 20XX]` with real dates
- [ ] Upload project screenshots in the Projects section
- [ ] Add real certification names and years in Certifications
- [ ] Replace testimonial placeholders with LinkedIn recommendations
- [ ] Update GitHub URL in Navbar, Hero, and Contact
- [ ] Add favicon to `/public/favicon.ico`
