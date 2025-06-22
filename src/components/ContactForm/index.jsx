import React from "react";
import "./ContactForm.css";

const index = () => {
  return (
    <section className="contact-us-form-section">
      <h3 className="contact-us-form-section-heading">
        Need support or want to collaborate?{" "}
      </h3>
      <p className="contact-us-form-section-desc">
        Fill out the form and our team will get back to you shortly
      </p>
      <form className="contact-us-form-submit">
        <div>
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input id="firstName" type="text" className="form-input" />
        </div>
        <div>
          <label htmlFor="SecondName" className="form-label">
            Second Name
          </label>
          <input id="firstName" type="text" className="form-input" />
        </div>
        <div>
          <label htmlFor="emailId" className="form-label">
            Email Address
          </label>
          <input id="emailId" type="text" className="form-input" />
        </div>
        <div>
          <label htmlFor="SecondName" className="form-label">
            Phone
          </label>
          <input id="firstName" type="text" className="form-input" />
        </div>
        <div>
          <label htmlFor="emailId" className="form-label">
            Company
          </label>
          <input id="emailId" type="text" className="form-input" />
        </div>
        <div>
          <label htmlFor="SecondName" className="form-label">
            Message
          </label>
          <input id="firstName" type="text" className="form-input-msg" />
        </div>
        <button type="button" className="form-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default index;
