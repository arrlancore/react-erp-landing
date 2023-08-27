import React from "react";
import "./about.scss";

interface SectionProps {
  refSection?: React.RefObject<HTMLDivElement>;
}

const About: React.FC<SectionProps> = (props) => {
  return (
    <section className="about" ref={props.refSection}>
      <div className="container-content">
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
          dapat memahami tantangan unik yang dihadapi oleh bisnis dan merancang
          solusi yang sesuai dengan kebutuhan spesifik mereka. Komitmen kami
          terhadap keunggulan dan pengalaman luas kami menjadikan kami mitra
          tepercaya di industri ERP.
        </p>
      </div>
    </section>
  );
};

export default About;
