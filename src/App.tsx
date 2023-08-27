import "reset-css/reset.css";
import React, { useEffect, useRef, useState } from "react";
import "./app.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalLogin from "./components/modal-login";
import ModalMobileMenu from "./components/modal-mobile-menu";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Pricing from "./components/pricing";
import Contact from "./components/contact";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalMenu, setOpenModalMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutRef.current?.getBoundingClientRect().top || 0;
      const pricingTop = pricingRef.current?.getBoundingClientRect().top || 0;
      const contactTop = contactRef.current?.getBoundingClientRect().top || 0;

      if (aboutTop >= 0 && aboutTop < window.innerHeight / 2) {
        setActiveSection("about");
      } else if (pricingTop >= 0 && pricingTop < window.innerHeight / 2) {
        setActiveSection("pricing");
      } else if (contactTop >= 0 && contactTop < window.innerHeight / 2) {
        setActiveSection("contact");
      } else if (window.scrollY <= 60) {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <ModalLogin
        isOpen={openModalLogin}
        onClose={() => setOpenModalLogin(false)}
      />
      <ModalMobileMenu
        goContact={() => scrollToSection(contactRef)}
        goPricing={() => scrollToSection(pricingRef)}
        goAbout={() => scrollToSection(aboutRef)}
        isOpen={openModalMenu}
        onClose={() => setOpenModalMenu(false)}
        onLogin={() => setOpenModalLogin(true)}
      />
      <Header
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        setOpenModalLogin={setOpenModalLogin}
        contactRef={contactRef}
        pricingRef={pricingRef}
        aboutRef={aboutRef}
        openMobileMenu={() => setOpenModalMenu((prev) => !prev)}
      />
      <Hero scrollToSection={() => scrollToSection(aboutRef)} />
      <About refSection={aboutRef} />
      <Pricing refSection={pricingRef} />
      <Contact refSection={contactRef} />
      <footer>
        <p>© 2023 SimplyERP. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
