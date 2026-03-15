# Coffee Shop 1 Landing Page - Next.js, TypeScript, TailwindCSS, GSAP, Framer Motion Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-yellow)](https://greensock.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.18.2-blue)](https://www.framer.com/motion/)

A modern, fully responsive coffee shop landing page for **Coffee & Joy - Zenbrew**, built with Next.js 15, React, TypeScript, and TailwindCSS. This project is designed for learning and instruction: it showcases the App Router, client and server components, advanced animations (GSAP, Framer Motion, Locomotive Scroll), SEO metadata, and a component-based structure you can reuse in other projects.

- **Live Demo:** [https://coffeeshop-ui-1.vercel.app/](https://coffeeshop-ui-1.vercel.app/)

![Screenshot 2024-09-13 at 01 47 46](https://github.com/user-attachments/assets/0540cd31-1d11-4865-9f6b-bfa3577a48a6) ![Screenshot 2024-09-13 at 01 48 08](https://github.com/user-attachments/assets/1c53b42c-90fd-4faf-9841-4829ff9ca684) ![Screenshot 2024-09-13 at 01 48 43](https://github.com/user-attachments/assets/c6351c18-0505-4988-8393-ed4028379308) ![Screenshot 2024-09-13 at 01 49 07](https://github.com/user-attachments/assets/079eb742-a55e-474a-aafb-153e0789346b) ![Screenshot 2024-09-13 at 01 49 27](https://github.com/user-attachments/assets/5ccf96ea-f9ba-41d8-85b9-1ac3e117b785) ![Screenshot 2024-09-13 at 01 51 04](https://github.com/user-attachments/assets/bef41b9a-4e79-4332-bab5-23d8617f3998) ![Screenshot 2024-09-13 at 01 51 58](https://github.com/user-attachments/assets/18bbac92-6dfa-4f67-b3ea-1a635c920d68)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack & Dependencies](#tech-stack--dependencies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables & .env](#environment-variables--env)
- [Available Scripts](#available-scripts)
- [Routes & Pages](#routes--pages)
- [Components Walkthrough](#components-walkthrough)
- [How Features Work](#how-features-work)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Overview

This is a **static frontend** website for a fictional coffee shop **Coffee & Joy - Zenbrew**. There is **no backend or API**: all content is in components and data arrays. The project is ideal for learning:

- **Next.js App Router** – file-based routing, `app/layout.tsx`, `app/page.tsx`
- **TypeScript** – typed props, interfaces, and type-safe JSX
- **TailwindCSS** – utility classes, custom theme (colors, fonts, breakpoints)
- **Animations** – GSAP ScrollTrigger (horizontal scroll), Framer Motion (nav, letters), Locomotive Scroll (smooth scroll & parallax)
- **SEO** – metadata, Open Graph, Twitter Cards, canonical URL in `app/layout.tsx`

The single page flows: **Hero → Explore → About → Menu → Opening Hours → Testimonials**, with a shared **Header** and **Footer**.

---

## Features

| Feature                   | Description                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| **Modern UI**             | Clean layout with Cormorant Upright (headings) and Open Sans (body), custom colors and backgrounds |
| **Responsive**            | Mobile-first; breakpoints `sm`, `md`, `lg`, `xl` (custom at 1430px) in Tailwind                    |
| **Video hero**            | Full-viewport hero with autoplay muted video, overlay, headline, and CTA button                    |
| **Smooth scroll**         | Locomotive Scroll for smooth scrolling and parallax (`data-scroll`, `data-scroll-speed`)           |
| **Horizontal scroll**     | GSAP ScrollTrigger pins the About section and animates horizontal panels                           |
| **Animated nav**          | Hamburger menu with Framer Motion (height animation + letter-by-letter link animation)             |
| **Testimonials carousel** | Swiper.js with navigation arrows and multiple slides                                               |
| **SEO**                   | Title template, description, keywords, authors, Open Graph, Twitter, icons, robots in root layout  |
| **Performance**           | Next.js Image, dynamic import for Locomotive Scroll, font optimization via `next/font`             |

---

## Tech Stack & Dependencies

### Core

- **Next.js 15** – React framework with App Router, server/client components, and built-in optimizations.
- **React 18** – UI library; this project uses hooks (`useState`, `useEffect`, `useLayoutEffect`, `useRef`).
- **TypeScript 5** – Typed JavaScript; see `type.d.ts` for Locomotive Scroll module declaration.
- **TailwindCSS 3.4** – Utility-first CSS; theme in `tailwind.config.ts`, base/component/utility styles in `app/globals.css`.

### Animation & UI

- **Framer Motion 11** – Declarative animations (e.g. `motion.nav`, `AnimatePresence`, variants). Used in Header/Nav and NavList.
- **GSAP 3.14 + ScrollTrigger** – Timeline and scroll-driven animations. Used in About for horizontal pinned scroll.
- **Locomotive Scroll 5** – Smooth scroll and parallax. Initialized in `app/page.tsx` via dynamic import; elements use `data-scroll` and `data-scroll-speed`.
- **Swiper 12** – Touch-friendly slider. Used in Testimonials with `Swiper`, `SwiperSlide`, and `Navigation` module.
- **React Icons 5** – Icon set (e.g. `FaYoutube`, `IoMdQuote`) used in Footer and Testimonials.
- **Split-Type** – Listed in dependencies for possible text-splitting animations (not used in current UI; can be used for reusable text effects).

### Dev

- **ESLint + eslint-config-next** – Linting and Next-specific rules.
- **PostCSS** – Used by Tailwind for processing CSS.
- **@types/node, @types/react, @types/react-dom** – TypeScript type definitions.

**Example: how a dependency is used**

- **Framer Motion** – In `Nav.tsx`, the nav expands/collapses with `motion.nav` and `variants`; in `NavList.tsx`, each link’s letters animate with `motion.span` and custom variants. This gives a clear, reusable pattern for animated menus.

---

## Project Structure

```bash
coffeeshop-1/
├── app/
│   ├── layout.tsx          # Root layout: metadata, fonts, Header, Footer, {children}
│   ├── page.tsx            # Home: mounts Hero, Explore, About, Menu, OpeningHours, Testimonials + Locomotive init
│   ├── globals.css         # Tailwind layers + custom .h1, .h2, .lead, .btn, Swiper overrides
│   └── favicon.ico         # Site favicon (optional; path used in metadata)
├── components/
│   ├── Header.tsx          # Logo, hamburger button, AnimatePresence + Nav
│   ├── Hero.tsx            # Video hero, overlay, headline, separator, CTA
│   ├── About.tsx           # GSAP horizontal scroll panels (Our Journey, Promise, Team)
│   ├── Badge.tsx           # Decorative badge image (props: containerStyles)
│   ├── Separator.tsx       # Decorative line (props: bg = "accent" | "white")
│   ├── Footer.tsx          # Logo, links, social icons, copyright
│   ├── OpeningHours.tsx     # Two-column: image + badge, hours content + program image
│   ├── Testimonials.tsx    # Swiper carousel with Navigation module
│   ├── Explore/
│   │   ├── Explore.tsx     # Three-column layout; left/right ExploreItems, center image
│   │   └── ExploreItem.tsx  # Icon, title, description (props: itemCSS, icon, text)
│   ├── Menu/
│   │   ├── Menu.tsx        # Section title, grid of MenuItems, CTA
│   │   └── MenuItem.tsx    # Circular image, name, dashed line, price, description
│   └── Nav/
│       ├── Nav.tsx         # motion.nav with height animation
│       └── NavList.tsx     # Animated nav links (letter animation via Framer Motion)
├── public/
│   └── assets/             # Images, logo, video, SVGs (hero, about, explore, menu, footer, etc.)
├── next.config.mjs         # Next.js config (defaults; extensible for images, env, etc.)
├── tailwind.config.ts      # Content paths, theme (container, screens, colors, fonts, backgroundImage)
├── tsconfig.json           # TypeScript config (paths "@/*" -> "./*")
├── type.d.ts                # declare module "locomotive-scroll" for TypeScript
├── .eslintrc.json          # extends "next/core-web-vitals"
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** (or yarn, pnpm, bun)

### Installation and run

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/coffeeshop-1.git
   cd coffeeshop-1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Go to [http://localhost:3000](http://localhost:3000). You should see the full landing page with hero, sections, and animations.

No database or API setup is required. The app runs entirely on the frontend with static content.

---

## Environment Variables & .env

**This project does not require any environment variables to run.** There is no `.env` or `.env.local` file in the repo, and the app works without one.

If you later add a backend, analytics, or feature flags, you can introduce env vars as follows:

- **Create** `.env.local` in the project root (do not commit it; it is typically in `.gitignore`).
- **Next.js rules:**
  - Variables exposed to the browser must be prefixed with `NEXT_PUBLIC_`.
  - Server-only variables have no prefix.
- **Example (optional):**

  ```bash
  # .env.local (optional – only if you add APIs or services)

  # Public (available in browser)
  NEXT_PUBLIC_SITE_URL=https://coffeeshop-ui-1.vercel.app
  NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

  # Private (server-only)
  # API_SECRET=your-secret
  ```

- **Usage in code:** `process.env.NEXT_PUBLIC_SITE_URL`, etc. Restart the dev server after changing `.env.local`.

---

## Available Scripts

| Command         | Description                                                                        |
| --------------- | ---------------------------------------------------------------------------------- |
| `npm run dev`   | Start dev server at [http://localhost:3000](http://localhost:3000) with hot reload |
| `npm run build` | Production build (output in `.next`)                                               |
| `npm run start` | Run production server (run `npm run build` first)                                  |
| `npm run lint`  | Run ESLint (Next.js config)                                                        |

---

## Routes & Pages

This app uses the **Next.js App Router** with a single route:

- **`/`** – Home page implemented by `app/page.tsx`.

There are **no API routes** in this project. All data is in component files (e.g. `menuItems` in `Menu.tsx`, `testimonials` in `Testimonials.tsx`, `data` in `About.tsx`). To add API routes later, you would add files under `app/api/` (e.g. `app/api/hello/route.ts`).

---

## Components Walkthrough

| Component        | Purpose          | Notable details                                                                                                                                         |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **layout.tsx**   | Root layout      | Metadata (title, description, keywords, authors, OG, Twitter, icons, robots), Google Fonts (Cormorant Upright, Open Sans), global Header and Footer     |
| **page.tsx**     | Home page        | Client component; dynamically imports and initializes Locomotive Scroll in `useEffect`; composes Hero, Explore, About, Menu, OpeningHours, Testimonials |
| **Header**       | Top bar          | Logo (Next.js `Link` + `Image`), hamburger that toggles `navActive`; `AnimatePresence` + `Nav` for open/close                                           |
| **Nav**          | Mobile menu      | `motion.nav` with height variants (0 → 85vh); contains `NavList`                                                                                        |
| **NavList**      | Menu links       | Framer Motion letter animation per link; links point to `/` (same page sections could be scroll targets later)                                          |
| **Hero**         | Top section      | Video background, overlay, Badge, headline “Coffee & Joy”, Separator, lead text, “Our menu” button; parallax via `data-scroll` / `data-scroll-speed`    |
| **Explore**      | Coffee types     | Left/right columns of `ExploreItem`s (icon, title, description); center column with parallax cup image                                                  |
| **About**        | Story panels     | GSAP ScrollTrigger: section pinned while horizontal panels (Our Journey, Promise, Team) scroll; images and text per panel                               |
| **Menu**         | Product grid     | Section title, grid of `MenuItem`s (image, name, dashed line, price, description), “View full menu” button                                              |
| **OpeningHours** | Hours block      | Two columns: image + Badge (xl only), and hours content with program image                                                                              |
| **Testimonials** | Reviews          | Swiper with `Navigation`; slides show quote icon, message, name, profession                                                                             |
| **Footer**       | Bottom           | Logo, nav links, social icons (react-icons), copyright                                                                                                  |
| **Badge**        | Decorative asset | Renders badge image; `containerStyles` prop for layout/sizing                                                                                           |
| **Separator**    | Divider line     | `bg` prop: `"accent"` or `"white"` to pick SVG                                                                                                          |

---

## How Features Work

### Smooth scroll and parallax (Locomotive Scroll)

- In `app/page.tsx`, `useEffect` runs once on mount and dynamically imports `locomotive-scroll`, then instantiates it. No options object is passed, so defaults are used.
- Any element with `data-scroll` is tracked; `data-scroll-speed="0.4"` (e.g. in Hero) makes it move at 0.4× scroll speed (parallax). The main scroll container is the default one Locomotive Scroll attaches to.

### Horizontal scroll (GSAP)

- In `About.tsx`, `useLayoutEffect` registers `ScrollTrigger` and runs a GSAP animation: the horizontal section is pinned while the content moves horizontally. Refs (`scrollableSectionRef`, `scrollTriggerRef`) target the moving block and the trigger element so ScrollTrigger can measure scroll progress and drive the animation.

### Animated nav (Framer Motion)

- **Header:** `navActive` state toggles visibility of `Nav`. `AnimatePresence mode="wait"` allows exit animation before unmount.
- **Nav:** `motion.nav` with `initial`, `animate`, `exit` and a variants object that animates `height` from 0 to 85vh.
- **NavList:** Each link’s text is split into letters (or chunks); each is a `motion.span` with variants for y and opacity and staggered delay for an “animate in” effect.

### SEO (metadata)

- In `app/layout.tsx`, the exported `metadata` object sets `title` (with template), `description`, `keywords`, `authors`, `creator`, `publisher`, `metadataBase`, `openGraph`, `twitter`, `icons`, `robots`, `applicationName`, and `other` (e.g. contact). Next.js turns these into `<meta>` and related tags in the document head.

### Theming (Tailwind)

- `tailwind.config.ts` extends the theme with custom `colors` (primary, secondary, accent), `fontFamily` (CSS variables from `next/font`), `screens`, and `backgroundImage` (hero_overlay, opening_hours, footer). Classes like `font-primary`, `text-accent`, `bg-hero_overlay` come from here. Global utilities like `.h1`, `.h2`, `.lead`, `.btn` are defined in `app/globals.css` with `@layer base`.

### Code snippets (examples)

**Root layout metadata (SEO):**

```ts
// app/layout.tsx
export const metadata: Metadata = {
  title: { default: "Coffee & Joy - Zenbrew | ...", template: "%s | Coffee & Joy - Zenbrew" },
  description: "Experience the joy of exceptional coffee...",
  keywords: ["coffee shop", "coffee", "cafe", ...],
  authors: [{ name: "Arnob Mahmud", url: "https://www.arnobmahmud.com" }],
  openGraph: { type: "website", url: "https://coffeeshop-ui-1.vercel.app", ... },
  // ...
};
```

**Swiper carousel (Testimonials):**

```tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

<Swiper navigation={true} modules={[Navigation]}>
  {testimonials.map((person, index) => (
    <SwiperSlide key={index}>{/* slide content */}</SwiperSlide>
  ))}
</Swiper>;
```

**Custom Tailwind classes in globals.css:**

```css
@layer base {
  .h1 {
    @apply text-[70px] xl:text-[150px] leading-[1.1] font-semibold;
  }
  .h2 {
    @apply text-[56px] xl:text-[80px] leading-[1.2] font-bold;
  }
  .btn {
    @apply min-w-[156px] h-[54px] px-6 bg-accent hover:bg-accent-hover ... transition-all;
  }
}
```

---

## Reusing Components in Other Projects

You can copy components and adapt them:

1. **Copy the component file(s)** and any assets they reference from `public/assets/`.
2. **Satisfy dependencies** – e.g. install `framer-motion`, `gsap`, `swiper`, `react-icons`, `locomotive-scroll` if you use those components.
3. **Tailwind** – Reuse the same theme entries (colors, fonts, `backgroundImage`) and any custom classes (e.g. `.btn`, `.h1`) from `globals.css` and `tailwind.config.ts`, or map class names to your own theme.
4. **Types** – If you use Locomotive Scroll, copy `type.d.ts` or ensure the module is typed so TypeScript compiles.

**Example: reusing the Swiper testimonials**

- Copy `Testimonials.tsx`, add `import "swiper/css"` and `import "swiper/css/navigation"`, and ensure `swiper` is installed. Replace the `testimonials` array with your data. Use the same structure (`Swiper` + `SwiperSlide` + `Navigation` module) in any page or layout.

**Example: reusing the Menu grid**

- Copy `Menu.tsx` and `MenuItem.tsx`. Keep the same props interface for `MenuItem` (imgSrc, name, description, price). Replace `menuItems` with your own array. Drop into any page or section.

---

## Keywords

coffee shop, coffee, cafe, espresso, latte, cappuccino, cold brew, coffee bar, zenbrew, premium coffee, artisan coffee, specialty coffee, coffee roaster, coffee experience, sustainable coffee, coffee menu, coffee house, coffee culture, barista, coffee beans, Next.js, React, TypeScript, TailwindCSS, GSAP, Framer Motion, Locomotive Scroll, Swiper, landing page, frontend, responsive, animations, SEO.

---

## Conclusion

This repo is a **learning-focused** landing page: one route, no backend, content in components. You get a full pipeline from layout and metadata to animations and responsive layout. Use it as a reference for App Router structure, client-side animation libraries, and Tailwind theming, and reuse any component or pattern in your own projects.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
