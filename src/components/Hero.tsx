import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-[#F5F1EA] mb-6">
          Wijnen 't Sticht
        </h1>
        <p className="text-lg md:text-xl font-light tracking-widest uppercase text-[#F5F1EA]/80" style={{ fontFamily: "'Inter', sans-serif" }}>
          Wijnhandel in Zeist — sinds 2014
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-10 z-10 text-[#F5F1EA]/60 hover:text-[#F5F1EA] transition-colors animate-bounce"
        aria-label="Scroll naar beneden"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
