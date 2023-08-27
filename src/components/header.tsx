import React from "react";
import LoginButton from "./login-button";
import "./header.scss";

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string | null;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  setOpenModalLogin: (open: boolean) => void;
  openMobileMenu: () => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  pricingRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  activeSection,
  scrollToSection,
  setOpenModalLogin,
  aboutRef,
  pricingRef,
  contactRef,
  openMobileMenu,
}) => {
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <span className={`${isScrolled ? "text-color" : ""}`}>
            ⭕ SimplyERP
          </span>
        </div>
        <div className="menu">
          <div
            className={`menu-item ${activeSection === "about" ? "active" : ""}`}
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
        <div className="hamburger-icon" onClick={() => openMobileMenu()}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
