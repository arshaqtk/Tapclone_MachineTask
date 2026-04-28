import Navbar from "@/components/layout/Navbar";
import SharedBackgroundSection from "@/components/layout/SharedBackgroundSection";
import Hero from "@/components/sections/hero/Hero";
import EngineeringPhilosophy from "@/components/sections/philosophy/EngineeringPhilosophy";
import WorldwideOperations from "@/components/sections/operations/WorldwideOperations";
import WhatWeDo from "@/components/sections/intro/Intro";
import SectorsSection from "@/components/sections/sector/SectorsSection";
import ServicesSection from "@/components/sections/service/Service";
import ReadyToMove from "@/components/sections/cta/ReadyToMove";


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
      <SharedBackgroundSection imageSrc="/shared-sections-bg.png">
        <div className="relative z-10">
          <ServicesSection/>
          <SectorsSection />
        </div>
      </SharedBackgroundSection>
      <EngineeringPhilosophy backgroundSrc="/Engineering_Philosophy_bg.jpg" />
      <WorldwideOperations mapImageSrc="/operations-map-bg.jpg" />
      <ReadyToMove backgroundSrc="/cta-grid-bg.png" />
    </>
  );
}
