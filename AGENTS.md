<!-- OPENSPEC:START -->

# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:

- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:

- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# AGENTS.md

## Build Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run check` - Run all checks (astro, eslint, prettier)
- `npm run check:astro` - Run Astro type checking
- `npm run check:eslint` - Run ESLint
- `npm run check:prettier` - Check Prettier formatting
- `npm run fix` - Auto-fix ESLint and Prettier issues
- `npm run preview` - Preview build locally

## Code Style Guidelines

- **Imports**: Use `~/` alias for src directory imports (e.g., `~/components/Logo.astro`)
- **Formatting**: Prettier with 120 print width, single quotes, 2 spaces, es5 trailing commas
- **TypeScript**: Strict mode enabled, use interfaces for component props
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Error Handling**: Use Astro's built-in error boundaries, validate props with TypeScript
- **File Structure**: Organize by feature (components/blog, components/ui, components/widgets)
- **CSS**: Use Tailwind CSS classes, avoid inline styles, prefer semantic HTML
- **Astro**: Use frontmatter for server-side logic, client directives for interactivity
- **Linting**: ESLint with TypeScript and Astro plugins, unused vars with `_` prefix ignored
