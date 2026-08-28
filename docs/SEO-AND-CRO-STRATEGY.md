# Return Loads UK: SEO and CRO strategy

**Document date:** 24 August 2026  
**Business:** Logic Freight Limited / Return Loads UK  
**Positioning:** Logic Freight connects customers who have freight to move with hauliers and subcontractors that have suitable available capacity.

## 1. Executive direction

Build a useful UK freight resource and enquiry service, not a mass-produced directory or a pretend load board. The intended implementation is a curated Pages Router content registry that powers reusable service, vehicle, industry, location, port, route and seasonal templates. Every record has an editorial status and must pass the publication gate in section 6 before it can be indexable or enter the dynamic XML sitemap.

The application should present three unambiguous conversion journeys:

1. **I have a load** - a shipper or freight forwarder submits a transport requirement.
2. **I have an available truck** - a haulier places genuine available capacity.
3. **I want subcontractor work** - an owner-driver or transport company applies to join the partner network.

No page should imply that current loads, prices, partners or vehicle availability exist unless they come from a maintained source. Macro freight statistics can explain market context, but must never be presented as Logic Freight performance.

## 2. Baseline audit

### Critical

- Six regional hero components are stored below `src/pages` and therefore compile into thin public routes such as `/return-loads-england/hero/Content/`. The current build exposes twelve business-facing routes instead of the six intended routes. Move all non-page components outside `src/pages`, then redirect or return `410` for any leaked URL that has been discovered.
- At baseline the rendered lead form posted to `NEXT_PUBLIC_API_URL` without an in-repository route or environment example. As of 28 August 2026, the shared backend defines `/submit-load`, `/place-truck` and `/partner-join`, and the current forms send validated source attribution and idempotency keys. Production credentials, deployed delivery, retention and operational monitoring still require external verification.
- The homepage displays unsupported statistics, unattributed five-star testimonials, and simulated recent/live load matches. Remove these until the business supplies evidence and permission. Do not substitute invented proof.
- All routes receive `X-Robots-Tag: index, follow`; `/signin/` and the leaked component routes inherit homepage metadata. The signin experience is a non-functional template and should be removed or `noindex` until real authentication exists.

### High

- Only the homepage has a canonical. Sitemap URLs, canonical URLs and `trailingSlash: true` are inconsistent.
- Open Graph tags are duplicated by `_app.tsx` and page-level heads. Several image and schema URLs incorrectly include `/public` or omit `/images`, so they resolve to missing assets.
- Privacy-page `metadata` is an App Router convention and is ignored by the Pages Router. Organization schema is duplicated and inconsistent between “Return Loads UK” and “Logic Freight”.
- `robots.txt` gives Googlebot its own unrestricted group, which overrides the wildcard disallows. The sitemap is static, stale and cannot enforce a content quality threshold.
- Existing England, Scotland and Wales pages are near-duplicate route-name lists with no operational depth. Their rows are not links, and they risk looking like availability listings without a data source.
- There is no shipper journey and no active subcontractor application route. Most calls to action either scroll to the truck form or start a phone call.

### Medium

- Desktop navigation is hover-only and the mobile accordion is not keyboard-semantic. Forms lack announced status messages, useful autocomplete attributes and complete field validation. Multiple H1s appear on the homepage, and extensive animation does not honour reduced-motion preferences.
- The CSS-background hero is not image-optimised. The homepage hydrates many animation-heavy template sections and uses two motion packages. Barlow requests eighteen weight/style variants.
- There are no automated tests, conversion tests or CI checks. The TypeScript no-emit check passes, but the configured `next lint` script fails under Next 16; direct ESLint reports a Google Analytics script warning.

## 3. Research evidence and guardrails

