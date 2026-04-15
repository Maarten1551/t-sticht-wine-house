import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-center px-8 md:px-12 py-8">
        <button
          onClick={scrollToContact}
          className="px-7 py-2.5 rounded-full border border-[#F5F1EA]/25 text-[#F5F1EA]/80 hover:text-[#F5F1EA] hover:border-[#F5F1EA]/50 text-xs tracking-[0.2em] uppercase transition-all duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Neem contact op
        </button>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-6 flex items-center justify-center gap-6">
          <div className="w-16 h-px bg-[#F5F1EA]/30" />
          <span className="text-[#F5F1EA]/50 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Wijnhandel
          </span>
          <div className="w-16 h-px bg-[#F5F1EA]/30" />
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-[#F5F1EA] mb-5">
          Wijnen 't Sticht
        </h1>
        <p className="text-base md:text-lg font-light tracking-[0.2em] uppercase text-[#F5F1EA]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
          Sinds 2014
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-10 z-10 text-[#F5F1EA]/40 hover:text-[#F5F1EA]/70 transition-colors"
        aria-label="Scroll naar beneden"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
