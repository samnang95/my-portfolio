import { Locale, PortfolioContent } from "@/types/portfolio";
import { enContent } from "./locales/en";
import { kmContent } from "./locales/km";

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: enContent,
  km: kmContent,
};

export const defaultLocale: Locale = "en";

export function getPortfolioContent(locale: Locale = defaultLocale): PortfolioContent {
  return portfolioContent[locale] || portfolioContent.en;
}
