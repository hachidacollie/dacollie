---
name: Hachidacollie
description: Mobile-first link-in-bio page for the Hachidacollie persona — a sunlit, sakura-dusted postcard, not a link aggregator template.
colors:
  ink: "#2A2566"
  ink-soft: "#4B4485"
  brown: "#8B4513"
  pink-petal: "#FFD6E8"
  pink-blush: "#FFB6C1"
  sky-pale: "#ADD8E6"
  sky-mist: "#C9E8F0"
  paper: "rgba(255, 255, 255, 0.55)"
  paper-strong: "rgba(255, 255, 255, 0.78)"
  accent-barq: "#FF7A59"
  accent-twitter: "#1DA1F2"
  accent-facebook: "#1877F2"
  accent-telegram: "#26A5E4"
typography:
  display:
    fontFamily: "MNSeafood, sans-serif"
    fontSize: "clamp(34px, 9vw, 48px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "1px"
  title:
    fontFamily: "MNSeafood, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "1px"
  label:
    fontFamily: "MNSeafood, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "4px"
  body:
    fontFamily: "naturaly, -apple-system, system-ui, sans-serif"
    fontSize: "clamp(15px, 4vw, 17px)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  bubble: "14px"
  pill: "16px"
  card: "20px"
  full: "999px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "28px"
components:
  pill-hero:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 12px"
  pill-hero-hover:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 12px"
  chip:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  bio-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px 20px"
---

# Design System: Hachidacollie

## 1. Overview

**Creative North Star: "The Postcard from Thailand"**

This page reads like a sun-warmed postcard pinned to a corkboard: a pastel sky bleeding from blue into pink, sakura petals drifting past, a round-framed photo of a happy collie that wags when you tap it. It is warm and a little nostalgic rather than loud or toy-like — the kind of page a friend would send you, not a SaaS product would ship. Every surface is soft: frosted glass cards, rounded pill buttons, ambient glows instead of hard shadows.

This system explicitly rejects the generic Linktree look: no flat stack of plain gray or white buttons, no interchangeable card-grid template, no corporate landing-page tropes (hero metrics, tiny uppercase eyebrows, gradient-text headlines). It also rejects toy-like "kawaii pocket pet" bounciness as the dominant register — motion here is gentle (idle bob, slow spin, soft pulse), not springy or hyperactive. The page is built mobile-first: every button, chip, and tap target is sized for a thumb, not scaled down from a desktop layout.

**Key Characteristics:**
- Pastel sky gradient (blue → pink) as the constant backdrop, never solid white or dark.
- Frosted-glass ("paper") surfaces for every card and pill — translucency over flat fill.
- Warm ink-purple text, never pure black or cool gray.
- Each social pill carries its own brand accent color, set apart by ambient colored glow rather than a border stripe.
- Motion is slow and breathing (4–12s loops), reserved for idle states; taps trigger quick, deliberate feedback (bark, pop, paw stamp), not bounce-everywhere choreography.

## 2. Colors

A pastel sky-to-petal gradient backdrop carries the page; ink-purple text and a warm brown sit on top for legibility and a handwritten feel.

