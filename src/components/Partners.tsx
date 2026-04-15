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
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide mb-4">
            Onze leveranciers
          </h2>
          <p className="text-base text-foreground/70 max-w-xl mx-auto">
            Enkele voorbeelden van de producenten waarmee wij samenwerken.
          </p>
        </div>

        <div className="fade-in grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
          {leveranciers.map((l) => (
            <a
              key={l.naam}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center space-y-3 p-6 transition-all"
            >
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                <span className="text-2xl font-semibold text-primary/60 group-hover:text-primary transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {l.naam.charAt(l.naam.indexOf(" ") + 1) || l.naam.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                {l.naam}
              </span>
              <span className="text-xs text-foreground/50">{l.land}</span>
            </a>
          ))}
        </div>

        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide mb-4">
            Samenwerkingen
          </h2>
          <p className="text-base text-foreground/70 max-w-xl mx-auto">
            Behalve met onze leveranciers werken wij ook langjarig intensief samen met veel clubs en horeca. Ook zijn wij huisleverancier bij veel evenementen.
          </p>
        </div>

        <div className="fade-in grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {samenwerkingen.map((s) => (
            <a
              key={s.naam}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-8 border border-border hover:border-primary/30 transition-all"
            >
              <span className="text-lg font-light text-foreground/70 group-hover:text-primary transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
