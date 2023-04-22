<script>
import { store } from './store';
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    // Get movies from API
    getMovies() {
      const params = {};
      if (this.store.searchText) {
        params.api_key = this.store.api_key;
        params.query = this.store.searchText;
      };
      axios.get(this.store.apiMoviesURL, {
        params
      }).then((resp) => {
        console.log(resp);
        const myData = resp.data.results;
        console.log(myData);
        this.store.movies = myData;
      }).catch(error => {
        console.log(error);
      })
    },
    // Get series from API
    getSeries() {
      const params = {};
      if (this.store.searchText) {
        params.api_key = this.store.api_key;
        params.query = this.store.searchText;
      };
      axios.get(this.store.apiSeriesURL, {
        params
      }).then((resp) => {
        console.log(resp);
        const myData = resp.data.results;
        console.log(myData);
        this.store.series = myData;
      }).catch(error => {
        console.log(error);
      })
    },
    // Show movies and series actors
    showMoreInfos(movieID, movieName) {
      this.store.movieID = movieID;
      this.store.showmore = !this.store.showmore;
      const params = {
        api_key: this.store.api_key
      };
      // Ckeck if the chosen content is in movies array
      store.movies.forEach(movie => {
        if (movie.title === movieName) {
          // Get actors array
          axios.get(`${this.store.movieCreditsURL}${movieID}/credits`, {
            params
          }).then((resp) => {
            console.log(resp);
            const myData = resp.data.cast.splice(0, 5);
            console.log(myData);
            this.store.actors = myData;
          }).catch(error => {
            console.log(error);
          });
          // Get genres array
          axios.get(`${this.store.movieCreditsURL}${movieID}`, {
            params
          }).then((resp) => {
            console.log(resp);
            const myData = resp.data.genres;
            console.log(myData);
            this.store.genres = myData;
          }).catch(error => {
            console.log(error);
          })
        }
      });
      // Check if the chosen content is in series array
      store.series.forEach(series => {
        if (series.name === movieName) {
          // Get actors array
          axios.get(`${this.store.seriesCreditsURL}${movieID}/credits`, {
            params
          }).then((resp) => {
            console.log(resp);
            const myData = resp.data.cast.splice(0, 5);
            console.log(myData);
            this.store.actors = myData;
          }).catch(error => {
            console.log(error);
          });
          // Get genres array
          axios.get(`${this.store.seriesCreditsURL}${movieID}`, {
            params
          }).then((resp) => {
            console.log(resp);
            const myData = resp.data.genres;
            console.log(myData);
            this.store.genres = myData;
          }).catch(error => {
            console.log(error);
          })
        }
      })
    },
    search() {
      this.getMovies();
      this.getSeries();
      this.store.loaded = true;
      this.store.searchText = "";
    }
  }
}
</script>

<template>
  <AppHeader @performSearch="search" />
  <AppMain @showMore="showMoreInfos" />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>