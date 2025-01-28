"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function MainSlider() {
  return (
    <div className="relative w-full h-[564px] mb-8">
      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <img
            src="http://www.bebefood.co.kr/wp-content/uploads/2018/06/bebe_01.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://www.bebefood.co.kr/wp-content/uploads/2018/06/bebe_02.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://www.bebefood.co.kr/wp-content/uploads/2018/06/bebe_03.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://www.bebefood.co.kr/wp-content/uploads/2018/06/bebe_04.jpg"
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      {/* 커스텀 버튼 컨테이너 */}
      <div className="absolute inset-0 flex justify-between items-center max-w-5xl mx-auto px-4">
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </div>

      {/* Overlay Image */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <img
          src="http://bebefood.co.kr/wp-content/uploads/2016/03/main_visual_txt07.png"
          alt="Overlay Text"
          className="max-w-auto"
        />
      </div>
    </div>
  );
}
