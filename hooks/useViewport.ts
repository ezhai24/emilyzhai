import { useEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(-1);

  useEffect(() => {
    // This component is rendered client and server side by Next but we only
    // have access to window client-side. Set the initial value of `width`
    // when we're sure we're on the client-side pass.
    if (width < 0 && typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  return { width };
};
