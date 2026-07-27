# Nicolas Thouvenin — Portfolio

Personal portfolio website showcasing my work, skills, and experience as a software developer. Built as a fast, accessible, and fully bilingual (FR/EN) single-page site, deployed on the edge via Cloudflare Workers.

[Live Website](https://nicolas-thouvenin.dev) | [GitHub Repository](https://github.com/Nico-Mugi/portfolio-v2)

## Overview

- Sections for Hero, Skills, Experience, Education, and Contact, plus a dedicated printable CV page
- Full internationalization (French / English) powered by Paraglide, with dedicated E2E coverage
- Type-safe routing with TanStack Router / TanStack Start
- Component library built on shadcn/ui and Tailwind CSS v4
- Deployed globally on Cloudflare Workers for near-instant load times

## Tech Stack

**Core**
- React 19
- TypeScript
- Vite
- TanStack Start / TanStack Router

**UI**
- Tailwind CSS v4
- Shadcn UI
- Lucide & Simple Icons

**Internationalization**
- Paraglide JS (compile-time, type-safe i18n)

**Testing**
- Playwright (E2E testing)

**Infrastructure**
- Cloudflare Workers (hosting & deployment)
- Wrangler

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/Nico-Mugi/portfolio-v2.git
cd portfolio-v2
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Deploy (Cloudflare Workers)

```bash
npm run deploy
```

## Testing

End-to-end tests are written with Playwright, covering the CV layout and i18n behavior.

```bash
npm run test          # run the full E2E suite
npm run test:ui       # interactive UI mode
npm run test:headed   # run with a visible browser
npm run test:debug    # step through tests
npm run test:report   # view the last HTML report
```

## Project Structure

```
src/
├── components/
│   ├── portfolio/    # Hero, skills, experience, education, contact
│   ├── cv/            # Printable CV components
│   └── shadcn/        # UI primitives
├── routes/            # TanStack Router routes (home, /cv)
├── lib/paraglide/      # Generated i18n runtime
└── tests/e2e/          # Playwright test suites
messages/                # en.json / fr.json translation source files
```

## Contact

- Website: [nicolas-thouvenin.dev](https://nicolas-thouvenin.dev)
- Email: nico.thouvenin13@gmail.com
- GitHub: [@Nico-Mugi](https://github.com/Nico-Mugi)

## License

This project is licensed under the [MIT License](LICENSE).
