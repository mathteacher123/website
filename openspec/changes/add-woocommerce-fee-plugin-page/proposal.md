# Add WooCommerce Fee Plugin Page

## Summary

Add a new landing page for the "WooCommerce Fee For Cart & Checkout" plugin in the plugins section, duplicating the structure and style of the existing "redirect-on-add-to-cart-for-woocommerce" page. Generate marketing copy to promote the plugin's features, use cases, and benefits for guaranteed sales conversion. Update site navigation menus to include the new page link.

## Motivation

Expand the plugins showcase with a high-converting WooCommerce extension page. Leverage the existing template to maintain consistency and reduce development time while creating a professional marketing asset for the fee plugin.

## Impact

- Adds one new page: `/plugins/woocommerce-fee-for-cart-checkout`
- Updates header and footer navigation to include the new plugin
- No breaking changes or performance impacts expected
- Maintains existing code quality and SEO practices

## Alternatives Considered

- Creating from scratch: More time-intensive, potential for inconsistency
- Reusing other page templates: Less relevant structure match
- No navigation updates: Would hide the page from users

## Implementation Plan

1. Duplicate the redirect plugin page structure
2. Generate and insert sales-optimized copy
3. Update header and footer menus
4. Validate build and SEO

## Generated Marketing Copy

### Hero2 Widget

```astro
<Hero2
  tagline="WooCommerce Plugin"
  actions={[
    {
      variant: 'primary',
      target: '_blank',
      text: 'Get Plugin',
      href: 'https://codecanyon.net/item/woocommerce-fee-for-cart-checkout/58916631',
    },
    {
      target: '_blank',
      text: 'Try Live Demo',
      href: 'http://wps.zya.me/cart',
    },
  ]}
>
  <Fragment slot="title">
    <span class="text-accent dark:text-white">WooCommerce Fee For Cart & Checkout</span>
  </Fragment>

  <Fragment slot="subtitle">
    Make your store smarter with pinpoint fee control—no code, no clutter, just seamless profitability. Charge handling,
    packaging, payment gateway costs, or tailor fees to cart items with our powerful rule engine. Boost margins
    effortlessly!
  </Fragment>
  <Fragment slot="content">
    <p class="mt-4 text-sm text-gray-600 flex flex-wrap items-center justify-center lg:justify-start gap-6">
      <span class="flex items-center gap-2">
        <Icon name="tabler:credit-card" class="h-4 w-4 text-gray-500" />
        One-time payment
      </span>

      <span class="flex items-center gap-2">
        <Icon name="tabler:repeat-off" class="h-4 w-4 text-gray-500" />
        No subscription
      </span>

      <span class="flex items-center gap-2">
        <Icon name="tabler:infinity" class="h-4 w-4 text-gray-500" />
        Lifetime updates
      </span>
    </p>
  </Fragment>

  <Fragment slot="image">
    <div class="flex-1 w-full">
      <div class="aspect-video w-full rounded-lg shadow-lg overflow-hidden">
        <YouTube videoId="dummy123" thumbnailRes="hq" title="WooCommerce Fee For Cart & Checkout" />
      </div>
    </div>
    <Lightbox slug="fee" />
  </Fragment>
</Hero2>
```

### Features2 Widget (All Features in One Widget)

