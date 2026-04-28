import HeroButtons from "./HeroButtons";

const HERO_DATA = {
  whiteText: "Global Trading &",
  greenText: "Intelligent\nInfrastructure Solutions",
  description:
    "Delivering engineered commodities, technical consulting, and advanced technology solutions across energy, infrastructure, automation, and sustainability sectors worldwide.",
};

export default function HeroContent() {
  return (
    <div className="mx-auto w-full max-w-[1680px] px-[clamp(20px,3.5vw,65px)] pt-[clamp(20px,3vw,36px)] pb-[clamp(32px,5vw,88px)]">
      <div className="flex max-w-[920px] flex-col gap-[26px]">
        <h1 className="m-0 font-[Eloran,serif] font-normal uppercase">
          <span className="block bg-[linear-gradient(180deg,_#ffffff_0%,_rgba(255,255,255,0.86)_100%)] bg-clip-text text-[clamp(34px,4.4vw,68px)] leading-[1.04] text-transparent [-webkit-text-fill-color:transparent]">
            {HERO_DATA.whiteText}
          </span>
          <span className="block max-w-[900px] whitespace-pre-line bg-[linear-gradient(180deg,_#6ba567_0%,_#4d814f_58%,_#3f6f43_100%)] bg-clip-text text-[clamp(26px,3.4vw,50px)] font-light leading-[1.06] text-transparent [-webkit-text-fill-color:transparent]">
            {HERO_DATA.greenText}
          </span>
        </h1>

        <p className="m-0 max-w-[720px] [font-family:var(--font-nunito-sans)] text-[clamp(15px,1.12vw,17px)] font-normal leading-[1.5] text-[#9ca3af]">
          {HERO_DATA.description}
        </p>

        <HeroButtons />
      </div>
    </div>
  );
}
