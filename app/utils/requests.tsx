const API_BASE_URL = process.env.NEXT_API_BASE_URL;
const API_KEY = process.env.NEXT_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${API_KEY}`,
  },
};

export const getTrendingMovies = () => {
  return fetch(`${API_BASE_URL}/trending/movie/day?language=en-US`, options)
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}

export const getMovieDetails = (id: number) => {
  return fetch(
    `${API_BASE_URL}/movie/${id}?append_to_response=videos%2Ccredits%2Csimilar&language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
}

export const searchMovies = (query: string) => {
  return fetch(
    `${API_BASE_URL}/search/movie?query=${query}&language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}

// fetch(
//   "https://api.themoviedb.org/3/movie/11122?append_to_response=videos%2Ccredits%2Csimilar&language=en-US",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
