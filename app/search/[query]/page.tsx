import MovieCard from "../../components/MovieCard";
import { Movie } from "../../types/types";
import { searchMovies } from "../../utils/requests";

interface SearchPageProps {
  params: {
    query: string;
  }
}

export default async function Search( { params }  : SearchPageProps) {
  const movies = await searchMovies(params.query);
  return (
    <div className="container-md my-2">
      <h4>Search Results</h4>
      <div className="container-md py-2 my-2 d-flex flex-wrap justify-content-center gap-3">
        {movies?.map((movie: Movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
