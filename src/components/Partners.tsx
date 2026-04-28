import { useState, useEffect } from "react";

type Partner = {
  naam: string;
  detail: string;
  foto: string | null;
};

type FlesItem = {
  naam: string;
  foto: string;
};

const wijnOpMaatSfeer: Partner[] = [
  { naam: "Lustrum RSC/RVSV 2024 FIER", detail: "", foto: "/Images/Wijn op maat/rsc-lustrum.jpg" },
  { naam: "Lustrum Vindicat 2025", detail: "", foto: "/Images/Wijn op maat/Vindicat-lustrum1.jpg" },
  { naam: "Lustrum Vindicat 2025", detail: "", foto: "/Images/Wijn op maat/Vindicat-lustrum2.jpg" },
];

const wijnOpMaatFlessen: FlesItem[] = [
  { naam: "Lustrum RSC/RVSV 2024 FIER", foto: "/Images/Wijn op maat/Lustrum-rsc2.jpg" },
  { naam: "Lustrum Vindicat 2025", foto: "/Images/Wijn op maat/Lustrum-vindicat3.jpg" },
  { naam: "Lustrum Ceres 2023", foto: "/Images/Wijn op maat/Lustrum-ceres.jpg" },
];

const leveranciers: Partner[] = [
  { naam: "Weingut August Eser", detail: "Rheingau, Duitsland", foto: "/Images/Leveranciers/August eser.png" },
  { naam: "Domaine JanotsBos", detail: "Meursault, Bourgogne", foto: "/Images/Leveranciers/janotsbos.jpg" },
  { naam: "Dubos", detail: "Bordeaux, Frankrijk", foto: "/Images/Leveranciers/dubos-bordeaux.jpg" },
  { naam: "Bodegas Valduero", detail: "Ribera del Duero, Spanje", foto: "/Images/Leveranciers/logo valduero.png" },
];

const frameClass = "p-2.5 bg-[#5A1A2B] rounded-lg shadow-[0_12px_40px_rgba(90,26,43,0.18)]";

const Lightbox = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

const SfeerCard = ({ partner, onOpen }: { partner: Partner; onOpen: (src: string, alt: string) => void }) => (
  <div className="group flex flex-col">
    <div className={`${frameClass} mb-4 cursor-zoom-in`} onClick={() => partner.foto && onOpen(partner.foto, partner.naam)}>
      <div className="aspect-[3/2] overflow-hidden rounded-sm">
        {partner.foto && (
          <img
            src={partner.foto}
            alt={partner.naam}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            loading="lazy"
          />
        )}
      </div>
    </div>
    <p className="text-xl font-light text-foreground/85 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {partner.naam}
    </p>
  </div>
);

const FlesCard = ({ item, onOpen }: { item: FlesItem; onOpen: (src: string, alt: string) => void }) => (
  <div className="group flex flex-col">
    <div className={`${frameClass} mb-4 cursor-zoom-in`} onClick={() => onOpen(item.foto, item.naam)}>
      <div className="aspect-[2/3] overflow-hidden rounded-sm flex items-center justify-center bg-[#5A1A2B]">
        <img
          src={item.foto}
          alt={item.naam}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
    <p className="text-base font-light text-foreground/85 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {item.naam}
    </p>
  </div>
);

const PartnerCard = ({ partner, onOpen }: { partner: Partner; onOpen: (src: string, alt: string) => void }) => (
  <div className="group flex flex-col">
    <div className={`${frameClass} mb-5 ${partner.foto ? "cursor-zoom-in" : ""}`} onClick={() => partner.foto && onOpen(partner.foto, partner.naam)}>
      <div className="aspect-[4/3] overflow-hidden rounded-sm">
        {partner.foto ? (
          <img
            src={partner.foto}
            alt={partner.naam}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#F5F1EA]">
            <span className="text-xs text-foreground/30 text-center px-4">[ONTBREEKT: logo]</span>
          </div>
        )}
      </div>
    </div>
    <p className="text-xl font-light text-foreground/85 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {partner.naam}
    </p>
    <p className="text-sm text-foreground/45 mt-1">{partner.detail}</p>
  </div>
);

const SectieKop = ({ titel }: { titel: string }) => (
  <div className="fade-in mb-10">
    <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">{titel}</h2>
  </div>
);

const Divider = () => (
  <div className="max-w-xs mx-auto flex items-center gap-4 my-16">
    <div className="flex-1 h-px bg-primary/15" />
    <span className="text-primary/30 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>✦</span>
    <div className="flex-1 h-px bg-primary/15" />
  </div>
);

const Partners = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const open = (src: string, alt: string) => setLightbox({ src, alt });
  const close = () => setLightbox(null);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Wijn op maat */}
        <SectieKop titel="Wijn op maat" />

        <div className="fade-in grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {wijnOpMaatSfeer.map((partner, i) => (
            <SfeerCard key={i} partner={partner} onOpen={open} />
          ))}
        </div>

        <div className="my-10 h-px bg-primary/15" />

        <div className="fade-in grid grid-cols-3 gap-5 md:gap-8 max-w-2xl mx-auto">
          {wijnOpMaatFlessen.map((item, i) => (
            <FlesCard key={i} item={item} onOpen={open} />
          ))}
        </div>

        <Divider />

        {/* Leveranciers */}
        <SectieKop titel="Leveranciers" />
        <div className="fade-in grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {leveranciers.map((partner) => (
            <PartnerCard key={partner.naam} partner={partner} onOpen={open} />
          ))}
        </div>

      </div>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={close} />}
    </section>
  );
};

export default Partners;
