// import FooterOne from "@/components/Footer/FooterOne";
// import HeaderOne from "@/components/Header/HeaderOne";
// import TrendingOne from "@/components/Trending/TrendingOne";
// import LiveStreamingFeature from "@/components/Feature/LiveStreamingFeature";
// import PopularOne from "@/components/Popular/PopularOne";
// import CategoryOne from "@/components/Category/CategoryOne";
// import EducationalVideos from "@/components/Popular/WeeklyPopularOne";
// import MovieSliderOne from "@/components/MovieSlider/MovieSliderOne";
// import OurOriginalOne from "@/components/OurOriginal/OurOriginalOne";
// import { cookies } from 'next/headers'

// export default function Home() {
//   const cookieStore =  cookies()
//   const isLoggedIn = cookieStore.has('kids-portal');

//   return (
//     <>
//       <HeaderOne isHero={true} />
//       <main className="main">
//         <TrendingOne />
//         {!isLoggedIn && <LiveStreamingFeature />}
//         <PopularOne />
//         <CategoryOne />
//         <EducationalVideos />
//         {/* <MovieSliderOne /> */}
//         <OurOriginalOne />
//       </main>
//       <FooterOne />
//     </>
//   );
// }

"use client"

import { useEffect, useState } from "react";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import TrendingOne from "@/components/Trending/TrendingOne";
import LiveStreamingFeature from "@/components/Feature/LiveStreamingFeature";
import PopularOne from "@/components/Popular/PopularOne";
import CategoryOne from "@/components/Category/CategoryOne";
import EducationalVideos from "@/components/Popular/WeeklyPopularOne";
import OurOriginalOne from "@/components/OurOriginal/OurOriginalOne";
import Cookies from "js-cookie";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the cookie exists on client-side
  useEffect(() => {
    const cookie = Cookies.get("kids-portal");
    if (cookie) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <HeaderOne isHero={true} />
      <main className="main">
        <TrendingOne />
        {!isLoggedIn && <LiveStreamingFeature />}
        <PopularOne />
        <CategoryOne />
        <EducationalVideos />
        {/* <MovieSliderOne /> */}
        <OurOriginalOne />
      </main>
      <FooterOne />
    </>
  );
}
