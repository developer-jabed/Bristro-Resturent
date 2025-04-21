import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Style.css";

// Imported slide images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Swipe = () => {
  const slides = [
    { image: slide1, title: "Salads" },
    { image: slide2, title: "Pizzas" },
    { image: slide3, title: "Soups" },
    { image: slide4, title: "Desserts" },
    { image: slide5, title: "Salads" },
  ];

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="slide-img w-[400px] h-[400px] object-cover rounded-lg p-4 mx-auto"
            />
            <h3 className="text-4xl uppercase mt-16 text-center text-white absolute bottom-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded">
              {slide.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipe;
