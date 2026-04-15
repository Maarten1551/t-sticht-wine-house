const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-sm text-foreground/50" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Wijnen 't Sticht
        </p>
        <p className="text-xs text-foreground/40">
          Het Rond 5D, 3701HS Zeist
        </p>
        <p className="text-xs text-foreground/40">
          &copy; {new Date().getFullYear()} Wijnen 't Sticht. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
