# ONYIIX Studio | Design • Build • Deliver

> **Official Production Domain**: [https://onyiix.com/](https://onyiix.com/)  
> **Headquarters**: Bengaluru, Karnataka, India  
> **Global Reach**: India • United States • United Kingdom • European Union • UAE • Singapore • Canada • Worldwide  
> **Founders**: Mohammed Maaz A (Co-Founder & Principal Architect) & Suman Kumar Singh (Co-Founder & Systems Engineer)

---

## 1. Executive Summary & Studio Philosophy

**ONYIIX** is an elite, founder-led digital product engineering and design studio headquartered in Bengaluru, India. We architect and build high-performance web applications, multi-tenant SaaS platforms, autonomous AI workflows, and bespoke digital operating systems for ambitious startups, enterprises, and high-growth teams across the globe.

### Business & Operating Principles
1. **Small Team, Senior Thinking, Serious Systems**: Clients work directly with senior architects and engineers from discovery call to production deployment. Zero account manager dilution, zero junior handoffs.
2. **Code Ownership & Zero Vendor Lock-in**: Full intellectual property (IP), source code, design files, and deployment automation scripts belong 100% to the client upon milestone settlement.
3. **Speed to Production**: High-converting web experiences delivered in 1–3 weeks; production-grade SaaS MVPs and AI workflows engineered in 3–6+ weeks with phased weekly releases.
4. **Post-Launch Warranty**: Every project includes 30 days of complimentary technical oversight and defect warranty.

---

## 2. Codebase Architecture & File Structure

The repository has been restructured and purged of all obsolete legacy iterations (45 unreferenced files removed), resulting in a lean, high-velocity codebase with 100% active, necessary components.

```
Onyiix-Website-main/
├── .agents/                                # AI agent workspace skills & configurations
│   └── skills/
│       └── agentation-feedback/            # Agentation visual feedback engine & prompt skill
│           ├── agents/openai.yaml          # AI model persona definition
│           └── SKILL.md                    # Visual feedback interpretation instructions
├── public/                                 # Static production assets served at root
│   ├── brands/                             # Partner & technology logos
│   │   ├── antigravity.png
│   │   ├── chatgpt.png
│   │   └── openai-wordmark.webp
│   ├── founders/                           # High-res founder portraits
│   │   ├── maaz.png                        # Mohammed Maaz A
│   │   └── suman.png                       # Suman Kumar Singh
│   ├── journey/                            # Cinematic Bengaluru auto journey assets
│   │   ├── asme-auto-founders.png          # Auto journey hero illustration
│   │   ├── destination-ai-automation.jpg   # Destination stop: AI Workflows
│   │   ├── destination-digital-systems.jpg # Destination stop: Digital Systems
│   │   ├── destination-saas-platforms.jpg  # Destination stop: SaaS Platforms
│   │   └── destination-web-development.jpg # Destination stop: Web Development
│   ├── projects/                           # Case study screenshots & product assets
│   │   ├── primkart-brand.png              # Primkart Brand Identity
│   │   ├── primkart-operations.webp        # Primkart Operations Suite
│   │   └── primkart-storefront.webp        # Primkart Instant Storefront
│   ├── favicon.svg                         # Vector monogram browser icon
│   ├── llms.txt                            # AI crawler & LLM search engine knowledge file
│   ├── logo.jpg                            # High-res brand logo
│   ├── manifest.json                       # Web App Manifest (PWA, mobile SEO)
│   ├── og-image.jpg                        # Open Graph social share banner (1200x630)
│   ├── onyiix-logo-dark.png                # Dark variant official studio wordmark
│   ├── onyiix-logo-white.png               # Light variant official studio wordmark
│   ├── onyiix-logo.png                     # Standard transparent logo
│   ├── onyiix-x-metallic.png               # Metallic animated sheen layer
│   ├── onyiix-x-white.png                  # White vector X layer
│   ├── robots.txt                          # Crawler rules (Googlebot, Bing, GPTBot, Claude)
│   └── sitemap.xml                         # XML sitemap with image metadata for Google Indexing
├── src/                                    # Application source code
│   ├── components/                         # UI components & page views
│   │   ├── blocks/                         # Complex compound UI sections
│   │   │   ├── hero-parallax.tsx           # Parallax scrolling case studies grid
│   │   │   └── pricing.tsx                 # Tiered engagement pricing with confetti toggle
│   │   ├── ui/                             # Base design system primitives
│   │   │   ├── button.tsx                  # Accessible button with CVA variants
│   │   │   ├── hover-footer.tsx            # Fluid canvas footer gradient & text hover
│   │   │   ├── interactive-image-accordion.tsx # Service showcase accordion
│   │   │   ├── label.tsx                   # Accessible form field label
│   │   │   ├── switch.tsx                  # Radix-based interactive toggle switch
│   │   │   └── world-map.tsx               # Animated SVG world delivery map
│   │   ├── AboutPage.tsx                   # Dedicated /about route with founder bios
│   │   ├── AgentationDev.tsx               # Dev-only visual feedback annotation toolbar
│   │   ├── AutoJourneySection.tsx          # Interactive Bengaluru auto service journey
│   │   ├── CareersPage.tsx                 # Dedicated /careers route
│   │   ├── ContactModal.tsx                # Context-aware project inquiry popup modal
│   │   ├── ContactSection.tsx              # Primary on-page intake & inquiry form
│   │   ├── ContentProtection.tsx           # Production code/asset protection layer
│   │   ├── FieldTooltip.tsx                # Informational micro-tooltips for form fields
│   │   ├── GlobalDeliveryPage.tsx          # Dedicated /global route for remote clients
│   │   ├── HoverFooter.tsx                 # Global site footer with links & social handles
│   │   ├── NotFoundPage.tsx                # Styled 404 error page with return navigation
│   │   ├── OnyiixLogo.tsx                  # Responsive animated SVG brand logo
│   │   ├── OnyiixX.tsx                     # Signature metallic sheen accent symbol
│   │   ├── PrivacyPage.tsx                 # Dedicated /privacy compliance policy
│   │   ├── ProcessSection.tsx              # 4-stage engineering pipeline (Align->Launch)
│   │   ├── ScanningBracketHeading.tsx      # Cyberpunk bracket animation heading
│   │   ├── ServiceLandingPage.tsx          # Dynamic template for all 5 service landing pages
│   │   ├── SiteHeader.tsx                  # Sticky glassmorphism header with mobile menu
│   │   ├── SitemapPage.tsx                 # Dedicated /sitemap HTML navigation hub
│   │   ├── TermsPage.tsx                   # Dedicated /terms legal contract overview
│   │   ├── TestimonialsSection.tsx         # Verified client reviews and metrics
│   │   └── TrustAndFaqSection.tsx          # Accordion FAQ & warranty assurance
│   ├── lib/                                # Utility helpers
│   │   └── utils.ts                        # clsx + tailwind-merge (cn helper)
│   ├── App.tsx                             # Root routing, dynamic SEO tags, and page layout
│   ├── index.css                           # Tailwind CSS directives, fonts, and animations
│   ├── main.tsx                            # React 18 DOM mount point
│   └── vite-env.d.ts                       # Vite TypeScript environment typings
├── CODEBASE_ARCHITECTURE.md                # Comprehensive architectural report & audit
├── DESIGN_SYSTEM_MEMORY.md                 # Design engineering principles & motion tokens
├── index.html                              # Root HTML, canonical tags, OpenGraph, JSON-LD
├── package.json                            # Dependencies & build scripts
├── postcss.config.js                       # PostCSS plugins (Tailwind, Autoprefixer)
├── PRD_WEBSITE_STUDIO.md                   # Product Requirements Document & specifications
├── SEARCH_CONSOLE_AND_SEO_GUIDE.md         # Senior Digital Marketer Search Console manual
├── tailwind.config.js                      # Tailwind theme extensions, colors & animations
├── tsconfig.json                           # TypeScript compiler configuration
├── tsconfig.node.json                      # Vite Node TypeScript configuration
└── vercel.json                             # Vercel SPA routing rewrite configuration
```

---

## 3. Senior UI/UX & Design Engineering System

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, following modern design engineering principles:

- **Curated Color Palette**:
  - `Primary Surface`: `#0B1020` (Deep Space Obsidian)
  - `Brand Accent`: `#2563EB` (Electric Royal Blue) with `#1D4ED8` hover states
  - `Ambient Canvas`: Crisp `#FFFFFF` and soft `#F4F7FC` contrast plates
  - `Text System`: Slate `#0B1020` (Headings) and `#475569` (Body reading contrast >= 4.5:1)
- **Modern Typography**:
  - `Plus Jakarta Sans`: High-legibility geometric UI typography
  - `Baloo Tamma 2` & `Kalam`: Heritage Bengaluru craftsmanship accent fonts
- **Fluid Motion Engineering**:
  - Spring physics (`stiffness: 180, damping: 24`) for natural momentum without rubbery overshoot
  - GPU-accelerated transforms (`transform`, `opacity`) preventing layout reflow
  - Respects user accessibility preferences (`prefers-reduced-motion`)

---

## 4. Enterprise SEO, GEO & Google Search Console Architecture

The website is engineered for maximum search visibility, rich snippets, and international geotargeting under **`https://onyiix.com/`**.

### Key SEO & GEO Implementations:
1. **Google Search Console Readiness**:
   - Verification placeholder embedded directly in `<head>` of [index.html](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/index.html) (`<meta name="google-site-verification" content="..." />`).
   - Clean XML Sitemap located at [public/sitemap.xml](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/public/sitemap.xml) with Google Image extensions.
   - Compliant [public/robots.txt](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/public/robots.txt) allowing Googlebot, Bingbot, and modern AI engines (GPTBot, ClaudeBot, PerplexityBot).
2. **Schema.org Rich Results Graph (JSON-LD)**:
   - `Organization`: Studio identity, founders, contact email, worldwide service regions.
   - `WebSite`: Primary domain with Sitelinks SearchBox definition.
   - `ProfessionalService` (LocalBusiness): Bengaluru geographic coordinates (`12.9716, 77.5946`), business hours, and service radius.
   - `Service`: Dedicated structured entities for Web Development, SaaS Platforms, AI Workflows, Digital Marketing, and Digital Systems.
   - `FAQPage`: On-page questions and answers eligible for Google SERP expandable FAQ accordion snippets.
   - `BreadcrumbList`: Structured navigation pathing for search result URLs.
3. **Social & Sharing Protocol**:
   - Complete **OpenGraph (OG)** tags (`og:title`, `og:description`, `og:image`, `og:image:width`, `og:image:height`, `og:url`, `og:locale`).
   - Complete **Twitter Cards** (`summary_large_image`, `twitter:image`).
4. **Geotargeting Tags**:
   - `geo.region: IN-KA`
   - `geo.placename: Bengaluru`
   - `geo.position: 12.9716;77.5946`
   - `ICBM: 12.9716, 77.5946`
5. **AI Crawler Knowledge Layer**:
   - [public/llms.txt](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/public/llms.txt) provides LLM search engines (ChatGPT Search, Perplexity, Gemini) structured summaries to cite ONYIIX for software and AI inquiries.

---

## 5. Visual Testing with Agentation

The project includes **Agentation** (`agentation@^3.0.2`), an interactive DOM visual feedback overlay:

- **Activation**: Automatically mounts when running in development mode (`npm run dev`).
- **Capabilities**:
  - Click any button, card, or typography block to inspect exact CSS selectors.
  - Highlight copy or drag bounding boxes over layouts.
  - Export structured markdown feedback containing selectors and coordinates.
- **Workflow**:
  - Paste the exported Agentation markdown into Antigravity IDE. The `agentation-feedback` skill in `.agents/skills/` translates the annotations into targeted component modifications.

---

## 6. Local Development & Verification

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
# -> Opens on http://localhost:5173/
```

### Production Build & Validation

```bash
# Run TypeScript typecheck and Vite production build
npm run build

# Preview local production bundle
npm run preview
```

### Build Performance
- **CSS Bundle**: ~65.98 kB (gzipped ~12.69 kB) — down 35% after dead code removal
- **JS Bundle**: Code-split, production-minified
- **Compile Time**: ~7–8s clean build with 0 warnings or errors

---

## 7. Documentation & Reference Links

- [SEARCH_CONSOLE_AND_SEO_GUIDE.md](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/SEARCH_CONSOLE_AND_SEO_GUIDE.md) — Step-by-step Search Console verification, indexing, and CTR growth guide.
- [CODEBASE_ARCHITECTURE.md](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/CODEBASE_ARCHITECTURE.md) — Architectural breakdown, component interactions, and dead code audit log.
- [DESIGN_SYSTEM_MEMORY.md](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/DESIGN_SYSTEM_MEMORY.md) — Motion tokens and visual craft standards.
