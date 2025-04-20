"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import SubTitle from "../ui/SubTitle";

export default function ProjectsSection() {
  return (
    <section className="p-28 bg-[#0D1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#0D1117_20%,#0D1117_80%,transparent_100%)]" />

      <motion.div
        className="max-w-6xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SubTitle
          title="Proyectos Destacados"
          subtitle="Proyectos recientes en los que he trabajado"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Fast Trip Planner",
              url: "https://fasttripplanner.com",
              description:
                "Plataforma web para utiliza IA para ayudarte a organizar tus viajes y presupuestos.",
              image: "/projects/project1.png",
              tech: ["React", "TypeScript", "Tailwind", "Python", "FastAPI"],
              timeSpent: "1 mes",
            },
            {
              title: "Citrus Designer",
              url: "https://citrusdesigner.com",
              description:
                "Plataforma web para utiliza IA para ayudarte a organizar tus viajes y presupuestos.",
              image: "/projects/project2.png",
              tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Vercel"],
              timeSpent: "1 mes",
            },
            {
              title: "Daily Content Limit",
              url: "https://chromewebstore.google.com/detail/daily-content-limit/eppeeikbpmimcgdhhboibamfbppjammb?utm_source=ext_app_menu",
              image: "/projects/project3.png",
              description:
                "Extensión de Chrome que limita la cantidad diaria de contenido corto que ves en redes.",
              tech: ["Javascript", "HTML", "CSS"],
              timeSpent: "Dos mañanas",
            },
          ].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
