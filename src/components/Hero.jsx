import React, { useEffect, useState } from "react";
import "./Hero.css";
import farmingVideo from "../assets/Videos/Wheat.mp4";
import machineVideo from "../assets/Videos/Machine copy.mp4";
import doughVideo from "../assets/Videos/Farming.mp4";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {

  const slides = [
    {
      id: 1,
      video: farmingVideo,
      title1: "Shuddhta Ka Vaada,",
      title2: "Har Ghar Tak",
      desc: "Premium quality Aata, Maida, Suji, Besan & Salt — Made in India.",
    },
    {
      id: 2,
      video: machineVideo,
      title1: "Modern Technology,",
      title2: "Paramparik Vishwas",
      desc: "Gunvatta aur safai ka vachan.",
    },
    {
      id: 3,
      video: doughVideo,
      title1: "Har Ghar Ki Shuruaat,",
      title2: "Shuddh Aata Se",
      desc: "Har roti me pyaar aur poshan.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const { scrollYProgress } = useScroll();

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(8px)"]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <motion.section style={{ filter }} className="hero">

      {/* Video */}
      <video key={current} autoPlay muted playsInline className="hero-video">
        <source src={slides[current].video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-content">

        {/* Title */}
        <motion.h1
          key={current}
          className="hero-title"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="yellow">{slides[current].title1}</span> <br />
          <span className="white">{slides[current].title2}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          key={current + "desc"}
          className="hero-desc"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {slides[current].desc}
        </motion.p>
      </div>
  

    </motion.section>
  );
};

export default Hero;