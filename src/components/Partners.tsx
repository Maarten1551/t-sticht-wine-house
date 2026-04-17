import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Partner = {
  naam: string;
  detail: string;
  foto: string;
};

const partners: Partner[] = [
  { naam: "Weingut August Eser", detail: "Rheingau, Duitsland", foto: "/Images/partners/weingut-august-eser.jpg" },
  { naam: "Domaine JanotsBos", detail: "Meursault, Bourgogne", foto: "/Images/partners/janotsbos.jpg" },
  { naam: "Dubos", detail: "Bordeaux, Frankrijk", foto: "/Images/partners/dubos-bordeaux.jpg" },
  { naam: "Piandimare", detail: "Italië", foto: "/Images/partners/piandimare.jpg" },
  { naam: "Magali Rosé", detail: "Provence, Frankrijk", foto: "/Images/partners/magali-rose-provence.jpg" },
  { naam: "Lustrum RSC/RVSV 2024", detail: "Samenwerking", foto: "/Images/partners/rsc-lustrum.jpg" },
];

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <div className="group flex flex-col">
    <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-[0_8px_30px_rgba(90,26,43,0.12)] mb-5">
      <img
        src={partner.foto}
        alt={partner.naam}
        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        loading="lazy"
      />
    </div>
    <p
      className="text-xl font-light text-foreground/85 leading-snug"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {partner.naam}
    </p>
    <p className="text-sm text-foreground/45 mt-1">{partner.detail}</p>
  </div>
);

const Partners = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((newIdx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(newIdx);
      setFading(false);
    }, 250);
  }, []);

  const prev = useCallback(() => goTo((current - 1 + partners.length) % partners.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % partners.length), [current, goTo]);

  const indices = [0, 1, 2].map((offset) => (current + offset) % partners.length);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="fade-in text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide mb-3">
            Partners &amp; leveranciers
          </h2>
          <p className="text-sm text-foreground/50 max-w-md mx-auto leading-relaxed">
            Producenten en organisaties waarmee wij samenwerken.
          </p>
        </div>

        <div className="fade-in flex items-center gap-3 md:gap-8">
          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-primary/40 hover:text-primary hover:border-primary/40 transition-all duration-300"
            aria-label="Vorige"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            className="flex-1"
            style={{ opacity: fading ? 0 : 1, transition: "opacity 250ms ease-in-out" }}
          >
            {/* Mobiel: alleen actieve kaart */}
            <div className="sm:hidden">
              <PartnerCard partner={partners[current]} />
            </div>
            {/* Desktop: 3 kaarten */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-5 md:gap-8">
              {indices.map((idx, pos) => (
                <div
                  key={`${idx}-${pos}`}
                  style={{ opacity: pos === 1 ? 1 : 0.55, transition: "opacity 400ms ease-in-out" }}
                >
                  <PartnerCard partner={partners[idx]} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-primary/40 hover:text-primary hover:border-primary/40 transition-all duration-300"
            aria-label="Volgende"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "bg-primary/50 w-6" : "bg-primary/15 w-1.5"
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
