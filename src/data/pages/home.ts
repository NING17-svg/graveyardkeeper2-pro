import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: "Graveyard Keeper 2: Release Date, Platforms, and Gameplay",
  seoTitle: "Graveyard Keeper 2 Hub: Release Date, Platforms, and Launch FAQ",
  metaDescription:
    "Graveyard Keeper 2 launches September 22, 2026 across Windows, macOS, Linux, SteamOS, PS5, Xbox Series, Switch 1, and Switch 2. See price, gameplay, multiplayer, cooking, romance, and sequel vs original.",
  summary:
    "Launch-week hub for Graveyard Keeper 2 (Lazy Bear Games, Steam AppID 4358690): release date, multi-platform launch, pre-purchase discount, multiplayer status, and reference pages for cooking, romance, gameplay length, trophies, and the sequel vs original comparison.",
  hero: {
    eyebrow: "Confirmed launch: Sep 22, 2026",
    subtitle: site.tagline,
    ctas: [
      { label: "See release timing", href: "/release/" },
      { label: "Read Switch 2 details", href: "/switch-2/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 releases on September 22, 2026 across Windows, macOS, Linux, SteamOS PCs alongside PlayStation 5, Xbox Series X and S, Nintendo Switch 1, and Nintendo Switch 2 in a simultaneous multi-platform launch. The Steam standard edition costs $24.99 with a 20% pre-purchase discount that drops the price to $19.99 through launch day.",
  keyFacts: [
    { label: "Release date", value: "September 22, 2026 (full launch)" },
    { label: "Platforms", value: "PC, PS5, Xbox Series, Switch 1, Switch 2" },
    { label: "Steam price", value: "$24.99 ($19.99 with 20% pre-purchase)" },
    { label: "Multiplayer", value: "Single-player only at launch" },
  ],
  modules: [
    {
      id: "release-overview",
      type: "prose",
      heading: "Launch-week release overview",
      body: "Graveyard Keeper 2 ships on September 22, 2026 on every announced platform on the same day. The Steam store page lists the launch at $24.99 with a 20% pre-purchase discount that holds through launch day for $19.99. There is no Early Access phase on Steam and no staggered console release. Use the release hub for the platform list, the Switch 2 edition, the early-access answer, and the launch-week press roundup.",
      links: [
        { label: "Release & platforms", href: "/release/", description: "Confirmed September 22, 2026 launch and platform list." },
        { label: "Switch 2 and Switch 1", href: "/switch-2/", description: "Nintendo Switch and Switch 2 launch details." },
        { label: "Editions and pricing", href: "/editions/", description: "Standard edition price and pre-purchase window." },
        { label: "Early access status", href: "/early-access/", description: "Full launch, not Early Access." },
      ],
    },
    {
      id: "multiplayer-extras",
      type: "prose",
      heading: "Multiplayer and extras",
      body: "Graveyard Keeper 2 is a single-player game at launch. No built-in co-op or multiplayer roadmap is published, and the closest legacy context is the Keepers Together mod for the 2018 original. The launch-day DLC lineup is the standard edition plus the Pre-Order Bonus DLC for anyone who pre-orders; further DLC packs have not been announced.",
      links: [
        { label: "Multiplayer status", href: "/multiplayer/", description: "Single-player only at launch." },
        { label: "DLC and expansions", href: "/dlc/", description: "Launch DLC status and season-pass scope." },
      ],
    },
    {
      id: "gameplay-systems",
      type: "prose",
      heading: "Gameplay and press reference",
      body: "The sequel keeps the medieval cemetery sim backbone and adds a 2D dungeon-crawler battle system, an Inquisitor protagonist, and a town-restoration meta layer. Cooking and romance systems return in updated form, but the full recipe list and romanceable-NPC list are not published before launch. Trophy/achievement parity and launch-week press roundup are tracked here.",
      links: [
        { label: "Cooking recipes", href: "/cooking/", description: "Cooking stations and recipe status." },
        { label: "Romance NPCs", href: "/romance/", description: "NPC relationships and romance scope." },
        { label: "Gameplay length", href: "/gameplay-length/", description: "Main-story length and pacing." },
        { label: "Trophies and achievements", href: "/trophies/", description: "Achievement scope and console parity." },
        { label: "Reviews and press", href: "/reviews/", description: "Launch-week press roundup." },
        { label: "Vs the original", href: "/vs-graveyard-keeper/", description: "Sequel vs the 2018 original." },
      ],
    },
    {
      id: "system-readiness",
      type: "prose",
      heading: "System readiness",
      body: "PC players can confirm hardware fit using the published Windows minimum and recommended tiers before launch day. Both tiers require DirectX 12 and a modest GPU, with a separate macOS, Linux, or SteamOS tier not published as of 2026-09-03.",
      links: [
        { label: "System requirements", href: "/system-requirements/", description: "Windows minimum and recommended specs." },
      ],
    },
  ],
  faqIds: ["release-overview", "multiplayer-status", "switch-2-edition", "editions-pricing"],
  relatedPageIds: [
    "fixed-release-platforms-en-US",
    "fixed-switch-version-en-US",
    "fixed-editions-pricing-en-US",
    "fixed-multiplayer-en-US",
    "fixed-cooking-recipes-en-US",
    "fixed-romance-npcs-en-US",
    "fixed-gameplay-length-en-US",
    "fixed-trophy-achievements-en-US",
    "fixed-vs-graveyard-keeper-en-US",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-03",
};