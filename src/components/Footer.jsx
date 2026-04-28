import React from "react";
import "./Footer.css";
import Logo from "../assets/images/logo.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Left */}
        <div className="footer-left">
          <img src={Logo} alt="logo" className="footer-logo" />

          <p>
            Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse
            platea dictumst. Duis porta, quam ut finibus ultrices.
          </p>

          <hr />

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li>New Projects</li>
            <li>Our Services</li>
            <li>Testimonials</li>
            <li>About Us</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your mail here..." />
            <button>GO</button>
          </div>
        </div>

      </div>

      {/* Full width line */}
      <div className="footer-line"></div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>Copyright ©Smart Agro. All Right Reserved.</p>

        <div className="footer-policy">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;