import Navbar from "@/components/layout/Navbar";
import SharedBackgroundSection from "@/components/layout/SharedBackgroundSection";
import Hero from "@/components/sections/hero/Hero";
import EngineeringPhilosophy from "@/components/sections/philosophy/EngineeringPhilosophy";
import WorldwideOperations from "@/components/sections/operations/WorldwideOperations";
import WhatWeDo from "@/components/sections/intro/Intro";
import SectorsSection from "@/components/sections/sector/SectorsSection";
import ServicesSection from "@/components/sections/service/Service";
import ReadyToMove from "@/components/sections/cta/ReadyToMove";
import Footer from "@/components/layout/Footer";


import { Suspense } from "react";
import { ServiceCardSkeleton } from "@/components/ui/serviceCardSkelton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      
      <div id="about">
        <WhatWeDo
          eyebrow="What We Do"
          headingLine1="YOUR SINGLE-WINDOW PARTNER FOR"
          headingLine2="GLOBAL SOLUTIONS"
          description="ABC Technologies LLC operates as a single-window partner for global clients seeking reliable sourcing, technical expertise, and deployment of advanced engineering and technology solutions."
        />
      </div>

      <SharedBackgroundSection imageSrc="/shared-sections-bg.png">
        <div className="relative z-10">
          <div id="services">
            <Suspense fallback={
              <div className="grid grid-cols-1 gap-[22px] pb-4 sm:grid-flow-col sm:auto-cols-[330px] sm:grid-cols-none sm:overflow-x-auto">
                {[1, 2, 3, 4].map(i => <ServiceCardSkeleton key={i} />)}
              </div>
            }>
              <ServicesSection/>
            </Suspense>
          </div>
          
          <div id="sectors">
            <SectorsSection />
          </div>
        </div>
      </SharedBackgroundSection>

      <EngineeringPhilosophy backgroundSrc="/Engineering_Philosophy_bg.jpg" />
      <WorldwideOperations mapImageSrc="/operations-map-bg.jpg" />
      
      <div id="contact">
        <ReadyToMove backgroundSrc="/cta-grid-bg.png" />
      </div>

      <Footer backgroundSrc="/footer-bg.jpg"/>
    </>
  );
}
