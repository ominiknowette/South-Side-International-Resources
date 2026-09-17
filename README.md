# South Side International Resources (SSIR)

> **Institutional Maritime Consultancy for Global Waterborne Industries**  
> Operating 24/7 worldwide to develop, standardize, and protect sovereign maritime domains, port infrastructure, and commercial fleets.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![SendByte](https://img.shields.io/badge/SendByte-Integrated-1A7F5A?style=flat)](https://sendbyte.africa/)

---

## Executive Overview

**South Side International Resources (SSIR)** is an international maritime consultancy headquartered in Lagos, Nigeria. SSIR bridges the gap between complex multilateral conventions—such as those codified by the **International Maritime Organization (IMO)**—and the practical, operational realities of coastal state governance, commercial fleet operations, and littoral domain awareness.

This repository contains the complete, production-ready corporate web portal for SSIR, engineered according to strict **Maritime Institutional Minimalism** design principles, responsive touch-first navigation, and automated transactional inquiry dispatch powered by **SendByte Africa**.

---

## Key Features & Capabilities

### 1. Institutional Design & Visual Identity
- **Restrained Maritime Palette**: Deep Admiralty Navy (`#0B1F33`), Oceanic Slate (`#005691`), Cool Steel borders, and crisp high-contrast typography.
- **Pure Vector Branding**: Seamless SVG integrations of official SSIR insignia and **Lloyd's List Intelligence** alliance emblems without raster artifacts or white square cutouts.
- **Curated Maritime Imagery**: High-definition operational photography highlighting deepwater container terminals, tactical interceptors, dry dock shipyards, and commercial container fleets.
- **Editorial Layout**: Clean typography devoid of artificial numerical badges (`Criterion 01`, `Discipline A`, etc.), reflecting standard international regulatory publications.

### 2. High-Performance Architecture
- **Next.js 15 App Router**: Fully statically pre-rendered routes for instant loading speeds and zero latency.
- **AVIF & WebP Optimization**: Automatic next-gen image compression configured in `next.config.ts`.
- **Hero Crossfade Slideshow**: Preloaded LCP hero slide (`priority`) with smooth automated crossfade and manual indicator controls.
- **Cross-Device Responsiveness**: Full-screen touch drawer navigation, iPhone SE (320px) safety constraints, and strict horizontal overflow elimination (`overflow-x: hidden`).

### 3. Five Core Practice Disciplines
Dedicated detail pages detailing statutory scopes, international frameworks, and stakeholder deliverables:
1. **[Regulatory Marine Consultancy](/services/regulatory-marine-consultancy)**: IMO Member State Audit Scheme (IMSAS), SOLAS, MARPOL, STCW, and Flag State administration.
2. **[Maritime Security & Intelligence](/services/maritime-security-intelligence)**: Domain awareness, IUU fishing mitigation, ISPS compliance, and Lloyd's List Intelligence surveillance.
3. **[Maritime Policy Development](/services/maritime-policy-development)**: Coastal cabotage legislation, national ocean governance, and port concession frameworks.
4. **[Ports Operations & Development](/services/ports-operations-development)**: Vessel Traffic Services (VTS), container yard optimization, dredging, and multi-modal logistics.
5. **[Commercial Marine Consultancy](/services/commercial-marine-consultancy)**: Pre-purchase surveys, condition vetting, shipyard dry dock management, and green recycling.

### 4. Strategic Intelligence Alliance
Showcasing the SSIR & **Lloyd's List Intelligence** partnership across real-time satellite AIS, SeaSearcher vessel tracking, and APEX cargo flow forensics.

### 5. Automated Inquiry Dispatch (SendByte Africa)
- **Zero Client Verification**: Uses developer API keys without requiring client confirmation codes or manual inbox activations.
- **Executive HTML Template**: Inquiries are automatically formatted into an institutional HTML dispatch card.
- **1-Click Reply**: Native `Reply-To` header allows the receiver to respond directly to the prospective inquirer with one click.
- **Anti-Spam Defense**: Built-in invisible honeypot field (`_gotcha`) intercepts and silently drops automated bot traffic.

---

## Tech Stack

| Technology | Role |
| :--- | :--- |
| **[Next.js 15.2.1](https://nextjs.org/)** | React Framework (App Router, Server Components, API Routes) |
| **[React 19](https://react.dev/)** | Core UI Component Library |
| **[TypeScript 5.7](https://www.typescriptlang.org/)** | End-to-end static type safety |
| **[Tailwind CSS 3.4](https://tailwindcss.com/)** | Utility-first responsive styling and institutional design system |
| **[SendByte Africa](https://sendbyte.africa/)** | Transactional communications API for African infrastructure |

---

## Project Structure

```
├── public/
│   └── images/               # High-definition maritime photography and official SVGs
├── src/
│   ├── app/
│   │   ├── about/            # Corporate story, mandate, and specialist composition
│   │   ├── api/
│   │   │   └── contact/      # Outbound inquiry dispatch endpoint (SendByte, Brevo, Web3Forms)
│   │   ├── contact/          # Formal advisory inquiry portal and headquarters coordinates
│   │   ├── news/             # Strategic bulletins and intelligence publications
│   │   ├── services/         # Practice area index and 5 specialized discipline pages
│   │   ├── globals.css       # Design tokens, typography variables, overflow guards
│   │   ├── layout.tsx        # Root layout with metadata and responsive viewport settings
│   │   └── page.tsx          # Homepage with Hero, About, Practice Matrix, Alliance
│   ├── components/
│   │   ├── layout/           # Header, Navigation drawer, and Institutional Footer
│   │   ├── sections/         # Hero slideshow, ContactForm, ServiceEditorialItem, etc.
│   │   └── ui/               # Reusable primitives (Container, Button)
│   ├── data/                 # Structured content definitions for services and bulletins
│   └── types/                # TypeScript interfaces for services, news, and forms
├── .env.example              # Template configuration for email dispatch providers
├── next.config.ts            # Image optimization formats and Turbopack setup
├── tailwind.config.ts        # Custom institutional theme tokens
└── tsconfig.json             # TypeScript compiler settings
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher (Node.js 20+ recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/southside-maritime-agency.git
   cd southside-maritime-agency
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy the example environment file to create your local environment:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` to configure your dispatch preferences (see section below).

4. **Launch the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables Configuration

Inquiries submitted through `/contact` are processed by `src/app/api/contact/route.ts`. Configure your desired provider in `.env.local`:

```env
# Destination email address where inquiries will be delivered
CLIENT_RECEIVING_EMAIL=info@southsideresources.com

# -----------------------------------------------------------------------------
# SERVICE OPTION 1: SendByte Africa (Recommended - 3,000 free emails/month)
# Sign up at https://app.sendbyte.africa/signup and grab your API key
# -----------------------------------------------------------------------------
SENDBYTE_API_KEY=sk_live_your_api_key_here
SENDBYTE_SENDER_EMAIL=inquiries@southsideresources.com

# -----------------------------------------------------------------------------
# SERVICE OPTION 2: Web3Forms (Instant Access Key, zero password needed)
# -----------------------------------------------------------------------------
WEB3FORMS_ACCESS_KEY=

# -----------------------------------------------------------------------------
# SERVICE OPTION 3: Brevo / Sendinblue (300 free emails/day)
# -----------------------------------------------------------------------------
BREVO_API_KEY=
BREVO_SENDER_EMAIL=inquiries@yourdomain.com
```

*Note: In development without API keys, the server logs submissions cleanly to the console and simulates a successful submission.*

---

## Build & Production Deployment

### Production Build
To create an optimized production build:
```bash
npm run build
```
This statically generates all 14 routes and verifies TypeScript types and linting.

### Run Production Server
```bash
npm run start
```

### Recommended Hosting Providers
- **[Vercel](https://vercel.com/)**: Seamless zero-configuration deployment for Next.js. Simply import your GitHub repository and set your environment variables in the Vercel Project Settings.
- **[Netlify](https://www.netlify.com/)**: Connect your repository and deploy with `@netlify/plugin-nextjs`.
- **Node.js VPS / Docker**: Build and host using standard `next start` on PM2 or containerized infrastructure.

---

## Corporate Coordinates

- **Headquarters**: Lagos, Nigeria
- **Corporate Registration**: RC: SSIR 2535293
- **24/7 Global Support Hotline**: `+234 809 745 6789`
- **Official Inquiries**: `info@southsideresources.com`

---

## License & Confidentiality

All rights reserved © South Side International Resources. Proprietary institutional content, operational methodologies, and branding assets are protected under international copyright and commercial maritime nondisclosure conventions.
#   S o u t h - S i d e - I n t e r n a t i o n a l - R e s o u r c e s  
 