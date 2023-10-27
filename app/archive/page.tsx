import Link from "next/link";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";

import { projects } from "./data";

import { Tag } from "@/components/Tag";
import { routes } from "@/utils/routes";

export default function Archive() {
  return (
    <main className="mx-auto my-20 w-5/6 text-white">
      <Link
        href={routes.home + routes.projects}
        aria-label="Go back to the home page of Emily Zhai's portfolio"
        className="hover:text-red flex flex-row items-center gap-1"
      >
        <BsArrowLeft />
        EMILY ZHAI
      </Link>
      <h1 className="pointer-events-none mb-6 mt-4">ALL PROJECTS</h1>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="hidden sm:table-cell">Year</th>
            <th>Project</th>
            <th className="hidden md:table-cell">Made at</th>
            <th className="hidden lg:table-cell">Built with</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(
            ({ year, project, description, company, tech, link }) => (
              <tr key={project}>
                <td className="hidden pr-8 pt-6 align-top text-sm text-white/50 sm:table-cell">
                  {year}
                </td>
                <td className="pr-8 pt-6 align-top">
                  <div>{project}</div>
                  <div className="text-sm text-white/50">{description}</div>
                </td>
                <td className="hidden min-w-max pr-8 pt-6 align-top text-sm text-white/50 md:table-cell">
                  {company}
                </td>
                <td className="hidden max-w-sm pr-8 pt-6 align-top lg:table-cell">
                  <ul className="flex flex-wrap gap-1">
                    {tech.map((t) => (
                      <Tag key={t} label={t} className="text-black" />
                    ))}
                  </ul>
                </td>
                <td className="pr-8 pt-6 align-top">
                  {link && (
                    <Link href={link} target="_blank">
                      <BsArrowUpRight />
                    </Link>
                  )}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </main>
  );
}
