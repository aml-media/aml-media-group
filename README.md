# AML MEDIA GROUP

Company website for the group behind **Concertlands**, **EventsCozy**, and **Hotels50**.

- GitHub Pages: https://aml-media.github.io/aml-media-group/
- Intended company domain: https://amlmediagroups.com
- Public contact: contact@amlmediagroups.com

## Development

Requires Node.js 22.13 or newer.

```sh
cd aml-media-group
npm ci
npm run dev
```

The site uses Next.js static export. Every page is generated as HTML at build time; no application server, database, API credentials, or third-party tracking is needed. The contact links open an email draft in the visitor's email application.

```sh
npm run build
npm run verify
npm run check
```

`out/` is the deployable static website. `npm run brand-assets` regenerates the PNG/ICO favicons and social image from the vector source.

## Deployment

Push to `main` to run `.github/workflows/pages.yml`. It installs from the lockfile, builds the static pages, checks metadata and local links, uploads the artifact, and deploys to GitHub Pages. Repository Pages settings must use **GitHub Actions** as the build source.

The workflow defaults to `https://aml-media.github.io/aml-media-group`. It reads an optional repository Actions variable named `SITE_URL`; the base path, canonical URLs, sitemap, robots.txt, structured data, image paths, and share metadata follow that value. A local build defaults to `https://amlmediagroups.com`.

### Connect amlmediagroups.com

1. Make sure you control the domain and can edit its DNS. Verify domain ownership in the AML Media account's Pages settings if available.
2. Set the repository's Pages custom domain to `amlmediagroups.com`.
3. Configure the following records at the DNS provider:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | aml-media.github.io |

4. Set the repository Actions variable `SITE_URL` to `https://amlmediagroups.com`, then run the deployment workflow again. This removes the GitHub project base path and updates all search metadata.
5. Wait for GitHub's DNS check and TLS certificate, enable **Enforce HTTPS**, and verify both apex and www resolve to the company site. Keep existing email-related DNS records intact; website hosting does not create the contact mailbox.

GitHub's custom-domain setting is authoritative for Actions deployments; the exported `CNAME` file is included for portability. [GitHub custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Search readiness

The site includes unique page titles and descriptions, canonical URLs, crawlable navigation, `robots.txt`, `sitemap.xml`, Organization/WebSite/WebPage/Brand/BreadcrumbList structured data, Open Graph and Twitter metadata, a 404 page, and stable SVG/ICO/PNG favicon URLs. The 96-pixel PNG provides a square search favicon; Apple touch and 192/512-pixel icons are included. Images and fonts are served locally.

After the custom domain is live:

1. Verify the domain in Google Search Console and Bing Webmaster Tools using the account-provided DNS TXT values. No verification codes are fabricated or embedded in this repository.
2. Submit `https://amlmediagroups.com/sitemap.xml` in both tools.
3. Inspect the homepage and brand URLs, request indexing, and check crawl/index coverage.
4. Add a company link from the three brand websites when their owners choose to do so.

These measures make the public site eligible for crawling. Search engines decide whether and when to index pages or display a favicon. See [Google's technical requirements](https://developers.google.com/search/docs/essentials/technical), [Google favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search), and [Bing sitemap guidance](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed).

## Content and branding

- `aml-media-group/lib/site.ts`: company details, deployment URL, brand descriptions, and structured data.
- `aml-media-group/app/page.tsx`: homepage.
- `aml-media-group/app/brands/[slug]/page.tsx`: individual brand pages.
- `aml-media-group/app/globals.css`: responsive design.
- `aml-media-group/public/favicon.svg`: first AML favicon concept, ready for review.
- `aml-media-group/app/privacy/page.tsx`: site-specific privacy notice.

The editorial direction uses warm ivory, forest green, and a simple letter A mark. The original AxiomTrips company-site structure informed the company/portfolio/approach/contact narrative; AML copy is focused on its own three brands. No customer numbers, partner endorsements, legal entity suffix, address, or founding history have been invented.

## Asset credits

Illustrative photography, not depictions of owned properties or sponsored events:

- Concert: [Jonathan Borba on Unsplash](https://unsplash.com/photos/Lw3wqHyhGzo).
- New York: [Florian Wehde on Unsplash](https://unsplash.com/photos/J6mySj3wntg).
- Poolside: [MD Duran on Unsplash](https://unsplash.com/photos/pM7XjC1sMnI).
- Inter by Rasmus Andersson, licensed under the SIL Open Font License; license included in `public/fonts/OFL.txt`.

Brand positioning was checked against the [Concertlands homepage](https://www.concertlands.com/), [EventsCozy homepage](https://www.eventscozy.com/), [EventsCozy about page](https://www.eventscozy.com/about), and the Hotels50 project source. Logo treatments on the company site are introductory wordmarks, not a replacement of each product's existing brand identity.
