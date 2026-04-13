# 🏋️ Fitness Sports Center

A fully responsive promotional website for **Fitness Sports Center** — a modern gym brand built as part of a web development internship evaluation.

---

## 🔗 Live Demo

👉 [https://fsc-official.vercel.app](https://fsc-official.vercel.app)

---

## 🎨 Figma Design

👉 [Figma Design Link](https://www.figma.com/design/Jevozk43F9WgcikF2LQ5LP/Fitness-Sports-Center?node-id=0-1&t=fsox5dqxiHqQz2Di-1)

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework with App Router |
| **JavaScript** | Programming language |
| **Tailwind CSS** | Utility-first styling |
| **React Hook Form** | Advanced form handling |
| **Next.js API Routes** | Contact form backend |
| **Vercel** | Deployment |

---

## 📁 Folder Structure
```
fitness-sports-center/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js        ← Contact form API
│   ├── components/
│   │   ├── Navbar.js           ← Navigation with dark mode
│   │   ├── Footer.js           ← Footer with links
│   │   └── ThemeProvider.js    ← Dark/light mode context
│   ├── sections/
│   │   ├── HeroSection.js      ← Hero with animated counters
│   │   ├── AboutSection.js     ← About with scroll reveal
│   │   ├── ServicesSection.js  ← Services with search & filter
│   │   ├── MembershipSection.js← Pricing plans
│   │   ├── TrainersSection.js  ← Trainer cards
│   │   └── ContactSection.js   ← Contact form
│   ├── hooks/
│   │   └── useCounter.js       ← Animated counter hook
│   ├── globals.css             ← Global styles
│   ├── layout.js               ← Root layout with fonts
│   └── page.js                 ← Main page
├── public/
│   └── logo.png                ← Gym logo
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18 or higher
- npm

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/samith-shashika/fitness-sports-center.git
```

**2. Navigate to the project folder**
```bash
cd fitness-sports-center
```

**3. Install dependencies**
```bash
npm install
```

**4. Start the development server**
```bash
npm run dev
```

**5. Open in browser**
```
http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

---

## ✨ Features

### Core Features
- ✅ Responsive design — mobile, tablet, desktop
- ✅ Hero section with animated stat counters
- ✅ About section with scroll reveal animations
- ✅ Services section
- ✅ Membership pricing plans
- ✅ Trainers section
- ✅ Contact form with validation and success feedback

### Bonus Features
- ✅ **Dark mode** — toggle with localStorage persistence
- ✅ **Search & filter** — live search and category filter in services
- ✅ **Animations** — scroll reveal, counter, float, shimmer effects
- ✅ **API integration** — Next.js API route for contact form
- ✅ **Advanced form handling** — React Hook Form, real-time validation, character counter, loading state

---

## 🎨 Brand Colors

| Color | Hex |
|---|---|
| Gold | `#C89B0A` |
| Dark Brown | `#1E1A0E` |
| Black | `#080808` |
| Dark Gray | `#2E2E2E` |
| Off White | `#F2EFE6` |

---

*Built for Koncepthive Web Development Internship Evaluation*
