import React from "react";
import "./Services.css";
import serviceUiUxImg from "../../assets/services/service_uiux_img.jpg";
import serviceWebImg from "../../assets/services/service_web_design_img.jpg";
import serviceAppImg from "../../assets/services/service_app_img.jpg";
import serviceDigitMartImg from "../../assets/services/service_digital_mark_img.jpg";
const Services = () => {
  return (
    <>
      <section className="service-top-section">
        <h1 className="service-top-section-heading">Our Services</h1>
        <div className="service-top-section-card">
          <img
            className="service-top-section-card-img"
            src={serviceUiUxImg}
            alt="serviceImage"
          />
          <div className="service-top-section-card-text">
            <h2 className="service-top-section-card-text-heading">
              UI/UX Design
            </h2>
            <p className="service-top-section-card-text-desc">
              We design clean, intuitive, and engaging user interfaces that
              enhance the overall user experience. From wireframes to final
              designs, our focus is on usability, consistency, and creating
              visually appealing digital products that users love.
            </p>
            <button className="service-section-btn">Know more</button>
          </div>
        </div>

        <div className="service-top-section-card">
          <img
            className="service-top-section-card-img order-section-2"
            src={serviceWebImg}
            alt="serviceWebImage"
          />
          <div className="service-top-section-card-text order-section-1">
            <h2 className="service-top-section-card-text-heading">
              Web Development
            </h2>
            <p className="service-top-section-card-text-desc">
              Planned and executed a digital marketing strategy including SEO,
              social media marketing, and content creation. Improved website
              traffic and engagement through targeted campaigns and regular
              performance tracking.
            </p>
            <button className="service-section-btn">Know more</button>
          </div>
        </div>
      </section>
      <section className="service-middle-section">
        <div className="service-top-section-card">
          <img
            className="service-top-section-card-img"
            src={serviceAppImg}
            alt="serviceAppImage"
          />
          <div className="service-top-section-card-text">
            <h2 className="service-top-section-card-text-heading">
              App Development
            </h2>
            <p className="service-top-section-card-text-desc">
              Developed a cross-platform mobile app using Flutter for Android
              and iOS. The app allows users to browse services, make bookings,
              and receive real-time updates. Designed with a clean UI and smooth
              navigation to ensure a seamless user experience.
            </p>
            <button className="service-section-btn">Know more</button>
          </div>
        </div>
        <div className="service-top-section-card">
          <img
            className="service-top-section-card-img order-section-2"
            src={serviceDigitMartImg}
            alt="serviceMarketingImage"
          />
          <div className="service-top-section-card-text order-section-1">
            <h2 className="service-top-section-card-text-heading">
              Digital Marketing
            </h2>
            <p className="service-top-section-card-text-desc">
              Designed and developed a responsive, SEO-optimized website using
              React. The site includes a modern UI, fast loading speed, and full
              mobile compatibility. Key features include service pages, contact
              form, and an easy-to-manage content structure to support client
              updates and user engagement.
            </p>
            <button className="service-section-btn">Know more</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
