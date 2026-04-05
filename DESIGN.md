# Design System: Август Brow Bar

## 1. Visual Theme & Atmosphere

Август - premium beauty studio in Moscow's Khamovniki district. The design system is built on warm restraint: a cream canvas, a single champagne-gold accent, and serif typography at light weights. The goal is to feel like a luxury boutique that happens to be about eyebrows -- not a generic beauty salon with pink gradients and stock photos.

The page opens on a warm cream background (`#FAF7F2`) -- not pure white, but a surface with subtle yellow warmth, like high-quality paper. Text is rendered in deep ink (`#2A2420`), a dark warm brown that avoids the coldness of pure black. The singular accent color is champagne gold (`#C5A47E`), used for every interactive element, every CTA, every accent. This one-color discipline creates immediate brand recognition -- the same principle Stripe uses with its purple and Apple with its blue.

The typography pairing is the design's signature: `Cormorant Garamond` (serif) for display headings at weight 300, creating an elegant whisper-authority that doesn't shout, paired with `Nunito Sans` (sans-serif) for body text at weight 300-500. The serif/sans-serif contrast creates natural hierarchy without effort. At display sizes (48-64px), Cormorant Garamond uses subtle negative letter-spacing (-0.5px) that compresses headlines into refined, magazine-like blocks.

The shadow system uses warm-tinted shadows exclusively: `rgba(42,36,32,0.06-0.12)` -- brown-warm instead of neutral gray. This keeps even elevation on-brand, the same approach Stripe pioneered with blue-tinted shadows.

**Key Characteristics:**
- Cormorant Garamond at weight 300 for all display text -- italic variant for emphasis words
- Nunito Sans at weight 300-500 for body -- soft, rounded, readable
- Single accent color: champagne gold (`#C5A47E`) for ALL interactive elements
- Cream canvas (`#FAF7F2`) instead of white -- warm paper texture
- Deep ink (`#2A2420`) instead of black -- warm brown for comfortable reading
- Warm-tinted shadows: `rgba(42,36,32,...)` brown-warm, never neutral gray
- Conservative border-radius (4-8px) -- nothing pill-shaped, nothing harsh
- Light/dark section alternation: cream sections vs deep ink (`#2A2420`) sections
- Photography-forward where available, gradient-mesh hero when no photo
- NO pink, NO purple, NO generic beauty palette

## 2. Color Palette & Roles

### Primary
- **Cream** (`#FAF7F2`): Primary page background. Warm off-white with yellow undertone. The foundation of the entire palette.
- **Warm White** (`#FEFCF9`): Alternate section background, trust bar, about section. Slightly warmer than cream.
- **Deep Ink** (`#2A2420`): Primary heading color, dark section backgrounds, footer. Warm dark brown, NOT black.

### Brand Accent
- **Champagne Gold** (`#C5A47E`): THE brand color. CTA backgrounds, link text, icon backgrounds, accent borders, eyebrow labels. Every interactive and accent element uses this single color.
- **Champagne Hover** (`#B08D68`): Darker gold for hover states on buttons and links.
- **Champagne Light** (`rgba(197,164,126,0.12)`): Tinted surface for icon containers and subtle backgrounds.
- **Champagne Glow** (`rgba(197,164,126,0.25)`): Hover glow for box-shadows on CTA buttons.

### Text Scale
- **Ink** (`#2A2420`): Primary headings, navigation text, strong labels.
- **Ink Soft** (`#4A4440`): Body text, descriptions, about section copy.
- **Stone** (`#8A857E`): Secondary text, captions, service durations, metadata.
- **White** (`#FFFFFF`): Text on dark backgrounds, button text on gold CTA.
- **White Muted** (`rgba(255,255,255,0.55)`): Subtitle text on dark hero section.
- **White Faded** (`rgba(255,255,255,0.40)`): Tertiary text on dark backgrounds (atmosphere cards, footer links).

### Surface & Borders
- **Linen** (`#F3EDE4`): Divider lines inside cards, subtle separation.
- **Petal** (`#E8DFD4`): Standard border color for cards, trust bar bottom border.
- **Bloom** (`#D4C4B0`): Hover-state border for cards (slightly darker than petal).
- **Card White** (`#FFFFFF`): Card surfaces on cream background.

