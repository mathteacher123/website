# development-workflow Specification

## Purpose

TBD - created by archiving change add-conventional-commits. Update Purpose after archive.

## Requirements

### Requirement: Conventional Commit Format

All commits SHALL follow conventional commit format with type, optional scope, and description.

#### Scenario: Valid commit with scope

- **WHEN** developer creates a commit
- **THEN** commit message SHALL follow format: `<type>(<scope>): <description>`
- **AND** type SHALL be one of: feat, fix, docs, style, refactor, perf, test, build, ci, chore

#### Scenario: Valid commit without scope

- **WHEN** developer creates a commit without specific scope
- **THEN** commit message SHALL follow format: `<type>: <description>`
- **AND** validation SHALL pass for allowed types without scope

#### Scenario: Invalid commit format

- **WHEN** developer attempts commit with invalid format
- **THEN** commitlint SHALL reject the commit
- **AND** error message SHALL explain required format

### Requirement: Commit Message Scopes

Commits SHALL use AstroWind-specific scopes that reflect project structure and functionality.

#### Scenario: Primary scope usage

- **WHEN** committing changes to high-frequency areas
- **THEN** scope SHALL be one of: components/ui, components/widgets, components/blog, components/common, pages, pages/blog, pages/homes, pages/landing, pages/plugins, layouts, utils, config, assets

#### Scenario: Specialized scope usage

- **WHEN** committing changes to specific functionality
- **THEN** scope SHALL be one of: blog, seo, build, deps, astro, tailwind, docker, docs

#### Scenario: Invalid scope

- **WHEN** developer uses undefined scope
- **THEN** commitlint SHALL reject the commit
- **AND** error message SHALL list valid scopes

### Requirement: Git Hooks Integration

Project SHALL enforce commit message validation through git hooks.

#### Scenario: Pre-commit validation

- **WHEN** developer runs git commit
- **THEN** commit-msg hook SHALL validate commit message format
- **AND** validation SHALL run before commit is created
- **AND** SHALL reject invalid commits with helpful error message

#### Scenario: CI/CD validation

- **WHEN** pull request is created or updated
- **THEN** GitHub Actions SHALL validate all commit messages in PR
- **AND** SHALL fail PR validation for invalid commit formats

### Requirement: Commit Message Templates

Project SHALL provide commit message templates and guidance for developers.

#### Scenario: Template availability

- **WHEN** developer commits without message
- **THEN** git SHALL display commit message template
- **AND** template SHALL show format and scope examples
- **AND** SHALL provide guidance for choosing appropriate scopes

#### Scenario: Documentation access

- **WHEN** developer needs commit format reference
- **THEN** project documentation SHALL include complete commit conventions
- **AND** SHALL provide examples for each scope and type
