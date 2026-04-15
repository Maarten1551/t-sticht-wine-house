const OverOns = () => {
  return (
    <section className="px-6">
      {/* Over Wijnen 't Sticht */}
      <div className="fade-in max-w-6xl mx-auto py-16 md:py-24 grid md:grid-cols-5 gap-10 md:gap-16 items-center">
        <div className="md:col-span-2">
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Eigenaar Wijnen 't Sticht"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-5">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">
            Over Wijnen 't Sticht
          </h2>
          <p className="text-base leading-[1.8] text-foreground/80">
            Wijnen 't Sticht bestaat sinds februari 2014. Begonnen als franchise van Sauter Wijnen uit Maastricht/Cadier en Keer (de volledige naam was toen Sauter Wijnen Het Sticht) staat het bedrijf nu sinds medio 2026 volledig op eigen benen. Waar wij aanvankelijk de expertise en het productaanbod van Sauter nodig hadden, hebben wij in de loop der jaren zelf intrinsieke kennis opgebouwd en met veel "eigen" producenten/wijngoederen exclusieve relaties opgebouwd.
          </p>
          <p className="text-base leading-[1.8] text-foreground/80">
            Directe wijnimport (eigen accijnsnummer) beslaat nu het leeuwendeel van onze business.
          </p>
        </div>
      </div>

      <div className="max-w-xs mx-auto flex items-center gap-4">
        <div className="flex-1 h-px bg-primary/15" />
        <span className="text-primary/30 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>✦</span>
        <div className="flex-1 h-px bg-primary/15" />
      </div>

      {/* Passie & expertise */}
      <div className="fade-in max-w-6xl mx-auto py-16 md:py-24 grid md:grid-cols-5 gap-10 md:gap-16 items-center">
        <div className="md:col-span-3 space-y-5 md:order-1">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">
            Passie &amp; expertise
          </h2>
          <p className="text-base leading-[1.8] text-foreground/80">
            Passie voor wijnen gaat bij ons gepaard met opgebouwde expertise. Wij verkopen een wijn alleen als wij daar geheel achter staan! Al onze wijnen zijn uitvoerig doorgeproefd en hebben wij zelf gedronken. Stuk voor stuk. Wij zoeken - veelal kleinere - producenten uit die wij waarderen om hun vakmanschap, loyaliteit en beproefde langdurige samenwerking.
          </p>
        </div>
        <div className="md:col-span-2 md:order-2">
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=800&q=80"
              alt="Wijnproeverij"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="max-w-xs mx-auto flex items-center gap-4">
        <div className="flex-1 h-px bg-primary/15" />
        <span className="text-primary/30 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>✦</span>
        <div className="flex-1 h-px bg-primary/15" />
      </div>

      {/* Eigen directe import */}
      <div className="fade-in max-w-6xl mx-auto py-16 md:py-24 grid md:grid-cols-5 gap-10 md:gap-16 items-center">
        <div className="md:col-span-2">
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
              alt="Wijnkelder"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-5">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">
            Eigen directe import
          </h2>
          <p className="text-base leading-[1.8] text-foreground/80">
            Als gezegd werken wij hoofdzakelijk met kleinere producenten. Het betreft veelal familiebedrijven die - generaties lang - vanuit de ouders op de kinderen vererven. Wij importeren direct vanuit Frankrijk (Bourgogne, Bordeaux en Champagne), Duitsland (Rheingau en Baden), Italië (Piemonte, Veneto, Marken, Puglia), Spanje (Ribera en Toro) en Zuid Afrika (West Kaap).
          </p>
          <p className="text-base leading-[1.8] text-foreground/80">
            Doordat wij direct importeren en onze overhead absoluut minimaal is, kunnen wij onze wijnen tegen lage prijzen aanbieden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverOns;
