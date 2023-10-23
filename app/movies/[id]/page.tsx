import { getMovieDetails } from "@/app/utils/requests";
import React from "react";
import Casts from "@/app/components/Casts";
import Image from "next/image";
import TrailerIframe from "@/app/components/TrailerIframe";

interface MovieDetailsPageProps {
  params: {
    id: number;
  };
}

interface Video {
  type: string;
  key: string;
}

const getMovieTrailer = (videos: Video[] = []) => {
  const trailer = videos.find((video) => video.type === "Trailer");
  return trailer?.key as string;
};

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
const BACKDROP_BASE_URL = process.env.NEXT_PUBLIC_BACKDROP_IMAGE_BASE_URL;

const getBackdropUrl = (backdropPath: string) => {
  return backdropPath
    ? `${BACKDROP_BASE_URL}/${backdropPath}`
    : "https://via.placeholder.com/300x500";
}

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const movieId = params.id;
  const movie = await getMovieDetails(movieId);
  return (
    <div className="container mt-5">
      <TrailerIframe trailerKey={getMovieTrailer(movie.videos.results)} />
      {!getMovieTrailer(movie.videos.results) && (
        <div className="position-relative overflow-hidden rounded-lg mb-4">
          <img
            className="object-center object-cover"
            src={getBackdropUrl(movie?.backdrop_path)}
            alt={movie?.title}
            style={{ height: "35vh", width: "100%", objectFit: "cover"}}
          />

          <div className="alert alert-warning" role="alert">
            No trailer available
          </div>
        </div>
      )}

      <div className="row g-md-3 mt-2">
        <div className="col-md-6">
          <Image
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            sizes="(min-width: 808px) 50vw, 100vw"
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-2xl font-weight-bold mb-4">{movie?.title}</h2>
          <div className="d-flex flex-wrap mb-2 gap-2">
            {movie?.genres &&
              movie.genres.map((genre: any) => (
                <div
                  key={genre.id}
                  className="px-3 py-2 bg-secondary text-white rounded mr-2 mb-2"
                >
                  {genre.name}
                </div>
              ))}
          </div>

          <div className="text-lg my-2">
            Release Date: {movie?.release_date}
          </div>
          <div className="text-lg mb-2">Duration: {movie?.runtime}</div>

          <p className="text-muted small">Overview: {movie?.overview}</p>
          <div className="text-lg my-2">
            Rating:{" "}
            <span
              className={
                movie?.vote_average >= 5 ? "text-success" : "text-danger"
              }
            >
              {movie?.vote_average}
            </span>
          </div>
          <div className="small mb-2">Total votes: {movie?.vote_count}</div>

          <div className="mt-4">
            <h2 className="text-2xl font-weight-bold">Cast</h2>
            <Casts casts={movie?.credits?.cast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
