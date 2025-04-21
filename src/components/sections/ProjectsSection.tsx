"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import SubTitle from "../ui/SubTitle";
import { useTranslations } from "next-intl";

interface Project {
  title: string;
  url: string;
  description: string;
  image: string;
  tech: string[];
  timeSpent: string;
}

export default function ProjectsSection() {
  const t = useTranslations("projects");

  const projects = t.raw("items");

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
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
