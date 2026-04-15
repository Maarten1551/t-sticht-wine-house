import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center fade-in">
        <h2 className="text-3xl md:text-4xl font-light text-primary tracking-wide mb-6">
          Interesse in een wijn? Neem contact op.
        </h2>

        <div className="space-y-2 text-foreground/70 mb-12">
          <p className="text-base">Wijnen 't Sticht</p>
          <p className="text-base">Het Rond 5D</p>
          <p className="text-base">3701HS Zeist</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@wijnenhetsticht.nl"
            className="inline-flex items-center gap-3 px-8 py-3 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm tracking-wider uppercase"
          >
            <Mail className="w-4 h-4" />
            E-mail
          </a>
          <a
            href="https://wa.me/31613561331"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm tracking-wider uppercase"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="tel:+31613561331"
            className="inline-flex items-center gap-3 px-8 py-3 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm tracking-wider uppercase"
          >
            <Phone className="w-4 h-4" />
            Bellen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
