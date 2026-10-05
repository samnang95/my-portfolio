"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Sun, Moon, Globe } from "lucide-react";
import { SiteConfig } from "@/types/portfolio";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  brand: SiteConfig["brand"];
  links: SiteConfig["navLinks"];
  ctaButton: string;
}

export default function Navbar({ brand, links, ctaButton }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { locale, setLocale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/60 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center text-lg font-bold tracking-tight text-zinc-900 transition hover:opacity-90 dark:text-white"
        >
          <span>{brand.name}</span>
          <span className="text-lime-500 transition-transform duration-300 group-hover:scale-125 dark:text-lime-400">
            .
          </span>
          <span className="ml-2 rounded bg-zinc-200/80 px-1.5 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400">
            {brand.tag}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-lime-600 dark:text-zinc-400 dark:hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right Controls (Language, Theme, CTA) */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Language Switcher */}
          <div className="flex items-center rounded-full border border-zinc-200 bg-zinc-100 p-0.5 dark:border-zinc-800 dark:bg-zinc-900">
            <button
              onClick={() => setLocale("en")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                locale === "en"
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-lime-400"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("km")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                locale === "km"
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-lime-400"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              ខ្មែរ
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-zinc-700 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Action Button */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-lime-400 px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20 active:scale-95"
          >
            <span>{ctaButton}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile controls & Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-zinc-700" />
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-medium text-zinc-500 flex items-center gap-1.5 dark:text-zinc-400">
                  <Globe className="h-3.5 w-3.5" /> Language
                </span>
                <div className="flex items-center rounded-full border border-zinc-200 bg-zinc-100 p-0.5 dark:border-zinc-800 dark:bg-zinc-900">
                  <button
                    onClick={() => setLocale("en")}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      locale === "en"
                        ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-lime-400"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLocale("km")}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      locale === "km"
                        ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-lime-400"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    ខ្មែរ
                  </button>
                </div>
              </div>

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-lime-600 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-lime-400"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300"
              >
                <span>{ctaButton}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
