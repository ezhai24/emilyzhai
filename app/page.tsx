"use client";

import { Title } from "./(sections)/Title";

import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Title />
      </main>
    </>
  );
}
