"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  size: number;
  angle: number; // in radians
  progress: number;
  duration: number;
  active: boolean;
  delay: number;
}

export default function FallingStars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!isDark) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    // 1. Initialize static twinkling background stars
    let stars: Star[] = [];
    const colors = ["#ffffff", "#ede7f6", "#b39ddb", "#bae6fd"];

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((width * height) / 8000); // Responsive density

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2 + 0.4,
          baseAlpha: Math.random() * 0.6 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initStars();

    // 2. Initialize shooting stars
    const maxShootingStars = 4;
    const shootingStars: ShootingStar[] = [];

    const createShootingStar = (): ShootingStar => {
      // Meteors travel from upper-right toward lower-left at ~45 degrees
      const angle = (Math.PI / 4) * 3 + (Math.random() * 0.2 - 0.1); // ~135 degrees (down-left)
      return {
        x: Math.random() * (width * 1.2) - width * 0.1,
        y: Math.random() * (height * 0.5),
        length: Math.random() * 90 + 90, // streak length 90 - 180px
        speed: Math.random() * 7 + 8, // speed px per frame
        size: Math.random() * 1.5 + 1.2,
        angle,
        progress: 0,
        duration: Math.random() * 60 + 50,
        active: false,
        delay: Math.random() * 120 + 20, // frames to wait before launching
      };
    };

    for (let i = 0; i < maxShootingStars; i++) {
      const star = createShootingStar();
      star.delay = i * 45 + Math.random() * 30; // Stagger spawns
      shootingStars.push(star);
    }

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // --- Draw Twinkling Stars ---
      for (const star of stars) {
        const alpha = Math.min(
          1,
          Math.max(
            0.1,
            star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.35
          )
        );

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = star.radius > 1 ? 4 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      // --- Draw Shooting Stars ---
      for (let i = 0; i < shootingStars.length; i++) {
        const s = shootingStars[i];

        if (!s.active) {
          s.delay -= 1;
          if (s.delay <= 0) {
            s.active = true;
            s.progress = 0;
            // Spawn position: random top or right edge
            s.x = Math.random() * width * 1.2;
            s.y = Math.random() * (height * 0.6);
            s.length = Math.random() * 100 + 80;
            s.speed = Math.random() * 8 + 9;
            s.duration = Math.random() * 50 + 40;
          }
          continue;
        }

        s.progress += 1;
        const progressRatio = s.progress / s.duration;

        // Advance position
        s.x -= Math.cos(s.angle - Math.PI / 2) * s.speed;
        s.y += Math.sin(s.angle - Math.PI / 2) * s.speed;

        // Smooth fade-in and fade-out
        let alpha = 1;
        if (progressRatio < 0.2) {
          alpha = progressRatio / 0.2;
        } else if (progressRatio > 0.7) {
          alpha = (1 - progressRatio) / 0.3;
        }

        if (progressRatio >= 1 || s.x < -100 || s.y > height + 100) {
          s.active = false;
          s.delay = Math.random() * 180 + 60; // Wait 1-4 seconds before next launch
          continue;
        }

        // Draw the shooting star streak
        const tailX = s.x + Math.cos(s.angle - Math.PI / 2) * s.length;
        const tailY = s.y - Math.sin(s.angle - Math.PI / 2) * s.length;

        const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(209, 196, 233, 0.9)"); // Primary-100 accent
        gradient.addColorStop(0.6, "rgba(149, 117, 205, 0.4)"); // Primary-300
        gradient.addColorStop(1, "rgba(149, 117, 205, 0)");

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.strokeStyle = gradient;
        ctx.lineWidth = s.size;
        ctx.lineCap = "round";

        // Glow head
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#9575cd";

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Bright star head dot
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 1.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDark]);

  if (!isDark) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-80 transition-opacity duration-1000 dark:opacity-80"
    />
  );
}
