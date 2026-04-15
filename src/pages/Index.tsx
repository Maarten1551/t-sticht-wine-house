import { useEffect } from "react";
import Hero from "@/components/Hero";
import OverOns from "@/components/OverOns";
import Partners from "@/components/Partners";
import Wijnen from "@/components/Wijnen";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <OverOns />
      <Partners />
      <Wijnen />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
