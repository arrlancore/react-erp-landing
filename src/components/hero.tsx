import React from "react";
import "./hero.scss";

const Hero: React.FC<{ scrollToSection: () => void }> = (props) => {
  return (
    <section className="hero">
      <div className="hero-bg-1"></div>
      <div className="hero-bg-2"></div>
      <div className="container-content">
        <div className="hero-bg-center"></div>
        <h1 className="font-bold text-color-highlight">
          Roketkan bisnis Anda dengan SimplyERP
        </h1>
        <p>
          Ciptakan efisiensi yang tiada tara untuk bisnis Anda. Selami sistem
          ERP kami yang canggih dan temukan masa depan operasi yang lebih
          efisien. Apakah Anda siap meningkatkan level Anda?
        </p>
        <button className="button-primary" onClick={props.scrollToSection}>
          Pelajari Lebih Lanjut
        </button>
      </div>
    </section>
  );
};

export default Hero;
