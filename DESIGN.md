---
name: Hachidacollie
description: Mobile-first link-in-bio page for the Hachidacollie persona — a Y2K desktop OS ("Hachi OS"), not a link aggregator template.
colors:
  wall-bright: "#5ad7ec"
  wall-mid: "#2b8fd6"
  wall-deep: "#143a86"
  bar-lit: "#4aa3f0"
  bar-dim: "#1c63c8"
  face: "#eceff5"
  face-sunken: "#dfe4ec"
  chrome-hi: "#ffffff"
  chrome-lo: "#8b96a6"
  ink: "#14203a"
  ink-soft: "#46546e"
  note: "#fff5b0"
  note-ink: "#3a3208"
  gel-red: "#ff5f57"
  gel-yellow: "#febc2e"
  gel-green: "#28c840"
  accent-telegram: "#26A5E4"
  accent-facebook: "#1877F2"
  accent-twitter: "#1DA1F2"
  accent-barq: "#FF7A59"
typography:
  wordmark:
    fontFamily: "MNSeafood, sans-serif"
    fontSize: "clamp(34px, 9vw, 50px)"
    note: "solid silver fill + extruded bevel shadow stack (NOT gradient-clip text)"
  system:
    fontFamily: "'Silkscreen', monospace"
    fontSize: "11px"
    letterSpacing: "0.5px"
    note: "all OS chrome — title bars, icon labels, taskbar, buttons, marquee"
  body:
    fontFamily: "naturaly, -apple-system, system-ui, sans-serif"
    fontSize: "clamp(15px, 4vw, 17px)"
    lineHeight: 1.5
rounded:
  window: "6px"
  icon: "14px"
  gel: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "28px"
---

# Design System: Hachidacollie — "Hachi OS"

## 1. Overview

**Creative North Star: "Hachi OS — a Y2K desktop you can poke at"**

The page is a glossy early-2000s computer desktop. A bright aqua wallpaper with pixel stars; a draggable chrome **window** titled `Hachidacollie.exe` holding the photo and name; the social links are glossy **desktop shortcut icons**; the bio is a yellow **sticky note**; and a real **taskbar** runs along the bottom with a live ticking clock. It boots with a splash, the cursor trails pixel sparkles, and tapping the photo pops a little system **balloon tip** that barks at you.

This is a deliberate, complete departure from the two previous systems (pastel-sakura postcard, then navy boarding-pass). It is loud, maximal, and unmistakably hand-made — the opposite of a clean Linktree template. The warmth that earlier systems carried through pastel softness now comes from nostalgia and toy-like interactivity: gel buttons, bevels, gloss, and things that wiggle when you touch them.

**Key Characteristics:**
- Glossy aqua desktop wallpaper (Committed color) — never flat, never minimal.
- Everything is a chrome-beveled OS object (window / icon / note / taskbar), not a flat card.
- Pixel system font (Silkscreen) for every piece of chrome; the name stays MNSeafood for identity.
- Gel/aqua highlights: glossy top-lit gradients on buttons and icons.
- Motion is playful and immediate (boot splash, marquee, sparkle trail, balloon barks, draggable window) — this register WANTS busy, where the prior ones wanted calm.

## 2. Colors

**Strategy: Committed + period palette.** Reference: an iMac-G3 / Windows-XP-Aqua desktop. One saturated aqua wallpaper carries the surface; chrome silver and glossy blue title bars sit on top; candy gel accents (red/yellow/green) and the four brand colors punctuate.

### Wallpaper
- **Wall Bright** `#5ad7ec` → **Wall Mid** `#2b8fd6` → **Wall Deep** `#143a86`: a top-lit radial gradient, the glossy "desktop". A faint pixel-dot grid and twinkling stars sit over it.

### Chrome
- **Face** `#eceff5` / **Face Sunken** `#dfe4ec`: window/note body fills.
- **Chrome Hi** `#ffffff` / **Chrome Lo** `#8b96a6`: the two bevel edges (light top-left, dark bottom-right) on every raised/sunken object. This bevel IS the system's depth language — there are no soft ambient shadows here, only hard 3D ridges.
- **Bar Lit** `#4aa3f0` → **Bar Dim** `#1c63c8`: glossy title-bar gradient; title text is white.

### Accents
- **Gel Red/Yellow/Green** `#ff5f57 / #febc2e / #28c840`: the three round window-control buttons (close/minimize/zoom). Used nowhere else.
- **Note** `#fff5b0` with **Note Ink** `#3a3208`: the bio sticky note (high contrast, very legible).

### Brand (per icon)
- **Telegram** `#26A5E4`, **Facebook** `#1877F2`, **Twitter** `#1DA1F2`, **Barq** `#FF7A59`: one glossy gradient per shortcut icon tile, plus that platform's glyph. Never bleeds into shared chrome.

### Neutral
- **Ink** `#14203a` (primary text on light chrome), **Ink Soft** `#46546e` (secondary).

### Named Rules
**The Bevel-Not-Shadow Rule.** Depth is always a hard two-tone bevel (light + dark inset/outset ridge), never a soft blurred drop shadow. A soft Material shadow reads as modern-flat and breaks the Y2K illusion.

**The One Gloss Per Icon Rule.** Each social shortcut owns exactly one brand color as its glossy tile gradient; the page chrome stays silver/aqua. (Successor to the earlier "one accent per pill/tag" rule.)

## 3. Typography

