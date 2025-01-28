"use client";

import React from "react";
// Swiper 및 필요한 모듈들
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper 스타일
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function MainSlider() {
  return (
    <div className="w-full h-64 mb-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // V11.2+ 에서 modules 배열 사용
        spaceBetween={50}
        slidesPerView={1}
        navigation
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
    </div>
  );
}
