export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,_#04090D_0%,_#04090D_35%,_rgba(4,9,13,0.92)_50%,_rgba(4,9,13,0.55)_68%,_rgba(4,9,13,0.1)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(4,9,13,0.15)_0%,_rgba(4,9,13,0.1)_50%,_rgba(4,9,13,0.8)_100%)]" />

      <div className="absolute bottom-0 left-0 h-[250px] w-full bg-[linear-gradient(180deg,_transparent_0%,_#080D11_100%)]" />

      <div className="absolute top-0 left-0 h-[120px] w-full bg-[linear-gradient(180deg,_#04090D_0%,_transparent_100%)]" />
    </>
  );
}
