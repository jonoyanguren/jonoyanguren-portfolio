"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-900 top-0 left-0 right-0 z-50 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              JO
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            >
              Inicio
            </Link>
            <Link
              href="/proyectos"
              className="dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            >
              Proyectos
            </Link>
            <Link
              href="/blog"
              className="dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            >
              Contacto
            </Link>
          </nav>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/jonoyanguren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jonoyanguren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/jonoyanguren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
