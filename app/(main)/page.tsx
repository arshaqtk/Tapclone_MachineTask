import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import WhatWeDo from "@/components/sections/Intro";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <WhatWeDo
        eyebrow="What We Do"
        headingLine1="YOUR SINGLE-WINDOW PARTNER FOR"
        headingLine2="GLOBAL SOLUTIONS"
        description="ABC Technologies LLC operates as a single-window partner for global clients seeking reliable sourcing, technical expertise, and deployment of advanced engineering and technology solutions."
      />
    </>
  );
}