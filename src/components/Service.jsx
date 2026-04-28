import React from "react";
import  ServiceIcon   from "../assets/Icons/Frame 673.png";


import "./Service.css";

const Service = () => {
  const servicesData = [
   { icon: <img src={ServiceIcon} alt="" />, title: "Quality Assurance" },
    { icon: <img src={ServiceIcon} alt="" />, title: "Modern Infrastructure" },
    { icon: <img src={ServiceIcon} alt="" />, title: "Hygienic & Safe Packaging" },
    { icon: <img src={ServiceIcon} alt="" />, title: "Competitive Pricing" },
  ];

  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <div className="text">
          <h3 className="title">{service.title}</h3>
          {/* <p className="subtitle">{service.subtitle}</p> */}
        </div>
           </div>
      ))}
    </div>
  );
};

export default Service;