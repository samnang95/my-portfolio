import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import PortfolioView from "@/components/PortfolioView";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioView />
      </LanguageProvider>
    </ThemeProvider>
  );
}
