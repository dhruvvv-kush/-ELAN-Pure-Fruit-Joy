<div align="center">

# 🍊 ÉLAN — PURE FRUIT JOY

### *A Cinematic Scrollytelling & Full-Stack Next.js 15 Digital Experience*

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

---

**ÉLAN** is an Awwwards-inspired luxury digital brand experience for 100% cold-pressed, unfiltered organic fruit nectar harvested at peak sweetness in **Bhopal, Madhya Pradesh, India**.

</div>

---

## ✨ Key Features

- 🎞️ **240-Frame Canvas Film Engine**: Frame-by-frame HTML5 Canvas scrollytelling film scrubbing through high-resolution cinematic commercial footage as the user scrolls.
- 👑 **Bespoke Luxury Typography**: Cormorant Garamond serif headings with 24K gold shimmer highlights and drop-shadow contrast.
- ⚡ **Full-Stack Next.js 15 Backend**:
  - `POST /api/orders`: Saves customer juice reservations, validates payloads, and calculates Indian Rupee (₹) prices with unique tracking IDs (e.g. `ELAN-BHOPAL-90812`).
  - `GET /api/orders`: Real-time backend API powering the Admin Orders Portal.
- 📊 **Live Admin Orders Dashboard**: Interactive drawer in the footer displaying real-time revenue analytics, customer Bhopal shipping addresses, and reservation counters.
- 🍾 **Interactive Bottle Craftsmanship**: Hotspots with annotations highlighting Italian glass relief, cold hydraulic extraction, and sustainable oak closures.
- 📜 **Flavour Spec Matrix**: Toggleable comparison matrix detailing Brix sugar density, nutrient bio-actives, and harvest origin across all 4 signature blends (*Mango Bliss, Guava Glow, Strawberry Bliss, Mixed Berry Bliss*).
- 📜 **Lenis Smooth Scroll Integration**: Native smooth scrolling with `data-lenis-prevent` attributes enabling smooth modal container scrolling.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | [Next.js 15](https://nextjs.org/) (App Router), React 19, TypeScript |
| **Styling & Design System** | Tailwind CSS, Custom Glassmorphism, Gold Shimmer Gradients |
| **Scrollytelling & Film** | HTML5 Canvas 2D Context API, RequestAnimationFrame |
| **Animations** | Framer Motion, Canvas Confetti |
| **Smooth Scroll** | Lenis Smooth Scroll (`@studio-freight/lenis`) |
| **Backend & API** | Next.js Server Actions & Route Handlers (`app/api/orders/route.ts`) |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js 18.x** or higher installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dhruvvv-kush/-ELAN-Pure-Fruit-Joy.git
   cd -ELAN-Pure-Fruit-Joy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` or `http://localhost:3010`.

---

## 📦 Production Build

To build the project for production and test static page generation:

```bash
npm run build
npm start
```

---

## 📁 Directory Structure

```
ELAN/
├── app/
│   ├── api/
│   │   └── orders/
│   │       └── route.ts         # Full-stack Next.js 15 Backend API (/api/orders)
│   ├── globals.css              # Custom design system tokens & gold gradients
│   ├── layout.tsx               # Cormorant Garamond & Inter font setup
│   ├── not-found.tsx            # Custom 404 page for static trace generation
│   └── page.tsx                 # Main application page & Lenis smooth scroll provider
├── components/
│   ├── AdminOrdersModal.tsx     # Full-stack Live Admin Dashboard drawer
│   ├── Benefits.tsx             # Bio-active nutrition glass cards
│   ├── BottleCraft.tsx          # 3D interactive bottle hotspots
│   ├── BrandPhilosophy.tsx      # Split-screen editorial spread
│   ├── CTA.tsx                  # Interactive bottle selector & confetti celebration
│   ├── FlavourSection.tsx       # Signature flavour grid & spec comparison matrix
│   ├── Footer.tsx               # Footer with Live Admin Portal link
│   ├── Gallery.tsx              # Horizontal scroll gallery track
│   ├── Hero.tsx                 # Cinematic hero arrival & particle canvas
│   ├── Navbar.tsx               # Floating glass header with ÉLAN branding
│   ├── OrderModal.tsx           # Full-stack customer reservation form
│   └── ScrollyCanvas.tsx        # 450vh sticky 240-frame Canvas film engine
├── hooks/
│   └── useImageSequence.ts      # Image preloading hook with fallback frame rendering
├── lib/
│   ├── constants.ts             # Flavour data, prices (₹), and origin specifications
│   └── utils.ts                 # Classname utility helpers
├── public/
│   ├── pr1_seq/                 # 240-frame scrollytelling PNG sequence
│   └── pr2/                     # Bottle craft high-resolution assets
├── README.md                    # Project documentation
└── package.json
```

---

## 📍 Brand & Origin Specifications

- **Brand**: ÉLAN
- **Tagline**: PURE FRUIT JOY
- **Extraction Facility**: Bhopal, Madhya Pradesh, India
- **Currency**: Indian Rupees (₹)
- **Signature Blends**:
  - Mango Bliss — `₹249`
  - Guava Glow — `₹229`
  - Strawberry Bliss — `₹269`
  - Mixed Berry Bliss — `₹299`

---

## 📜 License

Created for **ÉLAN Beverages India Pvt. Ltd.** All rights reserved.
