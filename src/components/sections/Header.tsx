"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Header() {
  const t = useTranslations("header");
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117] backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">JO</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#home"
              className="text-zinc-300 hover:text-sky-300 transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              href="#about"
              className="text-zinc-300 hover:text-sky-300 transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href="#projects"
              className="text-zinc-300 hover:text-sky-300 transition-colors"
            >
              {t("projects")}
            </Link>
            <Link
              href="#contact"
              className="text-zinc-300 hover:text-sky-300 transition-colors"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/jonoyanguren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jonoyanguren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <Link
              href={isSpanish ? "/en" : "/es"}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              {isSpanish ? "EN" : "ES"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
