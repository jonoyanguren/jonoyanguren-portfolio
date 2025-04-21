"use client";

import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");
  const t = isSpanish ? es : en;
  return (
    <section className="py-[10%] bg-[#0D1117] flex flex-col items-center justify-center px-4 text-white relative overflow-hidden">
      <BackgroundLines />

      {/* Avatar */}
      <div className="z-10 w-36 h-36 mb-6">
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={200}
          height={200}
          className="rounded-full z-10 object-cover"
        />
      </div>

      {/* Texto principal */}
      <div className="z-10 text-center">
        <p className="text-gray-100 font-mono">
          {t.hero.greeting}{" "}
          <span className="text-sky-300 font-medium text-xl">
            {t.hero.name}
          </span>{" "}
          {t.hero.and}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2 text-gray-100">
          {t.hero.role}
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-100 md:text-base">
          {t.hero.bio}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <TechBadge name="GitHub" icon={<FaGithub />} />
          <TechBadge name="HTML" icon={<FaHtml5 className="text-red-500" />} />
          <TechBadge
            name="CSS"
            icon={<FaCss3Alt className="text-blue-500" />}
          />
          <TechBadge
            name="Javascript"
            icon={<FaJs className="text-yellow-400" />}
          />
          <TechBadge
            name="React"
            icon={<FaReact className="text-cyan-400" />}
          />
          <TechBadge
            name="Node.js"
            icon={<FaNodeJs className="text-green-400" />}
          />
        </div>
      </div>

      {/* Flecha hacia abajo */}
      <div className="mt-12 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

function TechBadge({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] rounded-full text-sm text-white">
      <span className="text-lg">{icon}</span>
      {name}
    </div>
  );
}

function BackgroundLines() {
  const [lines, setLines] = useState<
    Array<{ x: number; y: number; width: number; color: string }>
  >([]);

  useEffect(() => {
    const colors = [
      "#f43f5e", // rose-500
      "#3b82f6", // blue-500
      "#10b981", // emerald-500
      "#f59e0b", // amber-500
      "#6366f1", // indigo-500
      "#8b5cf6", // violet-500
      "#ec4899", // pink-500
      "#06b6d4", // cyan-500
      "#22c55e", // green-500
      "#f97316", // orange-500
      "#a855f7", // purple-500
      "#eab308", // yellow-500
    ];

    const generateLines = () => {
      const lines = [];
      const ySpacing = 25;
      const xVariation = 50;
      const groupSize = 4;
      const groupSpacing = 60;

      for (let i = 0; i < 30; i++) {
        const groupIndex = Math.floor(i / groupSize);
        const y = i * ySpacing + groupIndex * groupSpacing;
        const x = Math.random() * xVariation;
        const width = 80 + Math.random() * 120;
        const color = colors[Math.floor(Math.random() * colors.length)];

        lines.push({ x, y, width, color });
      }
      return lines;
    };

    const leftLines = generateLines();
    const rightLines = generateLines().map((line) => ({
      ...line,
      x: window.innerWidth - line.x - line.width,
    }));

    setLines([...leftLines, ...rightLines]);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines.map((line, idx) => (
          <rect
            key={idx}
            x={line.x}
            y={line.y}
            width={line.width}
            height="6"
            rx="3"
            fill={line.color}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#0D1117_20%,#0D1117_80%,transparent_100%)]" />
    </div>
  );
}
