/**
 * Central registry for static images & icons.
 *
 * Files here are imported (not served by URL), so Next.js:
 * - knows width/height automatically (no layout shift),
 * - generates a blur placeholder,
 * - adds a content hash to the filename for long-term caching.
 *
 * Usage:
 *   import { images } from "@/assets";
 *   <Image src={images.portrait} alt="..." placeholder="blur" />
 *
 * Note: favicon.ico / icon.png / apple-icon.png must stay in `app/`
 * (Next.js special files). Files that need a fixed public URL
 * (e.g. robots.txt, a downloadable CV PDF) belong in `public/`.
 */
import portrait from "./images/samnang.webp";
import logo from "./icons/logo.png";

export const images = {
  portrait,
} as const;

export const icons = {
  logo,
} as const;
