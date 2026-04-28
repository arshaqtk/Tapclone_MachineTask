'use client';

import Image from 'next/image';

interface ReadyToMoveProps {
  backgroundSrc?: string;
}

const CTA_TAGS = [
  'GLOBAL EXECUTION',
  'ENGINEERING-LED APPROACH',
  'VENDOR-AGNOSTIC SOLUTIONS',
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path
        d="M3.5 5.5A1.5 1.5 0 015 4h2.28a.75.75 0 01.72.53l.97 3.24a.75.75 0 01-.21.78L7.2 9.7A11.04 11.04 0 0012.3 14.8l1.15-1.55a.75.75 0 01.78-.21l3.24.97a.75.75 0 01.53.72V17a1.5 1.5 0 01-1.5 1.5C7.82 18.5 3.5 14.18 3.5 5.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.5 4.5c1.5 1.5 2 3.5 2 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17.5 2.5c2.5 2.5 3 5.5 3 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function ReadyToMove({ backgroundSrc }: ReadyToMoveProps) {
  const resolvedBg = backgroundSrc ?? '/cta-grid-bg.png';

  return (
    <section className="relative isolate overflow-hidden bg-[#010504]">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[15%]">
        <Image
          src={resolvedBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-90"
          priority={false}
        />
      </div>

      {/* Top fade overlay */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            'linear-gradient(180deg, rgba(1,5,4,1) 0%, rgba(1,5,4,0.82) 42%, rgba(1,5,4,0) 100%)',
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 44% at 50% 60%, rgba(28,110,58,0.18) 0%, rgba(9,42,23,0.10) 38%, rgba(0,0,0,0) 72%)',
        }}
      />

      {/* Top separator line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(88,199,114,0)_0%,rgba(88,199,114,0.20)_28%,rgba(88,199,114,0.20)_72%,rgba(88,199,114,0)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-[150px] pb-16 sm:px-8 sm:pt-[150px] md:pb-20 lg:px-14 xl:px-[64px] xl:pb-[80px]">
        
        {/* Text and Buttons Container */}
        <div className="mx-auto flex min-h-[284px] w-full max-w-[613px] flex-col items-center justify-between text-center gap-[64px]">
          
          <div>
            {/* Heading */}
            <h2
              className="text-[30px] uppercase leading-[1.15] tracking-[0.01em] text-[#f0ece4] sm:text-[38px] md:text-[40px]"
              style={{ fontFamily: 'Eloran, serif', fontWeight: 400 }}
            >
              Ready to Move Your Project <br className="hidden sm:block" />
              Forward?
            </h2>

            {/* Subtitle */}
            <p
              className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.55] text-[#DAFFF1]/68 sm:text-[16px]"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Consultative engineering expertise—from strategy and design through
              implementation to measurable operational performance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="grid w-full max-w-[400px] grid-cols-1 items-center gap-4 sm:grid-cols-2">
            {/* Primary — white filled */}
            <button
              id="cta-start-project"
              type="button"
              className="group relative inline-flex h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-7 text-[13px] font-bold uppercase tracking-[0.06em] text-[#010504] transition-all duration-200 hover:bg-[#e6f7ed] hover:shadow-[0_0_22px_rgba(88,199,114,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58c772] focus-visible:ring-offset-2 focus-visible:ring-offset-[#010504]"
            >
              Start a Project
            </button>

            {/* Secondary — dark outlined */}
            <button
              id="cta-schedule-call"
              type="button"
              className="group relative inline-flex h-[46px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-md border border-[#237f44]/80 bg-[rgba(6,20,13,0.60)] px-7 text-[13px] font-bold uppercase tracking-[0.06em] text-[#f0ece4] backdrop-blur-sm transition-all duration-200 hover:border-[#58c772]/80 hover:bg-[rgba(16,40,27,0.72)] hover:shadow-[0_0_18px_rgba(88,199,114,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58c772] focus-visible:ring-offset-2 focus-visible:ring-offset-[#010504]"
            >
              Schedule a Call
              <span className="flex items-center justify-center text-[#f0ece4]">
                <PhoneIcon />
              </span>
            </button>
          </div>
        </div>

        {/* Tag Pills */}
        <div className="mx-auto mt-16 grid w-full max-w-[1000px] grid-cols-1 items-center justify-center gap-y-3 sm:grid-cols-3 sm:gap-x-6">
          {CTA_TAGS.map((tag) => (
            <span
              key={tag}
              className="text-center text-[12px] font-bold uppercase tracking-[0.08em] text-[#06a74b]"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
        style={{
          background:
            'linear-gradient(0deg, rgba(1,5,4,1) 0%, rgba(1,5,4,0) 100%)',
        }}
      />
    </section>
  );
}
