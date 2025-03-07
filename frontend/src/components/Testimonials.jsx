import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../styles/Testimonials.scss";

const testimonials = [
  {
    name: "Lucas Andrade",
    text: "Essa landing page mudou minha forma de trabalhar. Simplesmente incrível!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Ana Souza",
    text: "Experiência visual fantástica! As animações são de outro nível!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Carlos Lima",
    text: "Muito mais do que eu esperava. Recomendo fortemente!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="title">O que dizem sobre nós</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <img src={testimonial.image} alt={testimonial.name} />
            <p className="text">"{testimonial.text}"</p>
            <h4 className="name">{testimonial.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
