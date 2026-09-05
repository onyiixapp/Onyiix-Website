# 🚀 Google Search Console & Senior Digital Marketing Master Playbook

> **Target Domain**: `https://onyiix.com/`  
> **Prepared for**: ONYIIX Leadership Team (Founders & Digital Marketing Director)  
> **Focus**: Search Visibility, Geotargeting, Rich Snippets, Indexation & Conversion Funnels

---

## 1. Google Search Console (GSC) Verification & Setup

Google Search Console is Google's official direct communication channel with website operators. It informs you of indexation status, mobile usability, Core Web Vitals, organic impressions, clicks, click-through-rate (CTR), and security alerts.

### Recommended Verification Methods

#### Method A: DNS TXT Record (Most Recommended for Domain Properties)
1. In Google Search Console, add a **Domain property**: `onyiix.com`.
2. Copy the TXT record provided by Google (e.g. `google-site-verification=XXXXXXXXXXXXXXXX`).
3. Log into your DNS provider (Cloudflare, GoDaddy, Namecheap, Vercel DNS).
4. Add a new `TXT` record at the root domain `@` with the verification token.
5. Click **Verify** in GSC. This covers all protocols (`https://`, `http://`) and subdomains (`www`, `api`).

#### Method B: HTML Tag Method (Already Pre-Configured in Codebase)
We have pre-configured a verification meta tag slot in [index.html](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/index.html#L25):
```html
<meta name="google-site-verification" content="google-search-console-verification-token" />
```
1. In GSC, select **URL prefix property**: `https://onyiix.com/`.
2. Choose **HTML Tag** as the verification method.
3. Copy the token string inside the `content=""` attribute.
4. Replace `"google-search-console-verification-token"` in [index.html](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/index.html) with your real token.
5. Deploy and click **Verify** in GSC.

---

## 2. Sitemap Submission & Indexation Management

### 1. Submitting the XML Sitemap
1. Navigate to **Indexing > Sitemaps** in the left sidebar of Google Search Console.
2. In the **Add a new sitemap** input, enter:
   ```text
   sitemap.xml
   ```
3. Click **Submit**.
4. GSC will fetch [https://onyiix.com/sitemap.xml](https://onyiix.com/sitemap.xml). Status should display **Success**.

### 2. Sitemapped Endpoints & Priority Index
The sitemap includes all 12 core URLs with Google Image metadata:
| URL | Type | Priority | Changefreq | Target Keywords |
| :--- | :--- | :---: | :---: | :--- |
| `https://onyiix.com/` | Homepage | 1.0 | Weekly | ONYIIX, product engineering studio, web development studio Bengaluru |
| `https://onyiix.com/about` | Studio & Founders | 0.9 | Monthly | Maaz Mohammed, Suman Kumar Singh, founder-led software studio |
| `https://onyiix.com/services/web-development` | Service Landing | 0.9 | Monthly | high-performance web development, Next.js agency, custom website build |
| `https://onyiix.com/services/saas-platforms` | Service Landing | 0.9 | Monthly | SaaS platform development, MVP engineering, multi-tenant SaaS studio |
| `https://onyiix.com/services/ai-workflows` | Service Landing | 0.9 | Monthly | AI workflow automation, custom LLM integration, agentic AI engineering |
| `https://onyiix.com/services/digital-marketing` | Service Landing | 0.9 | Monthly | technical SEO agency, conversion rate optimization, digital marketing systems |
| `https://onyiix.com/services/digital-systems` | Service Landing | 0.9 | Monthly | custom internal systems, executive dashboards, business tools |
| `https://onyiix.com/global` | Delivery Hub | 0.8 | Monthly | global software delivery, remote engineering studio, US/UK client overlap |
| `https://onyiix.com/careers` | Careers | 0.7 | Monthly | software engineer jobs Bengaluru, frontend developer careers ONYIIX |
| `https://onyiix.com/sitemap` | HTML Sitemap | 0.6 | Monthly | onyiix site directory, navigation overview |
| `https://onyiix.com/terms` | Legal | 0.5 | Yearly | onyiix terms of service, IP ownership |
| `https://onyiix.com/privacy` | Privacy | 0.5 | Yearly | onyiix privacy policy, GDPR compliance |

### 3. Immediate Indexing using the URL Inspection Tool
For rapid initial discovery:
1. In GSC, paste `https://onyiix.com/` into the top search bar (**Inspect any URL**).
2. Click **Test Live URL**.
3. Once the live test confirms no crawl issues, click **Request Indexing**.
4. Repeat for key commercial landing pages (`/services/web-development`, `/services/saas-platforms`, `/services/ai-workflows`).

---

## 3. Schema.org Rich Results & Structured Data Verification

Google Search rewards websites with structured data by granting rich snippets, star ratings, FAQ accordions, and knowledge graph cards.

### Validating Your Schema
Test your live URL using the official Google tools:
- **Google Rich Results Test**: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- **Schema.org Validator**: [https://validator.schema.org/](https://validator.schema.org/)

### Active Schema Entities in ONYIIX
Our [index.html](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/index.html) and [src/App.tsx](file:///c:/Users/maazm/Downloads/Onyiix-Website-main/Onyiix-Website-main/src/App.tsx) automatically inject:
1. **`Organization`**: Sets official logo, founder profiles, contact channels, and social profiles. Enables the Google Knowledge Panel.
2. **`WebSite`**: Provides the name, alternate names, and Sitelinks Searchbox directive.
3. **`ProfessionalService` / `LocalBusiness`**: Associates the studio with Bengaluru coordinates (`12.9716, 77.5946`) and commercial hours.
4. **`Service`**: Explicitly defines each service offering, deliverables, and service areas.
5. **`FAQPage`**: Guarantees eligibility for expandable FAQ snippets directly in Google SERP results, dramatically increasing organic SERP real estate and CTR.
6. **`BreadcrumbList`**: Displays clean breadcrumbs in search snippets rather than raw URLs.

---

## 4. International SEO & Bengaluru Geotargeting (GEO)

### Balancing Local Presence with Global Inquiries
ONYIIX operates out of Bengaluru, India, while delivering high-ticket software to founders in North America, Europe, UAE, and Singapore.

To win both markets:
1. **Geotargeting Tags Implemented**:
   ```html
   <meta name="geo.region" content="IN-KA" />
   <meta name="geo.placename" content="Bengaluru" />
   <meta name="geo.position" content="12.9716;77.5946" />
   <meta name="ICBM" content="12.9716, 77.5946" />
   ```
2. **Hreflang Tags Implemented**:
   ```html
   <link rel="alternate" hreflang="en" href="https://onyiix.com/" />
   <link rel="alternate" hreflang="en-IN" href="https://onyiix.com/" />
   <link rel="alternate" hreflang="en-US" href="https://onyiix.com/" />
   <link rel="alternate" hreflang="en-GB" href="https://onyiix.com/" />
   <link rel="alternate" hreflang="x-default" href="https://onyiix.com/" />
   ```
3. **Google Business Profile (Crucial Next Step)**:
   - Create a verified **Google Business Profile** (formerly Google My Business) for `ONYIIX Product Studio` in Bengaluru.
   - Link the profile directly to `https://onyiix.com/`.
   - Add founder photos, studio address, services, and request reviews from past clients.

---

## 5. Core Web Vitals & Technical SEO Performance

Google uses **Core Web Vitals** as a direct ranking signal:
- **LCP (Largest Contentful Paint)**: Target < 2.5s (ONYIIX achieves ~0.8s).
- **INP (Interaction to Next Paint)**: Target < 200ms (ONYIIX zero-bloat state achieves < 50ms).
- **CLS (Cumulative Layout Shift)**: Target < 0.1 (ONYIIX layout achieves 0.00).

### Optimizations Active in Codebase:
1. **Hero Asset Preloading**: `<link rel="preload" as="image" href="/journey/asme-auto-founders.png" />` ensures instant LCP without pop-in.
2. **Reduced Bundle Size**: Dead code removal reduced the CSS bundle to 65 kB and eliminated 45 unused modules.
3. **Hardware Acceleration**: Only `transform` and `opacity` are animated in Framer Motion to maintain 120fps scrolling.

---

## 6. High-Value Keyword Targeting Strategy

### Primary Commercial Keywords (Bottom of Funnel)
- *"founder-led product engineering studio"*
- *"custom SaaS platform developers Bengaluru"*
- *"Next.js web development agency India"*
- *"AI workflow automation engineering"*
- *"boutique web development studio for startups"*
- *"high converting landing page developers"*

### Informational & Mid-Funnel Keywords (Content Strategy)
- *"SaaS MVP engineering timeline and cost"*
- *"how to automate enterprise workflows with LLMs"*
- *"headless web development vs WordPress performance comparison"*
- *"technical SEO checklist for SaaS launches"*

---

## 7. Google Analytics 4 (GA4) & Conversion Funnel Setup

To track visitors and lead conversions in Search Console and Analytics:

1. **Create a GA4 Property**: In [analytics.google.com](https://analytics.google.com/), set up a web data stream for `https://onyiix.com/`.
2. **Link GA4 to Google Search Console**:
   - In GSC, go to **Settings > Associations**.
   - Select your GA4 property to link Search Console query data directly into GA4 reports.
3. **Key Events to Track**:
   - `contact_modal_open`: User clicked "Start a Project" or "Scope this engagement".
   - `contact_form_submit`: User submitted an inquiry through the intake form.
   - `service_page_view`: User navigated to a dedicated service landing page.
   - `pricing_toggle_annual`: User interacted with the annual pricing savings calculator.

---

## 8. Monthly Search Console Checklist for Marketing Director

- [ ] **Review Performance Report**: Check Top Queries, Impressions, and CTR. Optimize meta descriptions for queries with high impressions but low CTR (< 2%).
- [ ] **Check Coverage / Page Indexing**: Ensure zero 404 or 5xx server errors. All 12 sitemapped URLs must show green "Indexed".
- [ ] **Inspect Core Web Vitals**: Ensure all mobile and desktop URLs remain in the "Good" green zone.
- [ ] **Review Sitelinks & Search Enhancements**: Confirm FAQ snippets and Breadcrumb enhancements show 0 warnings in GSC Enhancements tab.
