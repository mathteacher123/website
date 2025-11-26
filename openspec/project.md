# Project Context

## Purpose

Astrowind is a free, customizable template for building fast, modern websites using Astro and Tailwind CSS. It provides pre-built components, layouts, and pages for blogs, landing pages, and business websites, enabling quick setup and deployment of static sites.

## Tech Stack

- Astro (static site generator and web framework)
- Tailwind CSS (utility-first CSS framework)
- TypeScript (programming language)
- MDX (markdown with JSX for content)
- ESLint (linting)
- Prettier (code formatting)
- Astro integrations (RSS, sitemap, analytics, etc.)

## Project Conventions

### Code Style

- Use `~/` alias for src directory imports (e.g., `~/components/Logo.astro`)
- Prettier with 120 print width, single quotes, 2 spaces, es5 trailing commas
- TypeScript strict mode enabled, use interfaces for component props
- PascalCase for components, camelCase for variables/functions
- ESLint with TypeScript and Astro plugins, unused vars with `_` prefix ignored
- CSS: Use Tailwind CSS classes, avoid inline styles, prefer semantic HTML
- Astro: Use frontmatter for server-side logic, client directives for interactivity

### Architecture Patterns

- Component-based architecture using Astro components
- Organized into feature-based directories: components/blog, components/ui, components/widgets
- Layouts for different page types (LandingLayout, PageLayout, etc.)
- Content managed via MDX files in content/ directory
- Utilities in utils/ for shared logic

### Testing Strategy

No specific testing framework configured; relies on Astro's built-in checks and manual verification.

### Git Workflow

Not specified; standard Git practices assumed.

## Domain Context

Static site generation for websites, focusing on performance, SEO, and developer experience. Supports blogs, landing pages, and business sites with pre-built widgets and components.

## Important Constraints

- Node.js version: ^18.17.1 || ^20.3.0 || >= 21.0.0
- Static site generation limits dynamic features

## External Dependencies

- Astro integrations for RSS, sitemap, analytics
- Fontsource for fonts
- Icon libraries via astro-icon
