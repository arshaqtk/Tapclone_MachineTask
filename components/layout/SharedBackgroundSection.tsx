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
            className="object-cover object-[center_70%] opacity-50"
            sizes="100vw"
          />
        </div>
      ) : null}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,9,6,0.4) 0%, rgba(2,9,6,0.1) 18%, rgba(2,9,6,0.05) 52%, rgba(2,9,6,0.3) 78%, rgba(2,9,6,0.8) 100%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
