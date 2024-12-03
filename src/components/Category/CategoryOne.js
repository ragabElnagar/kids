"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CategoryCard from "@/components/Card/CategoryCard";
import { Categories } from "@/data/videos";
import { Home } from "@/data/pageTitles";
import { useParams } from "next/navigation";

export default function CategoryOne() {
  const { lang } = useParams();
  const swiperOptions = {
    speed: 5000,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true,
    },
    modules: [Autoplay],
    breakpoints: {
      0: { slidesPerView: "1" },
      576: { slidesPerView: "2" },
      768: { slidesPerView: "2" },
      992: { slidesPerView: "3" },
      1200: { slidesPerView: "4" },
      1500: { slidesPerView: "5" },
      1700: { slidesPerView: "6", spaceBetween: 30 },
    },
  };
  return (
    <div className="category pt-80">
      <div className="container mb-45">
        <div className="d-flex justify-content-center mb-40">
          <div className="section-header">
            <h3 className="section-title mt-2 mb-0 lh-1" style={{color: 'var(--heading-color-dark)'}}>{Home.categoryTitle[lang]}</h3>
          </div>
        </div>
      </div>
      {Object.values(Categories) && Object.values(Categories).length > 0 && (
        <Swiper {...swiperOptions} className="swiper categories-slider">
          {Object.values(Categories).map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
