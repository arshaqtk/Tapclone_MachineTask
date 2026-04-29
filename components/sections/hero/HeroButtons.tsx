"use client";

import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-[20px]">
      <Link
        href="#contact"
        className="group relative inline-flex h-[56px] min-w-[240px] items-center justify-center overflow-hidden rounded-[12px] bg-gradient-to-b from-[#4A7D4A] to-[#128954] px-8 text-[14px] font-bold uppercase tracking-[1px] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 hover:translate-y-[-2px]"
      >
        <span className="relative z-10">Discuss a Project</span>
        <div className="absolute inset-0 z-0 border border-white/10 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[12px]" />
      </Link>

      <Link
        href="#services"
        className="group relative inline-flex h-[56px] min-w-[240px] lg:min-w-[320px] items-center justify-center gap-4 overflow-hidden rounded-[12px] border border-[#70A267]/60 px-8 text-[14px] font-bold uppercase tracking-[1px] text-white transition-all duration-300 hover:translate-y-[-2px]"
      >
        <span className="relative z-10 flex items-center gap-4">
          Explore Our Capabilities
          <span className="text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]">
            ↗
          </span>
        </span>
        <div className="absolute inset-0 z-0 border border-white/20 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[16px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
      </Link>
    </div>
  );
}
