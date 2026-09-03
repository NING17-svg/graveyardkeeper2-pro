import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const lastReviewed = "2026-09-03";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About the Graveyard Keeper 2 launch hub: scope, sourcing, editorial principles, and how to send corrections.",
    summary:
      "About this unofficial launch-week guide for Graveyard Keeper 2 — what we cover, how we source facts, and what to expect.",
    hero: {
      eyebrow: "About",
      subtitle: "An unofficial launch-week guide for Graveyard Keeper 2.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial launch-week guide for Graveyard Keeper 2 that compiles release timing, platform coverage, editions, and reference content from official sources.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Sourced from official and media outlets" },
      { label: "Scope", value: "Launch-week release, gameplay, comparison" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear, sourced launch-week information about Graveyard Keeper 2 without pretending the site knows more than official sources support.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Use the Steam store page, the official graveyardkeeper2.com marketing site, the Nintendo Switch 2 store page, and supporting media coverage for current-game facts. Treat the 2018 original as legacy reference context only.",
        links: site.officialSources,
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed,
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact the Graveyard Keeper 2 launch hub for corrections, official source updates, and site feedback.",
    summary:
      "Send corrections and source updates for the Graveyard Keeper 2 launch hub.",
    hero: {
      eyebrow: "Contact",
      subtitle: "Use this page for corrections, source updates, and feedback.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Send corrections and source updates to the team running this launch hub. We do not request private account information.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Launch requirement", value: "Add a real contact method" },
      { label: "Response", value: "Set expectations clearly" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Reach out via the Cloudflare Email Routing alias configured for this domain (support@graveyardkeeper2.pro). This address forwards to a verified team inbox.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Send official source links when facts change. Do not send private account information or game account credentials.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed,
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the Graveyard Keeper 2 launch hub, covering analytics, hosting, and contact channels.",
    summary:
      "Starter privacy policy covering analytics, hosting, and contact messages for this launch hub.",
    hero: {
      eyebrow: "Privacy",
      subtitle: "What data this launch hub collects and how it is used.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This page describes what data this launch hub collects and how it is used.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This launch hub does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact-msg",
        type: "prose",
        heading: "Contact messages",
        body:
          "If you write to the contact address, messages may include the information you choose to send. Do not include sensitive personal information.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed,
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the Graveyard Keeper 2 launch hub, including scope, disclaimers, and acceptable use.",
    summary:
      "Starter terms page for this unofficial launch hub.",
    hero: {
      eyebrow: "Terms",
      subtitle: "Set expectations for unofficial status and informational use.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "These terms set expectations for the unofficial status and informational use of this launch hub.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Update before launch" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This launch hub is not affiliated with Lazy Bear Games, tinyBuild, Nintendo, Sony, Microsoft, Valve, or any trademark owner unless explicitly stated.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the launch hub, scrape aggressively, interfere with service availability, or submit harmful content through the contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed,
  },
];