### Dark Section Palette
- **Dark BG** (`#2A2420`): Atmosphere section, CTA banner, footer backgrounds.
- **Dark Card BG** (`rgba(255,255,255,0.02)`): Cards on dark backgrounds.
- **Dark Card Hover** (`rgba(197,164,126,0.05)`): Card hover on dark backgrounds.
- **Dark Border** (`rgba(197,164,126,0.12)`): Card borders on dark sections.
- **Dark Border Hover** (`rgba(197,164,126,0.25)`): Card border hover on dark sections.

### Shadow Colors
- **Shadow Soft** (`rgba(42,36,32,0.06)`): Minimal ambient shadow.
- **Shadow Standard** (`rgba(42,36,32,0.08)`): Standard card shadow on hover.
- **Shadow Elevated** (`rgba(42,36,32,0.12)`): Featured elements, modals.
- **Shadow Gold** (`rgba(197,164,126,0.30)`): CTA button hover glow.

## 3. Typography Rules

### Font Family
- **Display**: `Cormorant Garamond`, with fallback: `Georgia`, `Times New Roman`, `serif`
- **Body**: `Nunito Sans`, with fallback: `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
- **Google Fonts import**: `Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400` and `Nunito+Sans:wght@300;400;500;600`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Cormorant Garamond | clamp(38px, 5.5vw, 60px) | 300 | 1.10 | -0.5px | Main hero headline, italic for emphasis words |
| Section Title | Cormorant Garamond | clamp(28px, 3.5vw, 40px) | 300 | 1.15 | normal | Section headings (services, about, etc) |
| Card Title | Cormorant Garamond | 20-22px | 400 | 1.25 | normal | Service card names, atmosphere card titles |
| About Title | Cormorant Garamond | 34px | 300 | 1.20 | normal | Master's name heading |
| Trust Number | Cormorant Garamond | 32px | 300 | 1.00 | normal | Trust bar statistics |
| Eyebrow | Nunito Sans | 11-12px | 500 | 1.00 | 3px | Section labels, uppercase, gold color |
| Body Large | Nunito Sans | 16-17px | 300 | 1.65 | normal | Hero subtitle, about text |
| Body | Nunito Sans | 14-15px | 300 | 1.55-1.60 | normal | Service descriptions, card content |
| Button | Nunito Sans | 14-15px | 500 | 1.00 | 0.4-0.5px | CTA buttons |
| Nav Link | Nunito Sans | 13px | 400 | 1.00 | 0.4px | Header navigation |
| Caption | Nunito Sans | 12-13px | 400 | 1.00 | 0.3px | Service duration, metadata, trust labels |
| Legal | Nunito Sans | 11px | 300 | 1.00 | normal | Footer legal text, INN |
| Footer Heading | Nunito Sans | 11px | 600 | 1.00 | 2px | Footer column titles, uppercase |

### Principles
- **Light weight as luxury**: Weight 300 at display sizes is the brand's typographic signature. Headlines whisper with confidence instead of shouting.
- **Italic for emphasis**: In hero headlines, key words use `<em>` with italic Cormorant Garamond -- e.g. "Натуральная красота *бровей*" where "бровей" is italic AND gold-colored.
- **Serif/sans-serif split**: Cormorant Garamond ONLY for display/heading text. Nunito Sans ONLY for body/UI text. Never mix roles.
- **Eyebrow pattern**: Section labels use Nunito Sans at 11px, weight 500, uppercase, letter-spacing 3px, champagne gold color. Always above the section title.
- **Progressive weight**: 300 for headings and body text, 400 for card titles and nav links, 500 for buttons and eyebrows, 600 for footer headings only.

## 4. Component Stylings

### Buttons

**Primary Gold**
- Background: `#C5A47E`
- Text: `#FFFFFF`
- Padding: 13px 32px
- Radius: 4px
- Font: 14-15px Nunito Sans weight 500, letter-spacing 0.4px
- Hover: `#B08D68` background, `box-shadow: 0 8px 28px rgba(197,164,126,0.30)`
- Transform: `translateY(-1px)` on hover
- Use: Primary CTA ("Записаться онлайн", "Выбрать время", "Записаться к Татьяне")

**Ghost / Outlined**
- Background: transparent
- Text: `rgba(255,255,255,0.65)` (on dark) or `#B08D68` (on light)
- Padding: 13px 32px
- Radius: 4px
- Border: `1px solid rgba(255,255,255,0.18)` (on dark) or `1px solid #C5A47E` (on light)
- Hover: border brightens, text becomes full white/gold
- Use: Secondary actions ("Услуги и цены")

