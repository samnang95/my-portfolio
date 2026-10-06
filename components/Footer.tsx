"use client";

import { ArrowUp } from "lucide-react";
import { SiteConfig, PortfolioContent } from "@/types/portfolio";

interface FooterProps {
  brand: SiteConfig["brand"];
  links: SiteConfig["navLinks"];
  footerData: PortfolioContent["footer"];
}

export default function Footer({ brand, links, footerData }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/50 bg-white/60 py-12 dark:border-zinc-900 dark:bg-zinc-950/60 backdrop-blur-sm transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo & Subtitle */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-lg font-bold text-zinc-900 dark:text-white">
              <span>{brand.name}</span>
              <span className="text-primary-500 dark:text-primary-300">.</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {brand.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary-600 transition-colors dark:hover:text-primary-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              aria-label={footerData.backToTop}
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-700 transition-all hover:border-primary-500/50 hover:text-primary-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-primary-400/50 dark:hover:text-primary-300"
            >
              <span>{footerData.backToTop}</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} {brand.name}. {footerData.allRightsReserved}</p>
          <p className="flex items-center gap-2">
            <span>{footerData.styledWith}</span>
            <span className="text-zinc-800 font-medium dark:text-zinc-300">Tailwind CSS</span>
            <span>&</span>
            <span className="text-primary-600 font-medium dark:text-primary-300">Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
