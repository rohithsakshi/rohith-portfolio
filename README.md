# 🚀 Premium Portfolio — Component System

A world-class developer portfolio built with **Next.js 14 App Router**, **TypeScript**,
**Tailwind CSS**, and **Framer Motion**.

---

## 📁 Component Files

| File | Section | Key Features |
|------|---------|-------------|
| `Navbar.tsx` | Navigation | Glass effect, active section tracking, hide-on-scroll, mobile hamburger |
| `Hero.tsx` | Landing | Ambient glow, floating orbs, stats grid, entrance animations |
| `About.tsx` | About | Story timeline, trait cards, profile image, floating badge |
| `Skills.tsx` | Skills | Tab navigation, animated progress bars, skill cards |
| `Projects.tsx` | Portfolio | Featured project card, project grid, hover effects |
| `Experience.tsx` | Timeline | Animated vertical timeline, achievement bullets |
| `Services.tsx` | Services | Color-coded service cards, CTA strip |
| `Contact.tsx` | Contact | Form with validation, success animation, sidebar links |
| `Footer.tsx` | Footer | Brand, social links, nav |
| `globals.css` | Styles | Scrollbar, selection, focus ring |
| `layout-and-page.tsx` | App Router | Layout metadata + page assembly |

---

## ⚡ Installation

```bash
# 1. Install dependencies
npm install framer-motion

# If using Geist font (recommended):
npm install geist

# 2. Copy component files into:
#    src/components/  (or app/components/)

# 3. Update globals.css in app/

# 4. Assemble in app/page.tsx (see layout-and-page.tsx)
```

---

## 🎨 Design System

### Color Palette
```
Background:  #060609  (primary)   #07070b  (alternate sections)
Accent:      Indigo-600 (#4f46e5) with glow
Text:        White → zinc-400 → zinc-500 → zinc-600
Border:      zinc-800 → zinc-700 on hover
```

### Typography
Uses **Geist Sans** (Vercel's typeface). Falls back to system-ui.

```tsx
// Install: npm install geist
import { GeistSans } from "geist/font/sans";
// Apply: className={GeistSans.className} on <html>
```

### Animation Principles
All animations follow **[0.22, 1, 0.36, 1]** cubic-bezier (similar to Apple's spring).
- Stagger delay: `i * 0.1s`
- Duration: `0.6s`
- Trigger: `useInView` with `once: true, margin: "-80px"`

---

## 🔧 Customisation Checklist

### Replace placeholder content:
- [ ] `"YN"` logo initials → your initials
- [ ] `"Your Name"` → your name
- [ ] `"[Your City]"` → your city
- [ ] `"hello@yourname.dev"` → your email
- [ ] LinkedIn / GitHub / Twitter URLs
- [ ] Hero stats (years experience, projects, clients)
- [ ] Project data in `PROJECTS` array
- [ ] Experience data in `EXPERIENCE` array
- [ ] `<Image>` component for real photo in `About.tsx`

### Form integration:
Replace the `setTimeout` mock in `Contact.tsx` with your preferred solution:
```tsx
// Option A: Resend API
const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });

// Option B: EmailJS
await emailjs.send("service_id", "template_id", form, "public_key");

// Option C: Formspree
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

---

## 📐 Section Layout

```
/ (page)
├── Navbar          ← fixed, z-50
├── Hero            ← min-h-screen, centered
├── About           ← py-36, 2-col
├── Skills          ← py-36, tabs + grid
├── Projects        ← py-36, featured + grid
├── Experience      ← py-36, timeline
├── Services        ← py-36, 3-col cards
├── Contact         ← py-36, form + sidebar
└── Footer          ← minimal
```

---

## 🚀 Performance Tips

1. **Images**: Always use `next/image` with `priority` on the hero
2. **Animations**: All use `useInView` with `once: true` — no re-triggering
3. **Fonts**: Geist is subset by default — fast load
4. **Sections**: Each section uses `overflow-hidden` to contain glow blurs
5. **Framer Motion**: Import only what you need per component

---

Built with ♥ and attention to detail.
