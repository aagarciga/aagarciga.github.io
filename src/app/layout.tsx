import type { Metadata } from "next";
import "./globals.css";
import { jost } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Alex Alvarez Gárciga's Portfolio",
    default: "Alex Alvarez Gárciga's Portfolio",
  },
  description: `Software engineer fluent in JavaScript & C#, with more than a decade of exposure to front-end technologies, Microsoft ASP.Net solutions, and Microsoft Azure Cloud Services. In love with React.js, Typescript, HTML5, and CSS3. Skilled in UI/UX design, algorithms, and data structures. Enthusiastic about creating maintainable, user-friendly software through agile methodologies. Able to quickly learn and adopt new paradigms, programming languages, frameworks, and tools to meet project needs.`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
      </body>
    </html>
  );
}
