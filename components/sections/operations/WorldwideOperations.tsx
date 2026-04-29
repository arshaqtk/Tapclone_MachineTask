import Image from 'next/image';
import { OPERATION_HIGHLIGHTS, OPERATION_MARKERS } from '@/data/operations';

interface WorldwideOperationsProps {
  mapImageSrc?: string;
}

function PinIcon() {
  return (
    <svg viewBox="0 0 18 22" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M9 20.25C9 20.25 15.35 13.68 15.35 8.7C15.35 5.19 12.51 2.35 9 2.35C5.49 2.35 2.65 5.19 2.65 8.7C2.65 13.68 9 20.25 9 20.25Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="8.75" r="2.35" stroke="currentColor" strokeWidth="1.45" />
    </svg>
  );
}

export default function WorldwideOperations({
  mapImageSrc,
}: WorldwideOperationsProps) {
  const resolvedMapImageSrc = mapImageSrc ?? '/operations-map-bg.jpg';

  return (
    <section className="relative isolate overflow-hidden bg-[#010504] px-6 pt-14 sm:px-8 md:py-16 lg:px-14 xl:px-[64px] xl:py-[72px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 52% 40% at 50% 46%, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 36%, rgba(1,5,4,0) 74%), linear-gradient(180deg, rgba(1,5,4,0.98) 0%, rgba(1,5,4,0.88) 46%, rgba(1,5,4,0.98) 100%)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(88,199,114,0)_0%,rgba(88,199,114,0.18)_28%,rgba(88,199,114,0.18)_72%,rgba(88,199,114,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(1,5,4,0)_0%,rgba(3,11,8,0.86)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[14px] font-bold uppercase tracking-[0.04em] text-[#237f44]">
            Global Outlook
          </p>
          <h2 className="mt-4 text-[32px] uppercase leading-[1.1] text-[#f0ece4] sm:text-[38px] md:text-[42px] font-display">
            Worldwide <span className="text-[#3d8f5f]">Operations</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.5] text-[#DAFFF1]/68 sm:text-[16px]">
            Operating from Dubai with strong operational ties across India,
            Africa, and other international markets, supporting projects and
            exports worldwide.
          </p>
        </div>

        <div className="relative mx-auto mt-7 h-[300px] w-full max-w-[1120px] overflow-visible sm:mt-8 sm:h-[360px] md:h-[410px] lg:h-[450px]">
          <div className="absolute left-1/2 top-1/2 aspect-[3/2] w-[min(1120px,130vw)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(1120px,118vw)] lg:w-full">
            <Image
              src={resolvedMapImageSrc}
              alt=""
              fill
              sizes="(min-width: 1280px) 1120px, calc(100vw - 48px)"
              className="object-contain object-center opacity-[0.26]"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_50%_52%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.015)_34%,rgba(1,5,4,0)_74%)]" />

            {OPERATION_MARKERS.map((marker) => (
              <div
                key={marker.country}
                className="absolute hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-[#DAFFF1]/72 md:flex"
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              >
                <span className="text-[#068a43] drop-shadow-[0_0_10px_rgba(34,197,94,0.52)]">
                  <PinIcon />
                </span>
                <span className="whitespace-nowrap text-[12px] font-semibold leading-none">
                  {marker.country}
                </span>
              </div>
            ))}
          </div>
        </div>

       <div className="relative z-10 -mt-8 grid grid-cols-1 place-items-center gap-5 md:-mt-12 md:grid-cols-3 md:gap-10 lg:gap-12">
  {OPERATION_HIGHLIGHTS.map((item) => (
    <article
  key={item.title}
  className="relative mt-[14px] flex h-[123px] w-[336px] flex-col items-center justify-center rounded-[15.65px] bg-[linear-gradient(180deg,rgba(18,34,25,0.72)_0%,rgba(8,20,15,0.78)_100%)] px-5 text-center backdrop-blur-md"
  style={{
    border: '1px solid transparent',
    backgroundClip: 'padding-box',
    backgroundImage: 'linear-gradient(180deg,rgba(18,34,25,0.72) 0%,rgba(8,20,15,0.78) 100%)',
    boxShadow: `
      inset 0 1px 0 rgba(88,199,114,0.55),
      inset 0 -1px 0 rgba(9,136,69,0.15),
      inset 1px 0 0 rgba(9,136,69,0.28),
      inset -1px 0 0 rgba(9,136,69,0.28),
      0 0 28px rgba(9,136,69,0.10)
    `,
  }}
>
  <h3 className="text-[14px] font-bold leading-[1.2] text-white">
    {item.title}
  </h3>
  <p className="mx-auto mt-2 max-w-[280px] text-[11px] leading-[1.18] text-[#DAFFF1]/62">
    {item.description}
  </p>
</article>
  ))}
</div>
      </div>
    </section>
  );
}
