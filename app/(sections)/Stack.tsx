import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const BiLogoAws = dynamic(() =>
  import("react-icons/bi").then((module) => module.BiLogoAws),
);
const BiLogoPostgresql = dynamic(() =>
  import("react-icons/bi").then((module) => module.BiLogoPostgresql),
);
const BiLogoTailwindCss = dynamic(() =>
  import("react-icons/bi").then((module) => module.BiLogoTailwindCss),
);
const BiLogoTypescript = dynamic(() =>
  import("react-icons/bi").then((module) => module.BiLogoTypescript),
);
const BsGithub = dynamic(() =>
  import("react-icons/bs").then((module) => module.BsGithub),
);
const FaReact = dynamic(() =>
  import("react-icons/fa").then((module) => module.FaReact),
);
const SiApollographql = dynamic(() =>
  import("react-icons/si").then((module) => module.SiApollographql),
);
const SiJest = dynamic(() =>
  import("react-icons/si").then((module) => module.SiJest),
);
const TbBrandNextjs = dynamic(() =>
  import("react-icons/tb").then((module) => module.TbBrandNextjs),
);

type Tech = {
  label: string;
  link: string;
};

type CoreTech = Tech & {
  icon: any;
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
    <section className="relative w-screen overflow-x-hidden pb-28 pt-8 md:pt-16">
      <div
        id="stack"
        className="mx-auto flex w-5/6 flex-col pt-20 md:w-fit md:flex-row"
      >
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
                hoveredTech.label === tech.label
                  ? "font-kumbh-bold"
                  : "font-normal"
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
                <Link
                  key={tech.label}
                  href={tech.link}
                  target="_blank"
                  className="block py-1 underline md:no-underline md:hover:underline"
                >
                  {tech.label}
                </Link>
              ))}
            </div>

            <div>
              {tools.map((tool) => (
                <Link
                  key={tool.label}
                  href={tool.link}
                  target="_blank"
                  className="block py-1 underline md:no-underline md:hover:underline"
                >
                  {tool.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