**Nav CTA**
- Background: transparent
- Text: `#B08D68`
- Padding: 9px 24px
- Radius: 4px
- Border: `1px solid #C5A47E`
- Hover: `#C5A47E` background, `#FFFFFF` text
- Use: Header "Записаться" button

### Cards - Service Cards
- Background: `#FFFFFF`
- Border: `1px solid #E8DFD4`
- Radius: 8px
- Padding: 36px 28px
- Hover border: `#D4C4B0`
- Hover shadow: `0 4px 28px rgba(42,36,32,0.08)`
- Hover transform: `translateY(-3px)`
- Top accent line: `linear-gradient(90deg, transparent, #C5A47E, transparent)`, height 2px, opacity 0 -> 1 on hover
- Icon container: 44px square, `rgba(197,164,126,0.12)` background, 8px radius, gold icon inside
- Title: Cormorant Garamond 20px weight 400, `#2A2420`
- Description: Nunito Sans 14px weight 300, `#8A857E`
- Footer divider: `1px solid #F3EDE4`, duration left, "Подробнее →" link right

### Cards - Atmosphere Cards (on dark background)
- Background: `rgba(255,255,255,0.02)`
- Border: `1px solid rgba(197,164,126,0.12)`
- Radius: 8px
- Padding: 24px 20px
- Hover: background `rgba(197,164,126,0.05)`, border `rgba(197,164,126,0.25)`
- Icon: emoji or SVG, 24px, above title
- Title: Cormorant Garamond 17px weight 400, white
- Description: Nunito Sans 13px weight 300, `rgba(255,255,255,0.40)`

### Trust Bar
- Background: `#FEFCF9`
- Border bottom: `1px solid #E8DFD4`
- Padding: 44px 24px
- Layout: flex, center, gap 40px, wrap
- Number: Cormorant Garamond 32px weight 300, `#B08D68`
- Label: Nunito Sans 12px weight 400, `#8A857E`

### Hero Badge
- Border: `1px solid rgba(197,164,126,0.30)`
- Radius: 100px (pill - ONLY exception to conservative radius rule)
- Padding: 5px 16px
- Font: 11px Nunito Sans weight 400, letter-spacing 2px, uppercase
- Color: `#C5A47E`
- Gold dot: 5px circle, `#C5A47E` background

### Navigation
- Fixed position, height 64px
- Background: `rgba(250,247,242,0.92)` with `backdrop-filter: blur(16px)`
- Border bottom: `1px solid rgba(42,36,32,0.05)`
- Logo: Cormorant Garamond 20px weight 400, letter-spacing 3px, uppercase, `#2A2420`
- Links: Nunito Sans 13px weight 400, `#4A4440`, hover underline with gold
- CTA: outlined gold button right-aligned

### Inputs & Forms
- Border: `1px solid #E8DFD4`
- Radius: 4px
- Focus: `1px solid #C5A47E`
- Label: Nunito Sans 14px weight 400, `#4A4440`
- Text: `#2A2420`
- Placeholder: `#8A857E`
- Background: `#FFFFFF`

### About Section Image
- Aspect ratio: 4:5 (portrait)
- Radius: 12px
- Background gradient placeholder: `linear-gradient(135deg, #F3EDE4, #E8DFD4)`
- Decorative frame: pseudo-element at -10px inset, `1px solid #D4C4B0`, radius 14px, opacity 0.4

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Section padding: 88px vertical (desktop), 64px (mobile)
- Section header margin-bottom: 56px
- Card grid gap: 20px
- Trust bar gap: 40px
- About section gap: 64px between columns
- Component internal: 4px, 6px, 8px, 10px, 12px, 14px, 16px, 20px, 24px, 28px, 32px, 36px

### Grid & Container
- Max content width: 1020px, centered
- Hero: centered single-column, max-width 640px
- Service cards: 3-column grid on desktop
- Atmosphere cards: 4-column grid on desktop
- About: 2-column grid, equal columns, center-aligned
- All sections: horizontal padding 24px minimum

### Whitespace Philosophy
- **Generous section breathing**: 88px between sections creates a calm, unhurried scroll rhythm appropriate for a beauty/wellness context.
- **Light/dark alternation**: Cream sections (`#FAF7F2`, `#FEFCF9`) alternate with dark ink sections (`#2A2420`). This creates dramatic rhythm -- services in light, atmosphere in dark, about in light, CTA in dark, footer in dark.
- **Content restraint**: Section headers max-width 520px. Hero content max-width 640px. Nothing stretches full width except background colors.

