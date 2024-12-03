"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../Card/MovieCard";
import { Autoplay } from "swiper/modules";
import { relatedMoviesData as movies } from "@/data/movie";
import Link from "next/link";

export default function RelatedOne({ isLoop = false }) {
  const swiperOption = {
    speed: 9000,
    spaceBetween: 10,
    loop: true,
    autoplay: false,
    centeredSlides: true,
    modules: [],
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

  if (isLoop) {
    swiperOption.autoplay = {
      delay: 1,
      disableOnInteraction: true,
    };

    swiperOption.modules.push(Autoplay);
  }

  return (
    <div class="related-movie pt-80">
      <div class="container mb-45">
        <div class="d-flex align-items-center justify-content-between">
          <h3 class="section-title mt-1 mt-lg-2 mb-0 lh-1">Related Movies</h3>
          <Link
            href="pagination-one"
            class="hl-btn btn-base small-btn fs-18 fw-normal text-uppercase flex-shrink-0"
          >
            <span>See All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                opacity="0.8"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0304 0.562497V0H10.9054V0.562497C10.9054 2.69834 12.0892 4.75254 13.871 5.96946H0V7.09445H13.871C12.0893 8.31136 10.9054 10.3656 10.9054 12.5014V13.0639H12.0304V12.5014C12.0304 9.73629 14.4843 7.10404 17.4214 7.09448C17.4268 7.09449 17.4321 7.0945 17.4375 7.0945H18V7.09445V5.96951V5.96946H17.9995H17.4375H17.4159C14.4812 5.95662 12.0304 3.32594 12.0304 0.562497Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
      {movies && movies.length > 0 && (
        <Swiper
          {...swiperOption}
          className="swiper movie-card-slider-sm movie-card-slider-item-scroll"
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
