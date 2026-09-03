import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Graveyard Keeper 2 Hub",
  brandMark: "GK2",
  gameName: "Graveyard Keeper 2",
  domain: "graveyardkeeper2.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://graveyardkeeper2.pro").replace(/\/$/, ""),
  description:
    "Launch-week Graveyard Keeper 2 guide hub: release date, platforms, editions, multiplayer, cooking, romance, gameplay length, trophies, and sequel comparison.",
  tagline:
    "Launch-week answers for Graveyard Keeper 2 release timing, platforms, multiplayer, cooking, romance, and sequel-vs-original comparison.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Graveyard Keeper 2 Hub",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Graveyard Keeper 2 on Steam",
      href: "https://store.steampowered.com/app/4358690/Graveyard_Keeper_2/",
      description: "Lazy Bear Games store page for AppID 4358690 with release date, price, platform list, and Steam pre-purchase discount.",
    },
    {
      label: "Official Graveyard Keeper 2 site",
      href: "https://www.graveyardkeeper2.com/",
      description: "Lazy Bear Games marketing site for the sequel's gameplay loop, Inquisitor role, town restoration, and zombie army.",
    },
    {
      label: "Nintendo Switch 2 store page for Graveyard Keeper 2",
      href: "https://www.nintendo.com/us/store/products/graveyard-keeper-2-switch-2/",
      description: "Nintendo Switch 2 listing that confirms the launch date and story summary.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide hub. Release, platform, price, and feature facts are sourced from the Steam store page, the official graveyardkeeper2.com marketing site, the Nintendo Switch 2 store page, and supporting media coverage.",
};