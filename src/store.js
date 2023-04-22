import { reactive } from "vue";

export const store = reactive({
  apiMoviesURL: "https://api.themoviedb.org/3/search/movie",
  apiSeriesURL: "https://api.themoviedb.org/3/search/tv",
  movieCreditsURL: "https://api.themoviedb.org/3/movie/",
  seriesCreditsURL: "https://api.themoviedb.org/3/tv/",
  api_key: "0d9ea9859d4043ef551f6982ca61c527",
  searchText: "",
  movies: [],
  series: [],
  actors: [],
  genres: [],
  showmore: false,
  movieID: 0,
  loaded: false,
});
