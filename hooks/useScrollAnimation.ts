import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export const useScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(scrollYProgress.get());
  useMotionValueEvent(scrollYProgress, "change", (y) => setScrollY(y));
  return { scrollY };
};
