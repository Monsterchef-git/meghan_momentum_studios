# Project Structure - Meghan's Momentum Studios

## 📁 Complete File Structure

```
meghan-momentum-studios/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout (navigation + footer)
│   ├── page.tsx                  # Homepage (hippie hero + gallery)
│   ├── about/
│   │   └── page.tsx             # Artist biography with photo
│   ├── process/
│   │   └── page.tsx             # Creative process page
│   ├── shop/
│   │   └── page.tsx             # Available artworks
│   └── contact/
│       └── page.tsx             # Contact form
├── public/
│   └── images/
│       ├── brushstrokes-top.png # Header background
│       ├── logo.png             # Brand logo
│       └── meghan-boston.jpg    # Artist photo
├── styles/
│   └── globals.css              # Global styles & animations
├── .gitignore                    # Git ignore rules
├── next.config.js               # Next.js configuration
├── next-env.d.ts                # Next.js TypeScript declarations
├── package.json                 # Dependencies
├── package-lock.json            # Locked dependencies
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Project documentation
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🎨 Key Files Explained

### Root Layout (`app/layout.tsx`)

**Purpose**: Defines the global layout for all pages

**Features**:
- Font imports (Playfair Display, Outfit, Righteous)
- Navigation bar with sage background and terracotta accents
- Footer with gradient background and bohemian styling
- Metadata for SEO

**Fonts**:
```tsx
const playfair = Playfair_Display({ ... })  // Serif headings
const outfit = Outfit({ ... })              // Sans-serif body
const righteous = Righteous({ ... })        // Display headers
```

**Navigation**:
- Sticky position with artistic brushstroke background
- White background with decorative brushstrokes at 30% opacity
- Horizontal layout: brand title left, navigation links right
- Amber-700 hover states on all links
- Links: Home, About, Process, Shop, Contact

**Footer**:
- Gradient background (gradient-earth)
- Three columns: Peace & Art, Explore, Connect
- Emojis and casual tone
- Copyright with heart emoji

---

### Homepage (`app/page.tsx`)

**Purpose**: Main landing page with hippie aesthetic

**Sections**:

1. **Hero Section**:
   - "Peace, Love & Art" headline with gradient text
   - Spinning mandala decoration
   - Floating blurred circles (sunset, plum, mustard)
   - Flower pattern background
   - CTA button with gradient

2. **Gallery Grid**:
   - Organic rounded cards (rounded-3xl)
   - Custom shadows (shadow-hippie)
   - Hover effects (float, glow)
   - Gradient placeholders

3. **About Preview**:
   - Split layout with decorative circles
   - Warm greeting with emojis
   - Link to full About page

---

### About Page (`app/about/page.tsx`)

**Purpose**: Complete artist biography

**Sections**:

1. **Hero Section**:
   - Full-width artist photo (`/images/meghan-boston.jpg`)
   - Dark overlay (40% opacity)
   - Centered white text: "Meghan Boston, Artist & Naturalist"

2. **Biography Content**:
   - Opening quote: "Seeing life in all things"
   - Early life in Del Rio, Texas
   - Path to fiber arts and rockhounding
   - Miniature bottle jewelry evolution
   - Ethical taxidermy and wildlife preservation
   - Sacred process (skull painting)

3. **Featured Poem**:
   - "Kinder Than Man" by Althea Davis
   - Highlighted gray background
   - Proper attribution

4. **Philosophy Quote**:
   - Dark section with centered quote
   - White text on neutral-900 background

5. **Call-to-Action**:
   - Links to Shop
   - Responsive button layout

**Animations**: Progressive fade-ins (delay-1 through delay-6)

---

### Global Styles (`styles/globals.css`)

**Purpose**: Custom CSS for hippie/bohemian design

**Sections**:

1. **Hippie Animations**:
   - `@keyframes float` - Gentle floating motion
   - `@keyframes rotate-slow` - Spinning mandalas
   - `@keyframes pulse-glow` - Breathing effect

2. **Decorative Elements**:
   - `.mandala-bg` - Radial gradient circles
   - `.flower-pattern` - SVG pattern background

3. **Text Effects**:
   - `.text-gradient-sunset` - Orange gradient text
   - `.text-gradient-earth` - Green/brown gradient text

4. **Button Styles**:
   - `.btn-hippie` - Gradient button with shadow
   - `.btn-outline-hippie` - Outlined button with hover fill

5. **Card Styles**:
   - `.card-hippie` - Organic rounded cards with hover effects

6. **About Page Animations**:
   - `@keyframes fadeIn` - Fade in with translateY
   - `.animate-fade-in-delay-1` through `.animate-fade-in-delay-6`

7. **Prose Styling**:
   - `.prose` - Typography for biography content
   - `.prose h2`, `.prose p`, `.prose blockquote`

8. **Accessibility**:
   - Focus styles (amber outline)
   - Reduced motion support

---

### Tailwind Configuration (`tailwind.config.ts`)

**Purpose**: Custom Tailwind theme

**Custom Colors**:
```ts
terracotta: { 50-900 }  // Warm earthy tones
sage: { 50-900 }        // Natural greens
mustard: { 50-900 }     // Vibrant yellows
sunset: { 50-900 }      // Psychedelic oranges
plum: { 50-900 }        // Deep purples
```

**Custom Fonts**:
```ts
fontFamily: {
  serif: ['var(--font-playfair)', ...],
  sans: ['var(--font-outfit)', ...],
  display: ['var(--font-righteous)', ...],
}
```

**Background Gradients**:
- `gradient-sunset` - Orange gradient
- `gradient-earth` - Green/brown gradient
- `gradient-psychedelic` - Purple/orange/yellow gradient

**Animations**:
- `float` - 6s ease-in-out infinite
- `spin-slow` - 20s linear infinite
- `pulse-soft` - 4s cubic-bezier infinite

**Custom Shadows**:
- `shadow-hippie` - Terracotta + sunset glow
- `shadow-glow` - Sunset + plum glow

---

## 🎨 Design Tokens

### Color Usage

| Color | Usage |
|-------|-------|
| Terracotta | Primary accent, borders, navigation text |
| Sage | Backgrounds, navigation bar |
| Mustard | Highlights, floating circles |
| Sunset | Gradients, hover states, CTAs |
| Plum | Accents, floating circles |

### Typography Scale

| Class | Font | Size | Usage |
|-------|------|------|-------|
| `font-display` | Righteous | - | Bold headers |
| `font-serif` | Playfair Display | - | Elegant headings |
| `font-sans` | Outfit | - | Body text |
| `text-7xl` | - | 4.5rem | Hero titles |
| `text-4xl` | - | 2.25rem | Section headers |
| `text-lg` | - | 1.125rem | Body text |

### Spacing System

| Class | Value | Usage |
|-------|-------|-------|
| `py-20` | 5rem | Section padding |
| `px-6` | 1.5rem | Container padding |
| `gap-8` | 2rem | Grid gaps |
| `gap-12` | 3rem | Large gaps |
| `max-w-4xl` | 56rem | Content width |
| `max-w-7xl` | 80rem | Container width |

---

## 🔧 Common Patterns

### Hippie Button
```tsx
<button className="btn-hippie">
  Click Me ✨