- The Department for Transport's [Domestic road freight statistics, United Kingdom: 2025](https://www.gov.uk/government/statistics/road-freight-statistics-2025/domestic-road-freight-statistics-united-kingdom-2025) reports 1.53 billion tonnes lifted and 5,897 million kilometres travelled empty by GB-registered HGVs in 2025. Palletised goods and solid bulk were the most common transportation methods across road freight journeys. This supports useful education about empty running and distinct freight types; it does not prove demand, availability or performance for Logic Freight.
- DfT's [Port freight annual statistics: 2025](https://www.gov.uk/government/statistics/port-freight-annual-statistics-2025) reports 428.3 million tonnes handled by UK ports. Its [cargo trends](https://www.gov.uk/government/statistics/port-freight-annual-statistics-2025/port-freight-annual-statistics-2025-cargo-trends) record 97.0 million tonnes of Ro-Ro traffic and 10% growth in container tonnage. This supports prioritising genuinely useful port, Ro-Ro and container-haulage guides, subject to confirmed service capability.
- GOV.UK's [guidance for non-UK operators transporting goods into the UK](https://www.gov.uk/guidance/eu-operators-transporting-goods-into-the-uk) says EU operators have limited UK cabotage rights: after arriving laden they may make two cabotage movements within seven days; an operator arriving empty may collect one bilateral return movement and go directly back to the EU. European-haulier pages must be date-stamped, source-linked, reviewed by a competent person and framed as general information rather than legal advice.
- Google's [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) favours original, complete content made for an existing audience. Google's [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) define doorway abuse and scaled content abuse, including substantially similar regional pages and large volumes of unoriginal pages. Town-name substitution, fake listings and keyword-swapped templates are therefore prohibited.
- Google's [faceted navigation guidance](https://developers.google.com/crawling/docs/faceted-navigation) warns that filter combinations can create effectively infinite URL spaces and slow discovery of useful pages. Only editorially approved facets become crawlable URLs; all other filters remain client state or controlled parameter URLs outside the index.

## 4. Prioritised SEO and CRO strategy

### P0 - truth, crawl control and lead reliability

1. Remove leaked component routes and non-functional public template experiences.
2. Remove or qualify every unsupported statistic, testimonial, guarantee, live-status claim and “verified” claim.
3. Centralise Pages Router SEO in a reusable component: unique title and description, self-referencing canonical, robots policy, absolute Open Graph/Twitter image, and one coherent JSON-LD graph.
4. Generate `sitemap.xml` from approved registry records only. Align canonical, sitemap, redirect and trailing-slash rules.
5. Implement a server-side submission boundary with schema validation, sanitisation, rate limiting/honeypot protection, delivery retries, safe logging and accessible success/error states.
6. Add consent-aware analytics once and count a primary conversion only after the server accepts the enquiry.

### P1 - separate commercial journeys

1. Rebuild the homepage as a clear broker/intermediary overview with three journey cards above the fold.
2. Create a dedicated landing page and tailored form for each journey. Ask only information needed to triage the enquiry; use conditional follow-up rather than one long universal form.
3. Add “How it works”, service limitations, response expectations, contact methods and evidence-backed trust content close to each form.
4. Make phone and email alternatives visible, but measure them as assisted actions rather than confirmed leads.
5. Provide useful confirmation states with next steps and a non-sensitive enquiry reference.

### P2 - authority hubs and curated templates

1. Publish service and vehicle hubs before granular locations. They establish vocabulary and give local pages useful parent relationships.
2. Add only the industries, vehicle types, ports and corridors that Logic Freight can genuinely support.
3. Launch a small, reviewed location set based on commercial coverage and operational knowledge. Expand only when each page adds distinct logistics detail.
4. Publish route pages only for stable commercial corridors with two-direction context, access constraints, typical suitable equipment and an honest enquiry path - never a fabricated load list.
5. Treat seasonal opportunities as evergreen planning resources with a visible reviewed date; do not imply a current job or guaranteed volume.

### P3 - improve and scale from evidence

1. Use Search Console query/page data, qualified-lead outcomes and sales feedback to decide which page families expand.
2. Refresh or merge pages that receive impressions but do not satisfy intent. Retire pages whose service capability or facts can no longer be maintained.
3. Build expert guides around recurring customer and haulier questions. Cite primary sources for regulation and statistics.
4. Earn links through useful tools, checklists and original operational insight, not syndication or city-page volume.

## 5. One-intent-per-page keyword and information architecture map

Keywords below are intent themes, not instructions to repeat exact phrases. A page owns one primary intent; close variants belong on that page rather than spawning another URL.

