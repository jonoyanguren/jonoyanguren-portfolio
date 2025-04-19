"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
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
          Contacto
        </h2>
        <div className="bg-[#161B22] rounded-lg border border-gray-800 p-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-[#0D1117] border-gray-800 text-white focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-[#0D1117] border-gray-800 text-white focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-[#0D1117] border-gray-800 text-white focus:border-blue-400 focus:ring-blue-400"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 text-white px-6 py-3 rounded-md hover:opacity-90 transition-all"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
