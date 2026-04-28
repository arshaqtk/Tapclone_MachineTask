import { Sector } from '@/types/sector';

interface SectorCardProps {
  sector: Sector;
}

export default function SectorCard({ sector }: SectorCardProps) {
  return (
    <article
      className="group relative flex min-h-[196px] flex-col rounded-[14px] border border-white/10 px-5 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#3d8f5f]/45 focus-within:-translate-y-1 focus-within:border-[#3d8f5f]/45"
      style={{
        background:
          'linear-gradient(180deg, rgba(10,16,20,0.84) 0%, rgba(5,11,14,0.96) 100%)',
        boxShadow: '0 18px 36px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{
          background:
            'linear-gradient(180deg, rgba(39,95,60,0.32) 0%, rgba(8,18,14,0.92) 100%)',
          boxShadow:
            '0 20px 40px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)',
        }}
      />

      <div
        className="relative z-10 mb-6 inline-flex h-7 w-7 items-center justify-center rounded-[6px] border border-white/12 text-[11px] font-semibold text-white/75 transition-colors duration-300 group-hover:border-[#46b16f]/55 group-hover:text-[#79d695] group-focus-within:border-[#46b16f]/55 group-focus-within:text-[#79d695]"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {sector.number}
      </div>

      <h3
        className="relative z-10 mb-4 max-w-[11ch] text-[22px] font-bold leading-[1.15] text-white"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {sector.title}
      </h3>

      <p
        className="relative z-10 max-w-[22ch] text-[14px] leading-[1.35] text-[#DAFFF1]/58"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {sector.description}
      </p>
    </article>
  );
}
