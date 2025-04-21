"use client";

import { motion } from "framer-motion";
import SubTitle from "../ui/SubTitle";
import { MdArrowOutward, MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import { usePathname } from "next/navigation";

const contactInfo = [
  {
    icon: <MdOutlineMailOutline />,
    label: "Email",
    link: "mailto:jonoyanguren@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/jonoyanguren/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    link: "https://github.com/jonoyanguren",
  },
];

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
    </div>
  );
}

export default function ContactSection() {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");
  const t = isSpanish ? es : en;
  return (
    <section className="p-28 bg-[#0D1117] relative overflow-hidden">
      <BackgroundLines />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#0D1117_20%,#0D1117_80%,transparent_100%)]" />

      <motion.div
        className="max-w-4xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SubTitle title={t.contact.title} subtitle={t.contact.subtitle} />
        {contactInfo.map((info) => (
          <div
            onClick={() => window.open(info.link, "_blank")}
            key={info.label}
            className="bg-zinc-700 rounded-lg border border-gray-800 p-5 max-w-md mx-auto my-4 flex flex-row justify-between cursor-pointer"
          >
            <div className="flex items-center gap-4 text-white">
              <span className="text-2xl text-zinc-400">{info.icon}</span>
              <span className="text-zinc-300">{info.label}</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <MdArrowOutward className="text-sky-300 text-2xl" />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
