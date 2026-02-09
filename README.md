# Meghan's Momentum Studios - Bohemian Art Portfolio

## 🌻 Design Philosophy

This website features a **vibrant, hippie/bohemian aesthetic** celebrating free-spirited creativity:

- **Typography**: Playfair Display (serif) + Outfit (sans-serif) + Righteous (display)
- **Color Palette**: Terracotta, Sage, Mustard, Sunset, Plum
- **Style**: Organic, psychedelic, warm and earthy
- **Layout**: Asymmetric grids with floating animations
- **Animations**: Progressive fade-ins, spinning mandalas, soft pulses
- **Vibe**: Peace, love, and art ✌️🌈

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 📁 Pages

- **Home** (/) - "Peace, Love & Art" hero + organic gallery grid
- **About** (/about) - Complete artist biography with photo and featured poem
- **Process** (/process) - Creative journey
- **Shop** (/shop) - Available artworks
- **Contact** (/contact) - Contact form

## 🎨 Design System

### Color Palette

**Bohemian Earth Tones:**
- **Terracotta**: Warm, earthy base (#bfa094)
- **Sage**: Natural green (#7d927d)
- **Mustard**: Vibrant yellow (#eab308)
- **Sunset**: Psychedelic orange (#f97316)
- **Plum**: Deep purple (#a855f7)

### Typography

- **Display**: Righteous (bold, retro headers)
- **Serif**: Playfair Display (elegant, classic)
- **Sans**: Outfit (clean, modern body text)

### Animations

- **Float**: Gentle up-and-down motion (6s)
- **Spin-slow**: Rotating mandalas (20s)
- **Pulse-soft**: Breathing effect (4s)
- **Fade-in**: Progressive delays (0.2s to 1.2s)

## 🌈 Key Features

### Header
- Sticky navigation with artistic brushstroke background
- Horizontal layout with brand title and navigation links
- Decorative brushstrokes at 30% opacity for bohemian aesthetic
- Smooth hover effects on all links (amber-700)

### Homepage
- Spinning mandala decoration
- Floating blurred circles
- Flower pattern background
- Gradient text effects
- Organic rounded cards with custom shadows
- Emojis throughout (✌️, 🌻, ✨, 🦋, 🌈)

### About Page
- Hero section with artist photo
- Progressive fade-in animations
- Featured poem "Kinder Than Man"
- Blockquote styling for artist statements
- Clean, professional layout

### Global Styles
- Custom button styles (hippie, outline-hippie)
- Organic card styling with hover effects
- Text gradients (sunset, earth)
- Mandala and flower pattern backgrounds
- Accessibility features (reduced motion support)

## 📸 Adding Your Images

1. Images are stored in `public/images/`
2. Use Next.js Image component:
   ```tsx
   import Image from 'next/image';
   
   <Image 
     src="/images/your-artwork.jpg" 
     alt="Description"
     width={800}
     height={600}
   />
   ```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts` - update the bohemian color palette

### Modify Animations
Edit `styles/globals.css` - adjust keyframes and timing

### Update Fonts
Change in `app/layout.tsx` - import different Google Fonts

## 🌐 Deploy

```bash
npm run build
```

Deploy to Vercel (free): https://vercel.com

## 💡 Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (next/font)
- **Image Optimization**: Next.js Image component

## 📂 Project Structure

```
meghan-momentum-studios/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # Artist biography
│   ├── process/page.tsx   # Creative process
│   ├── shop/page.tsx      # Available works
│   └── contact/page.tsx
├── public/
│   └── images/            # Artwork images
│       ├── brushstrokes-top.png  # Header background
│       ├── logo.png              # Brand logo
│       └── meghan-boston.jpg     # Artist photo
├── styles/
│   └── globals.css        # Global styles & animations
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies
```

## ✨ Special Features

- **SEO Optimized**: Proper metadata and semantic HTML
- **Mobile Responsive**: Works beautifully on all devices
- **Accessible**: WCAG compliant with focus states and reduced motion
- **Performance**: Optimized images and animations
- **Progressive Enhancement**: Graceful degradation for older browsers

## 📝 Note on Commissions
The "Commissions" functionality has been intentionally removed from this version as the client does not currently require it.

Built with love, peace, and good vibes 💛✌️
