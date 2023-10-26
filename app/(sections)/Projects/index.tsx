import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

import { Camera } from "./Camera";
import { Project, ProjectCard } from "./ProjectCard";
import { Truck } from "./Truck";

type DisplayedProject = Project & {
  colSpan: number;
};
const projects: DisplayedProject[] = [
  {
    name: "HI-FI VISIBILITY",
    description:
      "Real-time trailer insights. Built to scale for 400k+ trailers across hundreds of shippers and facilities.",
    link: "https://convoy.com/freight-services/supply-chain-visibility/",
    tags: ["React", "GraphQL", "Kafka", "Postgres", "Typescript"],
    image: {
      component: (
        <Truck className="absolute -left-[15%] bottom-3 h-auto w-[145%] -rotate-3 md:w-56" />
      ),
      align: "LEFT",
    },
    colSpan: 3,
  },
  {
    name: "LOVE DEATH + ROBOTS",
    description:
      "Advertisement for season 3 of the Netflix original - Love, Death, & Robots.",
    link: "https://love-death-robots.vercel.app/",
    githubLink: "https://github.com/ezhai24/love-death-robots",
    tags: ["3D Animation", "R3F", "Tailwind", "Typescript"],
    colSpan: 2,
  },
  {
    name: "MINE-SWEEPER",
    description:
      "A nautical spin on Microsoft's 1990 hit classic, Minesweeper.",
    link: "https://minesweeper-ezhai24.vercel.app/",
    githubLink: "https://github.com/ezhai24/minesweeper",
    tags: ["React Hooks", "Recursion", "CSS-in-JS", "Typescript"],
    colSpan: 2,
  },
  {
    name: "21W8Y",
    description:
      "The unofficial portfolio for Unsplash photographer Mateusz Delegacz.",
    link: "https://21w8y.vercel.app/",
    githubLink: "https://github.com/ezhai24/21w8y",
    tags: ["REST API", "Framer Motion", "React", "Typescript"],
    image: {
      component: (
        <Camera className="absolute -left-1/4 top-1/4 h-auto w-[145%]" />
      ),
      align: "RIGHT",
    },
    colSpan: 3,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="pt-20">
      <h1 className="text-center text-white">PROJECTS</h1>
      <div className="mx-auto mt-4 flex w-5/6 flex-col gap-8 md:grid md:grid-cols-5">
        {projects.map(({ colSpan, ...project }) => (
          <ProjectCard
            key={project.name}
            {...project}
            style={{ gridColumn: `span ${colSpan} / span ${colSpan}` }}
          />
        ))}
      </div>
      <motion.div
        whileHover="hover"
        variants={{
          hover: { scale: 1.025 },
        }}
        className="mx-auto mt-8 w-5/6 hover:cursor-pointer md:ml-[28%] md:w-1/3"
      >
        <div className="bg-pink mx-auto h-4 w-[98%] rounded-t-lg" />
        <div className="mx-auto flex w-full items-center justify-center gap-0.5 border-y-4 bg-white py-2 font-bold">
          project archive
          <motion.div
            variants={{
              hover: { x: 2, y: -2 },
            }}
          >
            <BsArrowUpRight />
          </motion.div>
        </div>
        <div className="bg-pink mx-auto h-20 w-[98%] pt-8" />
      </motion.div>
    </section>
  );
};
