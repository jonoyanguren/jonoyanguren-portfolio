import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Maven_Pro } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-maven",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jon Oyanguren - Nómada Digital & Solopreneur",
  description:
    "Portfolio personal de Jon Oyanguren, nómada digital y creador de productos digitales.",
  icons: {
    icon: "/favicon.svg",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!locale) notFound();

  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mavenPro.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
