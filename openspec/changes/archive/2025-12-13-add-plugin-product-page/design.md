## Context

Adding a new home page variant for WooCommerce plugin products. The page needs to showcase plugin features, pricing, and screenshots in a marketing-focused layout. Based on existing home page patterns but with plugin-specific components.

## Goals / Non-Goals

- Goals: Create reusable components for plugin marketing pages, maintain consistency with existing home pages, preserve original design from HTML template
- Non-Goals: Create generic e-commerce components, modify existing home pages, add JavaScript dependencies

## Decisions

- Decision: Use CSS-only carousel for better browser compatibility and performance
- Alternatives considered: JavaScript carousel libraries (swiper, etc.) - rejected for simplicity and compatibility

- Decision: Create dedicated plugin components instead of reusing generic widgets
- Alternatives considered: Extend existing widgets - rejected because plugin pages have unique requirements (badges, pricing cards, etc.)

- Decision: Extract content directly from code.html template
- Alternatives considered: Create placeholder content - rejected to maintain design fidelity

## Risks / Trade-offs

- New component proliferation → Code duplication (mitigation: keep components focused and reusable)
- CSS-only carousel → Limited interactivity (mitigation: sufficient for marketing use case)

## Migration Plan

No migration needed - this is a new page addition. Rollback by removing the plugin.astro file and new components.

## Open Questions

- Should plugin pages share a common layout or remain independent?
- How to handle plugin-specific color schemes across multiple plugins?</content>
  <parameter name="filePath">/project/workspace/openspec/changes/add-plugin-product-page/design.md
