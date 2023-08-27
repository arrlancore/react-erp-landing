import "reset-css/reset.css";
import React, { useEffect, useRef, useState } from "react";
import "./app.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginButton from "./components/login-button";
import ModalLogin from "./components/modal-login";
import ModalMobileMenu from "./components/modal-mobile-menu";

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

    // Cleanup the event listener on component unmount
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
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="logo">
            <span className={`${isScrolled ? "text-color" : ""}`}>
              ⭕ SimplyERP
            </span>
          </div>
          <div className="menu">
            <div
              className={`menu-item ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </div>
            <div
              className={`menu-item ${
                activeSection === "pricing" ? "active" : ""
              }`}
              onClick={() => scrollToSection(pricingRef)}
            >
              Pricing
            </div>
            <div
              className={`menu-item ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </div>
            <LoginButton onClick={() => setOpenModalLogin(true)} />
          </div>
          <div
            className="hamburger-icon"
            onClick={() => setOpenModalMenu(true)}
          >
            {/* Hamburger icon or similar for mobile */}☰
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="hero relative">
        <div className="hero-bg-1"></div>
        <div className="hero-bg-2"></div>
        <div className="container-content" data-aos="zoom-y-out">
          <div className="hero-bg-center"></div>

          <h1 className="font-bold text-color-highlight">
            Roketkan bisnis Anda dengan SimplyERP
          </h1>
          <div className="space1" />

          <p>
            Ciptakan efisiensi yang tiada tara untuk bisnis Anda. Selami sistem
            ERP kami yang canggih dan temukan masa depan operasi yang lebih
            efisien. Apakah Anda siap meningkatkan level Anda?
          </p>
          <button
            className="button-primary font-bold"
            onClick={() => scrollToSection(aboutRef)}
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </section>

      <section className="about" ref={aboutRef}>
        <div className="container-content" data-aos="fade-up">
          <h1>About Us</h1>
          <div className="space1" />
          <div className="divider" />
          <div className="space1" />
          <p>
            Selamat datang di Solusi ERP Kami. Solusi ERP kami dirancang untuk
            memperhalus proses bisnis Anda, meningkatkan efisiensi, dan
            meningkatkan kolaborasi lintas departemen. Didirikan lebih dari satu
            dekade yang lalu, kami memiliki sejarah panjang dalam menyediakan
            solusi ERP terbaik untuk bisnis dari semua ukuran. Dengan
            bertahun-tahun pengalaman di bawah ikat pinggang kami, kami bangga
            dapat memahami tantangan unik yang dihadapi oleh bisnis dan
            merancang solusi yang sesuai dengan kebutuhan spesifik mereka.
            Komitmen kami terhadap keunggulan dan pengalaman luas kami
            menjadikan kami mitra tepercaya di industri ERP.
          </p>
        </div>
      </section>

      <section className="pricing" ref={pricingRef}>
        <div className="container-content" data-aos="fade-up">
          <div className="space1" />
          <h1 className="text-color-primary">Choose Your Plan</h1>
          <div className="space2" />
          <div className="pricing-cards">
            {/* TIER 1 */}
            <div
              className="pricing-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h2>Basic</h2>
              <ul>
                <li>Mencatat barang masuk</li>
                <li>Mencatat barang keluar</li>
                <li>Mencatat hasil keuntungan</li>
              </ul>
              <button className="button-primary">Pilih</button>
            </div>
            {/* TIER 2 */}
            <div
              className="pricing-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h2>Business</h2>
              <ul>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
              </ul>
              <button className="button-primary">Pilih</button>
            </div>
            {/* TIER 3 */}
            <div
              className="pricing-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h2>Entrepreneur</h2>
              <ul>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
                <li>Export data ke Excel</li>
                <li>AI Prediksi penghasilan</li>
              </ul>
              <button className="button-primary">Pilih</button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" ref={contactRef}>
        <div className="container-content" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Jika ada pertanyaan lebih lanjut, silahkan hubungi kami.</p>

          <div className="space1" />

          <div className="contact-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Masukan email disini"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tuliskan pesan disini.."
                required
              ></textarea>
            </div>
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2023 SimplyERP. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
