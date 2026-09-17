# South Side International Resources (SSIR)

A modern Next.js corporate website for a maritime consultancy operating in global port, shipping, and marine governance sectors.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![SendByte](https://img.shields.io/badge/SendByte-Integrated-1A7F5A?style=flat)](https://sendbyte.africa/)

---

## Overview

South Side International Resources (SSIR) is an international maritime consultancy headquartered in Lagos, Nigeria. The platform presents the firm’s expertise in maritime regulation, port operations, vessel compliance, government policy, and strategic marine advisory services.

This repository contains the complete corporate web portal, designed to reflect a restrained, institutional style consistent with maritime and regulatory sectors.

---

## Core Features

### Institutional branding and design
- Deep maritime palette and clean editorial layout
- Professional, minimal, international-standard presentation
- High-contrast typography and structured content sections
- Responsive design for desktop, tablet, and mobile devices

### Service-focused structure
The site includes dedicated sections for:
- Regulatory Marine Consultancy
- Maritime Security & Intelligence
- Maritime Policy Development
- Ports Operations & Development
- Commercial Marine Consultancy

### Performance-first frontend
- Next.js 15 App Router
- Optimized image delivery with AVIF/WebP support
- Static generation for fast loading
- Mobile-first responsive navigation and layout

### Contact and inquiry workflow
- Formal inquiry form for client submissions
- Spam-protection honeypot field
- Email dispatch support via SendByte, Web3Forms, Brevo, or Resend
- Development fallback logging for local testing

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| [Next.js 15.2.1](https://nextjs.org/) | React framework and app routing |
| [React 19](https://react.dev/) | UI development |
| [TypeScript 5.7](https://www.typescriptlang.org/) | Static typing and safer development |
| [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first styling and design system |
| [SendByte Africa](https://sendbyte.africa/) | Email dispatch for inquiries |

---

## Project Structure

```text
.
├── public/
│   └── images/                  # Maritime imagery and branding assets
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/
│   │   │   └── contact/
│   │   ├── contact/
│   │   ├── news/
│   │   ├── services/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   └── types/
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js 18.18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ominiknowette/South-Side-International-Resources.git
cd South-Side-International-Resources
```

2. Install dependencies:

```bash
npm install
```

3. Create your local environment file:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Environment Variables

The contact form is handled in `src/app/api/contact/route.ts`. Update your `.env.local` file with the provider you want to use.

```env
CLIENT_RECEIVING_EMAIL=info@southsideresources.com

SENDBYTE_API_KEY=
SENDBYTE_SENDER_EMAIL=inquiries@southsideresources.com

WEB3FORMS_ACCESS_KEY=

BREVO_API_KEY=
BREVO_SENDER_EMAIL=inquiries@yourdomain.com

RESEND_API_KEY=
RESEND_SENDER_EMAIL=onboarding@resend.dev
```

### Notes
- Without API keys, the app logs inquiry data in development mode instead of sending email.
- The recommended production setup is to configure one of the supported outbound providers.

---

## Build and Deployment

### Production build

```bash
npm run build
```

### Run production server

```bash
npm run start
```

### Recommended platforms
- Vercel
- Netlify
- VPS or Docker-based deployment

---

## Contact

- Headquarters: Lagos, Nigeria
- Corporate registration: RC: SSIR 2535293
- Hotline: +234 809 745 6789
- Email: info@southsideresources.com

---

## License

All rights reserved © South Side International Resources.

This project contains proprietary material, institutional branding, and consultancy content intended for the company’s official digital presence.

---

## Summary

This repository is a production-ready corporate website for SSIR, combining modern Next.js architecture, institutional branding, and a robust contact workflow for global maritime engagements.
