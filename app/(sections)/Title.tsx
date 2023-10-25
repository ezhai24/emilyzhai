import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import { Drip } from "@/components/Drip";

export const Title = () => {
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (y) => setScrollY(y));

  return (
    <section className="bg-blue relative z-10 px-20 pb-2 pt-24 text-center">
      <h2 className="mb-4">EMILY ZHAI</h2>
      <h1 className="mb-3">FULL-STACK SOFTWARE BUILT FOR HUMANS</h1>
      <p className="mx-auto w-2/3">
        My name is Emily. I build scalable, performant technology that solves
        real problems for real people.
      </p>
      <motion.button initial="default" whileHover="hover" className="mt-10">
        <div className="rounded-full border-2 px-4 py-1 font-bold">
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

      <Drip
        animate={{ scaleY: Math.min(0.5 + scrollY, 1) }}
        fill="rgb(var(--color-blue))"
        className="absolute -bottom-28 left-0 -z-10 h-auto w-screen md:-bottom-48"
      />
    </section>
  );
};
