import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./style/skills.css";

const Skills = () => {
  return (
    <div id="skills" data-aos="fade-down" data-aos-duration='1000' className="skills-container">
      <h2 className="skills__title">Skills</h2>
      <Swiper
        pagination={true}
        className="mySwiper"
        loop={true}
        spaceBetween={50}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <div className="swiper__web">
            <i className="swiper__web-icon fa-solid fa-laptop-code"></i>
            <h4>Full Stack Web Developer</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__team">
            <i className="swiper__team-icon fa-solid fa-people-group"></i>
            <h4>Always open to teamwork</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__communication">
            <i className="swiper__communication-icon fa-solid fa-comments"></i>
            <h4>Communication on point</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__grow">
            <i className="swiper__grow-icon fa-solid fa-arrow-trend-up"></i>
            <h4>Constant improvement</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Skills;
