# Bhargav Dhamecha — Portfolio (Angular 21)

Personal portfolio site built with Angular (standalone components, signals, new
`@if`/`@for` control flow) and content sourced from the resume. The contact
form posts to a Spring Boot backend (see `../spring-backend`).

## Structure

```
src/app/
  core/
    data/portfolio-data.ts        # experience, skills, education content
    models/                       # TypeScript interfaces
    services/contact.service.ts   # HTTP client -> POST /api/contact
  shared/
    navbar/                       # sticky nav + mobile menu
    footer/
    contact-form/                 # reactive form, calls ContactService
  pages/
    home/                         # hero, about, experience, skills, education, contact
  app.ts, app.routes.ts, app.config.ts
```

## Prerequisites

- Node.js 20+ and npm
- Angular CLI: `npm install -g @angular/cli@21`

## Setup

```bash
npm install
npm start          # ng serve -> http://localhost:4200
```

The dev environment (`src/environments/environment.ts`) points the contact
form at `http://localhost:8080`, which matches the default Spring Boot
backend port. Update `apiBaseUrl` in `environment.ts` /
`environment.prod.ts` once you deploy the backend.

## Build for production

```bash
npm run build       # outputs to dist/bhargav-dhamecha-portfolio
```

Deploy the contents of `dist/bhargav-dhamecha-portfolio/browser` to any
static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.) — the same
way the previous portfolio was hosted on Netlify.

## Notes

- If you don't need a live contact form, you can remove `ContactForm` /
  `ContactService` and keep the `mailto:` link in the contact section instead
  — no backend required.
- Update `src/app/core/data/portfolio-data.ts` any time your resume changes;
  everything on the page is driven from that file.
