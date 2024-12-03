'use client';
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMounted } from "../useMounted";
import { useParams } from "next/navigation";
const VideoOne = dynamic(() => import("@/components/Video/VideoOne"), {
  ssr: false,
});

export default function MovieCard({ movie }) {
  const mounted = useMounted()
  const { lang } = useParams();
  if (!mounted) return null
  const cookie = document.cookie;

  const isLoggedIn = cookie.includes('kids-portal');

  return (
    <div>
    <div className="movie-card-small position-relative">
      {/* <!-- Card Thumbnail --> */}
      <Image src={movie.image} alt="card-img" className="w-100" width={840} height={920} />
      {/* <!-- Card Badge --> */}
      {movie.isRibbon && (
        <div className="movie-badge position-absolute">
          <span>{movie.count}</span>
        </div>
      )}
      {/* <!-- Play Button --> */}
      {isLoggedIn && (
        <VideoOne src={movie.videoSrc} />
      )}
      {/* <!-- Movie Details --> */}
      {/* <div className="details position-absolute text-center">
        <h4 className="movie-name text-uppercase fw-normal">
            {movie.title}
        </h4>
        {movie.categories && movie.categories.length > 0 && (
          <ul className="movie-type">
            {movie.categories.map((category, index) => (
              <li key={index}>
                {category}
                {index < movie.categories.length - 1 ? ", " : ""}
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
    <div className="details text-center" style={{color: 'black', display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5px"}}>
        <h4 className="movie-name text-uppercase fw-normal" style={{color: 'black'}}>
            {movie.title[lang]}
        </h4>
        {movie.categories && movie.categories.length > 0 && (
          <ul className="movie-type" style={{display: "flex"}}>
            {movie.categories.map((category, index) => (
              <li key={index} style={{paddingRight: '4px'}}>
                {category.name[lang]}
                {index < movie.categories.length - 1 ? ", " : ""}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
