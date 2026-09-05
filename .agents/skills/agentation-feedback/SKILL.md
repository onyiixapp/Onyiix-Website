---
name: agentation-feedback
description: Visual feedback interpreter and implementation engine for Agentation annotations on ONYIIX. Triggers when the user provides Agentation markdown, CSS selectors, element bounding boxes, selected text, animation timestamps, or in-browser visual feedback notes.
---

# Agentation Visual Feedback Skill for ONYIIX

Use Agentation's structured visual annotations as direct, pinpoint instructions for frontend styling, layout adjustments, typography, interactions, and bug fixes across the ONYIIX platform.

---

## 1. Overview & Tooling Architecture

[Agentation](https://github.com/benjitaylor/agentation) is an in-browser visual feedback tool. During development (`npm run dev`), Agentation provides a persistent floating toolbar that allows the team to:
- **Click to Annotate**: Select any DOM element with automatic CSS selector and element path identification.
- **Text Selection**: Highlight specific text spans to leave copy, font, or styling notes.
- **Multi-Select & Area Selection**: Drag bounding boxes over UI sections, layouts, or empty space.
- **Animation Pause**: Freeze CSS/JS transitions and video states to annotate mid-animation frames.
- **Copy Structured Output**: Export formatted markdown containing exact selectors, coordinates, class lists, and feedback.

In ONYIIX, Agentation is mounted via `src/components/AgentationDev.tsx` and conditionally enabled in development mode (`import.meta.env.DEV`) in `src/App.tsx` without impacting production bundles.

---

## 2. Parsing Agentation Structured Output

When the user pastes Agentation output, parse each entry into:
1. **Target Selector / Path**: e.g., `body > div#root > div > main > section#projects` or `.contact-form > button`
2. **Target Classes**: e.g., `font-medium text-slate-950 hover:text-blue-600`
3. **Target Text / Context**: e.g., `selectedText: "Scope this engagement"`, `nearbyText: "Choose the right starting lane"`
4. **Bounding Box / Position**: Coordinates (`x`, `y`, `width`, `height`) for alignment, padding, margin, or overlap issues.
5. **User Comment / Intent**: The exact feedback (e.g. "Increase padding to 24px", "Make active tab blue", "Fix mobile wrap").

### Typical Agentation Markdown Structure
```markdown
### 1. Button (`button.pricing-cta`)
- **Selector**: `#root > div > main > section#packages > div > div > button`
- **Classes**: `button-primary text-white bg-blue-600 hover:bg-blue-700`
- **Text**: `Scope this engagement`
- **Position**: `{ x: 340, y: 1240, width: 280, height: 48 }`
- **Feedback**: Contrast on hover should transition smoothly with 200ms ease.
```

---

## 3. Code Location & Component Mapping

Agentation provides browser runtime DOM selectors. Match these selectors to source files using `grep_search`:

1. **Locate Source Component**:
   - Navigation & Header: `src/components/SiteHeader.tsx`
   - Hero & Cinematic Bengaluru Auto Journey: `src/components/AutoJourneySection.tsx`
   - Services Accordion: `src/components/ui/interactive-image-accordion.tsx`
   - Case Studies / Projects Parallax: `src/components/blocks/hero-parallax.tsx`
   - World Map & Global Reach: `src/components/ui/world-map.tsx`
   - Testimonials: `src/components/TestimonialsSection.tsx`
   - Engineering Process: `src/components/ProcessSection.tsx`
   - Pricing Cards: `src/components/blocks/pricing.tsx`
   - Trust & FAQ: `src/components/TrustAndFaqSection.tsx`
   - Contact Form & Lead Intake: `src/components/ContactSection.tsx`, `src/components/ContactModal.tsx`
   - Footer: `src/components/HoverFooter.tsx`, `src/components/ui/hover-footer.tsx`
   - Subpages: `AboutPage.tsx`, `CareersPage.tsx`, `ServiceLandingPage.tsx`, `GlobalDeliveryPage.tsx`, `TermsPage.tsx`, `PrivacyPage.tsx`, `SitemapPage.tsx`
2. **Search By Specific Anchors**:
   - Grep for distinctive CSS classes, element IDs (`#projects`, `#packages`, `#contact`), or exact button labels.
3. **Verify DOM Hierarchy**:
   - Confirm the parent element matches the nesting in the annotation before modifying styles.

---

## 4. Implementation Guidelines

- **Adhere to the ONYIIX Design System**:
  - Primary Accent: Electric Blue `#2563EB` / `#1D4ED8`.
  - Surface Neutral: Deep Obsidian `#0B1020` on light background `#FFFFFF` and subtle slate `#F4F7FC`.
  - Typography: Plus Jakarta Sans for UI body, Baloo Tamma 2 / Kalam for founder branding accents.
  - Border radii: `rounded-2xl` (16px) or `rounded-[1.7rem]` (24-28px).
- **Smooth Animation Standards**:
  - Prefer spring physics (`stiffness: 180, damping: 24`) and GPU-accelerated transforms (`transform`, `opacity`).
  - Use `framer-motion` for transitions.
- **Strictly Preserve Working Features**:
  - Never disrupt existing form submissions, modal flows, or responsive layout boundaries.

---

## 5. Verification Protocol

After implementing changes requested in Agentation annotations:
1. Run `npm run build` to verify TypeScript types and Vite bundling.
2. Check `http://localhost:5173/` to confirm visual changes and ensure no console errors.
3. Report which annotations were addressed with a concise breakdown.