**Wordmark:** MNSeafood — kept across all three systems as Hachi's name identity. Rendered as solid silver with an **extruded bevel shadow stack** (offset hard shadows + text-stroke), giving a chrome/3D look **without** `background-clip` gradient text (which is banned and also wasn't period-authentic — Win9x logos were beveled solids, not CSS gradients).
**System:** Silkscreen (pixel bitmap font) — every OS chrome element: window titles, icon labels, taskbar, button text, the marquee, the about-chips, the clock. This is the connective tissue.
**Body:** naturaly — the bio sticky note only, Hachi's "handwritten" voice, kept from earlier systems.

Three families, each a single non-overlapping job: a beveled brand wordmark, a pixel system UI face, and a handwritten note face.

### Hierarchy
- **Wordmark** (`clamp(34px, 9vw, 50px)`): "Hachidacollie!" inside the window. One per page.
- **System** (11–13px, Silkscreen): all chrome. Pixel fonts must stay ≥11px and on a solid plate to render crisp and legible; never set pixel type as light-gray-on-busy.
- **Body** (`clamp(15px, 4vw, 17px)`, naturaly): bio note, dark ink on yellow.

### Named Rules
**The Pixel-On-Plate Rule.** Silkscreen text always sits on a solid contrasting plate (title bar, icon label tab, taskbar, chip) — never floating directly on the busy wallpaper, where it would shimmer and fail contrast.

## 4. Elevation

No soft shadows anywhere (see The Bevel-Not-Shadow Rule). Depth is hard bevels:

- **Raised** (windows, buttons, icon tiles, taskbar): light ridge top-left, dark ridge bottom-right — the object pops toward you.
- **Sunken** (photo frame, the marquee well, text fields): the inverse — dark top-left, light bottom-right — the content is recessed into the surface.
- **Pressed** (button :active): bevel inverts from raised to sunken, and content nudges 1px down-right — a real physical click.

## 5. Components

### The Desktop (wallpaper)
Full-bleed aqua radial gloss + faint pixel grid + JS-spawned twinkling stars + a sparkle cursor trail (non-touch). The stage everything floats on.

### The Window (`Hachidacollie.exe`)
- Raised chrome frame, 6px radius. **Title bar**: glossy blue gradient, a tiny pixel app-icon, the filename in white Silkscreen, and three round gel buttons at right.
- **The gel buttons work**: green = happy pulse, yellow = minimize (collapse the window body), red = "you can't close me :3" (window shake + balloon). Interactive, not decorative chrome.
- **Draggable** by the title bar (pointer events, transform-based, clamped on-screen). A real toy.
- Body holds: the photo (sunken frame), the beveled wordmark + kana, a marquee, and the about-chips.

### The Photo + Balloon (signature interaction)
Square photo in a sunken bevel frame. Tap → a Windows-style **balloon tip** pops from it (pixel font, little tail) cycling bark lines (`woof!`, `awoo~`, `sawatdee!`...), plus a small sparkle burst. Successor to the postcard's bark-hearts and the boarding-pass stamp — same "tap the dog, the dog reacts" idea, re-skinned as an OS notification.

### Marquee
A sunken well with horizontally scrolling Silkscreen text (`★ welcome ★ collie from thailand ★ tap an icon to find me ★`). Pure CSS loop; pauses under reduced motion.

### Social Shortcuts (the links)
- A 2×2 grid of glossy **desktop icons**, ordered by real-world priority: **Telegram, Facebook, Twitter, Barq**.
- Each: a brand-colored glossy gel tile (top-lit gradient) with the platform glyph, a **shortcut-arrow badge** bottom-left, and a pixel label on a light plate below.
- Placed **directly below the window, above the bio** — identity → links → bio, so the page's core job (routing to socials) is reachable on phone without scrolling past the bio.
- Hover: tile brightens, lifts, label gets a dotted selection box (authentic OS selection). Tap: bevel presses in + sparkle burst, then opens the link.
- Enter staggered on boot (each icon "drops in" 70ms after the last).

### The Bio (sticky note)
A yellow sticky note pinned at a slight tilt over the desktop, dark ink, naturaly font, a small "pin" dot at the top. The one warm, hand-written object among the cold chrome.

### The Taskbar
Fixed to the bottom: a raised bar with a **Start-style button** (`★ hachi`) at left and a system **tray** at right showing the kana and a **live ticking clock** (JS, updates each second). The page's footer, re-imagined as OS chrome.

### Boot Splash
On load: a brief full-screen `Hachi OS` splash with a filling progress bar, then fades to reveal the desktop (~1.1s). Skipped instantly under reduced motion. The page's one entrance flourish.

## 6. Do's and Don'ts

### Do
- **Do** keep the glossy aqua wallpaper as the committed surface — never flat or minimal.
- **Do** render every object with a hard two-tone bevel (The Bevel-Not-Shadow Rule).
- **Do** keep Silkscreen on a solid plate everywhere it appears (The Pixel-On-Plate Rule).
- **Do** give each social icon exactly one glossy brand color (The One Gloss Per Icon Rule).
- **Do** keep the socials directly under the window, above the bio, thumb-reachable.
- **Do** provide reduced-motion fallbacks: no boot animation, no marquee scroll, no sparkles, static stars — content shows instantly.

### Don't
- **Don't** reintroduce pastel-sakura softness OR the navy boarding-pass — both systems are retired, not layered in.
- **Don't** use soft/blurred drop shadows; depth is bevels only.
- **Don't** use `background-clip:text` gradient for the chrome wordmark; bevel a solid fill instead (it's banned and inauthentic).
- **Don't** float pixel text directly on the wallpaper; it must sit on a plate.
- **Don't** use a side-stripe as an icon's accent; the whole tile carries the brand color.
- **Don't** let the boot, marquee, or sparkle effects run under reduced motion.
