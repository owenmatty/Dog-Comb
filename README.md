# Dog&Comb — Laravel 11 + Vue 3 Starter Scaffold

Production-oriented starter structure for a dog grooming brand landing page with Laravel 11 backend readiness and Vue 3 front-end rendering.

## Stack
- Laravel 11 (API-ready routing/controller pattern)
- Vue 3 + Composition API
- Vite
- Tailwind CSS
- ESLint + Prettier

## Front-End Structure

```text
resources/js/
  ├── components/
  ├── layouts/
  ├── pages/
  └── composables/
```

## Quick Start

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install
npm run dev
```

## Quality Commands

```bash
npm run lint
npm run format:check
```
