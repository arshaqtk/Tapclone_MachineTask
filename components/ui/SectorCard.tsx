import { Sector } from '@/types/sector';

interface SectorCardProps {
  sector: Sector;
}

export default function SectorCard({ sector }: SectorCardProps) {
  return (
    <article
      className={[
        'group relative flex min-h-[196px] flex-col rounded-[14px] border px-5 py-5',
        'backdrop-blur-md transition-transform duration-300 hover:-translate-y-1',
        sector.accent ? 'border-[#3d8f5f]/45' : 'border-white/10',
      ].join(' ')}
      style={{
        background: sector.accent
          ? 'linear-gradient(180deg, rgba(39,95,60,0.32) 0%, rgba(8,18,14,0.92) 100%)'
          : 'linear-gradient(180deg, rgba(10,16,20,0.84) 0%, rgba(5,11,14,0.96) 100%)',
        boxShadow: sector.accent
          ? '0 20px 40px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 18px 36px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)',
        }}
      />

      <div
        className={[
          'mb-6 inline-flex h-7 w-7 items-center justify-center rounded-[6px] border text-[11px] font-semibold',
          sector.accent
            ? 'border-[#46b16f]/55 text-[#79d695]'
            : 'border-white/12 text-white/75',
        ].join(' ')}
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {sector.number}
      </div>

      <h3
        className="mb-4 max-w-[11ch] text-[22px] font-bold leading-[1.15] text-white"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {sector.title}
      </h3>

      <p
        className="max-w-[22ch] text-[14px] leading-[1.35] text-[#DAFFF1]/58"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {sector.description}
      </p>
    </article>
  );
}
