"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

interface MatrixRainCanvasProps {
  opacity?: number;
  fontSize?: number;
  fps?: number;
  className?: string;
}

export default function MatrixRainCanvas({
  opacity = 0.7,
  fontSize = 15,
  fps = 30,
  className,
}: MatrixRainCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let lastTime = performance.now();
    const interval = 1000 / fps;

    // Respect reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionQuery.matches;

    // cmatrix character pool: katakana, numbers, latin uppercase, symbols
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ:・.\"=*+-<>¦｜";

    let columns = 0;
    let drops: number[] = [];

    const handleResize = () => {
      // Cap devicePixelRatio to 1 for high-performance background canvas rendering
      // This reduces pixel fill-rate by 75% on Retina screens with no perceptible difference
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Fill with obsidian base background
      ctx.fillStyle = "#090B0E";
      ctx.fillRect(0, 0, width, height);

      columns = Math.floor(width / fontSize);
      drops = [];
      const rows = Math.floor(height / fontSize);
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * rows);
      }

      if (prefersReducedMotion) {
        drawStaticFrame(width, height);
      }
    };

    const drawStaticFrame = (width: number, height: number) => {
      ctx.fillStyle = "#090B0E";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = "#10B981";
        ctx.fillText(char, x, y);
      }
    };

    const render = (currentTime: number) => {
      if (document.hidden || prefersReducedMotion) return;

      animationFrameId = requestAnimationFrame(render);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      const width = canvas.width;
      const height = canvas.height;

      // Soft trailing fade (draw translucent obsidian box over previous frame)
      ctx.fillStyle = "rgba(9, 11, 14, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      // Draw stream without expensive shadowBlur calculations (instant 60 FPS)
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head character: bright high-contrast mint
        ctx.fillStyle = "#A7F3D0";
        ctx.fillText(char, x, y);

        // Trailing character: Sentry emerald
        if (drops[i] > 0) {
          const prevChar = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillStyle = "#059669";
          ctx.fillText(prevChar, x, y - fontSize);
        }

        // Loop drop when it passes bottom with random delay
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const startLoop = () => {
      if (prefersReducedMotion || document.hidden) return;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      lastTime = performance.now();
      animationFrameId = requestAnimationFrame(render);
    };

    const stopLoop = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        stopLoop();
        drawStaticFrame(canvas.width, canvas.height);
      } else {
        startLoop();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionChange);

    startLoop();

    return () => {
      stopLoop();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [fontSize, fps]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-0 h-full w-full",
        className
      )}
      style={{ opacity }}
    />
  );
}
