"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="py-[15%] bg-[#0D1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#0D1117_20%,#0D1117_80%,transparent_100%)]" />

      <motion.div
        className="max-w-4xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Sobre Mí
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-400">
              Soy un desarrollador y emprendedor digital que ha elegido el
              camino del nomadismo digital. Mi pasión es crear productos
              digitales que aporten valor mientras exploro diferentes culturas y
              lugares del mundo.
            </p>
            <p className="text-gray-400">
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
                className="bg-[#161B22] p-6 rounded-lg text-center border border-gray-800"
              >
                <h3 className="text-3xl font-bold text-blue-400">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
