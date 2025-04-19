import { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Jon Oyanguren | Desarrollador y Emprendedor Digital",
  description:
    "Desarrollador y emprendedor digital especializado en crear productos digitales impactantes mientras explora el mundo como nómada digital.",
  keywords: [
    "desarrollador",
    "emprendedor",
    "nómada digital",
    "productos digitales",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Jon Oyanguren | Desarrollador y Emprendedor Digital",
    description:
      "Desarrollador y emprendedor digital especializado en crear productos digitales impactantes mientras explora el mundo como nómada digital.",
    type: "website",
  },
};

export default function Home() {
  return <LandingPage />;
}
