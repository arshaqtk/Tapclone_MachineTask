import Image from 'next/image';
import { COMMITMENTS, PHILOSOPHY_POINTS } from '@/data/philosophy';
import { PhilosophyIconKey } from '@/types/philosophy';

interface EngineeringPhilosophyProps {
  backgroundSrc?: string;
}

function PhilosophyIcon({ icon }: { icon: PhilosophyIconKey }) {
  switch (icon) {
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
          <path
            d="M12 3.75L18.75 6.75V11.25C18.75 15.8324 15.6333 20.1184 12 21.25C8.36673 20.1184 5.25 15.8324 5.25 11.25V6.75L12 3.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9.25 12.25L11.1 14.1L14.75 10.45"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'users':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
          <path
            d="M8.25 10.5C9.90685 10.5 11.25 9.15685 11.25 7.5C11.25 5.84315 9.90685 4.5 8.25 4.5C6.59315 4.5 5.25 5.84315 5.25 7.5C5.25 9.15685 6.59315 10.5 8.25 10.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M15.75 12C17.1997 12 18.375 10.8247 18.375 9.375C18.375 7.92525 17.1997 6.75 15.75 6.75C14.3003 6.75 13.125 7.92525 13.125 9.375C13.125 10.8247 14.3003 12 15.75 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3.75 18.75C3.75 15.8505 6.1005 13.5 9 13.5H9.75C12.6495 13.5 15 15.8505 15 18.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15 14.25C17.2949 14.25 19.2213 15.8232 19.7589 17.9474"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'link':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
          <path
            d="M13.75 5.25L18.75 10.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.75 4.25L11.5 7.5C10.1193 8.88071 10.1193 11.1193 11.5 12.5C12.8807 13.8807 15.1193 13.8807 16.5 12.5L19.75 9.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.25 19.75L12.5 16.5C13.8807 15.1193 13.8807 12.8807 12.5 11.5C11.1193 10.1193 8.88071 10.1193 7.5 11.5L4.25 14.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
          <path
            d="M12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3.75 12H20.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 3.75C14.0672 6.01253 15.2416 8.95088 15.3038 12C15.2416 15.0491 14.0672 17.9875 12 20.25C9.93276 17.9875 8.75835 15.0491 8.69617 12C8.75835 8.95088 9.93276 6.01253 12 3.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function EngineeringPhilosophy({
  backgroundSrc,
}: EngineeringPhilosophyProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#020705]">
      {backgroundSrc ? (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={backgroundSrc}
            alt=""
            fill
            className="object-cover object-center opacity-55"
            sizes="100vw"
          />
        </div>
      ) : null}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,7,5,0.94) 0%, rgba(2,7,5,0.8) 24%, rgba(2,7,5,0.72) 58%, rgba(2,7,5,0.92) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 46% 42% at 60% 42%, rgba(28,108,54,0.24) 0%, rgba(11,42,23,0.18) 34%, rgba(0,0,0,0) 74%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(88,199,114,0)_0%,rgba(88,199,114,0.24)_18%,rgba(88,199,114,0.12)_50%,rgba(88,199,114,0)_100%)] xl:block"
      />
      <div
        className="pointer-events-none absolute inset-y-[14%] left-[53%] hidden w-[22%] rounded-full bg-[radial-gradient(circle,rgba(74,153,96,0.18)_0%,rgba(74,153,96,0.06)_38%,rgba(0,0,0,0)_72%)] blur-3xl lg:block"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-12 sm:px-8 md:py-14 lg:px-14 xl:px-[64px] xl:py-[52px]">
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,613px)_minmax(0,611px)] xl:justify-between xl:gap-[56px]">
          <div className="max-w-[613px]">
            <p
              className="mb-4 text-[15px] font-medium uppercase tracking-[0.04em] text-[#3d8f5f]"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Why Comacon
            </p>

            <h2
              className="max-w-[12ch] text-[36px] uppercase leading-[1.12] text-[#f0ece4] sm:text-[42px]"
              style={{ fontFamily: 'Eloran, serif', fontWeight: 400 }}
            >
              <span>Engineering-First</span>
              <span className="block text-[#3d8f5f]">Philosophy</span>
            </h2>

            <p
              className="mt-5 max-w-[560px] text-[16px] leading-[1.55] text-[#DAFFF1]/78"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Operating at the intersection of engineering, commerce, and
              technology, enabling clients to source, design, and deploy reliable
              systems across energy, infrastructure, automation, and
              sustainability domains.
            </p>

            <div className="mt-10 grid gap-x-7 gap-y-6 sm:grid-cols-2">
              {PHILOSOPHY_POINTS.map((point) => (
                <article key={point.title} className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-[#58c772]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(88,199,114,0.04)_100%)] text-[#5cca79] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
                  >
                    <PhilosophyIcon icon={point.icon} />
                  </div>

                  <div>
                    <h3
                      className="text-[24px] font-bold leading-[1.08] text-white sm:text-[26px]"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {point.title}
                    </h3>
                    <p
                      className="mt-2 max-w-[230px] text-[14px] leading-[1.32] text-[#DAFFF1]/56"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {point.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="xl:pt-[74px]">
            <div
              className="relative min-h-[340px] rounded-[12px] border border-white/12 px-6 py-6 sm:px-7 sm:py-7"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,22,16,0.72) 0%, rgba(6,14,10,0.86) 100%)',
                boxShadow:
                  '0 22px 54px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.1)',
                backdropFilter: 'blur(18px)',
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[12px]"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 22%, rgba(255,255,255,0) 100%)',
                }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-[40%] h-px bg-[linear-gradient(90deg,rgba(88,199,114,0)_0%,rgba(88,199,114,0.22)_18%,rgba(88,199,114,0.12)_50%,rgba(88,199,114,0.22)_82%,rgba(88,199,114,0)_100%)]"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-[18%] h-px bg-[linear-gradient(90deg,rgba(88,199,114,0)_0%,rgba(88,199,114,0.18)_18%,rgba(88,199,114,0.08)_50%,rgba(88,199,114,0.18)_82%,rgba(88,199,114,0)_100%)]"
              />

              <div className="relative z-10 flex h-full flex-col">
                <h3
                  className="text-[30px] uppercase leading-[1.16] text-[#f0ece4] sm:text-[34px]"
                  style={{ fontFamily: 'Eloran, serif', fontWeight: 400 }}
                >
                  <span>Our </span>
                  <span className="text-[#3d8f5f]">Commitment</span>
                </h3>

                <p
                  className="mt-3 max-w-[430px] text-[15px] leading-[1.55] text-[#DAFFF1]/72"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  We are committed to delivering measurable value through every
                  engagement.
                </p>

                <ul className="mt-6 space-y-3">
                  {COMMITMENTS.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[14px] text-[#DAFFF1]/78"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <span className="h-0 w-0 border-b-[8px] border-l-[13px] border-t-[8px] border-b-transparent border-l-[#198c43] border-t-transparent drop-shadow-[0_0_8px_rgba(25,140,67,0.42)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <div className="h-px w-full bg-[linear-gradient(90deg,rgba(88,199,114,0)_0%,rgba(88,199,114,0.24)_14%,rgba(88,199,114,0.12)_50%,rgba(88,199,114,0.24)_86%,rgba(88,199,114,0)_100%)]" />
                  <p
                    className="pt-4 text-[14px] leading-[1.45] text-[#74d490]/92"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Strong backing from Udot&apos;s R&D and technology ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
