import { motion } from "framer-motion";
import Link from "next/link";
import { CSSProperties, MouseEventHandler } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tag } from "@/components/Tag";

export type Project = {
  name: string;
  description: string;
  link: string;
  githubLink?: string;
  tags: string[];
  image?: {
    component: JSX.Element;
    align: "LEFT" | "RIGHT";
  };
};

interface Props extends Project {
  style?: CSSProperties;
  className?: string;
}
export const ProjectCard = (props: Props) => {
  const { name, description, link, tags, githubLink, image, style, className } =
    props;

  const hasNoImage = !image;
  const hasLeftImage = image && image.align === "LEFT";
  const hasRightImage = image && image.align === "RIGHT";

  const openGHLink: MouseEventHandler<HTMLDivElement> = (e) => {
    if (typeof window !== "undefined") {
      e.stopPropagation();
      window.open(githubLink, "_blank");
    }
  };

  return (
    <Link href={link} target="_blank" style={style} className={className}>
      <motion.div
        whileHover="hover"
        variants={{ hover: { scale: 1.025 } }}
        className="flex h-96 hover:cursor-pointer"
      >
        <div
          className={`${
            hasLeftImage ? "flex-5" : "flex-1"
          } bg-pink relative my-4 rounded-l-lg`}
        >
          {hasLeftImage && image.component}
        </div>

        <div
          className={`${
            hasNoImage ? "flex-9" : "flex-5"
          } flex flex-col border-x-4 bg-white p-8`}
        >
          <motion.span
            variants={{ hover: { x: 5, y: -5 } }}
            className="w-fit self-end text-sm hover:cursor-pointer"
          >
            <BsArrowUpRight />
          </motion.span>

          <div className="flex-1">
            <h2 className="my-1">{name}</h2>
            <p>{description}</p>
          </div>
          <ul className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </ul>
          {githubLink && (
            <div
              onClick={openGHLink}
              className="mt-3 text-lg hover:cursor-pointer"
            >
              <BsGithub />
            </div>
          )}
        </div>

        <div
          className={`${
            hasRightImage ? "flex-5" : "flex-1"
          } bg-pink relative my-4 rounded-r-lg`}
        >
          {hasRightImage && image.component}
        </div>
      </motion.div>
    </Link>
  );
};
