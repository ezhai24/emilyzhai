"use client";

import dynamic from "next/dynamic";

import { Title } from "./(sections)/Title";

import { Navigation } from "@/components/Navigation/index";

const Contact = dynamic(() => import("./(sections)/Contact"));
const Stack = dynamic(() => import("./(sections)/Stack"));
const Projects = dynamic(() => import("./(sections)/Projects"));
const Work = dynamic(() => import("./(sections)/Work"));

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Title />
        <Projects />
        <Work />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
