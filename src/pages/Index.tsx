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
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    };

    observe();

    // Re-observe after a short delay to catch dynamically rendered elements
    const timeout = setTimeout(observe, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
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
