import "./Footer.css";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details-container">
        <img src={logo} alt="logo" className="footer-logo" />
        <div className="footer-details-cont1">
          <div className="footer-details-text-container">
            <ul className="footer-details-text-left">
              <li>Web Development |</li>
              <li>App Development | </li> <li>UI/UX Design |</li>{" "}
              <li>Digital Marketing</li>
            </ul>
            <ul className="footer-details-text-right">
              <li>Based in Bangalore | ✉️ </li>{" "}
              <li>contact@websort.com | 📞</li> <li>+91-XXXXXXXXXX </li>
            </ul>
          </div>
          <div className="footer-socialmedia">
            <FcGoogle size={24} />
            <FaFacebook color="#1877F2" size={24} />
            <FaInstagramSquare size={24} />
          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <p className="foot-text">© 2025 Websort. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
