# Design Considerations

## Architectural Fit

This change modifies content within the existing Astro page structure, using the FAQs widget's description fields to include HTML with Tailwind classes. No new components or patterns introduced.

## Trade-offs

- HTML in descriptions: Ensures styling but assumes widget renders HTML (low risk, as common in Astro).
- Exact source matching: Maintains authenticity but may require minor formatting adjustments for rendering.
- Single-page focus: Keeps changes minimal and testable.

## Implementation Details

- Use Cases: 5 FAQ items with ul/li in descriptions, styled with `list-disc list-inside text-sm`.
- FAQs: 3 items, last one rewritten for professionalism.
- Widget: Existing FAQs component handles the content.
