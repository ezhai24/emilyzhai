import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import { motion } from "framer-motion";
import Image from "next/image";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useViewport } from "@/hooks/useViewport";
import { clampRange } from "@/utils/math";
import { routes } from "@/utils/routes";

export const Title = () => {
  const { width } = useViewport();
  const { scrollY } = useScrollAnimation();

  const goToProjectSection = () => {
    if (typeof window !== "undefined") {
      document
        .querySelector(routes.projects)
        ?.scrollIntoView({ behavior: "smooth" });
      history.pushState(
        `#${routes.projects}`,
        document.title,
        window.location.pathname + routes.projects,
      );
    }
  };

  return (
    <section
      id="title"
      className="relative z-10 flex min-h-screen items-center bg-blue px-20 md:pt-24"
    >
      <div className="text-center">
        <h2 className="mb-4">EMILY ZHAI</h2>
        <h1 className="mb-3">FULL-STACK SOFTWARE BUILT FOR HUMANS</h1>
        <p className="mx-auto w-2/3">
          My name is Emily. I build scalable, performant technology that solves
          real problems for real people.
        </p>
        <motion.button initial="default" whileHover="hover" className="mt-10">
          <div
            onClick={goToProjectSection}
            className="rounded-full border-2 px-4 py-1 font-kumbh-bold"
          >
            here&apos;s proof
          </div>
          <motion.div
            variants={{
              hover: {
                y: 4,
                transition: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 0.35,
                },
              },
            }}
          >
            <FaChevronDown className="mt-0.5 w-full text-center" />
          </motion.div>
        </motion.button>
      </div>

      <motion.picture
        animate={
          width >= 800
            ? { scaleY: clampRange(scrollY, 0, 0.29, 0.5, 1.25) }
            : { scaleY: clampRange(scrollY, 0, 0.23, 0.5, 1.75) }
        }
        transition={{ duration: 0 }}
        className="pointer-events-none absolute -bottom-[55%] left-0 -z-10 h-full w-screen scale-y-50"
      >
        <source
          type="image/svg+xml"
          srcSet="assets/drip-blue.svg#svgView(viewBox(25,0,105,50.852077))"
          media="(max-width: 799px)"
        />
        <Image src="assets/drip-blue.svg" alt="Drip texture" fill priority />
      </motion.picture>
    </section>
  );
};
