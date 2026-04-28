import Image from 'next/image';
import { ReactNode } from 'react';

interface SharedBackgroundSectionProps {
  children: ReactNode;
  imageSrc?: string;
}

export default function SharedBackgroundSection({
  children,
  imageSrc,
}: SharedBackgroundSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#030806]">
      {imageSrc ? (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            priority={false}
            className="object-cover object-[center_26%] opacity-70"
            sizes="100vw"
          />
        </div>
      ) : null}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,9,6,0.82) 0%, rgba(2,9,6,0.5) 18%, rgba(2,9,6,0.34) 52%, rgba(2,9,6,0.74) 78%, rgba(2,9,6,0.9) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 62% 34% at 50% 44%, rgba(98,255,146,0.14) 0%, rgba(31,98,53,0.08) 28%, rgba(0,0,0,0) 72%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
        style={{
          background:
            'linear-gradient(180deg, rgba(67,193,115,0) 0%, rgba(67,193,115,0.1) 42%, rgba(67,193,115,0.18) 100%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
