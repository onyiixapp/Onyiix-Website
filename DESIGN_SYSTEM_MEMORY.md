# 🧠 Senior Design Engineering & UX Memory Bank

> **Synthesized Knowledge Base**: Emil Kowalski (`animations.dev`), Impeccable (`impeccable.style`), and Taste-Skill v2 (`taste-skill`).

---

## 1. 🎭 Emil Kowalski Design Engineering & Fluid Motion Principles

### Core Motion Philosophy
1. **Purpose-Driven Animation**: Animate only to clarify spatial relationships, provide tangible physical feedback, or guide user attention. Never animate solely for decoration.
2. **Spring Physics & Natural Easing**:
   - Prefer spring physics (`stiffness: 300, damping: 30` for snappy micro-interactions; `stiffness: 180, damping: 24` for sheets/modals).
   - Use cubic-bezier curves with high initial acceleration and smooth deceleration (`cubic-bezier(0.16, 1, 0.3, 1)` / Apple standard curve).
   - Avoid dated rubbery bounce or elastic overshoots unless explicitly requested for a playful micro-interaction.
3. **GPU-Accelerated Properties**: Only animate `transform` (`scale`, `translate3d`, `rotate`) and `opacity`. Avoid animating `height`, `width`, `top`, `left`, `margin`, or `padding` directly to prevent layout thrashing and maintain 120fps fluid motion.
4. **Spatial & Dimensional Consistency**: Modals and sheets must appear to originate from their trigger context or respect screen boundaries with clear z-index layering.

---

## 2. 🛡️ Impeccable Design System & 59 Anti-Slop Detector Rules

### Anti-Patterns to Strictly Avoid
* ❌ **Overused Standard Fonts**: Avoid uncurated Arial or default Inter. Use curated editorial typography (`General Sans`, `Space Grotesk`, `Plus Jakarta Sans`, `IBM Plex Mono`).
* ❌ **Untinted Pure Blacks/Grays**: Always tint dark surfaces with the ambient palette (`#050711` or `#121316` rather than `#000000`).
* ❌ **Gray-on-Color or Gray-on-Dark Flaws**: Ensure contrast ratio is at least 4.5:1 for normal text and 3:1 for large display text (WCAG AAA/AA).
* ❌ **Nested Card Syndrome**: Avoid wrapping cards inside cards inside cards. Use subtle border rules, background contrast, or whitespace separation instead.
* ❌ **Generic Purple-Blue Gradients & Slop**: Use strategic, restrained color palettes with high-contrast accent plates (e.g. `#EEA22A` amber plates on `#FAF8F3` warm ivory).

### 23 Impeccable Design Commands Vocabulary
1. `/impeccable craft`: End-to-end shape and high-fidelity build.
2. `/impeccable critique`: UX design review for hierarchy, clarity, and resonance.
3. `/impeccable audit`: Technical quality inspection (a11y, responsiveness, 120fps performance).
4. `/impeccable polish`: Micro-interaction refinements, border alignments, and token consistency.
5. `/impeccable bolder`: Amplify visual contrast, typographic scale, and impactful accents.
6. `/impeccable quieter`: Tone down noise, increase whitespace, and distill visual calm.
7. `/impeccable distill`: Strip unnecessary visual clutter to pure functional essence.
8. `/impeccable harden`: Edge-case defense, error states, empty states, and long-string truncation.
9. `/impeccable delight`: Subtle, satisfying moments of tactile feedback.

---

## 3. 🎛️ Taste-Skill v2 Control Dials & Architecture

| Dial | Range | Setting for Veltrix | Purpose |
| :--- | :---: | :---: | :--- |
| **`DESIGN_VARIANCE`** | 1 – 10 | **8 / 10** | Asymmetric editorial layout, ruled workbench canvas, structured typography |
| **`MOTION_INTENSITY`** | 1 – 10 | **7 / 10** | Spring-physics hover transforms, animated founder cursor, live prompt streaming |
| **`VISUAL_DENSITY`** | 1 – 10 | **6 / 10** | Generous editorial whitespace, crisp hairline borders, scannable technical cards |

### Full-Output & Zero-Placeholder Policy
- Every component is built completely with full logic, error resilience, zero placeholder `// TODO` comments, and zero truncated outputs.
