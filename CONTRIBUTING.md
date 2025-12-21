# Contributing to AstroWind

Thank you for your interest in contributing to AstroWind! This guide will help you get started with our development workflow.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a new branch for your feature/fix

## Development Workflow

### Commit Message Format

All commits MUST follow [conventional commits](https://conventionalcommits.org/) format with AstroWind-specific scopes:

```
<type>(<scope>): <subject>
```

**Types**:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of code
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

**Primary Scopes**:

- `components/ui` - Basic UI components (Button, Form, Timeline, etc.)
- `components/widgets` - Page sections (Hero, Features, Footer, etc.)
- `components/blog` - Blog functionality (Grid, List, Pagination, etc.)
- `components/common` - Shared components (Analytics, Meta, Theme, etc.)
- `pages` - General page creation and modification
- `pages/blog` - Blog routing and pages
- `pages/homes` - Homepage variants (SaaS, Startup, Mobile App, etc.)
- `pages/landing` - Landing page types (Lead Gen, Sales, Product, etc.)
- `pages/plugins` - Plugin-specific landing pages and documentation
- `layouts` - Layout components
- `utils` - Utility functions and helpers
- `config` - Site configuration changes
- `assets` - Static assets management

**Specialized Scopes**:

- `blog` - Blog-related changes (encompasses all blog functionality)
- `seo` - SEO and metadata changes
- `build` - Build and deployment configuration
- `deps` - Dependencies (package.json changes)
- `astro` - Astro configuration
- `tailwind` - Tailwind CSS configuration
- `docker` - Docker configuration
- `docs` - Documentation changes

### Examples

```bash
feat(components/ui): add new button variant with loading state
fix(pages): resolve 404 error on contact page routing
feat(pages/plugins): add WooCommerce plugin landing page
config(seo): update meta descriptions for better search ranking
build(astro): upgrade to v5.12.0 with new integrations
refactor(components/widgets): simplify hero component structure
docs(readme): update installation instructions
deps: add tailwind-merge for class name optimization
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - Run all quality checks (ESLint, Prettier, Astro check)
- `npm run fix` - Auto-fix code formatting issues
- `npm run commitlint` - Validate commit message

## Code Quality

All contributions must pass:

- ESLint validation
- Prettier formatting
- Astro type checking
- Commit message validation

## Pull Request Process

1. Update documentation if needed
2. Ensure all checks pass locally
3. Commit with conventional commit format
4. Push to your fork
5. Create pull request to main branch
6. Address any feedback or issues

## Troubleshooting

### Common Commit Issues

**"scope must be one of [...]"**

- Use one of the valid scopes listed above
- Double-check spelling and format (components/ui, pages/plugins, etc.)

**"subject may not be empty"**

- Add a description after the type(scope):
- Example: `feat(components): add new button`

**"body's lines must not be longer than 72 characters"**

- Wrap commit body lines at 72 characters
- Use blank lines between subject and body

### Getting Help

- Check existing commit history for examples
- Use `git log --oneline` to see formatted messages
- Review this guide for proper format

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
