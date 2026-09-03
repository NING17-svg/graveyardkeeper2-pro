import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

// These pages exist purely as internal rendering fixtures consumed by the
// project scripts. They are excluded from the production navigation and
// footer links and serve only to verify the rendering pipeline. Public
// visitors should not reach them via sitemap links.
export const fixturePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Guides`,
    seoTitle: `${site.gameName} Guides`,
    metaDescription: "Guides index placeholder for site navigation.",
    summary: "Guides index placeholder for site navigation.",
    hero: {
      subtitle: "Guides index placeholder for site navigation.",
      ctas: [],
    },
    quickAnswer: "Guides index placeholder for site navigation.",
    keyFacts: [{ label: "Placeholder", value: "Internal navigation placeholder" }],
    modules: [
      {
        id: "fixture-module",
        type: "prose",
        heading: "Placeholder",
        body: "Internal navigation placeholder.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: [],
    sourceStatus: "placeholder",
    lastReviewed: "2026-09-03",
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Wiki`,
    seoTitle: `${site.gameName} Wiki`,
    metaDescription: "Wiki index placeholder for site navigation.",
    summary: "Wiki index placeholder for site navigation.",
    hero: {
      subtitle: "Wiki index placeholder for site navigation.",
      ctas: [],
    },
    quickAnswer: "Wiki index placeholder for site navigation.",
    keyFacts: [{ label: "Placeholder", value: "Internal navigation placeholder" }],
    modules: [
      {
        id: "fixture-module",
        type: "prose",
        heading: "Placeholder",
        body: "Internal navigation placeholder.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: [],
    sourceStatus: "placeholder",
    lastReviewed: "2026-09-03",
  },
];