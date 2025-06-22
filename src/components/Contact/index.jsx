import React from "react";
import "./Contact.css";
import ContactForm from "../ContactForm";
import addressImg from "../../assets/contact/address_img.png";
const Contact = () => {
  return (
    <>
      <div className="contact-us-header">
        <div className="contact-us-text-section">
          <h1 className="contact-us-header-text">Contact Us</h1>
          <p className="contact-us-header-para">
            Have a question, idea, or project in mind? We're here to help — get
            in touch with us today.
          </p>
        </div>
      </div>
      <ContactForm />
      <section className="contact-us-address">
        <h2 className="address-heading">Address</h2>
        <div className="address-container">
          <img src={addressImg} className="address-image" alt="addressImg" />
          <div className="hide-address">
            <span>Based in Bangalore | contact@websort.com +91-XXXXXXXXXX</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
