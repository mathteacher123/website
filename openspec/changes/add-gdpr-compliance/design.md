# Design for GDPR Compliance

## Library Selection

- **Chosen**: astro-cookieconsent (GitHub: jop-software/astro-cookieconsent)
  - Astro-native integration.
  - Handles banner, consent storage, and script blocking.
  - Open-source, GPL-3.0 license.
  - Lightweight, minimal impact on performance.

## Architecture

- **Consent Management**: Library manages consent state in localStorage.
- **Script Blocking**: Analytics components check consent before loading scripts.
- **Banner Integration**: Added to base layout for site-wide coverage.
- **Conditional Loading**: Use Astro client directives for dynamic script loading.

## Trade-offs

- **Library Dependency**: Adds external dependency, but reduces custom code.
- **User Experience**: Banner may annoy users, but necessary for compliance.
- **Analytics Delay**: Data collection starts only after consent, potentially missing initial page views.

## Implementation Details

- Consent categories: "necessary" (always allowed), "analytics" (blocked until consent).
- Scripts load via client-side JavaScript after consent.
- Banner customizable via library options.
