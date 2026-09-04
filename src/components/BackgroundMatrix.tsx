"use client";

import React from "react";
import MatrixRainCanvas from "./MatrixRainCanvas";

export default function BackgroundMatrix() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#090B0E]"
      aria-hidden="true"
    >
      {/* Falling Matrix Code Canvas */}
      <MatrixRainCanvas opacity={0.45} fontSize={15} fps={30} />

      {/* Soft Radial Ambient Lighting for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,11,14,0.6)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />
    </div>
  );
}
