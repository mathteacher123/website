# Change: Add GDPR Compliance

## Why

To ensure GDPR compliance by requiring user consent for tracking cookies, blocking analytics scripts until consent is given.

## What Changes

- Install astro-cookieconsent library
- Modify Analytics.astro and SplitbeeAnalytics.astro to load conditionally based on consent
- Add CookieConsent component to Layout.astro
- Update privacy.md to reference consent mechanism

## Impact

- New npm dependency
- Analytics scripts blocked by default
- Consent banner displayed on all pages
- Potential delay in analytics data collection
