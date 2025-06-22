import React from "react";
import "./AboutUS.css";
import section3Img from "../../assets/aboutus/section3_img.png";
import section4Img from "../../assets/aboutus/about-section4-img.png";
import section5Img from "../../assets/services/service_digital_mark_img.jpg";
import devImg from "../../assets/services/service_app_img.jpg";
import dgImg from "../../assets/aboutus/dgImg.jpg";
import ImageSlider from "../ImageSlider";

const AboutUs = () => {
  return (
    <>
      <div className="about-bg-img"></div>
      <section className="about-top-section">
        <h1 className="about-top-section-heading">
          Digitizing Ideas with Clean Code & Modern Design
        </h1>
        <p className="about-top-section-desc">
          At Websort, we turn digital visions into reality with expert web and
          app development, UI/UX design, and digital marketing. Based in
          Bangalore, we craft responsive websites, innovative mobile apps, and
          drive results through SEO, PPC, and social media strategies.
        </p>
        <div className="about-top-section-btn-container">
          <button>Contact Us</button>
          <button>Know More</button>
        </div>
      </section>
      {/* section-2*/}
      <div className="about-bg-img2"></div>
      <section className="about-section-aboutus">
        <div className="about-section-aboutus-heading">
          <h2>About Us</h2>
          <h3>Where Innovation Meets Execution</h3>
        </div>

        <div className="about-section-aboutus-desc">
          <p>
            Websort builds websites, apps, and digital marketing solutions to
            help you grow online. Based in Bangalore, we focus on smart design,
            strong tech, and real results.We specialize in web development,
            mobile app development, UI/UX design, and digital
            marketing—delivering responsive websites, high-performance
            Android/iOS apps, and visually engaging interfaces. Our digital
            marketing expertise spans SEO, PPC, social media marketing, and
            content creation, helping businesses grow and connect with their
            ideal audience.
          </p>
          <button>Know More</button>
        </div>
      </section>

      <section className="about-section-slider">
        <ImageSlider />
      </section>
      <section className="aboutus-features">
        <h2>Fueling the Future with Innovation</h2>
        <div>
          <p>AI and IoT-driven products</p>
        </div>
        <button>Know More</button>
      </section>
      {/*section-3 */}
      <section className="aboutus-section-3">
        <div className="aboutus-section-3-div">
          <h2 className="aboutus-section-3-heading">
            See Our Work in Web Design & Development
          </h2>
          <img
            src={section3Img}
            alt="image"
            className="aboutus-section-3-img"
          />
          <div className="aboutus-section-3-desc">
            <p>
              We specialize in building responsive, user-friendly websites
              tailored to client needs. Take a look at our recent projects to
              see how design and functionality come together.
            </p>
            <button>Know More</button>
          </div>
        </div>
        <img src={section3Img} alt="image" className="aboutus-section-3-img1" />
      </section>

      {/*section-4 */}
      <section className="about-section-4">
        <div className="about-section-4-div">
          <h2>Why We Stand Out</h2>
          <img src={section4Img} className="about-section-4-img" />
          <p className="about-section-4-desc">
            At Websort, we don’t just build digital products — we build careers.
            By joining our team, you become part of a creative and collaborative
            environment that values innovation, continuous learning, and
            personal growth.
          </p>
        </div>
        <img src={section4Img} className="about-section-4-img1" />
      </section>

      <section className="aboutus-achievment">
        <h2>One of our proudest achievements.</h2>
        <p>
          A standout from our portfolio, this project exemplifies the quality,
          creativity, and performance we bring to every solution. It's a true
          reflection of our commitment to excellence.
        </p>
        <div className="aboutus-achievment-card-cont">
          <div className="achievment-card">
            <img src={section5Img} />
            <h3>Web Development</h3>
            <button>Explore more</button>
          </div>
          <div className="achievment-card">
            <img src={devImg} />
            <h3>App Development</h3>
            <button>Explore more</button>
          </div>
          <div className="achievment-card">
            <img src={dgImg} />
            <h3> Digital Marketing</h3>
            <button>Explore more</button>
          </div>
        </div>
        <div className="achievment-card hide1">
          <img src={section5Img} />
          <h3>Web Development</h3>
          <button>Explore more</button>
        </div>
      </section>

      <div className="seperation-div"></div>
      <section className="about-section-question">
        <h1 className="about-question-header">
          Questions? We're here to answer them!
        </h1>
        <form className="about-question-form">
          <div>
            <label htmlFor="name" className="about--ques-form-label">
              Name
            </label>
            <input id="name" type="text" className="about-ques-form-input" />
          </div>
          <div>
            <label htmlFor="email" className="about--ques-form-label">
              Email
            </label>
            <input id="email" type="text" className="about-ques-form-input" />
          </div>
          <div>
            <label htmlFor="number" className="about--ques-form-label">
              Number
            </label>
            <input id="number" type="text" className="about-ques-form-input" />
          </div>
          <div className="form-textarea-about">
            <label htmlFor="massage" className="about--ques-form-label">
              Message
            </label>
            <textarea className="about-ques-form-text-area" id="massage" />
          </div>
          <button type="button" className="form-question-submit">
            Submit
          </button>
        </form>
      </section>
      <section className="about-section-last">
        <h2 className="about-section-last-heading">
          See what opportunities await you
        </h2>
        <button className="about-section-last-btn">Explore More</button>
      </section>
    </>
  );
};

export default AboutUs;
