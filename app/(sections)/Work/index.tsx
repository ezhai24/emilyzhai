import { motion } from "framer-motion";
import Image from "next/image";

import { WorkCard, WorkType } from "./WorkCard";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useViewport } from "@/hooks/useViewport";
import { clampRange } from "@/utils/math";

const jobs: WorkType[] = [
  {
    dates: "2023-2024",
    company: "FORAGED",
    role: "Senior Software Engineer",
    description:
      "Grinded with a tiny team of 7 to ideate, architect, and launch GTV driving features on tight timelines. Created value for vendors and customers alike while increasing YoY revenue by over 3x.",
    tags: ["React", "Stripe", "Ionic", "Medusa", "Typescript", "Tailwind"],
    companyLink: "https://www.foraged.com/",
    projectLinks: [
      {
        label: "SaaS Tiering",
        href: "https://explore.foraged.com/sell/pricing-2/",
      },
      {
        label: "Local Pickup",
        href: "https://apps.apple.com/us/app/foraged-market/id6444685145?platform=iphone",
      },
      {
        label: "Apple Pay",
        href: "https://www.foraged.com/cart",
      },
    ],
  },
  {
    dates: "2020-2023",
    company: "CONVOY",
    role: "Senior Software Engineer",
    description:
      "Worked with and learned relentlessly from those around me to identify product opportunity. Architected, built, and shipped trailer operations tools for a fleet of 2k+.",
    tags: ["React", "React Native", "GraphQL", "Postgres", "AWS", "Typescript"],
    companyLink: "https://convoy.com/",
    projectLinks: [
      {
        label: "Hi-Fi Visibility",
        href: "https://www.linkedin.com/posts/convoy-inc_introducing-hi-fi-visibility-convoy-activity-7028423068213526529-06Xl",
      },
    ],
  },
  {
    dates: "2019-2020",
    company: "PINTEREST",
    role: "Front-End Engineer",
    description:
      "Optimized existing front-end architectures for scalability, maintainability, and performance.",
    tags: ["React", "Next.js", "Webpack", "ESLint", "Prettier", "Jest"],
    companyLink: "https://www.pinterest.com/",
  },
  {
    dates: "2018-2019",
    company: "LIMEADE",
    role: "Software Engineer",
    description:
      "Developed and shipped cross-platform features for the well-being programs that provide tangible to support employees.",
    tags: ["React", "Javascript", "REST", "Swift", ".NET", "Jest"],
    companyLink: "https://www.limeade.com/",
    projectLinks: [
      {
        label: "Smart Hub",
        href: "https://www.limeade.com/resources/blog/deeper-look-into-how-limeade-integrates-with-partners/",
      },
    ],
  },
  {
    dates: "JUN - SEP 2018",
    company: "LABKEY",
    role: "Software Engineer",
    description:
      "Collaborated closely with scientists to build robust and reliable data management software for scientists.",
    tags: ["Javascript", "PHP"],
    companyLink: "https://www.labkey.com/",
    projectLinks: [
      {
        label: "Adjudication Module",
        href: "https://www.labkey.org/Documentation/wiki-page.view?name=adjudication",
      },
    ],
  },
];
export const Work = () => {
  const { width } = useViewport();
  const { scrollY } = useScrollAnimation();

  return (
    <section className="relative z-10 bg-gray">
      <motion.picture
        animate={
          width >= 800
            ? { scaleX: -1, scaleY: clampRange(scrollY, 0.3, 0.55, -1, -0.3) }
            : { scaleX: -1, scaleY: clampRange(scrollY, 0.42, 0.6, -1, -0.3) }
        }
        transition={{ duration: 0 }}
        className="pointer-events-none absolute -top-[55%] -z-10 h-full w-screen -scale-x-100 -scale-y-50"
      >
        <source
          type="image/svg+xml"
          srcSet="assets/drip-gray.svg#svgView(viewBox(30,0,90,50.852077))"
          media="(max-width: 799px)"
        />
        <Image src="assets/drip-gray.svg" alt="Drip texture" fill />
      </motion.picture>
      <motion.picture
        animate={
          width >= 800
            ? { scaleY: clampRange(scrollY, 0.6, 0.84, 0.3, 0.9) }
            : { scaleY: clampRange(scrollY, 0.62, 0.8, 0.3, 0.9) }
        }
        transition={{ duration: 0 }}
        className="scroll-y-50 pointer-events-none absolute -bottom-[55%] -z-10 h-full w-screen"
      >
        <source
          type="image/svg+xml"
          srcSet="assets/drip-gray.svg#svgView(viewBox(30,0,90,50.852077))"
          media="(max-width: 799px)"
        />
        <Image src="assets/drip-gray.svg" alt="Drip texture" fill />
      </motion.picture>

      <div className="relative w-screen overflow-x-hidden">
        <div className="absolute top-44 -z-10">
          <div className="clip -my-8 -ml-5 overflow-hidden whitespace-nowrap font-trailers text-9xl text-pink">
            FORAGED CONVOY PINTEREST LIMEADE LABKEY
          </div>
          <div className="clip -my-8 -ml-10 overflow-hidden whitespace-nowrap font-trailers text-9xl text-pink">
            PINTEREST CONVOY LIMEADE FORAGED LABKEY
          </div>
          <div className="clip -my-8 -ml-5 overflow-hidden whitespace-nowrap font-trailers text-9xl text-pink">
            LIMEADE FORAGED PINTEREST LABKEY CONVOY
          </div>
          <div className="clip -my-8 -ml-5 overflow-hidden whitespace-nowrap font-trailers text-9xl text-pink">
            LABKEY LIMEADE FORAGED CONVOY PINTEREST
          </div>
        </div>

        <div
          id="work"
          className="flex-wrap-none scrollbar-none flex overflow-x-scroll py-20"
        >
          {jobs.map((job, i) => (
            <WorkCard
              key={job.company}
              {...job}
              alignment={i % 2 === 0 ? "UP" : "DOWN"}
              className={i === 0 ? "ml-10" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
