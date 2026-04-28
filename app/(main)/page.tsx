import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import WhatWeDo from "@/components/sections/Intro";
import ServicesSection from "@/components/sections/service/Service";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, #07110d 0%, #04100b 46%, #020906 100%)',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 62% 58% at 54% 44%, rgba(10,56,33,0.5) 0%, rgba(8,33,22,0.2) 42%, rgba(0,0,0,0) 74%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 48% 34% at 18% 62%, rgba(42,112,67,0.2) 0%, rgba(42,112,67,0.08) 36%, rgba(42,112,67,0) 72%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32"
          style={{
            background:
              'radial-gradient(ellipse 40% 90% at 62% 0%, rgba(68,173,93,0.18) 0%, rgba(68,173,93,0.08) 28%, rgba(68,173,93,0) 62%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-60"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.012) 35%, rgba(255,255,255,0) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{
            background:
              'radial-gradient(ellipse 68% 100% at 50% 100%, rgba(63,153,87,0.22) 0%, rgba(63,153,87,0.08) 36%, rgba(63,153,87,0) 72%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(61,143,95,0.75) 1px, transparent 1px), linear-gradient(90deg, rgba(61,143,95,0.75) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10">
          <WhatWeDo
            eyebrow="What We Do"
            headingLine1="YOUR SINGLE-WINDOW PARTNER FOR"
            headingLine2="GLOBAL SOLUTIONS"
            description="ABC Technologies LLC operates as a single-window partner for global clients seeking reliable sourcing, technical expertise, and deployment of advanced engineering and technology solutions."
          />
          <ServicesSection/>
        </div>
      </section>
    </>
  );
}
