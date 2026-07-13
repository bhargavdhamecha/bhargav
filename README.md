# Bhargav Dhamecha — Portfolio (Angular 21)

Personal portfolio site built with Angular (standalone components, signals,
new `@if`/`@for` control flow) and content sourced from the resume. The
contact form opens the visitor's email app with a `mailto:` link, prefilled
with their subject and message — no backend required.

## Structure

```
src/app/
  core/
    data/portfolio-data.ts        # experience, skills, education content
    models/contact.model.ts       # contact form field types
  shared/
    navbar/                       # sticky nav + mobile menu
    footer/
    contact-form/                 # reactive form -> builds a mailto: link
  pages/
    home/                         # hero, about, experience, skills, education, contact
  app.ts, app.routes.ts, app.config.ts
```

## Prerequisites

- **Node.js `^20.19.0 || ^22.12.0 || ^24.0.0`** (per Angular 21's official compatibility table — Node 22.12+ LTS is recommended)
- TypeScript `>=5.9.0 <6.0.0` (pulled in automatically via `npm install`)
- Angular CLI: `npm install -g @angular/cli@21`

## Setup

```bash
npm install
npm start          # ng serve -> http://localhost:4200
```

## Build for production

```bash
npm run build       # outputs to dist/bhargav-dhamecha-portfolio
```