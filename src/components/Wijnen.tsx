const wijnen = [
  { naam: "Mooie droge Riesling", regio: "Rheingau", prijs: "€ 14,95", foto: "/Images/wijnen/riesling-rheingau.png" },
  { naam: "Valduero Una Cepa", regio: "Ribera del Duero", prijs: "€ 29,95", foto: "/Images/wijnen/valduero-una-cepa.png" },
];

const Wijnen = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xs mx-auto flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-primary/15" />
          <span className="text-primary/30 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>✦</span>
          <div className="flex-1 h-px bg-primary/15" />
        </div>

        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">
            Een selectie uit ons assortiment
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {wijnen.map((wijn) => (
            <div key={wijn.naam} className="fade-in group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-[0_8px_30px_rgba(90,26,43,0.10)] mb-4">
                <img
                  src={wijn.foto}
                  alt={wijn.naam}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-light text-foreground tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {wijn.naam}
              </h3>
              <p className="text-xs text-foreground/45 mt-1">{wijn.regio}</p>
              {wijn.prijs && (
                <p className="text-sm text-primary/70 mt-1.5">{wijn.prijs}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wijnen;
