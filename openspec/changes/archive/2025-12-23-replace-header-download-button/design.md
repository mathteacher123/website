## Context

Header component already supports `actions` prop but PageLayout doesn't expose this to pages. Need to allow page-specific header actions for plugin page to show relevant actions instead of generic "Download". Currently only primary button needed, but array allows future extensibility.

## Goals / Non-Goals

- Goals: Enable page-specific header action override, maintain existing architecture
- Non-Goals: Modify global header behavior, change hero section

## Decisions

- Decision: Add optional `actions` prop to PageLayout that passes through to Header
- Alternatives considered: Direct Header import (duplicates functionality), navigation.ts modification (global impact)

## Risks / Trade-offs

- Prop passing complexity → Mitigation: Simple optional prop with default empty array
- Type safety → Mitigation: Use existing CallToAction interface

## Migration Plan

Add prop to PageLayout interface, extract action from plugin page, pass through to Header

## Open Questions

- None
