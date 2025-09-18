// lib/typography.ts
// Tailwind + Next.js friendly typography utility classes for Little Lemon.
// Relies on --font-karla and --font-markazi being provided by next/font in layout.tsx
// and color tokens (--color-primary, --color-accent, etc.) in globals.css.
import { Karla, Markazi_Text } from "next/font/google";

export const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  weight: ["400", "500", "600", "700"], // body
});

export const markazi = Markazi_Text({
  subsets: ["latin"],
  variable: "--font-markazi",
  weight: ["400", "500", "600", "700"], // headings
});

// export const typography = {
//   // H1 – Hero Title
//   // Desktop: 64px → iPhone SE: ~28px
//   h1: "font-karla font-bold text-[clamp(1.75rem,6vw,4rem)] leading-[1.15] tracking-normal",

//   // H2 – Section Titles
//   // Desktop: 40px → iPhone SE: ~22px
//   h2: "font-karla font-semibold text-[clamp(1.375rem,4.5vw,2.5rem)] leading-[1.25]",

//   // H3 – Subtitles / Dish Names
//   // Desktop: 24px → iPhone SE: ~18px
//   h3: "font-karla font-bold text-[clamp(1.125rem,3.5vw,1.5rem)] leading-[1.35]",

//   // Body Paragraphs
//   // Desktop: 20px → iPhone SE: ~15px
//   body: "font-markazi text-[clamp(0.9375rem,2.5vw,1.25rem)] leading-[1.55]",

//   // Small Body / Captions
//   // Desktop: 16px → iPhone SE: ~13px
//   small: "font-markazi text-[clamp(0.8125rem,2vw,1rem)] leading-[1.45]",

//   // CTA Buttons
//   // Desktop: 18px → iPhone SE: ~14px
//   cta: "font-karla font-bold text-[clamp(0.875rem,2.2vw,1.125rem)] tracking-[0.5px] uppercase",

//   // Navigation Menu
//   // Desktop: 18px → iPhone SE: ~14px
//   nav: "font-karla font-medium text-[clamp(0.875rem,2.2vw,1.125rem)] tracking-wide",
// };

export const typography = {
  // H1 – Hero Title
  // Min: ~18px → Max: 64px
  h1: "font-karla font-bold text-[clamp(1.125rem,6vw,4rem)] leading-[1.15] tracking-normal",

  // H2 – Section Titles
  // Min: ~14px → Max: 40px
  h2: "font-karla font-semibold text-[clamp(0.875rem,4.5vw,2.5rem)] leading-[1.25]",

  // H3 – Subtitles / Dish Names
  // Min: ~12px → Max: 24px
  h3: "font-karla font-bold text-[clamp(0.75rem,3.5vw,1.5rem)] leading-[1.35]",

  // Body Paragraphs
  // Min: ~12px → Max: 20px
  body: "font-markazi text-[clamp(0.75rem,2.5vw,1.25rem)] leading-[1.55]",

  // Small Body / Captions
  // Min: ~12px → Max: 16px
  small: "font-markazi text-[clamp(0.75rem,2vw,1rem)] leading-[1.45]",

  // CTA Buttons
  // Min: ~14px → Max: 20px
  cta: "font-karla font-bold text-[clamp(0.875rem,2.5vw,1.25rem)] tracking-[0.5px] uppercase",

  // Navigation Menu
  // Min: ~12px → Max: 18px
  nav: "font-karla font-medium text-[clamp(0.75rem,2.2vw,1.125rem)] tracking-wide",
};
