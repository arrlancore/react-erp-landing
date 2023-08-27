import React from "react";
import "./contact.scss";

interface SectionProps {
  refSection?: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<SectionProps> = ({ refSection }) => {
  return (
    <section className="contact" ref={refSection}>
      <div className="container-content">
        <h2>Contact Us</h2>
        <p>Jika ada pertanyaan lebih lanjut, silahkan hubungi kami.</p>

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
  );
};

export default Contact;
