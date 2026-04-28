export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,_#04090D_0%,_rgba(4,9,13,0.97)_18%,_rgba(4,9,13,0.88)_38%,_rgba(4,9,13,0.56)_60%,_rgba(4,9,13,0.14)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(4,9,13,0.1)_0%,_rgba(4,9,13,0.18)_58%,_rgba(4,9,13,0.78)_100%)]" />

      <div className="absolute bottom-0 left-0 h-[250px] w-full bg-[linear-gradient(180deg,_transparent_0%,_#080D11_100%)]" />

      <div className="absolute top-0 left-0 h-[120px] w-full bg-[linear-gradient(180deg,_#04090D_0%,_transparent_100%)]" />
    </>
  );
}
