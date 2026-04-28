import "./About.css";
import Wheating from "../assets/images/About-img.png";
import tickIcon from "../assets/Icons/TickIcon.png"
import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);

  return (
    <div className="About-Container">
      <div className="About-section">

        {/* Left Image */}
        <div className="about-image">
          <img src={Wheating} alt="" data-aos="fade-right" />
        </div>

        {/* Right Content */}
        <div className="about-text-container">

        <div className="about-text">
    
          
          {/* About Heading */}
          <h2>About Us</h2>

          {/* Paragraph */}
          <p>
            At Riddhi Siddhi, we are committed to manufacturing high-quality food essentials including Atta, Maida, Suji, Besan, and Salt with strict quality standards and modern processing techniques.
            <br /><br />
With advanced manufacturing facilities and a strong distribution network across India, we ensure every product maintains freshness, purity, and consistency.
          </p>

        </div>
          {/* Mission Heading */}
          <div className="mission-conatiner"> 

          <h3 className="mission-title">Our Mission</h3>

          {/* Mission Points */}
          <ul className="mission-list">
            <li> <img src= {tickIcon}  className="tick-icon" alt="" /> Deliver safe, hygienic food products.</li>
            <li> <img src= {tickIcon} className="tick-icon" alt="" /> Superior-quality food products to every Indian household.</li>
            <li> <img src= {tickIcon} className="tick-icon" alt="" /> Fast delivery withing 24/7.</li>
          </ul>
          </div>

          {/* Button */}
          <button className="about-btn">Contact Us</button>

      </div>
        </div>
    </div>
  );
};

export default About;