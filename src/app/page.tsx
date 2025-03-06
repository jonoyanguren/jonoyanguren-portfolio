"use client";

import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { MdWeb, MdCode } from "react-icons/md";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Jon Oyanguren
          </h1>
          <h2 className="text-2xl mb-6 text-gray-600 dark:text-gray-300">
            Nómada Digital & Solopreneur
          </h2>
          <p className="max-w-lg mx-auto text-gray-600 dark:text-gray-400 mb-8">
            Explorando el mundo mientras construyo productos digitales que
            impactan. Combinando la libertad del nomadismo digital con la pasión
            por crear.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Conoce mi trabajo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 flex gap-6"
        >
          <a
            href="https://github.com/tuuser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://twitter.com/tuuser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-6 h-6 hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/tuuser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
          </a>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-5"
        >
          <HiArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Sobre Mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Soy un desarrollador y emprendedor digital que ha elegido el
                camino del nomadismo digital. Mi pasión es crear productos
                digitales que aporten valor mientras exploro diferentes culturas
                y lugares del mundo.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Como solopreneur, me especializo en desarrollar soluciones web
                innovadoras y escalables, combinando mi experiencia técnica con
                una visión empresarial única moldeada por mis experiencias
                internacionales.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { title: "Países Visitados", value: "15+" },
                { title: "Proyectos Completados", value: "30+" },
                { title: "Años de Experiencia", value: "5+" },
                { title: "Clientes Satisfechos", value: "20+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-3xl font-bold text-blue-500 dark:text-blue-400">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {stat.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proyecto 1",
                description:
                  "Una aplicación web innovadora para gestión de tareas",
                tech: ["Next.js", "TypeScript", "Tailwind"],
                icon: <MdWeb className="w-6 h-6" />,
                link: "#",
              },
              {
                title: "Proyecto 2",
                description: "Plataforma de e-learning para programadores",
                tech: ["React", "Node.js", "MongoDB"],
                icon: <MdCode className="w-6 h-6" />,
                link: "#",
              },
              {
                title: "Proyecto 3",
                description: "Sistema de automatización para empresas",
                tech: ["Python", "FastAPI", "PostgreSQL"],
                icon: <MdWeb className="w-6 h-6" />,
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
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <h3 className="text-xl font-bold ml-2">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  className="block p-4 text-center bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
                >
                  Ver proyecto →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