| Route or family                                                                      | Primary audience and intent                                | Primary query theme                                                   | Boundary that prevents cannibalisation                                                           |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `/`                                                                                  | All audiences: understand the service and choose a journey | return loads UK; Logic Freight                                        | Overview only; does not try to rank for every service or location                                |
| `/find-return-loads/`                                                                | Haulier with capacity seeking a suitable backload          | find return loads; HGV loads; backloads UK                            | Transactional availability enquiry, not partner onboarding                                       |
| `/place-available-truck/`                                                            | Haulier declaring a specific vehicle/time/location         | place available truck; available HGV capacity                         | Capacity-placement form, not a general haulage-work guide                                        |
| `/haulage-subcontractor-work/`                                                       | Owner-driver/company seeking an ongoing relationship       | haulage subcontractor work; loads for owner-drivers                   | Network benefits, requirements and application; no live load claims                              |
| `/submit-a-load/`                                                                    | Shipper with freight to move                               | submit a load; need a haulier; freight quote                          | Shipper brief and triage, not a carrier-facing page                                              |
| `/how-it-works/`                                                                     | All audiences evaluating the intermediary model            | how freight/load matching works                                       | Explains process and responsibilities; no conversion-keyword duplication                         |
| `/services/`                                                                         | Shipper comparing transport solutions                      | road freight services UK                                              | Service directory and selection guidance                                                         |
| `/services/[slug]/`                                                                  | Shipper seeking one movement type                          | full load, part load, pallet, groupage, dedicated or urgent transport | One page per materially different service Logic Freight confirms                                 |
| `/vehicles/`                                                                         | User selecting suitable equipment                          | HGV and trailer types                                                 | Educational hub, not a fleet-ownership claim                                                     |
| `/vehicles/[slug]/`                                                                  | User with a vehicle-specific requirement/capacity          | curtain-sider, flatbed, box, refrigerated, low-loader, tipper loads   | Publish only when capability and handling detail are confirmed                                   |
| `/industries/`                                                                       | Shipper exploring sector fit                               | industry freight solutions                                            | Sector directory with qualification guidance                                                     |
| `/industries/[slug]/`                                                                | Sector-specific shipper                                    | construction, agriculture, retail, manufacturing freight              | Must contain real sector constraints, not generic synonym swaps                                  |
| Existing `/return-loads-england/`, `/return-loads-scotland/`, `/return-loads-wales/` | Haulier seeking country-level coverage                     | return loads [country]                                                | Distinct regional overview; redirect into `/locations/` only if URLs are deliberately normalised |
| `/locations/`                                                                        | User browsing operating coverage                           | return loads by location                                              | Curated hierarchy; not an exhaustive postcode index                                              |
| `/locations/[slug]/`                                                                 | User with a real local freight/capacity need               | return loads [place]; haulage [place]                                 | One locality per page with unique freight geography and links to genuine corridors               |
| `/ports/` and `/ports/[slug]/`                                                       | Port user planning onward/return road freight              | port haulage; return loads near [port]                                | Port access, cargo and onward-corridor guidance; no invented availability                        |
| `/routes/[slug]/`                                                                    | User planning a specific two-place corridor                | return loads [origin] to [destination]                                | Curated corridors only; explain both directions and suitable services                            |
| `/corridors/[slug]/`                                                                 | Operator planning around a motorway/industrial corridor    | freight along M1/M6/etc.                                              | Network/geography intent, separate from a precise origin–destination route                       |
| `/european-hauliers/`                                                                | Non-UK haulier entering/leaving the UK                     | UK return loads for European hauliers                                 | Operational and sourced regulatory overview, reviewed on a schedule                              |
| `/international/[slug]/`                                                             | User with one confirmed UK–Europe lane/service             | UK to/from [country] freight                                          | Publish only where Logic Freight confirms coverage and compliance process                        |
| `/seasonal/[slug]/`                                                                  | Business planning a recurring seasonal requirement         | seasonal freight for agriculture, retail peaks, events, etc.          | Planning guide, not a current-work or load-volume promise                                        |
| `/guides/[slug]/`                                                                    | Researcher seeking an answer or checklist                  | informational long-tail questions                                     | Answers the question fully and points to, rather than duplicates, commercial pages               |
| `/about/`, `/contact/`, `/privacy-policy/`, `/cookie-policy/`                        | Trust, contact and legal intent                            | brand/entity/legal queries                                            | Factual support pages; privacy/cookies are not SEO landing pages                                 |

