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

# AGENTS.md - AstroWind Template

## Commands

- **Build**: `npm run build` (astro build)
- **Dev**: `npm run dev` (astro dev)
- **Lint**: `npm run check:eslint` (eslint .)
- **Format**: `npm run check:prettier` (prettier --check .)
- **Fix**: `npm run fix` (eslint --fix && prettier -w .)
- **Type Check**: `npm run check:astro` (astro check)
- **Note**: Never run `npm run check` or `npm run check:eslint` or `npm run check:prettier` - these are handled by git hooks.

## Code Style

- **TypeScript**: Strict null checks enabled, no non-null assertions
- **Imports**: Use `~/` path alias for src/, group external then internal imports
- **Naming**: camelCase functions/variables, PascalCase types/interfaces
- **Formatting**: Prettier (120 width, single quotes, semicolons, 2-space tabs, ES5 trailing commas)
- **Linting**: ESLint with TypeScript rules, ignore unused vars starting with `_`
- **Error Handling**: Use try/catch, avoid throwing in components
- **Components**: Astro frontmatter for logic, destructure props, use tailwind-merge for classes
- **Git Hooks**: Never run `npm run check` or `npm run check:eslint` or `npm run check:prettier` - ask user permission to run them.
