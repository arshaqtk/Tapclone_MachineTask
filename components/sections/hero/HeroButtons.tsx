"use client";

import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-[20px]">
      <Link
        href="#contact"
        className="inline-flex h-[52px] min-w-[218px] items-center justify-center gap-1 whitespace-nowrap rounded-[8px] bg-[linear-gradient(180deg,_#447444_0%,_#128954_100%)] px-6 [box-shadow:inset_0_-1px_0_rgba(255,255,255,0.24)] [font-family:var(--font-nunito-sans)] text-[14px] font-semibold uppercase tracking-[0.7px] text-white no-underline transition-opacity duration-200 hover:opacity-85"
      >
        Discuss a Project
      </Link>

      <Link
        href="#services"
        className="inline-flex h-[52px] w-full max-w-[398px] items-center justify-center gap-4 whitespace-nowrap rounded-[8px] border border-[rgba(112,162,103,0.65)] px-[26px] [font-family:var(--font-nunito-sans)] text-[14px] font-medium uppercase tracking-[0.8px] text-white no-underline transition-[background,border-color] duration-200 hover:bg-[#447544]/10"
      >
        Explore Our Capabilities
        <span className="text-[18px] leading-none">{"\u2197"}</span>
      </Link>
    </div>
  );
}