### Registry implementation

- Store curated records in typed data modules outside `src/pages`, with fields such as `kind`, `slug`, `status`, `primaryIntent`, `audience`, `title`, `description`, `lastReviewed`, `reviewer`, `capabilities`, `contentBlocks`, `relatedSlugs`, `sources` and `indexation`.
- Render approved records through Pages Router templates using `getStaticPaths` and `getStaticProps` with `fallback: false`. Unknown or unapproved slugs must return `404` rather than a generic page.
- Derive navigation, breadcrumbs, related links, canonicals and the dynamic sitemap from the same registry. Do not maintain separate URL lists that can drift.
- Keep filters non-crawlable by default. A filter combination becomes a registry record only after editorial approval and the full quality gate.
- Use a single primary page owner for each intent in the registry and reject records whose `primaryIntent` materially overlaps an existing indexable page.

## 6. Publication and indexation quality gate

### Hard blockers

A page cannot be published as indexable if any of these are true:

- service, geography, vehicle capability or regulatory statement is unconfirmed;
- copy is primarily place-name, vehicle-name or keyword substitution;
- it contains fabricated loads, availability, prices, partners, statistics, testimonials or outcomes;
- its primary intent substantially overlaps another indexable page;
- the main action is broken or the page implies functionality that does not exist;
- time-sensitive legal or seasonal content has no source, owner or review date;
- it exposes private, personal or customer-specific information.

### Required editorial value

An indexable record must have all of the following:

- a named audience, one primary intent and a clear user task;
- a unique summary written in natural British English;
- at least two substantive, page-specific operational blocks, such as freight geography, relevant access constraints, cargo/vehicle fit, timing considerations, or a genuinely useful checklist;
- an accurate explanation of what Logic Freight can do, cannot guarantee and what happens after enquiry;
- a tailored CTA for one of the three journeys;
- contextual parent, sibling and next-step links;
- primary-source citations for material statistics or rules;
- a content owner and genuine `lastReviewed` date.

There is no arbitrary word-count target. A concise page that resolves its task is preferable to padded copy.

### Required technical QA

- unique title, description and H1;
- self-referencing canonical using the preferred trailing-slash format;
- correct `index,follow` or `noindex,follow` directive with no conflicting HTTP header;
- valid breadcrumbs and only structured data that matches visible content;
- working absolute social image and descriptive alternative text;
- accessible landmarks, heading order, links, form labels, keyboard behaviour and announced status;
- mobile visual QA, no broken links, acceptable performance and a successful production build;
- inclusion in the XML sitemap only after all editorial and technical checks pass.

### Lifecycle states

| State               | Search treatment                           | Use                                                                                 |
| ------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------- |
| `draft`             | Not publicly routed                        | Authoring and review                                                                |
| `published-noindex` | `noindex,follow`; excluded from sitemap    | Useful campaign, form or filter page that does not merit search landing-page status |
| `indexable`         | Self-canonical; included in sitemap        | Passed full editorial and technical gate                                            |
| `retired`           | `301` to a true successor, otherwise `410` | Capability ended, page merged or content cannot be maintained                       |

Review high-risk regulation pages at least quarterly and after known rule changes; review core commercial pages at least every six months. “Last reviewed” changes only after a real review, never automatically on build.

## 7. Analytics and conversion event plan

Use one consent-aware implementation, preferably a typed `dataLayer` helper that can be mapped in GTM. Do not run both direct GA configuration and the same GA property through GTM. The primary conversion is a server-accepted enquiry, not a button click.

