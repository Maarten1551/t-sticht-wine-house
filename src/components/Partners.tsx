import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allPartners = [
  { naam: "Weingut August Eser", url: "https://www.weingut-august-eser.de", detail: "Rheingau, Duitsland" },
  { naam: "Domaine JanotsBos", url: "https://www.janotsbos.com", detail: "Meursault, Bourgogne" },
  { naam: "Dubos", url: "https://www.dubos.fr", detail: "Bordeaux, Frankrijk" },
  { naam: "Bodegas Valduero", url: "https://www.valduero.com", detail: "Ribera del Duero, Spanje" },
  { naam: "Lustrum RSC/RVSV 2024", url: "https://lustrumrscrvsc.nl", detail: "Samenwerking" },
  { naam: "Lustrum Vindicat 2025", url: "https://www.vindicat.nl", detail: "Samenwerking" },
];

const Partners = () => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? allPartners.length - 1 : c - 1)), []);
  const next = useCallback(() => setCurrent((c) => (c === allPartners.length - 1 ? 0 : c + 1)), []);

  const getIndex = (offset: number) => (current + offset) % allPartners.length;

  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide mb-3">
            Partners &amp; leveranciers
          </h2>
          <p className="text-sm text-foreground/50 max-w-md mx-auto leading-relaxed">
            Producenten en organisaties waarmee wij samenwerken.
          </p>
        </div>

        <div className="fade-in flex items-center justify-center gap-6 md:gap-10">
          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 flex items-center justify-center text-primary/30 hover:text-primary transition-colors"
            aria-label="Vorige"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-8 md:gap-14">
            {[0, 1, 2].map((offset) => {
              const idx = getIndex(offset);
              const partner = allPartners[idx];
              const isCenter = offset === 1;
              return (
                <a
                  key={`${idx}-${offset}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center text-center transition-all duration-300 ${
                    isCenter ? "opacity-100 scale-100" : "opacity-40 scale-90 hidden md:flex"
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-400 mb-3">
                    <span
                      className="text-xl font-semibold text-primary/50 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {partner.naam.split(" ").pop()?.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-foreground/75 group-hover:text-primary transition-colors whitespace-nowrap">
                    {partner.naam}
                  </span>
                  <span className="text-xs text-foreground/35 mt-1">{partner.detail}</span>
                </a>
              );
            })}
          </div>

          <button
            onClick={next}
            className="shrink-0 w-10 h-10 flex items-center justify-center text-primary/30 hover:text-primary transition-colors"
            aria-label="Volgende"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {allPartners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary/40 w-5" : "bg-primary/12 w-1.5"
              }`}
              aria-label={`Partner ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
