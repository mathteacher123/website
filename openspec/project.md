# Project Context

## Purpose
AstroWind is a free and open-source website template designed for startups, small businesses, SaaS websites, professional portfolios, marketing websites, landing pages, and blogs. The project focuses on simplicity, web best practices, high performance, and SEO optimization while providing a production-ready foundation with excellent Lighthouse scores.

## Tech Stack
- **Framework**: Astro 5.0 (static site generator with SSR/hybrid support)
- **Styling**: Tailwind CSS 3.4+ with dark mode and RTL support
- **Language**: TypeScript with strict null checks enabled
- **Content**: MDX support for rich blog posts and documentation
- **Build Tools**: Vite, Astro integrations (sitemap, RSS, compression)
- **Icons**: Astro Icon with Tabler and Flat Color Icons libraries
- **Image Optimization**: Astro Assets + Unpic for universal image CDN
- **Analytics**: Google Analytics integration ready (optional)
- **SEO**: Built-in optimization with Open Graph, Twitter Cards, structured data

## Project Conventions

### Code Style
- **Formatting**: Prettier (120 character width, single quotes, semicolons, 2-space tabs, ES5 trailing commas)
- **Linting**: ESLint with TypeScript rules, ignore unused variables starting with `_`
- **Imports**: Use `~/` path alias for src/ directory, group external imports then internal imports
- **Naming**: camelCase for functions and variables, PascalCase for types and interfaces
- **TypeScript**: Strict null checks enabled, no non-null assertions allowed
- **Components**: Astro frontmatter for component logic, destructure props, use tailwind-merge for CSS class merging
- **Error Handling**: Use try/catch blocks, avoid throwing errors in Astro components

### Architecture Patterns
- **File-based Routing**: Astro pages in src/pages/ with dynamic routes supported
- **Component Organization**: Structured folders for blog/, common/, ui/, widgets/ components
- **Layout Hierarchy**: Layout.astro → PageLayout.astro → MarkdownLayout.astro for content pages
- **Configuration-Driven**: YAML config (src/config.yaml) for site settings, features, and metadata
- **Static Generation**: Default output mode for optimal performance, supports hybrid/SSR modes
- **Content Management**: File-based content in src/content/ with frontmatter processing

### Testing Strategy
- **Build Validation**: `npm run check` combines astro check, eslint, and prettier validation
- **Type Checking**: TypeScript strict mode with `astro check` for component validation
- **Code Quality**: ESLint + Prettier for consistent formatting and style enforcement
- **No Test Framework**: Currently no unit or integration tests configured (manual testing only)

### Git Workflow
- **Branching**: Standard Git workflow (main branch for production)
- **Commit Conventions**: Not formally documented, follow conventional commit patterns recommended
- **CI/CD**: GitHub Actions workflow configured for automated builds and deployments

## Domain Context
- **Target Users**: Startups, small businesses, developers, marketers, content creators
- **Use Cases**: Landing pages, professional portfolios, marketing websites, SaaS product sites, blogs, documentation sites
- **Key Features**: Blog with RSS feeds, SEO optimization, responsive design, dark mode support, image optimization, social sharing
- **Performance Focus**: Optimized for Core Web Vitals and Lighthouse scores

## Important Constraints
- **Performance Priority**: Lighthouse scores and Core Web Vitals are primary concerns
- **SEO Requirements**: Built-in optimization with automatic sitemaps, meta tags, and structured data
- **Browser Compatibility**: Modern browser support with progressive enhancement
- **Node.js Version**: Requires Node.js 18.17.1+ or 20.3.0+ or 21.0.0+
- **Deployment**: Static site optimized for Netlify, Vercel, GitHub Pages, and similar platforms
- **Content Limits**: Blog functionality requires prerender=true in current version

## External Dependencies
- **Image CDN**: Pixabay (cdn.pixabay.com) for placeholder images
- **Fonts**: Google Fonts via @fontsource-variable/inter
- **Analytics**: Google Analytics (optional, configured via environment)
- **Deployment Platforms**: Netlify, Vercel, GitHub Pages with static site generation
- **Icon Libraries**: Tabler Icons and Flat Color Icons via Iconify
- **Content Delivery**: Static hosting with CDN optimization recommended
