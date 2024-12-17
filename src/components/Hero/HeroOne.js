"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCards,
  Scrollbar,
} from "swiper/modules";

import Link from "next/link";
import { heroOneData as data } from "@/data/hero";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMounted } from "../useMounted";
import { useParams } from "next/navigation";
const VideoTwo = dynamic(() => import("@/components/Video/VideoTwo"), {
  ssr: false,
});

export default function HeroOne() {
  const mounted = useMounted()
  const { lang } = useParams();
  if (!mounted) return null
  const swiperHeroOptions = {
    speed: 1500,
    slidesPerView: "auto",
    initialSlide: "2",
    spaceBetween: "-70",
    centeredSlides: "true",
    slideToClickedSlide: "true",
    clickable: "true",
    allowTouchMove: "false",
    loop: "true",
    autoplay: {
      delay: 10000,
    },
    navigation: {
      prevEl: ".prev-slide",
      nextEl: ".next-slide",
    },
    // onAutoplayTimeLeft(s, time, progress) {
    //   const progressCircle = document.querySelector(".linear-circle");
    //   progressCircle.style.setProperty("--progress", 1 - progress);
    // },
    // style: {
    //   height: '40vh'
    // },
    modules: [Autoplay, Pagination, Navigation],
  };

  const swiperHeroCardOptions = {
    speed: 500,
    effect: "cards",
    rotate: "false",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    modules: [Pagination, Navigation, EffectCards, Scrollbar],
  };

  const cookie = document.cookie;

  const isLoggedIn = cookie.includes('kids-portal');

  return (
    <>
      {data.slides && data.slides.length > 0 && (
        <Swiper {...swiperHeroOptions} className="swiper hero-slider-one">
          {data.slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="home-one-slider position-relative swiper-slide"
            >
              <video
                className="video-autoplay"
                src={slide.videoSrc}
                preload="auto"
                muted
                autoPlay
                loop
                style={{ objectFit: "cover" }}
              />
              <div className="thumb">
                <img src={slide.image} alt="card-img" className="w-100" />
              </div>
              <div className="container position-absolute top-50 start-50 translate-middle mt-5">
                <div className="row justify-content-lg-between justify-content-center">
                  <div className="col-lg-6 col-md-9 col-sm-12 align-self-center">
                    <div className="content text-center text-lg-start">
                      <h2 className="banner-title fw-bold text-uppercase">
                        {slide.title[lang]}
                      </h2>
                      <p className="banner-description pe-xl-5 me-xl-5">
                        {slide.description[lang]}
                      </p>
                      {<div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
                        <Link
                          href={isLoggedIn ? '/videos-list/all' : '/en/login'}
                          className="hl-btn big-btn lh-1 btn-base fs-18 fw-bold radius-20 flex-shrink-0 text-uppercase"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="15"
                            viewBox="0 0 13 15"
                            fill="none"
                          >
                            <path
                              d="M1 2.66967C1 1.90998 1 1.53013 1.16686 1.31807C1.31227 1.13326 1.53485 1.01765 1.77687 1.00119C2.05461 0.982329 2.39036 1.18772 3.06203 1.59855L10.9592 6.42893C11.542 6.78532 11.8335 6.96359 11.934 7.19025C12.022 7.38826 12.022 7.61173 11.934 7.80974C11.8335 8.0364 11.542 8.21467 10.9592 8.57106L3.06203 13.4014C2.39036 13.8123 2.05461 14.0177 1.77687 13.9988C1.53485 13.9824 1.31227 13.8667 1.16686 13.6819C1 13.4699 1 13.0901 1 12.3304V2.66967Z"
                              fill="currentColor"
                              fillOpacity="0.2"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{isLoggedIn ? slide.btnTwoText[lang] : slide.btnOneText[lang]}</span>
                        </Link>
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* <!-- small slider --> */}
      {/* <div className="hero-card-slider">
        {data.cardSlides && data.cardSlides.length > 0 && (
          <Swiper
            {...swiperHeroCardOptions}
            className="swiper hero-card-slider-wrap"
          >
            {data.cardSlides.map((cardSlide, key) => (
              <SwiperSlide
                key={key}
                className="hero-movie-card text-center swiper-slide"
              >
                <div className="thumb">
                  <img src={cardSlide.image} alt="card-img" />
                </div>
                <div className="content mt-3">
                  <h3 className="card-title">{cardSlide.title}</h3>
                  <p className="card-description">{cardSlide.description}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="slider-btn-wrapper d-flex align-item-center justify-content-center gap-4 mt-xl-4 mt-3">
              <button className="slider-btn slider-btn--big prev-slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="29"
                  viewBox="0 0 40 29"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.91 1.5125V0.322754H15.2895V1.5125C15.2895 6.03007 12.7856 10.375 9.017 12.9489H38.3558V15.3284H9.01686C12.7856 17.9023 15.2895 22.2472 15.2895 26.7648V27.9545H12.91V26.7648C12.91 20.9162 7.71984 15.3487 1.50732 15.3285C1.496 15.3285 1.48468 15.3285 1.47336 15.3285H0.283611V15.3284V12.949V12.9489H0.284611H1.47336H1.519C7.72634 12.9217 12.91 7.35752 12.91 1.5125Z"
                    fill="#fff"
                  />
                </svg>
              </button>
              <button className="slider-btn slider-btn--big next-slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="90"
                  height="90"
                  className="linear-circle"
                >
                  <defs>
                    <linearGradient id="bg_gradient">
                      <stop offset="0%" stopColor="#5A0DFF" />
                      <stop offset="39%" stopColor="#FF29B8" />
                      <stop offset="100%" stopColor="#FF581C" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="20" strokeLinecap="round"></circle>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="29"
                  viewBox="0 0 40 29"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.4206 1.7022V0.512451H24.0411V1.7022C24.0411 6.21977 26.5449 10.5647 30.3136 13.1386H0.974731V15.5181H30.3137C26.545 18.092 24.0411 22.4369 24.0411 26.9545V28.1442H26.4206V26.9545C26.4206 21.1059 31.6107 15.5384 37.8232 15.5181C37.8346 15.5182 37.8459 15.5182 37.8572 15.5182H39.047V15.5181V13.1387V13.1386H39.046H37.8572H37.8116C31.6042 13.1114 26.4206 7.54722 26.4206 1.7022Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
            <div className="hero-card-slider-control position-absolute ms-5 top-50 d-md-inline-block d-none">
              <div className="slider-counter-two gap-1">
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </Swiper>
        )}
      </div> */}
    </>
  );
}
