import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="max-w-xs mx-auto flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-primary/15" />
          <span className="text-primary/30 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>✦</span>
          <div className="flex-1 h-px bg-primary/15" />
        </div>

        <div className="text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide mb-6">
            Interesse in een wijn of meer weten over ons assortiment? Neem contact op.
          </h2>

          <div className="space-y-1 text-foreground/60 mb-10 text-sm">
            <p>Wijnen 't Sticht</p>
            <p>Het Rond 5D, 3701HS Zeist</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="mailto:info@wijnenhetsticht.nl"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-wider uppercase"
            >
              <Mail className="w-4 h-4" />
              E-mail
            </a>
            <a
              href="https://wa.me/31613561331"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-wider uppercase"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="tel:+31613561331"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-wider uppercase"
            >
              <Phone className="w-4 h-4" />
              Bellen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
