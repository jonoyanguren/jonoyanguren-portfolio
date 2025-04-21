import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiPrisma,
  SiVercel,
} from "react-icons/si";
import { useTranslations } from "next-intl";
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  timeSpent: string;
  url: string;
}

const techIcons: { [key: string]: React.ReactNode } = {
  React: <FaReact className="text-cyan-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Python: <SiPython className="text-red-400" />,
  FastAPI: <SiFastapi className="text-green-400" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  Prisma: <SiPrisma className="text-blue-400" />,
  Vercel: <SiVercel className="text-white bg-black rounded-full p-1" />,
  Javascript: <FaJs className="text-yellow-400" />,
  HTML: <FaHtml5 className="text-red-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  "Node.js": <FaNodeJs className="text-green-400" />,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  timeSpent,
  url,
}: ProjectCardProps) {
  const t = useTranslations("projects");
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-zinc-700 p-4 rounded-lg border border-gray-800 overflow-hidden"
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <Image
            width={100}
            height={100}
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      <div className="pt-5 space-y-3">
        <a href={url} target="_blank" className="text-white">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </a>
        <p className="text-gray-100 mb-4 mt-2">{description}</p>
        {timeSpent && (
          <p className="text-gray-100 mb-4">
            {t("timeSpent")}: {timeSpent}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-10">
          {tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-amber-50 text-zinc-900 text-sm rounded-full border border-gray-800 flex items-center gap-1"
            >
              {techIcons[tech] && (
                <span className="text-lg">{techIcons[tech]}</span>
              )}
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
