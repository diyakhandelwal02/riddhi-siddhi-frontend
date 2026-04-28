import "./Product.css"
import ProductCard from "./ProductCard"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import { MdKeyboardArrowRight ,MdKeyboardArrowLeft } from "react-icons/md";
import { useRef } from "react"

import besan from "../assets/images/Packet.png"
import suji from "../assets/images/Packet.png"
import salt from "../assets/images/Packet.png"

const Product = () => {

  const swiperRef = useRef(null)

  const products = [
    {
      id: 1,
      title: "Premium Wheat Atta",
      content: "Stone-ground, high-fiber wheat flour ideal for soft and healthy rotis.",
      image: besan
    },
    {
      id: 2,
      title: "Fresh Besan",
      content: "Finely milled for bakery products, snacks, and commercial use.",
      image: besan
    },
    {
      id: 3,
      title: "Pure Suji",
      content: "Perfect texture for halwa, upma, and traditional Indian recipes.",
      image: suji
    },
    {
      id: 4,
      title: "Refined Maida",
      content: "Finely milled for bakery products, snacks, and commercial use.",
      image: suji
    },
    {
      id: 5,
      title: "Salt",
      content: "Finely milled for bakery products, snacks, and commercial use.",
      image: salt
    }
  ]

  return (
    <section className="products-section">

      <div className="products-heading">
        <h2>Our Products</h2>
        <p>
          At Riddhi Siddhi, we are committed to manufacturing high-quality food
          essentials including
        </p>
      </div>

      <div className="products-container">

        {/* 🔥 Custom Arrows */}
        <button
          className="custom-prev"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <MdKeyboardArrowLeft/>
        </button>

        <button
          className="custom-next"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
         <MdKeyboardArrowRight />
        </button>

         <Swiper
          className="desktop-slider"
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard
                title={item.title}
                price={item.content}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mobile-grid">
  {products.map((item) => (
    <ProductCard
      key={item.id}
      title={item.title}
      price={item.content}
      image={item.image}
    />
  ))}
</div>

      </div>

    </section>
  )
}

export default Product