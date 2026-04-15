const wijnen = [
  { naam: "Riesling Kabinett", regio: "Rheingau", foto: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?auto=format&fit=crop&w=600&q=80" },
  { naam: "Meursault Blanc", regio: "Bourgogne", foto: "https://images.unsplash.com/photo-1566995541428-f4e246f4bbd6?auto=format&fit=crop&w=600&q=80" },
  { naam: "Bordeaux Supérieur", regio: "Bordeaux", foto: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=600&q=80" },
  { naam: "Barolo DOCG", regio: "Piemonte", foto: "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=600&q=80" },
  { naam: "Ribera del Duero Reserva", regio: "Ribera del Duero", foto: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" },
  { naam: "Chenin Blanc", regio: "West-Kaap", foto: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=600&q=80" },
];

const Wijnen = () => {
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
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">
            Een selectie uit ons assortiment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {wijnen.map((wijn) => (
            <div key={wijn.naam} className="fade-in group">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-5">
                <img
                  src={wijn.foto}
                  alt={wijn.naam}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-light text-foreground tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {wijn.naam}
              </h3>
              <p className="text-sm text-foreground/45 mt-1.5">{wijn.regio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wijnen;
