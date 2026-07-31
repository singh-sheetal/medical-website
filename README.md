# MedicalOS — Website

AI-powered medical practice management platform website.  
Built with **Next.js 14** · **TypeScript** · **Tailwind CSS** · **Framer Motion**

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
medical-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── layout/             # Navbar, Footer, AnnouncementBar
│   ├── sections/           # Page sections (Hero, Features, FAQ…)
│   ├── ui/                 # Primitive reusable components
│   └── seo/                # JSON-LD, structured data
├── lib/                    # Data files, utilities, animation config
├── hooks/                  # Custom React hooks
├── types/                  # Shared TypeScript types
└── public/                 # Static assets
    ├── fonts/
    └── images/
```

---

## Development Roadmap

| Milestone | Status |
|---|---|
| M1 — Project scaffold & pipeline | ✅ Done |
| M2 — Design tokens & global styles | ⏳ Next |
| M3 — Base component library | 🔜 Pending |
| M4 — Navigation & announcement bar | 🔜 Pending |
| M5 — Footer | 🔜 Pending |
| M6 — Hero section | 🔜 Pending |
| M7 — Logo strip | 🔜 Pending |
| M8 — AI feature blocks | 🔜 Pending |
| M9 — Bento grid | 🔜 Pending |
| M10 — Testimonials carousel | 🔜 Pending |
| M11 — Persona tabs | 🔜 Pending |
| M12 — FAQ & CTA banner | 🔜 Pending |
| M13 — Scroll animations | 🔜 Pending |
| M14 — Responsive QA | 🔜 Pending |
| M15 — SEO & metadata | 🔜 Pending |
| M16 — Performance optimization | 🔜 Pending |
| M17 — Domain & analytics | 🔜 Pending |
| M18 — Launch review | 🔜 Pending |

---

## Deployment

This project is deployed on [Vercel](https://vercel.com).  
Every push to `main` triggers an automatic production deployment.  
Every pull request gets a unique preview URL.

---

## Environment Variables

See `.env.example` for all required variables.  
Never commit `.env.local` to git.
