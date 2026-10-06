import type { Metadata } from "next";
import { Inter, Geist_Mono, Hanuman } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hanuman = Hanuman({
  variable: "--font-khmer",
  subsets: ["khmer"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samnang - Portfolio",
  description:
    "Portfolio of Samnang, a Flutter Developer building high-performance mobile apps and scalable backend systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} ${hanuman.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-primary-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
