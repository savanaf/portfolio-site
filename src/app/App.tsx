/* eslint-disable @typescript-eslint/no-explicit-any */

// "use client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savana Alden",
  description: "Portfolio website",
};

import { useSelector } from "react-redux";

import Hero from "./components/Hero/Hero";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

export default function App() {
  const toggleBG = useSelector((state: any) => state.toggleState)
  return (
    <div className={toggleBG ? 'dark' : ''}>
      <Hero />
      <WhatIDo />
      <Portfolio />
      <Contact />
    </div>
  )
}


