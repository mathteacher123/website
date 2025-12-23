# Change: Replace Header Download Button with Primary Action

## Why

The current header displays a generic "Download" button linking to AstroWind GitHub repository, creating a disconnect between header action and plugin page content which focuses on a specific WordPress plugin.

## What Changes

- Add optional `actions` prop support to PageLayout component
- Extract header actions array from hero section
- Pass custom actions to Header on plugin page only
- Override default "Download" button with page-specific actions

## Impact

- Affected specs: header-action-override
- Affected code: `src/layouts/PageLayout.astro`, `src/pages/plugins/redirect-on-add-to-cart-for-woocommerce.astro`
