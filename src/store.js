import { reactive } from "vue";

export const store = reactive({
  apiMoviesURL: "https://api.themoviedb.org/3/search/movie",
  apiSeriesURl: "https://api.themoviedb.org/3/search/tv",
});
