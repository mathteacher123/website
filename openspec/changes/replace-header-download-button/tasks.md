## 1. Implementation

- [x] 1.1 Add `actions?: Array<CallToAction>` to PageLayout Props interface
- [x] 1.2 Update PageLayout component destructuring to include `actions = []`
- [x] 1.3 Pass `actions` prop to Header component call in PageLayout
- [x] 1.4 Extract header actions array from hero actions in plugin page
- [x] 1.5 Create `headerActions` constant with CodeCanyon URL
- [x] 1.6 Add `actions={headerActions}` to plugin page Layout call
- [x] 1.7 Test component compilation for TypeScript errors
- [x] 1.8 Verify header displays "Get Pro Version" button on plugin page
- [x] 1.9 Test other pages still show default "Download" button
- [x] 1.10 Validate hero section buttons remain unchanged
- [ ] 1.11 Test responsive behavior across devices
- [x] 1.12 Run build validation with `npm run check`
