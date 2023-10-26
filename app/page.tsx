"use client";

import { Contact } from "./(sections)/Contact";
import { Projects } from "./(sections)/Projects/index";
import { Stack } from "./(sections)/Stack";
import { Title } from "./(sections)/Title";
import { Work } from "./(sections)/Work";

import { Navigation } from "@/components/Navigation";

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