</button>
```

### Organic Card
```tsx
<div className="card-hippie hover-float">
  Content
</div>
```

### Gradient Text
```tsx
<h1 className="text-gradient-sunset">
  Peace & Love
</h1>
```

### Progressive Animation
```tsx
<div className="animate-fade-in-delay-3">
  This fades in after 0.6s
</div>
```

### Floating Element
```tsx
<div className="animate-float">
  Gentle floating motion
</div>
```

---

## 📦 Dependencies

### Production
- `next`: ^14.x - React framework
- `react`: ^18.x - UI library
- `react-dom`: ^18.x - React DOM renderer

### Development
- `typescript`: ^5.x - Type safety
- `tailwindcss`: ^3.x - Utility-first CSS
- `postcss`: ^8.x - CSS processing
- `autoprefixer`: ^10.x - CSS vendor prefixes
- `@types/node`: ^20.x - Node.js types
- `@types/react`: ^18.x - React types
- `@types/react-dom`: ^18.x - React DOM types

---

## 🚀 Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🎯 Page-Specific Details

### Homepage Features
- ✌️ Peace, Love & Art hero
- 🌻 Spinning mandala decoration
- ✨ Floating blurred circles
- 🎨 Organic gallery grid
- 💛 Bohemian about preview

### About Page Features
- 📸 Hero with artist photo
- 📖 Complete biography
- 🦋 Progressive animations
- 📜 Featured poem section
- 💬 Blockquote styling
- 🔗 CTA to Shop

### Navigation Features
- 🎨 Artistic brushstroke background
- ⚪ Clean white base with decorative overlay
- 🧡 Amber hover states
- 📱 Mobile responsive
- 📌 Sticky position

### Footer Features
- 🌈 Gradient background
- 💚 Three-column layout
- ✌️ Peace & Art branding
- 🔗 Site navigation
- 💛 Made with love message

---

## 🎨 Style Coexistence

This project successfully combines two design aesthetics:

1. **Homepage**: Vibrant hippie/bohemian with psychedelic gradients
2. **About Page**: Clean, professional with neutral palette

Both styles coexist in `globals.css` without conflicts, allowing each page to have its own personality while maintaining brand consistency.

---

## 📝 Notes

- All images should be placed in `public/images/`
- Use Next.js Image component for optimization
- Animations respect `prefers-reduced-motion`
- All interactive elements have focus states
- Mobile-first responsive design
- SEO metadata included in all pages