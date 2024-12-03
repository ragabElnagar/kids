"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { videos, Categories } from "@/data/videos";
import MovieCard from "@/components/Card/MovieCard";
import { Home } from "@/data/pageTitles";
import { useParams } from "next/navigation";

export default function TrendingOne() {
  const { lang } = useParams();
  const swiperOption = {
    speed: 9000,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    centeredSlides: true,
    modules: [Autoplay],
    breakpoints: {
      0: {
        slidesPerView: "1.2",
      },
      576: {
        slidesPerView: "1.7",
        spaceBetween: 20,
      },
      992: {
        slidesPerView: "2.5",
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: "3.5",
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: "3.9",
        spaceBetween: 30,
      },
    },
  };

  const trendingVideos = videos.filter((video) =>
    video.categories.map(g => g.id).includes(Categories.TRENDING.id)
  );

  return (
    <div className="trending pt-80">
      <div className="d-flex justify-content-center mb-40">
        <div className="section-header">
          <span>⚡</span>
          <h3 className="section-title lh-1 mt-2 mb-0" style={{color: 'var(--heading-color-dark)'}}>{Home.trendingHeader[lang]}</h3>
        </div>
      </div>
      {trendingVideos && trendingVideos.length > 0 && (
        <Swiper
          {...swiperOption}
          className="swiper movie-card-slider-sm movie-card-slider-item-scroll"
        >
          {trendingVideos.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
