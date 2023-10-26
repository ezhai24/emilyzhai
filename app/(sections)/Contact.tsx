import Link from "next/link";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";

import { Drip } from "@/components/Drip";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useViewport } from "@/hooks/useViewport";

export const Contact = () => {
  const { width } = useViewport();
  const { scrollY } = useScrollAnimation();

  return (
    <section id="contact" className="bg-blue relative z-10 py-14">
      <Drip
        animate={
          width >= 800
            ? { scaleY: -1.2 + 2 * (scrollY - 0.8) }
            : { scaleY: -1.75 + 5 * (scrollY - 0.8) }
        }
        transition={{ duration: 0 }}
        fill="rgb(var(--color-blue))"
        className="pointer-events-none absolute -top-28 -z-10 h-auto w-screen md:-top-48"
      />
      <div className="mx-auto w-5/6">
        <h1>LET&apos;S TALK SHOP</h1>
        <div className="ml-2 flex items-center">
          <Link
            aria-label="Visit Emily Zhai's LinkedIn profile"
            href="https://www.linkedin.com/in/emily-zhai-b7b32a103/"
            target="_blank"
            className="text-2xl hover:cursor-pointer"
          >
            <BsLinkedin />
          </Link>
          <Link
            aria-label="Visit Emily Zhai's Github profile"
            href="https://github.com/ezhai24"
            target="_blank"
            className="ml-2 text-2xl hover:cursor-pointer"
          >
            <BsGithub />
          </Link>
          <Link
            aria-label="Visit Emily Zhai's Code Sandbox profile"
            href="https://codesandbox.io/u/ezhai24"
            target="_blank"
            className="ml-1 text-3xl hover:cursor-pointer"
          >
            <AiFillCodeSandboxCircle />
          </Link>
          <Link
            aria-label="Visit Emily Zhai's Medium profile"
            href="https://medium.com/@ezhai24"
            target="_blank"
            className="ml-1 text-2xl hover:cursor-pointer"
          >
            <BsMedium />
          </Link>
          <span className="mx-4">|</span>
          <Link href="mailto:ezhai24@gmail.com" className="underline">
            ezhai24@gmail.com
          </Link>
        </div>

        <p className="ml-2 mt-12 max-w-lg text-xs">
          Designed in{" "}
          <Link
            href="https://www.figma.com/file/PFl3hZ9pkislzSuRyWDqCP/Portfolio-Website?type=design&node-id=22%3A540&mode=design&t=5p2xtc9iSH8Uy0Ct-1"
            target="_blank"
            className="underline"
          >
            Figma
          </Link>{" "}
          and coded in{" "}
          <Link
            href="https://code.visualstudio.com/"
            target="_blank"
            className="underline"
          >
            Visual Studio Code
          </Link>{" "}
          by yours truly. Built with{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="underline"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="underline"
          >
            Tailwind CSS
          </Link>
          , deployed with{" "}
          <Link
            href="https://vercel.com/"
            target="_blank"
            className="underline"
          >
            Vercel
          </Link>
          .
        </p>

        <p className="ml-2 mt-4 text-xs">&copy;2023 Emily Zhai</p>
      </div>
    </section>
  );
};
