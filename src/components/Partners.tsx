import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const allPartners = [
  ...leveranciers.map((l) => ({ ...l, type: "leverancier" as const })),
  ...samenwerkingen.map((s) => ({ ...s, land: "Nederland", type: "samenwerking" as const })),
];

const Partners = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, allPartners.length - visibleCount);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(maxIndex, c + 1)), [maxIndex]);

  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide mb-3">
            Partners &amp; leveranciers
          </h2>
          <p className="text-sm text-foreground/50 max-w-md mx-auto leading-relaxed">
            Producenten en organisaties waarmee wij samenwerken.
          </p>
        </div>

        <div className="fade-in relative flex items-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="shrink-0 w-10 h-10 flex items-center justify-center text-primary/40 hover:text-primary disabled:opacity-20 transition-colors"
            aria-label="Vorige"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
              {allPartners.map((p) => (
                <a
                  key={p.naam}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group shrink-0 flex flex-col items-center text-center px-4 py-6"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-400 mb-3">
                    <span
                      className="text-xl font-semibold text-primary/40 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {p.naam.split(" ").pop()?.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-foreground/70 group-hover:text-primary transition-colors">
                    {p.naam}
                  </span>
                  <span className="text-xs text-foreground/35 mt-1">{p.land}</span>
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="shrink-0 w-10 h-10 flex items-center justify-center text-primary/40 hover:text-primary disabled:opacity-20 transition-colors"
            aria-label="Volgende"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current ? "bg-primary/50 w-4" : "bg-primary/15"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
