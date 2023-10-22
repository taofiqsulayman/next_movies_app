import Link from "next/link";
import { Movie } from "../types/types";

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

function MovieCard(movie: Movie ) {
  const imageUrl = movie?.poster_path
    ? `${IMAGE_BASE_URL}${movie?.poster_path}`
    : "http://via.placeholder.com/640x960";
  const releaseYear = movie?.release_date?.split("-")[0];

  return (
    <Link href={`/movies/${movie?.id}`} className="text-decoration-none">
      <div className="card text-bg-dark mb-3" style={{ width: "15rem" }}>
        <img src={imageUrl} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title text-truncate">{movie?.title}</h5>
          <p className="card-text">{releaseYear}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

