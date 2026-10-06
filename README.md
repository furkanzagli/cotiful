# Cotiful — wholesale womenswear

A multi-page Next.js / TypeScript website with static pre-rendering for GitHub Pages. Campaign direction: espresso, oxblood and warm stone; editorial photography, serif headings and an accessible responsive catalogue.

## Development

Node.js 22 or newer is required.

```sh
npm ci
npm run dev
npm run lint
npm run build
```

The default preview address is `http://localhost:3000/cotiful`. A production build writes static HTML and assets to `out/`. This project uses static export, so `next start` is not used.

## Publishing

Target repository: `furkanzagli/cotiful`. Target address: `https://furkanzagli.github.io/cotiful/`.

In repository **Settings → Pages**, select **GitHub Actions** as the source. The `Build and deploy Cotiful` workflow validates the code, builds all pages and deploys `out/` on every push to `main`. Pages must be enabled once by an administrator; the workflow's standard GITHUB_TOKEN cannot enable Pages itself.

For another repository or custom domain, update `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL` in the workflow. Do not include the repository name in both the origin and base path when linking assets. Canonical URLs use the full site URL; local images use the base path.

## Structure

```text
app/
  page.tsx                 Homepage
  about-us/                Company profile
  manufacturer/            OEM / ODM process
  products/                Filterable catalogue
  category/[slug]/         Six category pages
  product/[slug]/          Seven style reference pages
  collections/             Three seasonal edits
  blog/[slug]/             Journal and three articles
  faq/                     Wholesale FAQ
  contact/                 Enquiry preparation form
  sitemap.ts               Generated sitemap.xml
  robots.ts                Generated robots.txt
  layout.tsx               Shared layout and organization schema
  globals.css              Responsive visual system and motion
components/
  site.tsx                 Navigation, footer, cards, headings, breadcrumbs
  hero-slider.tsx          Three-slide campaign and motion controls
  category-browser.tsx     Client-side catalogue filters and sorting
  rfq-form.tsx             Validated downloadable enquiry brief
lib/
  catalog.ts               Typed sample products, categories and articles
  config.ts                Public origin and asset path helpers
  seo.ts                   Page metadata and schema helper
public/images/             Optimized WebP campaign assets
.github/workflows/         GitHub Pages deployment
```

## SEO and interactions

Every requested content route is pre-rendered into indexable HTML. Dynamic category, product and article routes use `generateStaticParams`. Pages include unique titles and descriptions, canonical URLs, OpenGraph / Twitter metadata and meaningful image alt text. JSON-LD includes Organization, WebSite, BreadcrumbList, Product, Article and FAQPage. Catalogue filters, sort controls, colour selectors, the slider and enquiry downloads run after hydration. Reduced-motion preferences are respected.

## Content and production configuration

The generated campaign imagery and seven product records are design references. They are not verified stock or factory photographs. Fabric, size sets and MOQ fields are example specifications and must be confirmed before commercial use. Numeric search volumes, capacity figures and unverified customer references have not been fabricated.

A verified transparent PNG logo, legal company details, office/factory addresses, WhatsApp number, enquiry recipient and actual product photography were not supplied. The current logo is a typographic wordmark. Contact details and an address map can be added once confirmed.

The RFQ form currently downloads a text enquiry on the buyer's device. It does not send email or store personal data. A production enquiry endpoint and confirmed recipient are required for automatic delivery; never place mail-service secrets in public NEXT_PUBLIC variables. GitHub Pages serves static content and cannot run a server endpoint.

Google Trends access and measured market keyword data are not configured. The content uses relevant wholesale womenswear and Turkey / Europe / Balkans sourcing terms without claiming measured search demand.
