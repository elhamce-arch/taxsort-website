"use client";
import { useState } from "react";

type Props = {
  icon: string;
  title: string;
  desc: string;
  accent: string;
  glow: string;
};

export default function FeatureCard({ icon, title, desc, accent, glow }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-3xl overflow-hidden h-full flex flex-col"
      style={{
        background: "#111111",
        boxShadow: hovered
          ? `0 0 0 1px rgba(255,255,255,0.12), 0 8px 40px ${glow}`
          : `0 0 0 1px rgba(255,255,255,0.06)`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Colored gradient top */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: accent }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)" }}
        />
        <span className="relative" style={{ fontSize: "3.5rem" }}>{icon}</span>
      </div>
      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
