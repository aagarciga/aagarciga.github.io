import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Alex Alvarez Gárciga's Portfolio",
    default: "Alex Alvarez Gárciga's Portfolio",
  },
  description: `I'm software engineer with more than 12 years of experience 
                continuously honing my skills in crafting web applications, 
                designing user-friendly interfaces, and studiying algorithms.
                I'm passionate about leveraging technology to make a positive 
                impact and share my expertise and creativity.`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sidebar-layout">
          <header>

          </header>
          <nav>

          </nav>
          <article className="top-widget">

          </article>
          {children}
          <article className="bottom-widget">

          </article>
          <footer>

          </footer>
        </div>
      </body>
    </html>
  );
}
