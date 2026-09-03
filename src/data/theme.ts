import type { ThemeConfig } from "@/types/theme";

// Per site-launch/tasks/graveyardkeeper2-pro/design/theme-spec.md (V3 dark
// parchment-on-soot medieval mortuary theme). Single shared theme across all
// launch locales; no locale-specific overrides.
export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#1a1620",
    surface1: "#221c2a",
    surface2: "#2b2434",
    surface3: "#362e42",
    surfaceInverse: "#efe4cf",
    textPrimary: "#efe4cf",
    textMuted: "#b3a89c",
    textInverse: "#1f1a26",
    textOnAccentPrimary: "#1a1208",
    textLink: "#e0a86a",
    focusRing: "#ffb74d",
    line: "#4a4055",
    lineStrong: "#6b5f78",
    accentPrimary: "#7d9e57",
    accentSecondary: "#b04a4a",
    accentBright: "#9d6cc9",
    statusConfirmed: "#5fb47a",
    statusCaution: "#e0a14a",
    statusUnknown: "#8c8294",
  },
  typography: {
    headingFamily: "Cinzel, 'IM Fell English', 'Cormorant Garamond', Georgia, 'Times New Roman', serif",
    bodyFamily: "'Source Serif Pro', Lora, Georgia, 'Times New Roman', serif",
    headingWeight: 800,
  },
  shape: {
    radius: "6px",
    borderWidth: "1px",
    shadow: "0 2px 6px rgba(10, 6, 14, 0.45)",
    hoverLift: "0 3px 9px rgba(10, 6, 14, 0.6)",
  },
  density: "comfortable",
  background: {
    mode: "gradient",
    overlay: 0.18,
    position: "center top",
  },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: {
    motif: "organic",
    intensity: "low",
  },
} satisfies ThemeConfig;