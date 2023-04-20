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
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>