### Primary
- **Petal Pink** (#FFD6E8): the gradient's warm end, dominant in the lower half of the backdrop and in the pfp ring/glow.
- **Blush Pink** (#FFB6C1): secondary petal tone, used in the sakura canvas and pfp ring.

### Secondary
- **Pale Sky** (#ADD8E6): the gradient's cool start, top of the backdrop.
- **Misty Sky** (#C9E8F0): gradient midpoint, softens the blue-to-pink transition.

### Tertiary
- **Barq Coral** (#FF7A59), **Twitter Blue** (#1DA1F2), **Facebook Blue** (#1877F2), **Telegram Sky** (#26A5E4): one accent per social pill, used only as that pill's `--accent` (background tint, border, icon color, glow). Never used outside its own pill.

### Neutral
- **Ink Purple** (#2A2566): primary text color — headings, body copy. Warm-dark, never pure black.
- **Soft Ink** (#4B4485): secondary text — subtitle, section labels, pill sub-text. Slightly receded from Ink Purple.
- **Saddle Brown** (#8B4513): accent ink for emphasis (bold text in bio, speech-bubble border/text, paw-print fill). The "handwritten" color.
- **Frosted Paper** (rgba(255,255,255,0.55)): translucent surface for the bio card.
- **Frosted Paper Strong** (rgba(255,255,255,0.78)): translucent surface for chips and pills, slightly more opaque for legibility over busy backdrop.

### Named Rules
**The One Accent Per Pill Rule.** Each social pill owns exactly one brand accent color (`--accent`), expressed consistently as background tint, border, icon color, and glow. Accents never bleed into shared chrome (page background, bio card, chips stay neutral ink/paper).

## 3. Typography

**Display Font:** MNSeafood (with sans-serif fallback)
**Body Font:** naturaly (with -apple-system, system-ui, sans-serif fallback)

**Character:** MNSeafood is a rounded, hand-drawn display face used sparingly for moments that should feel personal and playful (the name, pill titles, section labels). naturaly is a softer, friendlier body face that keeps paragraphs readable without feeling corporate.

### Hierarchy
- **Display** (400, `clamp(34px, 9vw, 48px)`, line-height 1): the page title "Hachidacollie!" — outlined in brown, letter-by-letter bounce animation, one per page.
- **Title** (400, 20px, line-height 1.1): pill hero titles ("Barq", "Twitter", etc.).
- **Label** (400, 16px, line-height 1.2, 4px tracking, uppercase): the "find me" section label — the one deliberate uppercase-tracked moment on the page, not repeated elsewhere.
- **Body** (400, `clamp(15px, 4vw, 17px)`, line-height 1.5): bio paragraphs. Capped by the bio card's own width (≤480px page), well under 75ch.
- **Sub-label** (400, 12px): pill subtitle (handle/username), ink-soft, truncates with ellipsis on overflow.

### Named Rules
**The Single Eyebrow Rule.** Only one section in the whole page (`find me`) uses the small-caps tracked-label treatment. It is not a repeating scaffold — don't add a second eyebrow above the bio or hero.

## 4. Elevation

No hard drop shadows. Depth comes from ambient, color-tinted glow: soft colored radial blur behind the pfp, diffuse accent-tinted shadows under each pill, gentle blur under the bio card. Shadows are always soft-edged and low-contrast against the pastel backdrop — never a crisp dark rectangle.

### Shadow Vocabulary
- **Soft Ambient** (`box-shadow: 0 8px 24px rgba(106, 90, 205, 0.15)`): default resting elevation for chips and the bio card.
- **Pop Ambient** (`box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18)`): used only on the profile photo, where slightly more contrast is needed to lift it off the busy backdrop.
- **Accent Glow** (`box-shadow: 0 8px 20px color-mix(in srgb, var(--accent) 22%, transparent), 0 4px 10px rgba(0,0,0,0.08)`): per-pill resting glow, tinted by that pill's own accent.
- **Accent Glow Hover** (`box-shadow: 0 14px 28px color-mix(in srgb, var(--accent) 35%, transparent), 0 4px 10px rgba(0,0,0,0.1)`): glow intensifies and lifts on hover/focus.

### Named Rules
**The No Hard Edge Rule.** Every shadow in this system is soft and color-tinted. A crisp, neutral-gray drop shadow is always wrong here — it reads as corporate, not postcard.

## 5. Components

Soft and huggable: frosted glass, generous rounding, ambient glow. Nothing in this system has a sharp corner or a flat hard-edged fill.

### Buttons (Social Pills)
- **Shape:** rounded rectangle, 16px corner radius (`rounded.pill`).
- **Primary (`pill-hero`):** 2-column grid item, frosted gradient tint of its own `--accent` (28%→12% mix into white), 2px border in accent at 55% mix, icon + title + sub-text stacked and centered. Minimum 120px tall for a comfortable thumb target.
- **Hover/Focus:** lifts via accent glow intensification (see Accent Glow Hover) and border solidifies to full accent; on touch devices hover transforms are suppressed (`@media (hover: none)`) so taps don't fire a stuck hover state.
- **Tap feedback:** `.pop` keyframe (scale 1 → 1.08 rotate 2deg → 1) plus a small brown paw-print stamp at the tap point, before the link opens in a new tab.

### Chips
- **Style:** frosted-paper-strong background, full pill radius (999px), thin brown-tinted border (1.5px, `rgba(139,69,19,0.25)`), soft ambient shadow. Used only for the three short "about me" facts under the title — not reused as a generic tag component elsewhere.

### Cards / Containers
- **Corner style:** 20px radius (`rounded.card`), used only by the bio card.
- **Background:** Frosted Paper (55% white), blurred 8px.
- **Shadow strategy:** Soft Ambient (see Elevation).
- **Border:** 1.5px solid `rgba(255,255,255,0.6)` — a light frost-edge, not a colored stripe.
- **Internal padding:** 18px 20px.

### Navigation
No traditional nav; the page is a single scroll. The "find me" section label functions as the only wayfinding element, MNSeafood label-style typography, centered, 12px bottom margin.

### Signature Component: The Reactive PFP
The profile photo is the page's centerpiece interaction: idle bob + slow rotating ring + pulsing glow at rest; on tap it barks (scale/rotate keyframe), cycles through a fixed list of short reaction lines in a speech bubble, and emits a small burst of emoji hearts from its center. This is the one place where motion is allowed to be playful and immediate rather than slow and ambient — it's the page's single moment of delight, not a pattern to repeat elsewhere.

## 6. Do's and Don'ts

### Do:
- **Do** keep the pastel sky-to-petal gradient (`#ADD8E6 → #C9E8F0 → #FFD1DC`) as the constant page backdrop — never solid white or dark.
- **Do** use frosted/translucent surfaces (`paper`, `paper-strong`) for every card, chip, and pill — opacity and blur, not flat fill.
- **Do** give each social pill exactly one brand accent color, expressed consistently as background tint, border, icon, and glow (The One Accent Per Pill Rule).
- **Do** keep shadows soft-edged and color-tinted (Soft Ambient / Accent Glow) — depth through glow, not hard drop shadows (The No Hard Edge Rule).
- **Do** size every tap target for a thumb first; this page is read overwhelmingly on phones.
- **Do** provide a `prefers-reduced-motion` fallback for every animation (idle bob, ring spin, pulse, bounce-letter all collapse to instant/near-instant under reduced motion).

### Don't:
- **Don't** build a generic Linktree-style flat list of plain gray/white buttons — every pill carries its own color, shape, and personality.
- **Don't** use a uniform card grid where every tile looks interchangeable; the hero pills are visually distinct by accent color and icon, not just by label text.
- **Don't** reach for corporate/SaaS landing-page tropes: no hero metrics, no gradient-clipped text, no tiny uppercase eyebrow above more than one section (The Single Eyebrow Rule).
- **Don't** use a side-stripe `border-left`/`border-right` as a colored accent anywhere; accent color is carried by background tint, border (all sides), and glow instead.
- **Don't** use crisp neutral-gray drop shadows; every shadow here is soft and tinted (The No Hard Edge Rule).
- **Don't** make ambient/idle motion fast or springy; reserve bounce/pop energy for direct tap feedback only (pfp bark, pill pop), not for background loops.
