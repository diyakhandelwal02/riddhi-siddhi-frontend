import "./Distribution.css"
import retailImg from "../assets/images/Retails.png";
import supermarketImg from "../assets/images/Supermarkets (2).png";
import bulkImg from "../assets/images/Bulk.png";
import horecaImg from "../assets/images/Horeca (2).png";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Distribution = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='distribution-section'>
      <div className="distribution-container">

        <div className="distribution-top">
          <h2>Distribution & Supply</h2>
          <p>
            At Riddhi Siddhi, we are committed to manufacturing high-quality food essentials including 
          </p>
        </div>

        <div className="distribution-bottom">

          {isMobile ? (
            <Swiper
  spaceBetween={15}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]}
  breakpoints={{
    0: {
      slidesPerView: 1.2,  // small mobile
    },
    480: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,   // ⭐ yaha fix
    },
    768: {
      slidesPerView: 2.5,
    },
  }}
>
              {[retailImg, supermarketImg, bulkImg, horecaImg].map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="card">
                    <div className="card-img">
                      <img src={img} alt="card" />
                    </div>
                    <div className="card-content">
                      <h3>
                        {["Retail Stores", "Supermarkets", "Bulk Buyers", "HoReCa Sector"][i]}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              <div className="card">
                <div className="card-img">
                  <img src={retailImg} alt="Retail" />
                </div>
                <div className="card-content">
                  <h3>Retail Stores</h3>
                </div>
              </div>

              <div className="card">
                <div className="card-img">
                  <img src={supermarketImg} alt="Supermarket" />
                </div>
                <div className="card-content">
                  <h3>Supermarkets</h3>
                </div>
              </div>

              <div className="card">
                <div className="card-img">
                  <img src={bulkImg} alt="Bulk" />
                </div>
                <div className="card-content">
                  <h3>Bulk Buyers</h3>
                </div>
              </div>

              <div className="card">
                <div className="card-img">
                  <img src={horecaImg} alt="Horeca" />
                </div>
                <div className="card-content">
                  <h3>HoReCa Sector</h3>
                </div>
              </div>
            </>
          )}

        </div>

        <div className="distribution-btn">Contact Us</div>

      </div>
    </div>
  );
}

export default Distribution;