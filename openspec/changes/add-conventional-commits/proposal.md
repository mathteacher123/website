# Change: Add Conventional Commits with Scoping

## Why
Implementing conventional commits with structured scoping will improve commit message consistency, enable automated changelog generation, enhance code navigation, and streamline development workflow for the AstroWind template project. This is particularly important for a template that serves many developers and requires clear, traceable changes across its modular architecture.

## What Changes
- **BREAKING**: All future commits must follow conventional commit format with validation
- Add commitlint configuration with AstroWind-specific scopes including pages/plugins
- Add husky git hooks for commit message validation
- Create commit message template and guidelines
- Update project documentation with commit conventions
- Add automated validation in CI/CD pipeline

## Impact
- **Affected specs**: development-workflow, code-quality, project-conventions
- **Affected code**: package.json, .git/hooks, CI/CD workflows
- **Developer experience**: Stricter commit message requirements but better traceability and automated tooling integration