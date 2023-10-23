import MovieCard from "./components/MovieCard";
import { Movie } from "./types/types";
import { getTrendingMovies } from "./utils/requests";

export default async function Home() {

  const movies = await getTrendingMovies();
  return (
    <div className="container-md my-2">
      <h4>Trending Movies</h4>
      <div className="container-md py-2 my-2 d-flex flex-wrap justify-content-center gap-3">
        {movies?.map((movie: Movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