### Border Radius Scale
- Standard (4px): Buttons, inputs, badges
- Comfortable (8px): Cards, icon containers
- Large (12px): About section image
- Pill (100px): Hero badge ONLY -- the single exception

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, trust bar, flat content |
| Subtle (Level 1) | `rgba(42,36,32,0.06) 0px 2px 12px` | Subtle lift hints |
| Standard (Level 2) | `rgba(42,36,32,0.08) 0px 4px 28px` | Service card hover state |
| Elevated (Level 3) | `rgba(42,36,32,0.12) 0px 12px 48px, rgba(42,36,32,0.06) 0px 2px 8px` | Modals, floating panels |
| Gold Glow | `rgba(197,164,126,0.30) 0px 8px 28px` | Primary CTA button hover |
| Focus Ring | `0 0 0 2px #C5A47E` outline | Keyboard focus state |

**Shadow Philosophy**: Avgust uses warm-tinted shadows with brown undertones (`rgba(42,36,32,...)`) instead of neutral gray or black. This keeps even depth perception on-brand and warm. The approach mirrors Stripe's blue-tinted shadows but uses the brand's warm brown palette instead. Shadows are restrained -- Level 2 is the maximum for normal UI. Gold Glow is reserved exclusively for primary CTA hover.

## 7. Do's and Don'ts

### Do
- Use Cormorant Garamond weight 300 for ALL headings -- lightness is luxury
- Use italic Cormorant Garamond + gold color for emphasis words in hero headlines
- Apply champagne gold (`#C5A47E`) as the ONLY accent color for interactive elements
- Use cream (`#FAF7F2`) background instead of white -- the warmth is essential
- Use deep ink (`#2A2420`) for headings instead of `#000000` -- never pure black
- Keep border-radius between 4-8px for all components (except hero badge pill)
- Alternate light/dark sections for dramatic scroll rhythm
- Use warm-tinted shadows: `rgba(42,36,32,...)` -- brown, not gray
- Apply the eyebrow pattern: 11px, uppercase, letter-spacing 3px, gold, above titles
- Use gold top-line gradient reveal on card hover -- the signature detail
- Keep CTA text action-oriented in Russian: "Записаться онлайн", "Выбрать время"
- Address visitors as "вы" (formal) in all copy

### Don't
- Don't use pink, purple, or rose accents -- this is NOT a generic beauty site
- Don't use Inter, Roboto, Arial, or system sans-serif fonts
- Don't use weight 600-700 for Cormorant Garamond -- weight 300-400 only
- Don't use pure black (`#000000`) for text or backgrounds -- always `#2A2420`
- Don't use pure white (`#FFFFFF`) as page background -- always `#FAF7F2` cream
- Don't use pill-shaped buttons (large border-radius) -- 4px radius for buttons
- Don't use neutral gray shadows -- always warm-tint with `rgba(42,36,32,...)`
- Don't use stock photography -- use real photos or gradient placeholders
- Don't use marketing pressure words: "скидка", "акция", "торопитесь", "только сегодня"
- Don't use more than 2-3 emoji per page -- prefer SVG icons
- Don't use multiple accent colors -- champagne gold is the ONLY accent
- Don't use bounce/shake/parallax animations -- only subtle fade-in on scroll

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, reduced headings, stacked cards |
| Desktop | >=768px | Full multi-column layout |

### Touch Targets
- Buttons: 13px vertical padding minimum (46px total height)
- Nav links: adequate spacing at 13px font
- Service cards: entire card is tappable
- Footer links: 10px margin-bottom between items

### Collapsing Strategy
- Hero: 60px display -> 38px on mobile, weight 300 maintained
- Navigation: horizontal links hidden on mobile, CTA button remains visible
- Service cards: 3-column -> 1-column stacked
- Atmosphere cards: 4-column -> 2-column -> 1-column
- About: 2-column -> 1-column (image above text)
- Hero buttons: horizontal -> vertical stacked, max-width 260px
- Section padding: 88px -> 64px
- Footer columns: horizontal -> vertical stacked
- CTA details: horizontal -> vertical centered
- Trust bar: flex-wrap for smaller screens

