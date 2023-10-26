"use client";

import { Projects } from "./(sections)/Projects/index";
import { Title } from "./(sections)/Title";

import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Title />
        <Projects />
      </main>
    </>
  );
}
