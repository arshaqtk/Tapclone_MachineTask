import SectorCard from '@/components/ui/SectorCard';
import { SECTORS_DATA } from '@/data/sectors';

export default function SectorsSection() {
  return (
    <section className="relative w-full bg-transparent px-4 pb-24 pt-8 sm:px-6 md:pt-10 lg:px-8 lg:pb-28 lg:pt-12">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="uppercase"
            style={{
              fontFamily: 'Eloran, serif',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 400,
              lineHeight: '120%',
              letterSpacing: '0.04em',
            }}
          >
            <span className="text-white">SECTORS </span>
            <span style={{ color: '#4a9960' }}>WE SERVE</span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl text-[#DAFFF1]/68"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '16px',
              lineHeight: '155%',
            }}
          >
            Our expertise spans across critical sectors, delivering tailored solutions
            that drive efficiency and sustainability.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-[18px]">
          {SECTORS_DATA.map((sector) => (
            <SectorCard key={sector.id} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
}