### Image Behavior
- About photo maintains 4:5 aspect ratio at all sizes
- Decorative frame scales with image
- Service card icons maintain 44px fixed size
- Logo flower icon maintains fixed 26px size

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA background: Champagne Gold (`#C5A47E`)
- CTA Hover: Champagne Dark (`#B08D68`)
- Page background: Cream (`#FAF7F2`)
- Alt section background: Warm White (`#FEFCF9`)
- Heading text: Deep Ink (`#2A2420`)
- Body text: Ink Soft (`#4A4440`)
- Secondary text: Stone (`#8A857E`)
- Card border: Petal (`#E8DFD4`)
- Card border hover: Bloom (`#D4C4B0`)
- Internal divider: Linen (`#F3EDE4`)
- Dark sections: Deep Ink (`#2A2420`)
- Gold accent: `#C5A47E` (borders, icons, labels, links)
- Button text on gold: White (`#FFFFFF`)

### Example Component Prompts
- "Create a hero section with dark background (#2A2420), radial-gradient gold glow at 30% 50%. Badge pill with gold border and dot. Headline: Cormorant Garamond clamp(38px,5.5vw,60px) weight 300, white, italic+gold for emphasis word. Subtitle: Nunito Sans 16px weight 300, rgba(255,255,255,0.55). Two CTAs: gold solid button + ghost button with white border."
- "Design a service card: white background, 1px solid #E8DFD4, 8px radius. 2px gold gradient line at top (hidden, visible on hover). Icon in 44px container with rgba(197,164,126,0.12) background. Title: Cormorant Garamond 20px weight 400. Description: Nunito Sans 14px weight 300 #8A857E. Footer: 1px #F3EDE4 divider, duration left, gold link right. Hover: translateY(-3px), shadow rgba(42,36,32,0.08), border #D4C4B0."
- "Create navigation: fixed, 64px height, rgba(250,247,242,0.92) background with backdrop-filter blur(16px). Logo: Cormorant Garamond 20px, letter-spacing 3px, uppercase. Links: Nunito Sans 13px weight 400, #4A4440. CTA: outlined button, 1px solid #C5A47E, #B08D68 text, hover fills gold."
- "Build a dark atmosphere section: #2A2420 background with radial-gradient gold glow. Eyebrow: Nunito Sans 11px uppercase letter-spacing 3px gold. Title: Cormorant Garamond 40px weight 300 white. 4-column card grid with rgba(255,255,255,0.02) cards, rgba(197,164,126,0.12) borders, 8px radius."
- "Design about section: 2-column grid on #FEFCF9. Left: 4:5 image with 12px radius and decorative frame (1px #D4C4B0 border at -10px inset). Right: eyebrow gold label + Cormorant 34px title + Nunito 15px body + credential checklist with gold check circles + gold CTA button."

### Iteration Guide
1. Font pairing: Cormorant Garamond (serif, headings only) + Nunito Sans (sans-serif, everything else). Never swap roles.
2. Weight 300 is the default for both fonts. Use 400 for card titles and nav, 500 for buttons and eyebrows.
3. Shadow formula: `rgba(42,36,32, OPACITY) 0px Y BLUR` -- opacity 0.06-0.12, always warm brown.
4. Heading color `#2A2420`, body `#4A4440`, secondary `#8A857E`. Three-tier text hierarchy.
5. Border-radius: 4px buttons, 8px cards, 12px images. Nothing else.
6. Dark sections use `#2A2420` with gold accents at low opacity (0.05-0.25 range).
7. Section eyebrow pattern: 11px Nunito Sans, weight 500, uppercase, 3px letter-spacing, `#C5A47E`.
8. Cards on hover: translateY(-3px) + shadow + gold top-line gradient reveal.
9. One accent color only: `#C5A47E`. All CTAs, all links, all accents. No exceptions.
10. Copy tone: warm, professional, "вы" form. Never "скидка", "акция", "торопитесь".

### Business Data (for content generation)
- Studio name: Август (Cyrillic only, not "Avgust" -- Latin names banned in Russia)
- Owner: Татьяна Шублетова
- Location: Хамовники, Москва, 5 мин от м. Фрунзенская
- Parking: бесплатный паркинг на территории
- Booking: https://n1330893.yclients.com
- Phone: +7 (995) 895-75-80
- Telegram: https://t.me/shubletova_brows
- Email: shubletovabrows@yandex.ru
- Courses: https://shubletovabrows.ru
- Legal: ИП Шублетова Т.В. ИНН 663905966030
