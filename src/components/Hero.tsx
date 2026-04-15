const Hero = () => {
  return (
    <section className="grid md:grid-cols-5 min-h-screen">

      {/* Links — bordeaux, 40% */}
      <div className="md:col-span-2 bg-[#5A1A2B] flex flex-col items-center justify-between py-16 px-10 text-center">

        {/* Logo bovenin bordeaux */}
        <img
          src="/logo-new.png"
          alt="Wijnen 't Sticht"
          className="h-44 w-auto object-contain"
        />

        {/* Contact gecentreerd */}
        <div className="flex flex-col items-center gap-8">
        <div className="w-10 h-px bg-[#F5F1EA]/25" />
        <div className="space-y-5">
          <p
            className="text-sm tracking-[0.3em] uppercase text-[#F5F1EA]/60"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Interesse in een wijn?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block text-4xl md:text-5xl font-light text-[#F5F1EA] hover:text-[#F5F1EA]/70 transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "-0.01em" }}
          >
            Neem contact op
          </a>
        </div>
        <div className="w-10 h-px bg-[#F5F1EA]/25" />
        </div>

        <div /> {/* spacer onderaan */}

      </div>

      {/* Rechts — crème, 60% */}
      <div className="md:col-span-3 bg-[#F5F1EA] flex flex-col justify-between py-16 px-10 md:px-16">

        {/* Eyebrow */}
        <p
          className="text-sm tracking-[0.3em] uppercase text-foreground/60"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Wijnhandel · Zeist · Sinds 2014
        </p>

        {/* Heading */}
        <h1
          className="font-light text-primary"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(5rem, 13vw, 16rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Wijnen<br />'t Sticht
        </h1>

        {/* Tagline */}
        <p
          className="text-base text-foreground/60 leading-relaxed max-w-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Directe import van kwaliteitswijnen uit Frankrijk, Duitsland, Italië, Spanje en Zuid-Afrika.
        </p>

      </div>

    </section>
  );
};

export default Hero;
