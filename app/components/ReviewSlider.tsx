"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ReviewSlider() {
  return (
    <div className="relative w-full h-[300px] mb-8">
      {/* Swiper 본체 */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next", // 커스텀 버튼 연결
          prevEl: ".swiper-button-prev",
        }}
        className="h-full"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-4">
            {/* 텍스트 영역 */}
            <div className="w-full md:w-1/2">
              <h3 className="font-semibold">베베푸드 쌀과자 후기</h3>
              <p className="text-sm mt-2 text-gray-700">
                체험단으로 참여했는데, 아기가 정말 잘 먹어요! 바삭하고
                부드러워서 목막힘 없이 먹일 수 있었답니다.
              </p>
            </div>
            {/* 이미지 영역 */}
            <div className="w-full md:w-1/2">
              <img
                src="https://via.placeholder.com/300x200?text=Review+Image+1"
                alt="리뷰 이미지 1"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* 샘플 슬라이드 추가 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="font-semibold">오곡크런치 체험단 리뷰</h3>
              <p className="text-sm mt-2 text-gray-700">
                고소하고 씹는 식감이 너무 좋아요. 아기가 주워 먹기 편해서 스스로
                먹을 때 쓰기 딱이네요.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://via.placeholder.com/300x200?text=Review+Image+2"
                alt="리뷰 이미지 2"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* 커스텀 네비게이터 버튼 컨테이너 */}
      <div className="absolute top-[-40px] left-0 right-0 flex justify-between items-center px-4">
        <button className="swiper-button-prev bg-gray-200 text-gray-800 rounded-full p-2 shadow-md"></button>
        <button className="swiper-button-next bg-gray-200 text-gray-800 rounded-full p-2 shadow-md"></button>
      </div>
    </div>
  );
}
