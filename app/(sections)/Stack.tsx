import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  BiLogoAws,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiApollographql, SiJest } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

type Tech = {
  label: string;
  link: string;
  icon?: IconType;
};

type CoreTech = Tech & {
  icon: IconType;
};

const coreStack: CoreTech[] = [
  { label: "React", icon: FaReact, link: "https://react.dev/" },
  {
    label: "Typescript",
    icon: BiLogoTypescript,
    link: "https://www.typescriptlang.org/",
  },
  { label: "Next.js", icon: TbBrandNextjs, link: "https://nextjs.org/" },
  {
    label: "Tailwind",
    icon: BiLogoTailwindCss,
    link: "https://tailwindcss.com/",
  },
  {
    label: "Apollo",
    icon: SiApollographql,
    link: "https://www.apollographql.com/",
  },
  {
    label: "Postgres",
    icon: BiLogoPostgresql,
    link: "https://www.postgresql.org/",
  },
  { label: "AWS", icon: BiLogoAws, link: "https://aws.amazon.com/" },
  { label: "Jest", icon: SiJest, link: "https://jestjs.io/" },
  { label: "Github", icon: BsGithub, link: "https://github.com/" },
];

const miscTech: Tech[] = [
  { label: "React Native", link: "https://reactnative.dev/" },
  { label: "ESLint", link: "https://eslint.org/" },
  { label: "Prettier", link: "https://prettier.io/" },
  { label: "Framer Motion", link: "https://www.framer.com/motion/" },
  { label: "Three", link: "https://threejs.org/" },
];

const tools: Tech[] = [
  { label: "Figma", link: "https://www.figma.com/" },
  { label: "Vercel", link: "https://www.vercel.com/" },
];

export const Stack = () => {
  const [hoveredTech, setHoveredTech] = useState(coreStack[0]);
  const Icon = hoveredTech.icon;

  const onTapCoreTech = (tech: CoreTech) => {
    if (typeof window !== "undefined" && hoveredTech.label === tech.label) {
      window.open(tech.link, "_blank");
    }
    setHoveredTech(tech);
  };

  return (
    <section className="relative w-screen overflow-x-hidden py-28 md:pt-36">
      <div className="mx-auto flex w-5/6 flex-col md:w-fit md:flex-row">
        <Icon className="absolute -right-32 top-32 -z-10 h-auto w-[150%] text-white/30 md:right-10 md:w-1/2" />
        <h1 className="pointer-events-none z-10 mb-10 text-center text-white md:absolute md:bottom-80 md:right-60 md:mb-4">
          STACK
        </h1>

        <div className="mb-14 min-w-[24rem]">
          {coreStack.map((tech) => (
            <motion.div
              key={tech.label}
              animate={{ scale: hoveredTech.label === tech.label ? 1.025 : 1 }}
              onMouseEnter={() => setHoveredTech(tech)}
              onTap={() => onTapCoreTech(tech)}
              className={`${
                hoveredTech.label === tech.label ? "font-bold" : "font-normal"
              } bg-pink mb-2 block rounded-xl py-4 text-center hover:cursor-pointer`}
            >
              {tech.label}
            </motion.div>
          ))}
        </div>

        <div className="self-end text-white md:ml-10">
          <h2 className="md:max-w-[15rem]">OTHER TOOLS & TECHNOLOGIES</h2>
          <div className="ml-4 mt-4 flex gap-6">
            <div>
              {miscTech.map((tech) => (
                <a
                  key={tech.label}
                  href={tech.link}
                  target="_blank"
                  className="block py-1 underline md:no-underline md:hover:underline"
                >
                  {tech.label}
                </a>
              ))}
            </div>

            <div>
              {tools.map((tool) => (
                <a
                  key={tool.label}
                  href={tool.link}
                  target="_blank"
                  className="block py-1 underline md:no-underline md:hover:underline"
                >
                  {tool.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