| Event                         | Trigger                                  | Allowed parameters                                                                               |
| ----------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `journey_select`              | User chooses one of the three journeys   | `journey`, `placement`, `page_type`                                                              |
| `cta_click`                   | Commercial CTA activation                | `journey`, `placement`, `destination_type`, `page_type`, `content_slug`                          |
| `form_start`                  | First valid interaction with a lead form | `form_id`, `journey`, `page_type`                                                                |
| `form_step_complete`          | A multi-step form advances               | `form_id`, `journey`, `step_number`                                                              |
| `form_validation_error`       | Client/server rejects a field            | `form_id`, `field_key`, `error_code`                                                             |
| `form_submit_attempt`         | User submits                             | `form_id`, `journey`, `page_type`                                                                |
| `form_submit_success`         | Server confirms acceptance               | `form_id`, `journey`, `page_type`, `vehicle_category`, `region_slug`; map to GA4 `generate_lead` |
| `form_submit_error`           | Submission fails                         | `form_id`, `journey`, `error_code`, `http_status_group`                                          |
| `phone_click` / `email_click` | Contact link activation                  | `placement`, `journey`, `page_type`                                                              |
| `content_navigation`          | Internal hub/related-page link           | `source_page_type`, `target_page_type`, `placement`                                              |
| `faq_expand`                  | FAQ answer opened                        | `page_type`, `question_id`                                                                       |

Never send names, email addresses, telephone numbers, company names, vehicle registrations, exact addresses/postcodes, free text, uploaded filenames/documents, API payloads or raw search queries to analytics. Use controlled slugs and category enums. Avoid combinations granular enough to identify a person or a single business.

Report separately on:

- primary accepted leads by journey and landing-page family;
- assisted phone/email actions;
- form start-to-success rate and error rate;
- qualified-lead rate from CRM feedback, using aggregate campaign/page identifiers rather than customer data;
- organic landing pages that generate qualified outcomes, not just sessions or rankings.

## 8. Remaining business, legal and integration inputs

### Business facts and proof

- Confirm the trading relationship between Logic Freight Limited and Return Loads UK, company number, registered/trading address, telephone, email and opening hours.
- Confirm actual geographic coverage, including Northern Ireland, ports and UK–Europe lanes.
- Confirm supported services, cargo exclusions, vehicle/trailer types, industries, urgency/lead-time expectations and whether Logic Freight owns any vehicles or acts only as intermediary.
- Supply evidence and publication permission for partner counts, load volumes, experience, accreditations, memberships, insurance, payment terms, testimonials, case studies and logos. Until supplied, omit them.
- Confirm realistic response expectations and what “verified” or “vetted” means operationally.

### Legal and privacy

- Legal review of intermediary wording, liability boundaries, prohibited/dangerous goods, operator obligations and any insurance statements.
- Data-controller details, ICO registration where applicable, lawful bases, retention periods, processors, international transfers, marketing consent model and data-subject contact route.
- Cookie/consent platform choice and categorisation of GTM/GA. Analytics and marketing tags must respect the resulting consent state.
- Competent review and ownership for cabotage, drivers' hours, customs and other regulatory guides; include a non-advice disclaimer and source/review dates.

### Lead and data integrations

- Confirm the receiving CRM, transport management system, mailbox or webhook; authentication, field mapping, deduplication, retry behaviour, alerting and data-processing agreements.
- Decide how load, truck and subcontractor leads are triaged, who owns follow-up, and which CRM outcome constitutes a qualified lead.
- Select spam and abuse controls that do not create unnecessary friction.
- If live loads are ever displayed, define the authorised source, refresh frequency, expiry rules, access controls and removal process before creating any listing route.

### Measurement and operations

- Confirm GTM/GA ownership, Search Console and Bing Webmaster Tools access, consent requirements and reporting owners.
- Define baseline conversion rates and qualified-lead targets after reliable tracking is live; do not invent historical benchmarks.
- Assign subject-matter reviewers and an editorial calendar for services, places, ports, regulations and seasonal pages.
- Provide approved brand assets and real social-share imagery, plus any verified social profiles for Organization schema.

## 9. Success criteria

The first release is successful when all unintended routes and unsupported claims are gone; all three journeys can submit reliably; every indexable URL has unique, correct technical SEO; the sitemap contains only quality-gated registry records; mobile and keyboard users can complete each form; and reporting distinguishes accepted and qualified leads without collecting PII in analytics.
