import localFont from "next/font/local"

export const jost = localFont({
  src: "../../public/jost-variablefont_wght-webfont.woff2",
  variable: "--font-jost",
  style: "normal",
  weight: "200",
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

export const jetbrainMono = localFont({
  src: "../../public/jetbrainsmonowght-webfont.woff2",
  variable: "--font-jetbrain-mono",
  style: "normal",
  weight: "400",
  display: "swap",
  preload: true,
  fallback: ["code", "consolas", "sans-serif"],
})