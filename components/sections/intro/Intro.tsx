interface WhatWeDoProps {
  eyebrow?: string;
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
}

export default function WhatWeDo({
  eyebrow = "WHAT WE DO",
  headingLine1 = "YOUR SINGLE-WINDOW PARTNER FOR",
  headingLine2 = "GLOBAL SOLUTIONS",
  description = "ABC Technologies LLC operates as a single-window partner for global clients seeking reliable sourcing, technical expertise, and deployment of advanced engineering and technology solutions.",
}: WhatWeDoProps) {
  return (
    <section className="relative w-full overflow-hidden bg-transparent px-20 py-[72px]">
      <div className="relative z-10 flex max-w-[820px] flex-col gap-5">
        {/* Eyebrow tag */}
        <div className="inline-flex self-start">
          <span
            className="px-4 py-2 text-[#3d8f5f] font-['Nunito_Sans'] font-medium text-[20px] leading-[100%] uppercase tracking-normal"

          >
            {eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h2 className="m-0 flex flex-col">
          <span className="font-['Eloran'] font-normal text-[40px] leading-[135%] tracking-normal uppercase text-[#f0ece4]">
            {headingLine1}
          </span>
          <span className="font-['Eloran'] font-normal text-[40px] leading-[135%] tracking-normal uppercase text-[#3d8f5f]">
            {headingLine2}
          </span>
        </h2>

        {/* Description */}
        <p className="m-0 max-w-[680px] font-['Nunito_Sans'] font-normal text-[18px] leading-[135%] tracking-normal text-[#DAFFF1]/80">
          {description}
        </p>
      </div>
    </section>
  );
}
