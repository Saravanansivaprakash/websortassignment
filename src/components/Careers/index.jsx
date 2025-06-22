import React from "react";
import "./Careers.css";
import ContactForm from "../ContactForm";
import careersImg from "../../assets/careers/careersImg.png";
import appDevImg from "../../assets/careers/appdevImg1.png";
import uiuxImg from "../../assets/careers/uiuxImg.png";
import webImg from "../../assets/careers/webImg.png";
import digitalMarkImg from "../../assets/careers/digitalMarket.png";

const index = () => {
  return (
    <>
      <section className="careers-top-section">
        <h1 className="careers-top-section-heading">
          Talent wins games, but teamwork and intelligence win championships.
        </h1>
        <img src={careersImg} alt="careersImg" className="careers-img" />
        <p className="careers-top-section-desc">
          At Websort, we bring digital ideas to life through expert web and app
          development, digital marketing, and UI/UX design. Based in Bangalore,
          we build responsive websites and mobile apps, enhance online
          visibility with SEO, PPC, and social media, and design user-friendly
          interfaces. Choose Websort for innovative, tailored digital solutions.
        </p>
      </section>
      <section className="careers-top-section1">
        <div>
          <h1 className="careers-top-section-heading">
            Talent wins games, but teamwork and intelligence win championships.
          </h1>
          <p className="careers-top-section-desc">
            At Websort, we bring digital ideas to life through expert web and
            app development, digital marketing, and UI/UX design. Based in
            Bangalore, we build responsive websites and mobile apps, enhance
            online visibility with SEO, PPC, and social media, and design
            user-friendly interfaces. Choose Websort for innovative, tailored
            digital solutions.
          </p>
        </div>
        <img src={careersImg} alt="careersImg" className="careers-img" />
      </section>

      <section className="careers-middle-section">
        <h2 className="careers-middle-section-heading">
          Internship Opportunities at Websort
          <p className="careers-middle-section-desc">
            Internship Opportunities at Websort
          </p>
        </h2>
        <div className="careers-middle-section1">
          <div className="careers-middle-section-card">
            <img
              src={appDevImg}
              alt="AppImg"
              className="careers-middle-section-card-Img"
            />
            <p className="careers-middle-section-card-desc">App Developer</p>
          </div>
          <div className="careers-middle-section-card">
            <img
              src={webImg}
              alt="webImg"
              className="careers-middle-section-card-Img"
            />
            <p className="careers-middle-section-card-desc">Web Developer</p>
          </div>
          <div className="careers-middle-section-card">
            <img
              src={uiuxImg}
              alt="UIUxImg"
              className="careers-middle-section-card-Img"
            />
            <p className="careers-middle-section-card-desc">UI UX</p>
          </div>
          <div className="careers-middle-section-card">
            <img
              src={digitalMarkImg}
              alt="digitalMarketingImg"
              className="careers-middle-section-card-Img"
            />
            <p className="careers-middle-section-card-desc">Marketing</p>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default index;
