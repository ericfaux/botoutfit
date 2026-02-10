# BotOutfit Website Redesign Plan

## Current State
The site has solid bones — Next.js 16, Tailwind CSS 4, Framer Motion, good routing structure, product/blog data — but visually it's text-heavy with minimal visual interest. Every page is essentially white text on black with cyan accents and basic gradient blobs. Product images are just concentric circles. There are no hero visuals, no brand imagery, no visual storytelling.

## Design Direction
Drawing from the three reference images (FutureAI's metallic 3D hero + warm glows, RevGuard's earth-from-space drama + green energy lines, and the architecture site's clean image-text splits), the redesign targets a **premium futuristic aesthetic**: dark backgrounds with rich ambient lighting, bold hero visuals, glassmorphism cards, animated elements that feel alive, and strong visual hierarchy.

---

## Implementation Steps

### 1. Global Style & Typography Overhaul (`globals.css`, `tailwind.config.ts`)
- Add CSS custom properties for an expanded palette: primary cyan, secondary purple/violet accent, warm amber accent for highlights
- Add custom CSS animations: `float`, `pulse-glow`, `scan-line`, `shimmer`, `rotate-slow`
- Add an animated gradient mesh background utility
- Add a holographic/iridescent shimmer effect for premium badges
- Add particle dot background pattern as a reusable CSS class
- Import a display/heading font (Space Grotesk or Orbitron via Google Fonts) alongside Inter for body text

### 2. New Component: `HeroVisual.tsx` — Animated Robot Silhouette
- Build a pure CSS/SVG animated geometric robot figure as the centerpiece hero visual
- Layered glowing outlines with scanning animation lines
- Orbiting accent dots and rings
- Subtle floating animation on the whole assembly
- This replaces the "wall of text" hero with an actual visual focal point (inspired by FutureAI's metallic 3D object)

### 3. New Component: `ParticleField.tsx` — Ambient Background
- Create a CSS-only animated particle field (floating dots with varied sizes and animation delays)
- Used as a background layer on key sections (hero, CTA)
- Gives depth and movement without heavy JS

### 4. New Component: `AnimatedCounter.tsx` — Number Animations
- Animate stat numbers counting up when they scroll into view
- Used in the hero stats and market stats bar
- Adds polish to the data-heavy sections

### 5. New Component: `GlowCard.tsx` — Reusable Premium Card
- Glassmorphism card with animated border gradient on hover
- Mouse-tracking spotlight effect (inner glow follows cursor)
- Used for collections, features, product cards

### 6. New Component: `RobotModelShowcase.tsx` — Interactive Model Display
- New homepage section showcasing compatible robot models (Tesla Optimus, Figure 01, Unitree G1)
- Each model gets a stylized SVG/CSS silhouette with glow effects
- Specs displayed alongside (height, weight, form factor)
- Hover to highlight, animated transitions between models
- Inspired by RevGuard's partner logos bar but more visual/interactive

### 7. New Component: `ProcessSteps.tsx` — "How It Works" Section
- 3-step horizontal process: Browse → Select Model → Get Outfitted
- Connected by animated line/beam
- Each step has an icon, title, description
- Animated sequentially on scroll

### 8. Homepage Redesign (`app/page.tsx`)
Major restructure of the homepage with new sections in this order:
1. **Hero** — Bold headline + HeroVisual robot figure + ParticleField background + animated badge + CTA buttons + stats
2. **Trusted By / Compatible Models** — RobotModelShowcase (logos + silhouettes of supported robots)
3. **How It Works** — ProcessSteps component (3-step flow)
4. **Featured Products** — 3 highlighted products with new GlowCard design + "View All" link
5. **Market Opportunity** — Redesigned stats bar with AnimatedCounter + ambient glow
6. **Collections Grid** — Redesigned with GlowCard + category visuals
7. **Testimonials** — Already exists, enhance with new card style
8. **CTA / Waitlist** — More dramatic with ParticleField background + larger form

### 9. Navigation Enhancement (`Navigation.tsx`)
- Add animated logo with subtle glow pulse
- Add a gradient shimmer underline effect on active link (replacing plain bar)
- Refine "Join Waitlist" button with animated glow border
- Add subtle nav background gradient that shifts on scroll

### 10. Product Card Visual Overhaul (`shop/page.tsx`)
- Replace the concentric circle placeholders with category-specific abstract visuals:
  - Outfits: layered fabric-like gradient waves
  - Accessories: geometric pattern
  - Protective: shield/hexagon shape
  - Care: droplet/sparkle pattern
- Add 3D tilt effect on hover (CSS perspective transform)
- Add animated "NEW" or "PRE-ORDER" badges with shimmer

### 11. Footer Enhancement (`Footer.tsx`)
- Add a dramatic gradient horizon line at the top (inspired by RevGuard's green energy horizon)
- Add subtle animated dots/stars in the background
- Refine social link icons with actual SVG icons instead of colored dots

### 12. About Page Visual Upgrade (`about/page.tsx`)
- Add a timeline-style layout for "Our Story" with animated connecting line
- Add animated stat counters in the "Why Now" section
- Add icon/visual elements to the "What Makes Us Different" cards

### 13. Compatibility Page Enhancement (`compatibility/page.tsx`)
- Add stylized robot silhouettes for each model
- Add animated comparison view
- Improve the size chart with visual diagram

---

## Files Modified
- `app/globals.css` — Expanded animations, variables, utilities
- `tailwind.config.ts` — Extended theme colors, fonts
- `app/layout.tsx` — Add new font import
- `app/page.tsx` — Complete homepage redesign
- `app/components/Navigation.tsx` — Enhanced nav styling
- `app/components/Footer.tsx` — Visual upgrade
- `app/shop/page.tsx` — Product card overhaul
- `app/about/page.tsx` — Visual upgrade

## New Files
- `app/components/HeroVisual.tsx`
- `app/components/ParticleField.tsx`
- `app/components/AnimatedCounter.tsx`
- `app/components/GlowCard.tsx`
- `app/components/RobotModelShowcase.tsx`
- `app/components/ProcessSteps.tsx`

## Not Changed (out of scope)
- Product data / blog data (content stays the same)
- API routes
- SEO metadata
- Blog pages (lower priority, can be a follow-up)
- Shop detail pages (lower priority)
