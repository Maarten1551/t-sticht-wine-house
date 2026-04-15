const OverOns = () => {
  return (
    <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      {/* Over Wijnen 't Sticht */}
      <div className="fade-in grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-24 md:mb-32">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
            alt="Eigenaar Wijnen 't Sticht"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">
            Over Wijnen 't Sticht
          </h2>
          <p className="text-base leading-relaxed text-foreground/85">
            Wijnen 't Sticht bestaat sinds februari 2014. Begonnen als franchise van Sauter Wijnen uit Maastricht/Cadier en Keer (de volledige naam was toen Sauter Wijnen Het Sticht) staat het bedrijf nu sinds medio 2026 volledig op eigen benen. Waar wij aanvankelijk de expertise en het productaanbod van Sauter nodig hadden, hebben wij in de loop der jaren zelf intrinsieke kennis opgebouwd en met veel "eigen" producenten/wijngoederen exclusieve relaties opgebouwd.
          </p>
          <p className="text-base leading-relaxed text-foreground/85">
            Directe wijnimport (eigen accijnsnummer) beslaat nu het leeuwendeel van onze business.
          </p>
        </div>
      </div>

      {/* Passie & expertise */}
      <div className="fade-in grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-24 md:mb-32">
        <div className="flex flex-col justify-center space-y-6 md:order-2">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">
            Passie &amp; expertise
          </h2>
          <p className="text-base leading-relaxed text-foreground/85">
            Passie voor wijnen gaat bij ons gepaard met opgebouwde expertise. Wij verkopen een wijn alleen als wij daar geheel achter staan! Al onze wijnen zijn uitvoerig doorgeproefd en hebben wij zelf gedronken. Stuk voor stuk. Wij zoeken - veelal kleinere - producenten uit die wij waarderen om hun vakmanschap, loyaliteit en beproefde langdurige samenwerking.
          </p>
        </div>
        <div className="aspect-[4/5] overflow-hidden md:order-1">
          <img
            src="https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=800&q=80"
            alt="Wijnproeverij"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Eigen directe import */}
      <div className="fade-in grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
            alt="Wijnkelder"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide">
            Eigen directe import
          </h2>
          <p className="text-base leading-relaxed text-foreground/85">
            Als gezegd werken wij hoofdzakelijk met kleinere producenten. Het betreft veelal familiebedrijven die - generaties lang - vanuit de ouders op de kinderen vererven. Wij importeren direct vanuit Frankrijk (Bourgogne, Bordeaux en Champagne), Duitsland (Rheingau en Baden), Italië (Piemonte, Veneto, Marken, Puglia), Spanje (Ribera en Toro) en Zuid Afrika (West Kaap).
          </p>
          <p className="text-base leading-relaxed text-foreground/85">
            Doordat wij direct importeren en onze overhead absoluut minimaal is, kunnen wij onze wijnen tegen lage prijzen aanbieden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverOns;
