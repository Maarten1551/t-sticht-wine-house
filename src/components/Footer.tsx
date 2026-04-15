const Footer = () => {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-xs mx-auto flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-primary/10" />
        <span className="text-primary/20 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>✦</span>
        <div className="flex-1 h-px bg-primary/10" />
      </div>
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-base text-foreground/40 font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Wijnen 't Sticht
        </p>
        <p className="text-xs text-foreground/30">
          Het Rond 5D, 3701HS Zeist
        </p>
        <p className="text-xs text-foreground/30 pt-2">
          &copy; {new Date().getFullYear()} Wijnen 't Sticht
        </p>
      </div>
    </footer>
  );
};

export default Footer;
