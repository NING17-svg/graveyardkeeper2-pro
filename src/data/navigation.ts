import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release/", labels: { "en-US": "Launch & platforms" } },
  { href: "/switch-2/", labels: { "en-US": "Switch 2 & Switch 1" } },
  { href: "/system-requirements/", labels: { "en-US": "System requirements" } },
  { href: "/editions/", labels: { "en-US": "Editions & pricing" } },
  { href: "/multiplayer/", labels: { "en-US": "Multiplayer" } },
  { href: "/dlc/", labels: { "en-US": "DLC" } },
  { href: "/gameplay-length/", labels: { "en-US": "Gameplay length" } },
  { href: "/cooking/", labels: { "en-US": "Cooking" } },
  { href: "/romance/", labels: { "en-US": "Romance & NPCs" } },
  { href: "/trophies/", labels: { "en-US": "Trophies" } },
  { href: "/reviews/", labels: { "en-US": "Reviews" } },
  { href: "/vs-graveyard-keeper/", labels: { "en-US": "Vs original" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about/", labels: { "en-US": "About" } },
  { href: "/contact/", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy/", labels: { "en-US": "Privacy" } },
  { href: "/terms/", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}