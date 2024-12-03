import { videos } from "@/data/videos";
import MovieCard from "../Card/MovieCard";

export default function MovieList({ category }) {
  const filteredVideos = category.toLowerCase() !== 'all' ? videos.filter((video) =>
    video.categories.map((c) => c.id.toLowerCase()).includes(category.toLowerCase())
  ): videos;

  return (
    <div className="genres-area py-80">
      <div className="container">
        {filteredVideos && filteredVideos.length > 0 && (
          <div className="row row-gap-4">
            {filteredVideos.map((movie, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
