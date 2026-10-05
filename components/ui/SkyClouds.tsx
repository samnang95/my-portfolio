"use client";

import { useTheme } from "@/context/ThemeContext";

interface CloudConfig {
  top: string;
  width: number;
  duration: number; // seconds for one full pass across the screen
  delay: number; // negative = start mid-flight so the sky is populated on load
  opacity: number;
  floatDelay: number;
}

// Deterministic layout (no Math.random) keeps renders pure and stable.
const clouds: CloudConfig[] = [
  { top: "6%", width: 220, duration: 95, delay: -12, opacity: 0.95, floatDelay: 0 },
  { top: "16%", width: 140, duration: 70, delay: -48, opacity: 0.8, floatDelay: -2 },
  { top: "28%", width: 320, duration: 130, delay: -85, opacity: 0.9, floatDelay: -4 },
  { top: "11%", width: 180, duration: 105, delay: -30, opacity: 0.85, floatDelay: -1 },
  { top: "42%", width: 120, duration: 65, delay: -22, opacity: 0.6, floatDelay: -3 },
  { top: "35%", width: 250, duration: 115, delay: -62, opacity: 0.75, floatDelay: -5 },
  { top: "3%", width: 100, duration: 58, delay: -6, opacity: 0.7, floatDelay: -6 },
  { top: "58%", width: 210, duration: 140, delay: -100, opacity: 0.5, floatDelay: -2.5 },
  { top: "22%", width: 160, duration: 85, delay: -70, opacity: 0.65, floatDelay: -7 },
];

function Cloud({ width }: { width: number }) {
  return (
    <div
      className="relative blur-[2px] drop-shadow-[0_8px_16px_rgba(14,116,144,0.15)]"
      style={{ width, height: width * 0.5 }}
    >
      {/* Overlapping puffs form the cloud silhouette */}
      <span className="absolute bottom-0 left-[8%] h-[45%] w-[84%] rounded-full bg-white" />
      <span className="absolute bottom-[12%] left-[12%] h-[65%] w-[36%] rounded-full bg-white" />
      <span className="absolute bottom-[22%] left-[34%] h-[78%] w-[40%] rounded-full bg-white" />
      <span className="absolute bottom-[8%] left-[60%] h-[58%] w-[30%] rounded-full bg-white" />
    </div>
  );
}

export default function SkyClouds() {
  const { isDark } = useTheme();
  if (isDark) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-linear-to-b from-sky-300 via-sky-200 to-cyan-50"
    >
      {/* Soft sun glow */}
      <div className="absolute -top-32 right-[10%] h-96 w-96 rounded-full bg-white/40 blur-3xl" />

      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="absolute left-0 animate-cloud-drift motion-reduce:animate-none"
          style={{
            top: cloud.top,
            opacity: cloud.opacity,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
          }}
        >
          <div
            className="animate-cloud-float motion-reduce:animate-none"
            style={{ animationDelay: `${cloud.floatDelay}s` }}
          >
            <Cloud width={cloud.width} />
          </div>
        </div>
      ))}
    </div>
  );
}
