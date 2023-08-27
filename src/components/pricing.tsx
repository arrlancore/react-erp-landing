import React from "react";
import "./pricing.scss";

interface SectionProps {
  refSection?: React.RefObject<HTMLDivElement>;
}

const Pricing = (props: SectionProps) => {
  return (
    <section ref={props.refSection} className="pricing">
      <div className="container-content">
        <h1>Choose Your Plan</h1>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h2>Basic</h2>
            <ul>
              <li>Mencatat barang masuk</li>
              <li>Mencatat barang keluar</li>
              <li>Mencatat hasil keuntungan</li>
            </ul>
            <button className="button-primary">Pilih</button>
          </div>
          <div className="pricing-card">
            <h2>Business</h2>
            <ul>
              <li>Mencatat barang masuk dan keluar</li>
              <li>Mencatat Keuntungan</li>
              <li>Dapat menganalisa hasil penjualan dengan CHART</li>
              <li>Support 7x24 Jam</li>
            </ul>
            <button className="button-primary">Pilih</button>
          </div>
          <div className="pricing-card">
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
  );
};

export default Pricing;
