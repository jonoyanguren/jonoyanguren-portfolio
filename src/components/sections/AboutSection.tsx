"use client";

import { motion } from "framer-motion";
import SubTitle from "../ui/SubTitle";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import { usePathname } from "next/navigation";

export default function AboutSection() {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");
  const t = isSpanish ? es : en;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stats = [
    { title: t.about.stats.countries, value: "15+", color: "text-purple-400" },
    { title: t.about.stats.projects, value: "30+", color: "text-amber-300" },
    { title: t.about.stats.experience, value: "5+", color: "text-lime-400" },
    { title: t.about.stats.clients, value: "20+", color: "text-red-400" },
  ];

  return (
    <section className="p-28 bg-[#0D1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#0D1117_20%,#0D1117_80%,transparent_100%)]" />

      <motion.div
        className="max-w-5xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SubTitle title={t.about.title} subtitle={t.about.subtitle} />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-xl">
            <p className="text-gray-300">{t.about.description1}</p>
            <p className="text-gray-300">{t.about.description2}</p>
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
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#161B22] p-6 rounded-lg text-center border space-y-5 border-gray-800"
              >
                <h3 className={`text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </h3>
                <p className="text-gray-100 font-bold text-sm mt-2">
                  {stat.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