```astro
<Features2
  id="features"
  title="Features"
  columns={3}
  items={[
    {
      title: 'Flexible Fee Structure',
      description: 'Fixed or percentage, per cart or per item—adapt and profit instantly.',
      icon: 'tabler:adjustments',
    },
    {
      title: 'Advanced Rule Engine',
      description: 'Multiple conditional fees with smart logic—scale revenue effortlessly.',
      icon: 'tabler:cpu',
    },
    {
      title: 'Fixed Fee',
      description: 'Set amount per cart—ideal for handling charges that boost margins.',
      icon: 'tabler:dollar',
    },
    {
      title: 'Percentage Fee',
      description: 'Dynamic percentage of subtotal—processing fees that grow with sales.',
      icon: 'tabler:percentage',
    },
    {
      title: 'Fixed Fee per Cart Item',
      description: 'Per-product flat fee—packaging costs recovered automatically.',
      icon: 'tabler:package',
    },
    {
      title: 'Percentage Fee per Cart Item',
      description: 'Scalable percentage per item—surpasses for higher profits.',
      icon: 'tabler:chart-line',
    },
    {
      title: 'Fixed Fee per Cart Line',
      description: 'Flat fee per line item—efficient per-type charges.',
      icon: 'tabler:list',
    },
    {
      title: 'Cart-Wide Compatibility',
      description: 'Classic shortcode & modern Gutenberg checkout—no issues, just results.',
      icon: 'tabler:plug',
    },
    {
      title: 'Streamlined Settings',
      description: 'Configure in seconds—easy interface for quick setup.',
      icon: 'tabler:settings',
    },
    {
      title: 'WordPress Standards',
      description: 'Crafted perfectly—reliable, no-bloat performance.',
      icon: 'tabler:check-circle',
    },
    {
      title: 'Lightweight & Fast',
      description: 'No external libraries—speedy, secure scaling.',
      icon: 'tabler:zap',
    },
    {
      title: 'Intuitive for All',
      description: 'Non-technical friendly—powerful results without hassle.',
      icon: 'tabler:user',
    },
  ]}
>
  <Fragment slot="bg">
    <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>
  </Fragment>
</Features2>
```

### Use Cases FAQs Widget

```astro
<FAQs
  title="Use cases"
  columns={1}
  items={[
    {
      title: 'Cart-Based Conditions',
      description: '$15 fee over $200 subtotal, $1 per item over 10, $5 for >3 line items—maximize profits smartly.',
      icon: 'tabler:rocket',
    },
    {
      title: 'Checkout-Based Conditions',
      description: '$10 for express shipping, 2% on credit cards—tailor to checkout for revenue boost.',
      icon: 'tabler:credit-card',
    },
    {
      title: 'Customer-Based Conditions',
      description: 'Waive for logged-in, $20 wholesale setup, $5 loyalty IDs—personalize and charge what matters.',
      icon: 'tabler:users',
    },
    {
      title: 'Date & Time Conditions',
      description: 'Seasonal fees like $10 on holidays, $2 night surcharge—time-based profitability.',
      icon: 'tabler:calendar',
    },
    {
      title: 'Product Filtering',
      description: '$3 per fragile item, 5% on electronics—precision per-product charges.',
      icon: 'tabler:filter',
    },
  ]}
/>
```

### Frequently Asked Questions FAQs Widget

```astro
<FAQs
  title="Frequently Asked Questions"
  classes={{ container: 'max-w-6xl' }}
  items={[
    {
      title: 'Can I apply multiple fees at once?',
      description: 'Yes! Rule engine for unlimited conditional fees—scale revenue dynamically.',
    },
    {
      title: 'Will this work with Gutenberg checkout?',
      description: 'Absolutely—fully compatible with block-based pages.',
    },
    {
      title: 'Are the fees taxable?',
      description: 'Now with taxable options—include/exclude as needed.',
    },
  ]}
/>
```

### CallToAction Widget

```astro
<CallToAction
  id="download"
  title="Get plugin now!"
  subtitle="Boost conversions instantly with WooCommerce Fee For Cart & Checkout – charge smart fees that recover costs and maximize margins."
  actions={[
    {
      variant: 'primary',
      target: '_blank',
      text: 'Get Plugin',
      href: 'https://codecanyon.net/item/woocommerce-fee-for-cart-checkout/58916631',
    },
    {
      target: '_blank',
      text: 'Try Live Demo',
      href: 'http://wps.zya.me/cart',
    },
  ]}
/>
```
