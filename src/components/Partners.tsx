const leveranciers = [
  { naam: "Weingut August Eser", url: "https://www.weingut-august-eser.de", land: "Rheingau, Duitsland" },
  { naam: "Domaine JanotsBos", url: "https://www.janotsbos.com", land: "Meursault, Bourgogne" },
  { naam: "Dubos", url: "https://www.dubos.fr", land: "Bordeaux, Frankrijk" },
  { naam: "Bodegas Valduero", url: "https://www.valduero.com", land: "Ribera del Duero, Spanje" },
];

const samenwerkingen = [
  { naam: "Lustrum RSC/RVSV 2024", url: "https://lustrumrscrvsc.nl" },
  { naam: "Lustrum Vindicat 2025", url: "https://www.vindicat.nl" },
];

const Partners = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Decorative divider */}
        <div className="max-w-xs mx-auto flex items-center gap-4 mb-20">
          <div className="flex-1 h-px bg-primary/15" />
          <span className="text-primary/30 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>✦</span>
          <div className="flex-1 h-px bg-primary/15" />
        </div>

        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide mb-6">
            Onze leveranciers
          </h2>
          <p className="text-base text-foreground/60 max-w-lg mx-auto leading-relaxed">
            Enkele voorbeelden van de producenten waarmee wij samenwerken.
          </p>
        </div>

        <div className="fade-in grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-28">
          {leveranciers.map((l) => (
            <a
              key={l.naam}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center space-y-4 py-8 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-500">
                <span className="text-2xl font-semibold text-primary/50 group-hover:text-primary transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {l.naam.split(" ").pop()?.charAt(0)}
                </span>
              </div>
              <div>
                <span className="text-sm text-foreground/75 group-hover:text-primary transition-colors block">
                  {l.naam}
                </span>
                <span className="text-xs text-foreground/40 mt-1 block">{l.land}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide mb-6">
            Samenwerkingen
          </h2>
          <p className="text-base text-foreground/60 max-w-lg mx-auto leading-relaxed">
            Behalve met onze leveranciers werken wij ook langjarig intensief samen met veel clubs en horeca. Ook zijn wij huisleverancier bij veel evenementen.
          </p>
        </div>

        <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          {samenwerkingen.map((s) => (
            <a
              key={s.naam}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-6 hover:text-primary transition-colors"
            >
              <span className="text-lg font-light text-foreground/60 group-hover:text-primary transition-colors border-b border-transparent group-hover:border-primary/30 pb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {s.naam}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
