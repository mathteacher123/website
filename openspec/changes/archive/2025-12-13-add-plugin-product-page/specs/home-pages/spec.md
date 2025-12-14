## ADDED Requirements

### Requirement: Plugin Product Home Page

The system SHALL provide a home page variant accessible at /homes/plugin that displays a complete plugin product marketing page including hero section, features grid, screenshot carousel, and pricing details.

#### Scenario: Complete plugin page layout

- **WHEN** user navigates to /homes/plugin
- **THEN** hero section with badge, title, rating, and CTA buttons is displayed
- **AND** breadcrumb navigation is shown
- **AND** features grid with 6 feature cards is rendered
- **AND** screenshot carousel with navigation controls is present
- **AND** plugin details sidebar with pricing card is displayed

#### Scenario: Responsive design

- **WHEN** viewed on mobile devices
- **THEN** layout adapts to single column
- **AND** carousel uses horizontal scrolling
- **AND** all sections remain accessible

</content>
  <parameter name="filePath">/project/workspace/openspec/changes/add-plugin-product-page/specs/home-pages/spec.md
