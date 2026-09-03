import type { PageContent } from "@/types/content";

const lastReviewed = "2026-09-03";

export const releasePlatformsPage: PageContent = {
  id: "fixed-release-platforms-en-US",
  translationKey: "release-platforms",
  locale: "en-US",
  routeKind: "fixed",
  slug: "release",
  url: "/release",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Release Date and Supported Platforms",
  seoTitle: "Graveyard Keeper 2 Release Date and Supported Platforms (2026-09-22)",
  metaDescription:
    "Graveyard Keeper 2 release date confirmed for September 22, 2026 on PC, PS5, Xbox Series, Switch 1, and Switch 2. See Steam pre-purchase discount and launch scope.",
  summary:
    "Confirmed September 22, 2026 multi-platform launch across Windows, macOS, Linux, SteamOS PCs, PlayStation 5, Xbox Series X and S, Nintendo Switch 1, and Nintendo Switch 2, with a Steam pre-purchase discount through launch day.",
  hero: {
    eyebrow: "Launch status",
    subtitle: "Graveyard Keeper 2 launches on every announced platform on September 22, 2026.",
    ctas: [
      { label: "Switch and Switch 2 edition", href: "/switch-2/" },
      { label: "PC system requirements", href: "/system-requirements/" },
      { label: "Editions and pricing", href: "/editions/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 release date is September 22, 2026 with a simultaneous multi-platform launch across Windows, macOS, Linux, and SteamOS PCs, alongside PlayStation 5, Xbox Series X and S, Nintendo Switch 1, and Nintendo Switch 2. The Steam standard edition costs $24.99 with a 20% pre-purchase discount through launch day, bringing the price to $19.99. This is a full launch, not Early Access.",
  keyFacts: [
    { label: "Release date", value: "September 22, 2026" },
    { label: "Launch type", value: "Full launch (no Early Access)" },
    { label: "Platforms", value: "PC, PS5, Xbox Series, Switch 1, Switch 2" },
    { label: "Steam price", value: "$24.99 standard / $19.99 pre-purchase" },
  ],
  modules: [
    {
      id: "release-glance",
      type: "prose",
      heading: "Graveyard Keeper 2 release date at a glance",
      body: "Graveyard Keeper 2 is a day-one multi-platform release: every announced platform ships on September 22, 2026. The release date and platform list appear on the Steam store page, the official graveyardkeeper2.com marketing site, and the Nintendo Switch 2 store page, so launch-day timing is consistent across first-party storefronts. On Steam, the release is set for September 22, 2026 with no Early Access phase, and the 20% pre-purchase discount runs through launch day, so the discounted $19.99 price only holds if you buy before the release unlocks. The PS5, Xbox Series, Switch 1, and Switch 2 versions all release on the same September 22 date, which the NintendoEverything announcement attributes to a coordinated multi-platform launch. The Switch 2 SKU is part of the system's launch lineup and is available alongside the Switch 1 SKU on day one.",
    },
    {
      id: "platform-list",
      type: "data-table",
      heading: "Platforms Graveyard Keeper 2 launches on",
      columns: [
        { key: "platform", label: "Platform" },
        { key: "status", label: "Launch status" },
        { key: "source", label: "Source" },
      ],
      rows: [
        { platform: "Windows", status: "September 22, 2026", source: "Steam store page" },
        { platform: "macOS", status: "September 22, 2026", source: "Steam store page" },
        { platform: "Linux", status: "September 22, 2026", source: "Steam store page" },
        { platform: "SteamOS", status: "September 22, 2026", source: "Steam store page" },
        { platform: "PlayStation 5", status: "September 22, 2026", source: "Official marketing site" },
        { platform: "Xbox Series X / S", status: "September 22, 2026", source: "Official marketing site" },
        { platform: "Nintendo Switch 1", status: "September 22, 2026", source: "NintendoEverything" },
        { platform: "Nintendo Switch 2", status: "September 22, 2026", source: "Nintendo Switch 2 store page" },
      ],
    },
    {
      id: "controller-input",
      type: "prose",
      heading: "PC controller and input support",
      body: "The Steam store page lists full controller support, so DualShock 4, DualSense, and Xbox One and Xbox Series controllers work across the PC builds without third-party remapping tools. Keyboard and mouse remain supported alongside the controller options. Per-edition Switch 2 exclusive content beyond the Pre-Order Bonus DLC has not been announced as of 2026-09-03.",
    },
    {
      id: "pricing-window",
      type: "prose",
      heading: "Pricing and pre-purchase window",
      body: "The Steam store page lists Graveyard Keeper 2 at a launch price of $24.99, with a 20% pre-purchase discount applied through September 22, 2026. The pre-purchase price is $19.99, and the discount closes on launch day when the full retail price takes effect. A Collector's Edition has been discussed in community speculation, but the contents and pricing for any non-standard edition have not been announced as of 2026-09-03. Region-specific pricing outside the standard Steam tier also has not been announced.",
    },
    {
      id: "fact-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "A Collector's Edition contents list and pricing; region-specific pricing beyond the standard Steam tier; Xbox Game Pass inclusion; cross-progression or cross-buy between PC and console.",
    },
  ],
  faqIds: ["release-overview", "platforms-known", "early-access-status"],
  relatedPageIds: ["fixed-switch-version-en-US", "fixed-system-requirements-en-US", "fixed-editions-pricing-en-US", "fixed-early-access-en-US", "fixed-reviews-press-en-US", "fixed-vs-graveyard-keeper-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const switchVersionPage: PageContent = {
  id: "fixed-switch-version-en-US",
  translationKey: "switch-version",
  locale: "en-US",
  routeKind: "fixed",
  slug: "switch-2",
  url: "/switch-2",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Switch 2 and Switch 1 Release Details",
  seoTitle: "Graveyard Keeper 2 on Switch 2 and Switch 1 — Launch Details",
  metaDescription:
    "Graveyard Keeper 2 Switch 2 and Switch 1 editions launch September 22, 2026 alongside PC, PS5, and Xbox Series. See controller support and edition details.",
  summary:
    "Nintendo Switch 2 and Switch 1 both receive Graveyard Keeper 2 on the same September 22, 2026 launch date, with the standard edition content and the Pre-Order Bonus DLC across both consoles.",
  hero: {
    eyebrow: "Switch launch status",
    subtitle: "Switch 2 and Switch 1 launch on September 22, 2026 with the standard edition content.",
    ctas: [
      { label: "Release timing", href: "/release/" },
      { label: "Editions and pricing", href: "/editions/" },
      { label: "PC system requirements", href: "/system-requirements/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 Switch 2 launches on September 22, 2026 alongside Switch 1, PC, PlayStation 5, and Xbox Series X and S in the same coordinated multi-platform wave. The Nintendo Switch 2 store page confirms the sequel as part of the system's launch lineup with the Inquisitor protagonist story. Pre-orders add a Sauna building and a Grand Inquisitor outfit; other Switch 2 exclusive content has not been announced as of 2026-09-03.",
  keyFacts: [
    { label: "Switch 2 launch", value: "September 22, 2026 (launch-window title)" },
    { label: "Switch 1 launch", value: "Same-day September 22, 2026 launch" },
    { label: "Pre-order bonus", value: "Sauna building + Grand Inquisitor outfit" },
    { label: "Controller", value: "Joy-Con and Pro Controller" },
  ],
  modules: [
    {
      id: "switch-2-launch",
      type: "prose",
      heading: "Graveyard Keeper 2 Switch 2 launch status",
      body: "Graveyard Keeper 2 is one of the launch-window titles for Nintendo Switch 2 in North America. The Nintendo Switch 2 store page lists the sequel with the September 22, 2026 release date and a story summary that introduces the Inquisitor protagonist role. The Switch 2 listing frames Graveyard Keeper 2 as a narrative-driven sequel in which an Inquisitor arrives in a forgotten town. The same gameplay loop runs on Switch 2 as on PC and the other consoles: cemetery management, 2D dungeon-crawler combat, town restoration, and the zombie army management system. The Switch 2 SKU uses the same standard edition content as the other platforms, and the one announced launch-window extra is the Pre-Order Bonus DLC covered below. A separate Switch 2 edition tier or per-edition Switch 2 exclusive content beyond that bonus has not been announced as of 2026-09-03.",
    },
    {
      id: "switch-1-parity",
      type: "prose",
      heading: "Graveyard Keeper 2 Switch 1 compatibility",
      body: "Nintendo Switch 1 receives Graveyard Keeper 2 on the same September 22, 2026 date as Switch 2, according to the NintendoEverything announcement and the official marketing site. Both consoles are part of the same launch cohort. The two Switch SKUs share the standard edition content and the same launch date, but technical details such as resolution, frame rate targets, or Switch 2 performance parity have not been publicly detailed as of 2026-09-03. Specific Switch 2 fps benchmarks have not been announced.",
    },
    {
      id: "preorder-bonus",
      type: "prose",
      heading: "Graveyard Keeper 2 Switch 2 pre-order bonus",
      body: "Pre-ordering brings one confirmed extra on every platform, including both Nintendo consoles. The Lazy Bear Games launch announcement on Steam states that a pre-order grants a Sauna building for your town plus an outfit worthy of the new Grand Inquisitor. The outfit depends on the platform used for the pre-order, so a Switch 2 or Switch 1 pre-order can grant a different outfit variant than a Steam, PlayStation, or Xbox pre-order. The bonus attaches to the standard edition pre-order rather than to a paid upgrade tier, so no higher-priced Switch SKU is needed to receive the Sauna building or the Grand Inquisitor outfit.",
    },
    {
      id: "controller-support",
      type: "prose",
      heading: "Controller and platform support",
      body: "Both Switch versions run with full controller support by design, since the Joy-Con and Pro Controller are the primary input methods on Nintendo hardware. The Steam store page also lists DualShock, DualSense, and Xbox controllers as supported on PC, so the control scheme is consistent across platforms.",
    },
    {
      id: "switch-fact-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "Switch 2 exclusive content beyond the Pre-Order Bonus DLC; which exact outfit variant each platform grants; specific Switch 2 fps or resolution targets; cross-progression between Switch 1 and Switch 2; a separate paid Switch 2 edition tier.",
    },
  ],
  faqIds: ["switch-2-edition"],
  relatedPageIds: ["fixed-release-platforms-en-US", "fixed-editions-pricing-en-US", "fixed-system-requirements-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const systemRequirementsPage: PageContent = {
  id: "fixed-system-requirements-en-US",
  translationKey: "system-requirements",
  locale: "en-US",
  routeKind: "fixed",
  slug: "system-requirements",
  url: "/system-requirements",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 System Requirements for PC, Mac, and Linux",
  seoTitle: "Graveyard Keeper 2 System Requirements: PC, Mac, Linux, SteamOS",
  metaDescription:
    "Graveyard Keeper 2 system requirements cover Windows, macOS, Linux, and SteamOS. See confirmed minimum specs, supported controllers, and platform tiers.",
  summary:
    "Confirmed Windows minimum and recommended hardware tiers for Graveyard Keeper 2 alongside macOS, Linux, and SteamOS support; controller and input parity across PC and consoles.",
  hero: {
    eyebrow: "PC specs",
    subtitle: "Published Windows minimum and recommended tiers alongside macOS, Linux, and SteamOS support.",
    ctas: [
      { label: "Release timing", href: "/release/" },
      { label: "Switch and Switch 2", href: "/switch-2/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 system requirements published for Windows start at Windows 10 x64, an Intel Core i3-4160 or AMD FX-8320, 4 GB RAM, a GeForce GT 640, Radeon HD 7750, or Iris Pro Graphics 580, DirectX 12, and 2 GB of storage for 720p. The recommended 1080p tier moves to a Core i5-4670K or FX-8350, 8 GB RAM, and a GTX 660 or Radeon HD 7850. Separate macOS, Linux, and SteamOS tiers are not announced as of 2026-09-03.",
  keyFacts: [
    { label: "Minimum tier", value: "Windows 10 x64, i3-4160 / FX-8320, 4 GB RAM, GT 640 / HD 7750, 2 GB storage, 720p" },
    { label: "Recommended tier", value: "Windows 10 x64, i5-4670K / FX-8350, 8 GB RAM, GTX 660 / HD 7850, 2 GB storage, 1080p" },
    { label: "DirectX", value: "Version 12 required" },
    { label: "Controller support", value: "DualShock 4, DualSense, Xbox controllers" },
  ],
  modules: [
    {
      id: "windows-tiers",
      type: "data-table",
      heading: "Published Windows minimum and recommended tiers",
      columns: [
        { key: "component", label: "Component" },
        { key: "minimum", label: "Minimum (720p)" },
        { key: "recommended", label: "Recommended (1080p)" },
      ],
      rows: [
        { component: "Operating system", minimum: "Windows 10 x64", recommended: "Windows 10 x64" },
        { component: "Processor", minimum: "Intel Core i3-4160 or AMD FX-8320", recommended: "Intel Core i5-4670K or AMD FX-8350" },
        { component: "Memory", minimum: "4 GB RAM", recommended: "8 GB RAM" },
        { component: "Graphics", minimum: "GeForce GT 640, Radeon HD 7750, or Iris Pro Graphics 580", recommended: "GeForce GTX 660 (2048 MB) or Radeon HD 7850 (2048 MB)" },
        { component: "DirectX", minimum: "Version 12", recommended: "Version 12" },
        { component: "Storage", minimum: "2 GB available space", recommended: "2 GB available space" },
      ],
    },
    {
      id: "platform-support",
      type: "prose",
      heading: "Supported PC platforms",
      body: "Graveyard Keeper 2 ships on four PC platforms: Windows, macOS, Linux, and SteamOS. The Steam store page lists all four as supported at launch, which means the same build runs across desktop Windows, Apple Silicon and Intel Macs, mainstream Linux distributions, and Valve's Steam Deck and SteamOS hardware. The Windows build is the primary PC version and is the only platform with published hardware tiers. Both tiers list Windows 10 x64 and DirectX 12, so an older 32-bit Windows install or a DirectX 11-only GPU falls outside the stated support range. Graveyard Keeper 2 runs on both Apple Silicon and Intel-based Macs through Steam; a separate macOS requirements block with minimum OS version or hardware numbers is not announced as of 2026-09-03. The Linux and SteamOS tiers are listed as supported at launch, but Steam Deck verification status has not been announced as of 2026-09-03, though SteamOS support on the store page indicates the build is intended to run on Deck-class hardware.",
    },
    {
      id: "controller-input",
      type: "prose",
      heading: "Controller and input support",
      body: "The Steam store page lists full controller support for Graveyard Keeper 2. On PC, that means DualShock 4, DualSense, and Xbox One and Xbox Series controllers work without third-party remapping tools. Touch, keyboard, and mouse remain supported alongside the controller options. The control scheme is designed to mirror the Joy-Con and Pro Controller layout used on Nintendo Switch so the same actions work across platforms.",
    },
    {
      id: "online-requirements",
      type: "prose",
      heading: "Single-player and network requirements",
      body: "Graveyard Keeper 2 is a single-player game, so there is no multiplayer infrastructure that demands a persistent connection. Online features, if any are added post-launch, have not been announced as of 2026-09-03. The base install runs offline once Steam has validated the purchase.",
    },
    {
      id: "spec-fact-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "macOS, Linux, and SteamOS tier parity; Steam Deck verification status; frame-rate targets for either Windows tier; install size beyond the published 2 GB storage line; console hardware equivalents.",
    },
  ],
  faqIds: ["system-requirements-basics"],
  relatedPageIds: ["fixed-release-platforms-en-US", "fixed-switch-version-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const multiplayerPage: PageContent = {
  id: "fixed-multiplayer-en-US",
  translationKey: "multiplayer",
  locale: "en-US",
  routeKind: "fixed",
  slug: "multiplayer",
  url: "/multiplayer",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Multiplayer: Co-op, Mods, and Status",
  seoTitle: "Graveyard Keeper 2 Multiplayer: Co-op, Mods, and Roadmap",
  metaDescription:
    "Graveyard Keeper 2 multiplayer is not in scope: the game is single-player only with no co-op. See the original Keepers Together mod context and roadmap.",
  summary:
    "Confirmed single-player only at launch with no built-in co-op or multiplayer roadmap, alongside community demand signals and legacy context for the Keepers Together co-op mod on the 2018 original.",
  hero: {
    eyebrow: "Multiplayer status",
    subtitle: "Graveyard Keeper 2 is single-player only at launch; no built-in co-op or roadmap is published.",
    ctas: [
      { label: "Release timing", href: "/release/" },
      { label: "Sequel vs original", href: "/vs-graveyard-keeper/" },
      { label: "DLC and expansions", href: "/dlc/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 is single-player only at launch. The Steam store page confirms no built-in co-op or multiplayer at launch, and no post-launch multiplayer roadmap has been announced as of 2026-09-03. The closest legacy context is the Keepers Together community mod for the 2018 original, which is not a confirmed sequel feature.",
  keyFacts: [
    { label: "Launch multiplayer", value: "None — single-player only" },
    { label: "Co-op roadmap", value: "Not announced as of 2026-09-03" },
    { label: "Legacy context", value: "Keepers Together mod on the 2018 original" },
    { label: "Demand signal", value: "Active Steam Discussions MAKE IT MULTIPLAYER thread" },
  ],
  modules: [
    {
      id: "multiplayer-launch",
      type: "prose",
      heading: "Graveyard Keeper 2 at launch is single-player only",
      body: "The Steam store page lists Graveyard Keeper 2 as a single-player game. The marketing site and Nintendo Switch 2 store page both reinforce the single-player framing for the Inquisitor-led narrative. There is no built-in co-op, no online multiplayer mode, and no couch co-op tier announced for the launch window. Anyone searching for a co-op mod at launch should wait for post-launch mod work rather than assume a built-in system exists.",
    },
    {
      id: "community-demand",
      type: "prose",
      heading: "Community demand and legacy context",
      body: "Steam Discussions for AppID 4358690 carry an active MAKE IT MULTIPLAYER thread that captures returning-fan demand for co-op. The thread is a demand signal, not an official roadmap, so it does not change the single-player launch status. The 2018 original Graveyard Keeper has a community co-op mod called Keepers Together, which modders used to test multiplayer on the first game. That mod belongs to the legacy original-game context and is not a confirmed sequel feature.",
    },
    {
      id: "post-launch-multiplayer",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "Any post-launch multiplayer roadmap, official co-op DLC, or platform-level multiplayer update for Graveyard Keeper 2.",
    },
  ],
  faqIds: ["multiplayer-status"],
  relatedPageIds: ["fixed-release-platforms-en-US", "fixed-vs-graveyard-keeper-en-US", "fixed-dlc-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const earlyAccessPage: PageContent = {
  id: "fixed-early-access-en-US",
  translationKey: "early-access",
  locale: "en-US",
  routeKind: "fixed",
  slug: "early-access",
  url: "/early-access",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Early Access: Full Launch Status",
  seoTitle: "Graveyard Keeper 2 Early Access Status — Full Launch on Sep 22, 2026",
  metaDescription:
    "Graveyard Keeper 2 early access is not happening. The game ships as a full launch on September 22, 2026 with a 20% Steam pre-purchase discount window.",
  summary:
    "Confirmed full launch on September 22, 2026 with no Early Access phase and no separate pre-launch beta on Steam or consoles.",
  hero: {
    eyebrow: "Launch scope",
    subtitle: "Graveyard Keeper 2 ships as a full launch on September 22, 2026.",
    ctas: [
      { label: "Release timing", href: "/release/" },
      { label: "Editions and pricing", href: "/editions/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 is a full launch on September 22, 2026. The Steam store page does not list an Early Access phase, and the consoles ship on the same day with no staggered pre-release window. A separate Early Access program after launch has not been announced as of 2026-09-03.",
  keyFacts: [
    { label: "Launch type", value: "Full launch (no Early Access)" },
    { label: "Launch date", value: "September 22, 2026" },
    { label: "Steam status", value: "No Early Access phase on store page" },
    { label: "Pre-purchase", value: "20% discount through launch day" },
  ],
  modules: [
    {
      id: "early-access-status",
      type: "prose",
      heading: "Graveyard Keeper 2 early access status",
      body: "The Steam store page confirms a September 22, 2026 release without an Early Access phase, so there is no pre-release window before launch day. The 20% Steam pre-purchase discount runs through launch day, which is the only pre-launch offer on the Steam store page. The console SKUs ship on the same date, so console players are not buying into an Early Access beta before the PC audience.",
    },
    {
      id: "original-game-context",
      type: "prose",
      heading: "Original Graveyard Keeper Early Access context",
      body: "The 2018 original Graveyard Keeper launched through Steam Early Access before its 2018 full release, so some returning players search for the sequel's Early Access status. The sequel does not repeat that launch pattern; it ships directly as a full release on September 22, 2026. Treat the original's Early Access history as legacy reference context, not as a confirmed sequel path.",
    },
    {
      id: "early-access-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "A separate Early Access program after launch, a closed beta for the sequel, or a roadmap to a future co-op or multiplayer pre-release window.",
    },
  ],
  faqIds: ["early-access-status"],
  relatedPageIds: ["fixed-release-platforms-en-US", "fixed-editions-pricing-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const editionsPricingPage: PageContent = {
  id: "fixed-editions-pricing-en-US",
  translationKey: "editions-pricing",
  locale: "en-US",
  routeKind: "fixed",
  slug: "editions",
  url: "/editions",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Editions Price: Pre-Purchase Guide",
  seoTitle: "Graveyard Keeper 2 Editions and Pre-Purchase Pricing",
  metaDescription:
    "Graveyard Keeper 2 editions price covers the Steam standard edition at $24.99 with a 20% pre-purchase discount to $19.99 through September 22, 2026.",
  summary:
    "Steam standard edition at $24.99 with a 20% pre-purchase discount through launch day, plus Pre-Order Bonus DLC for anyone who pre-orders.",
  hero: {
    eyebrow: "Editions and pricing",
      subtitle: "Standard edition $24.99; 20% pre-purchase discount runs through launch day for $19.99.",
    ctas: [
      { label: "Release timing", href: "/release/" },
      { label: "Switch 2 edition", href: "/switch-2/" },
      { label: "DLC and expansions", href: "/dlc/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 standard edition launches on Steam at $24.99, with a 20% pre-purchase discount that drops the price to $19.99 through September 22, 2026. Pre-ordering on any platform grants the Pre-Order Bonus DLC, which adds a Sauna building plus an outfit worthy of the new Grand Inquisitor. A Collector's Edition contents list and platform-specific edition tiers have not been announced as of 2026-09-03.",
  keyFacts: [
    { label: "Standard edition", value: "$24.99 on Steam" },
    { label: "Pre-purchase price", value: "$19.99 (20% off through launch day)" },
    { label: "Pre-order bonus", value: "Sauna building + Grand Inquisitor outfit" },
    { label: "Collector's Edition", value: "Not announced as of 2026-09-03" },
  ],
  modules: [
    {
      id: "standard-edition",
      type: "prose",
      heading: "Standard edition on Steam",
      body: "The Steam store page lists Graveyard Keeper 2 at a launch price of $24.99 for the standard edition. The same edition content ships on PlayStation 5, Xbox Series, Nintendo Switch 1, and Nintendo Switch 2, with each platform handling its own pre-order bonus. The 20% pre-purchase discount applies to Steam purchases made through September 22, 2026, so the discounted price of $19.99 only holds if you buy before the release unlocks.",
    },
    {
      id: "preorder-bonus",
      type: "prose",
      heading: "Pre-order bonus and edition extras",
      body: "The Lazy Bear Games launch announcement on Steam confirms that pre-ordering adds the Pre-Order Bonus DLC: a Sauna building for your town plus an outfit worthy of the new Grand Inquisitor. The outfit depends on the platform used for the pre-order, so a Switch 2 or Switch 1 pre-order can grant a different outfit variant than a Steam, PlayStation, or Xbox pre-order. The bonus attaches to the standard edition pre-order rather than to a paid upgrade tier.",
    },
    {
      id: "editions-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "A Collector's Edition contents list and pricing; region-specific pricing beyond the standard Steam tier; paid upgrade tiers that bundle the Pre-Order Bonus DLC; platform-exclusive editions beyond the standard edition.",
    },
  ],
  faqIds: ["editions-pricing"],
  relatedPageIds: ["fixed-release-platforms-en-US", "fixed-switch-version-en-US", "fixed-dlc-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const dlcPage: PageContent = {
  id: "fixed-dlc-en-US",
  translationKey: "dlc",
  locale: "en-US",
  routeKind: "fixed",
  slug: "dlc",
  url: "/dlc",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 DLC: Launch Status and Expansions",
  seoTitle: "Graveyard Keeper 2 DLC: Launch Status and Season Pass",
  metaDescription:
    "Graveyard Keeper 2 DLC has not been announced as of 2026-09-03. Launch day ships with the standard edition plus the Pre-Order Bonus DLC, and season-pass contents remain unconfirmed.",
  summary:
    "Launch-day content is the standard edition plus the Pre-Order Bonus DLC for anyone who pre-orders; broader DLC and season-pass contents have not been announced.",
  hero: {
    eyebrow: "DLC status",
    subtitle: "Launch DLC is the Pre-Order Bonus DLC; further DLC packs have not been announced.",
    ctas: [
      { label: "Editions and pricing", href: "/editions/" },
      { label: "Sequel vs original", href: "/vs-graveyard-keeper/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 DLC at launch consists of the Pre-Order Bonus DLC, which adds a Sauna building plus an outfit worthy of the new Grand Inquisitor. A separate paid DLC pack, expansion, or season pass for the sequel has not been announced as of 2026-09-03. The 2018 original's Stranger Sins, Better Save Soul, Game of Crone, and Breaking Dead packs are not part of the launch lineup and are referenced only as legacy context.",
  keyFacts: [
    { label: "Launch DLC", value: "Pre-Order Bonus DLC (Sauna + Grand Inquisitor outfit)" },
    { label: "Season pass", value: "Not announced as of 2026-09-03" },
    { label: "Legacy reference", value: "Stranger Sins, Better Save Soul, Game of Crone, Breaking Dead" },
    { label: "Expansion roadmap", value: "Not announced as of 2026-09-03" },
  ],
  modules: [
    {
      id: "launch-dlc",
      type: "prose",
      heading: "Launch DLC scope",
      body: "Graveyard Keeper 2 ships with the standard edition content and grants the Pre-Order Bonus DLC to anyone who pre-orders on any platform. The Pre-Order Bonus DLC adds a Sauna building for your town plus an outfit worthy of the new Grand Inquisitor. The outfit depends on the platform used for the pre-order, so a Switch 2 or Switch 1 pre-order can grant a different outfit variant than a Steam, PlayStation, or Xbox pre-order. There is no separate paid DLC pack or expansion attached to launch day beyond the pre-order bonus.",
    },
    {
      id: "legacy-dlc-context",
      type: "prose",
      heading: "Legacy original-game DLC context",
      body: "The 2018 original Graveyard Keeper received Stranger Sins, Better Save Soul, Game of Crone, and Breaking Dead as post-launch DLC. Those packs belong to the legacy original-game context and are not part of the sequel's launch lineup. Returning fans sometimes ask whether the sequel will receive the same DLC treatment, but the Steam store page for AppID 4358690 does not list any additional DLC or season pass for the sequel as of 2026-09-03.",
    },
    {
      id: "dlc-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "A season pass for the sequel; specific DLC packs or expansions; post-launch roadmap dates; DLC entitlements beyond the Pre-Order Bonus DLC.",
    },
  ],
  faqIds: ["dlc-status"],
  relatedPageIds: ["fixed-editions-pricing-en-US", "fixed-vs-graveyard-keeper-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const reviewsPressPage: PageContent = {
  id: "fixed-reviews-press-en-US",
  translationKey: "reviews-press",
  locale: "en-US",
  routeKind: "fixed",
  slug: "reviews",
  url: "/reviews",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Reviews and Press: Launch Coverage",
  seoTitle: "Graveyard Keeper 2 Reviews and Press: Launch Coverage",
  metaDescription:
    "Graveyard Keeper 2 reviews and press coverage include previews from GamesRadar, PC Gamer, NintendoEverything. Numeric review scores remain unannounced at launch.",
  summary:
    "Launch-window press coverage from GamesRadar, PC Gamer, NintendoEverything, and NintendoLife, alongside the original Graveyard Keeper Metacritic baseline as legacy reference.",
  hero: {
    eyebrow: "Press roundup",
    subtitle: "Launch-week press coverage for Graveyard Keeper 2 across PC and console SKUs.",
    ctas: [
      { label: "Release timing", href: "/release/" },
      { label: "Sequel vs original", href: "/vs-graveyard-keeper/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 press coverage from launch window comes from GamesRadar and PC Gamer previews, the NintendoEverything announcement, and the Nintendo Switch 2 store page. Specific numeric review scores have not been announced as of 2026-09-03 because the launch date is September 22, 2026 and the review embargo lifts at launch.",
  keyFacts: [
    { label: "Launch date", value: "September 22, 2026" },
    { label: "Preview coverage", value: "GamesRadar, PC Gamer, NintendoEverything, NintendoLife" },
    { label: "Review embargo", value: "Lifts at launch" },
    { label: "Numeric scores", value: "Not announced as of 2026-09-03" },
  ],
  modules: [
    {
      id: "launch-press",
      type: "prose",
      heading: "Launch-window press coverage",
      body: "GamesRadar and PC Gamer published previews of Graveyard Keeper 2 that frame the sequel as a town-restoration expansion on the 2018 game's cemetery-management loop. NintendoEverything's announcement article focuses on the simultaneous Switch 1 and Switch 2 launch. NintendoLife lists the Switch SKU alongside the platform summary. Together these outlets cover the launch-week press story without disclosing numeric review scores, which lift at launch on September 22, 2026.",
    },
    {
      id: "original-baseline",
      type: "prose",
      heading: "Original Graveyard Keeper Metacritic baseline",
      body: "The 2018 original Graveyard Keeper (AppID 599140) is the legacy reference for review parity. Players comparing the sequel's launch-week reception with the original's Metacritic baseline should treat the original's scores as a separate benchmark rather than a confirmed sequel target. The sequel's launch review parity across PC, PlayStation 5, Xbox Series, Switch 1, and Switch 2 is not yet established because the launch date is September 22, 2026.",
    },
    {
      id: "review-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "Specific numeric review scores prior to launch; review embargo lift time; cross-platform score differences between PC, PlayStation 5, Xbox Series, Switch 1, and Switch 2.",
    },
  ],
  faqIds: ["reviews-status"],
  relatedPageIds: ["fixed-release-platforms-en-US", "fixed-vs-graveyard-keeper-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const cookingRecipesPage: PageContent = {
  id: "fixed-cooking-recipes-en-US",
  translationKey: "cooking-recipes",
  locale: "en-US",
  routeKind: "fixed",
  slug: "cooking",
  url: "/cooking",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Cooking Recipes and Stations Guide",
  seoTitle: "Graveyard Keeper 2 Cooking Recipes and Stations Guide",
  metaDescription:
    "Graveyard Keeper 2 cooking recipes feed the launch craft loop, but the full recipe list and station lineup have not been published as of 2026-09-03.",
  summary:
    "Cooking returns in the sequel's town-restoration and production loop, but the full station lineup and recipe list have not been published before launch.",
  hero: {
    eyebrow: "Cooking reference",
    subtitle: "Cooking stations and recipes return in updated form for the sequel's production loop.",
    ctas: [
      { label: "Gameplay length", href: "/gameplay-length/" },
      { label: "Sequel vs original", href: "/vs-graveyard-keeper/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 cooking recipes and stations have not been published in full as of 2026-09-03. Cooking returns in the sequel's town-restoration and production loop, but the full station lineup and recipe list are not announced before launch. Treat the 2018 original's cooking wiki as legacy context only.",
  keyFacts: [
    { label: "Cooking status", value: "Returns in the production loop" },
    { label: "Station lineup", value: "Not announced as of 2026-09-03" },
    { label: "Recipe list", value: "Not announced as of 2026-09-03" },
    { label: "Legacy context", value: "2018 original's cooking wiki (legacy)" },
  ],
  modules: [
    {
      id: "cooking-loop",
      type: "prose",
      heading: "Cooking in the sequel's production loop",
      body: "The sequel keeps the management backbone that fans of the first game remember, including cooking as part of the production chain that turns raw materials into sellable goods. Recipes and energy management from the first game are reworked to fit the new town's resource flow. As of 2026-09-03, neither the Steam store page nor the official graveyardkeeper2.com site publishes a station lineup or recipe list for the sequel. Players should wait for the official cooking guide rather than assume the original game's recipe set carries over unchanged.",
    },
    {
      id: "legacy-context",
      type: "prose",
      heading: "Legacy original-game cooking context",
      body: "The 2018 original Graveyard Keeper featured cooking tables, ovens, and bonfires with a recipe set tied to the cemetery-management loop. Returning players sometimes search for the sequel's recipe list because they remember the original's cooking wikis. Those wikis are legacy context, not a confirmed sequel feature. Do not use an original-game recipe set to infer a sequel recipe, station, or unlock path.",
    },
    {
      id: "cooking-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "The full cooking station lineup, recipe list, energy-restoration rates, and unlock paths for Graveyard Keeper 2.",
    },
  ],
  faqIds: ["cooking-status"],
  relatedPageIds: ["fixed-gameplay-length-en-US", "fixed-vs-graveyard-keeper-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const romanceNpcsPage: PageContent = {
  id: "fixed-romance-npcs-en-US",
  translationKey: "romance-npcs",
  locale: "en-US",
  routeKind: "fixed",
  slug: "romance",
  url: "/romance",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Romance NPCs: What We Know",
  seoTitle: "Graveyard Keeper 2 Romance NPCs and Relationships",
  metaDescription:
    "Learn what Graveyard Keeper 2 romance NPCs reveal about relationships, marriage, endings, and the town-restoration loop before launch.",
  summary:
    "NPC relationships are part of the sequel's town-restoration loop, but per-NPC romance arcs, marriage options, and specific endings are not announced before launch.",
  hero: {
    eyebrow: "Romance reference",
    subtitle: "NPC relationships are part of the town-restoration loop; romance arcs and endings are not announced.",
    ctas: [
      { label: "Gameplay length", href: "/gameplay-length/" },
      { label: "Sequel vs original", href: "/vs-graveyard-keeper/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 romance NPCs are not yet fully confirmed, although the game is a single-player narrative-driven crafting RPG whose NPC relationships belong in its town-restoration and production loop. The public official material does not list romanceable characters, marriageable NPCs, romance arcs, or relationship endings. Per-NPC romance arcs, marriage options, and specific endings are not announced as of 2026-09-03. Treat original-game romance discussions as legacy context, not as a confirmed sequel feature.",
  keyFacts: [
    { label: "Romance scope", value: "Not announced as of 2026-09-03" },
    { label: "NPC relationships", value: "Part of the town-restoration loop" },
    { label: "Marriage options", value: "Not announced as of 2026-09-03" },
    { label: "Legacy context", value: "Ms. Charm, Gerry, Ingrid from the 2018 original" },
  ],
  modules: [
    {
      id: "relationship-loop",
      type: "prose",
      heading: "How relationships work in the sequel",
      body: "The strongest current answer is deliberately narrow: Graveyard Keeper 2 is a single-player game built around narrative progression, restoring The Town, managing resources, and using an undead army. NPC relationships fit that broader town-restoration structure, but the available official descriptions do not explain dialogue choices, affinity meters, gifts, dates, or romance routes. The game may give players reasons to return to named characters and develop relationships while rebuilding the settlement. It does not establish a dating system, a list of eligible partners, or a marriage quest.",
    },
    {
      id: "legacy-romance",
      type: "prose",
      heading: "What the original game can and cannot tell you",
      body: "The 2018 original included relationship tracks associated with characters such as Ms. Charm, Gerry, and Ingrid. Players criticized some of its marriage-mistakes framing and the execution of those relationship threads. Those details explain why sequel players search for romance information, but they do not prove that any character, mechanic, or ending returns. Do not use an original-game romance guide to infer a sequel pairing, marriage requirement, affinity threshold, or achievement.",
    },
    {
      id: "romance-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "A romanceable-NPC list, per-character arcs, affinity requirements, marriage options, relationship achievements, and specific relationship endings for Graveyard Keeper 2.",
    },
  ],
  faqIds: ["romance-status"],
  relatedPageIds: ["fixed-gameplay-length-en-US", "fixed-vs-graveyard-keeper-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const gameplayLengthPage: PageContent = {
  id: "fixed-gameplay-length-en-US",
  translationKey: "gameplay-length",
  locale: "en-US",
  routeKind: "fixed",
  slug: "gameplay-length",
  url: "/gameplay-length",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Gameplay Length and Pacing Guide",
  seoTitle: "Graveyard Keeper 2 Gameplay Length and Pacing",
  metaDescription:
    "See how Graveyard Keeper 2 gameplay length may vary, what the confirmed systems suggest, and which playtime details remain unannounced.",
  summary:
    "Confirmed systems and the launch-week framing point to a multi-system narrative-driven crafting RPG, but exact main-story and completionist hours are not announced.",
  hero: {
    eyebrow: "Pacing reference",
    subtitle: "Confirmed systems point to a multi-system RPG; exact hours are not announced.",
    ctas: [
      { label: "Cooking recipes", href: "/cooking/" },
      { label: "Romance NPCs", href: "/romance/" },
      { label: "Trophies and achievements", href: "/trophies/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 gameplay length is not announced with a specific hour count as of 2026-09-03. The Steam store page and the official marketing site describe a narrative-driven crafting RPG with cemetery management, 2D dungeon-crawler combat, town restoration, and zombie army management. That scope points to a multi-system RPG with both main-story and completionist paths, but exact hours remain unannounced.",
  keyFacts: [
    { label: "Main-story hours", value: "Not announced as of 2026-09-03" },
    { label: "Completionist hours", value: "Not announced as of 2026-09-03" },
    { label: "Confirmed systems", value: "Cemetery management, 2D dungeon-crawler, town restoration" },
    { label: "Legacy reference", value: "2018 original ~50 hours per PC Gamer" },
  ],
  modules: [
    {
      id: "scope-systems",
      type: "prose",
      heading: "Confirmed systems shape pacing",
      body: "The Steam store page and the official graveyardkeeper2.com site describe a layered RPG: cemetery operations, crafting stations, 2D dungeon-crawler combat, town restoration projects, and zombie army management. Each system feeds the others, so players should expect multiple progression tracks rather than a single main-story bar. Combat drops feed crafting and town projects, so dungeon runs become part of the production loop rather than a side activity.",
    },
    {
      id: "legacy-context",
      type: "prose",
      heading: "Legacy original-game pacing context",
      body: "PC Gamer's preview mentions a roughly 50-hour original-game baseline when introducing the sequel. That figure belongs to the legacy original-game context and is not a confirmed sequel target. Use it only as a sense of scale for returning fans, not as a predicted sequel runtime.",
    },
    {
      id: "pacing-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "Specific main-story hours, completionist hours, day-length cycle details, and per-difficulty pacing for Graveyard Keeper 2.",
    },
  ],
  faqIds: ["gameplay-length-status"],
  relatedPageIds: ["fixed-cooking-recipes-en-US", "fixed-romance-npcs-en-US", "fixed-trophy-achievements-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const trophyAchievementsPage: PageContent = {
  id: "fixed-trophy-achievements-en-US",
  translationKey: "trophy-achievements",
  locale: "en-US",
  routeKind: "fixed",
  slug: "trophies",
  url: "/trophies",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 Trophies Achievements: What to Know",
  seoTitle: "Graveyard Keeper 2 Trophies and Achievements",
  metaDescription:
    "Find Graveyard Keeper 2 trophies achievements details, legacy context, console parity, and which launch information remains unannounced.",
  summary:
    "Trophies and achievements are expected across PC, PlayStation 5, Xbox Series, Nintendo Switch 1, and Switch 2, but the full achievement list is not published before launch.",
  hero: {
    eyebrow: "Achievement reference",
    subtitle: "Achievements expected across PC and consoles; full list not published before launch.",
    ctas: [
      { label: "Gameplay length", href: "/gameplay-length/" },
      { label: "Cooking recipes", href: "/cooking/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 trophies and achievements are expected across PC, PlayStation 5, Xbox Series, Nintendo Switch 1, and Switch 2, but the full achievement list is not published as of 2026-09-03. The 2018 original shipped with a 126-trophy scope, which is a legacy reference rather than a confirmed sequel scope.",
  keyFacts: [
    { label: "Achievement list", value: "Not announced as of 2026-09-03" },
    { label: "Platforms", value: "PC, PS5, Xbox Series, Switch 1, Switch 2" },
    { label: "Legacy reference", value: "2018 original 126-trophy scope" },
    { label: "Console parity", value: "Not announced as of 2026-09-03" },
  ],
  modules: [
    {
      id: "achievement-scope",
      type: "prose",
      heading: "Graveyard Keeper 2 trophy and achievement scope",
      body: "The Steam store page for AppID 4358690 lists Graveyard Keeper 2 as a single-player game launching on Windows, macOS, Linux, and SteamOS PCs alongside PlayStation 5, Xbox Series, Nintendo Switch 1, and Nintendo Switch 2. Steam achievements are the standard expectation for the PC version, and console trophies are expected on PS5 and the Switch family. The full achievement list, category breakdown, and unlock paths have not been published before launch, so trophy hunters should plan for an unannounced list rather than a confirmed scope.",
    },
    {
      id: "legacy-trophy-context",
      type: "prose",
      heading: "Legacy original-game trophy context",
      body: "The 2018 original Graveyard Keeper shipped with a 126-trophy scope that returning fans sometimes reference. That figure belongs to the legacy original-game context and is not a confirmed sequel target. Do not assume the sequel will repeat the original's 126-trophy scope or carry over the original's trophy list.",
    },
    {
      id: "trophy-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "Full achievement list, category breakdown, unlock paths, and console trophy parity for Graveyard Keeper 2.",
    },
  ],
  faqIds: ["trophy-status"],
  relatedPageIds: ["fixed-gameplay-length-en-US", "fixed-cooking-recipes-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const vsGraveyardKeeperPage: PageContent = {
  id: "fixed-vs-graveyard-keeper-en-US",
  translationKey: "vs-graveyard-keeper",
  locale: "en-US",
  routeKind: "fixed",
  slug: "vs-graveyard-keeper",
  url: "/vs-graveyard-keeper",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Graveyard Keeper 2 vs the Original Graveyard Keeper",
  seoTitle: "Graveyard Keeper 2 vs Original: Sequel Comparison and Upgrade Guide",
  metaDescription:
    "How does Graveyard Keeper 2 differ from the original Graveyard Keeper and is it worth upgrading? See carry-over mechanics, new systems, and edition context.",
  summary:
    "Sequel comparison: same medieval cemetery-management spine, new Inquisitor protagonist, 2D dungeon-crawler combat, town-restoration meta layer, and the same standard-edition launch as the original's $24.99 tier.",
  hero: {
    eyebrow: "Sequel comparison",
      subtitle: "Carry-over systems plus a new Inquisitor role, 2D dungeon combat, and town restoration.",
    ctas: [
      { label: "Release timing", href: "/release/" },
      { label: "DLC and expansions", href: "/dlc/" },
      { label: "Romance NPCs", href: "/romance/" },
    ],
  },
  quickAnswer:
    "Graveyard Keeper 2 keeps the medieval cemetery-management and crafting loops of the 2018 original, then adds an Inquisitor protagonist role, a 2D dungeon-crawler battle system, town restoration projects, and a zombie army management layer. The Steam standard edition costs $24.99 with a 20% pre-purchase discount that drops the price to $19.99 through September 22, 2026. Per-mechanic carry-over parity is not announced as of 2026-09-03, so returning players should expect updated systems rather than a 1:1 port.",
  keyFacts: [
    { label: "Release date", value: "September 22, 2026 (sequel)" },
    { label: "Steam price", value: "$24.99 ($19.99 pre-purchase)" },
    { label: "New systems", value: "Inquisitor role, 2D dungeon-crawler, town restoration" },
    { label: "Carry-over", value: "Cemetery management, crafting, NPC relationships" },
  ],
  modules: [
    {
      id: "carry-over-systems",
      type: "prose",
      heading: "Carry-over systems from the original",
      body: "The sequel keeps the medieval cemetery sim backbone: you bury, cremate, or process the dead, balance town factions, and turn raw materials into sellable goods through crafting stations. Recipes and energy management from the first game are reworked to fit the new town's resource flow, but the basic cemetery-management loop carries forward. NPC relationships still drive town interaction, although the original's named characters (Ms. Charm, Gerry, Ingrid) are legacy context rather than a confirmed sequel cast.",
    },
    {
      id: "new-systems",
      type: "prose",
      heading: "New systems in the sequel",
      body: "Graveyard Keeper 2 introduces three named systems on top of the original's loop: the Inquisitor protagonist role, the 2D dungeon-crawler battle system, and town restoration projects supported by a zombie army. Combat drops feed crafting and town projects, so dungeon runs become part of the production loop rather than a side activity. Town restoration acts as the sequel's long-term meta layer, with multiple districts to rebuild and factions to keep happy.",
    },
    {
      id: "upgrade-decision",
      type: "prose",
      heading: "Should you upgrade from the original?",
      body: "The Steam pre-purchase discount brings the sequel to $19.99 through September 22, 2026, and the original game has been free to keep on Steam during the announcement window. Returning players who already own the original can decide based on the new systems rather than carry-over parity: the Inquisitor role, 2D dungeon combat, and town restoration are the strongest signals of the sequel's scope. Players who want every confirmed sequel system before launch should wait for the official gameplay trailer details rather than assume 1:1 carry-over.",
    },
    {
      id: "comparison-boundary",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-03",
      body: "Specific carry-over mechanic parity between the original and the sequel; original-game trophy or recipe carry-over; cross-save compatibility between the original and the sequel.",
    },
  ],
  faqIds: ["vs-original"],
  relatedPageIds: ["fixed-release-platforms-en-US", "fixed-dlc-en-US", "fixed-romance-npcs-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed,
};

export const contentPages: PageContent[] = [
  releasePlatformsPage,
  switchVersionPage,
  systemRequirementsPage,
  multiplayerPage,
  earlyAccessPage,
  editionsPricingPage,
  dlcPage,
  reviewsPressPage,
  cookingRecipesPage,
  romanceNpcsPage,
  gameplayLengthPage,
  trophyAchievementsPage,
  vsGraveyardKeeperPage,
];