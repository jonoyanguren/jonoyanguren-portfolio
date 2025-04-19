"use client";

import { motion } from "framer-motion";
import { MdWeb, MdCode } from "react-icons/md";

export default function ProjectsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="py-[15%] bg-[#0D1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#0D1117_20%,#0D1117_80%,transparent_100%)]" />

      <motion.div
        className="max-w-6xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Proyecto 1",
              description:
                "Una aplicación web innovadora para gestión de tareas",
              tech: ["Next.js", "TypeScript", "Tailwind"],
              icon: <MdWeb className="w-6 h-6 text-blue-400" />,
              link: "#",
            },
            {
              title: "Proyecto 2",
              description: "Plataforma de e-learning para programadores",
              tech: ["React", "Node.js", "MongoDB"],
              icon: <MdCode className="w-6 h-6 text-blue-400" />,
              link: "#",
            },
            {
              title: "Proyecto 3",
              description: "Sistema de automatización para empresas",
              tech: ["Python", "FastAPI", "PostgreSQL"],
              icon: <MdWeb className="w-6 h-6 text-blue-400" />,
              link: "#",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#161B22] rounded-lg border border-gray-800 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold ml-2 text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#0D1117] text-blue-400 text-sm rounded-full border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                className="block p-4 text-center bg-[#0D1117] text-blue-400 hover:bg-[#161B22] transition-colors border-t border-gray-800"
              >
                Ver proyecto →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
