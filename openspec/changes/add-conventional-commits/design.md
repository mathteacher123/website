## Context
AstroWind is a template project with modular architecture including components, pages, layouts, and utilities. The project currently lacks structured commit message conventions, making it difficult to track changes across different areas of the codebase. This is particularly problematic for a template that serves many developers and requires clear change history for maintenance and updates.

## Goals / Non-Goals
**Goals:**
- Enforce consistent commit message format across all contributors
- Enable automated changelog generation
- Improve code navigation and change tracking
- Integrate with existing tooling (ESLint, Prettier, GitHub Actions)
- Support modular architecture with appropriate scoping

**Non-Goals:**
- Replace existing Git LFS hooks (maintain compatibility)
- Change existing commit history (apply to new commits only)
- Force migration of existing commits (grandfather current history)

## Decisions
- **Tool Selection**: Using @commitlint/config-conventional as base with custom AstroWind scopes
- **Scope Strategy**: Hierarchical scoping with forward slashes for subdirectories (e.g., components/ui, pages/plugins)
- **Validation**: Pre-commit hook for immediate feedback, CI validation for PR enforcement
- **Integration**: Maintain existing Git LFS pre-push hook compatibility
- **Template**: Provide .gitmessage template for developer guidance

**Alternatives considered:**
- Using semantic-release: Too complex for template needs
- Custom validation script: Less standardized than commitlint
- Manual enforcement only: Inconsistent and unreliable

## Risks / Trade-offs
- **Risk**: Developer resistance to strict validation → Mitigation: Clear documentation and helpful error messages
- **Risk**: Integration conflicts with existing tools → Mitigation: Thorough testing of hook chain
- **Trade-off**: More discipline required vs. better organization and automation
- **Risk**: Scope list maintenance overhead → Mitigation: Keep scope list focused and extensible

## Migration Plan
1. Install and configure commitlint and husky
2. Create custom configuration with AstroWind scopes
3. Set up git hooks (commitlint pre-commit, maintain LFS pre-push)
4. Update documentation and examples
5. Test with various commit formats
6. Deploy with validation in CI pipeline

## Open Questions
- Should we enforce scope requirement or make it optional for simple changes?
- Do we need a migration guide for existing contributors?
- Should we include emoji in commit messages or keep them text-only?