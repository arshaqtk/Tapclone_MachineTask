import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContents";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-[70px] sm:pt-[85px] lg:pt-[116px]">
      <HeroBackground />
      <div className="relative z-10 flex min-h-[calc(100vh-70px)] items-center sm:min-h-[calc(100vh-85px)] lg:min-h-[calc(100vh-116px)]">
        <HeroContent />
      </div>
    </section>
  );
}
