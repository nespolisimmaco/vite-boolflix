<script>
import { store } from './store';
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      const params = {
        api_key: this.store.api_key,
        query: this.store.searchText
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
    search() {
      this.getMovies();
      this.store.searchText = "";
    }
  }
}
</script>

<template>
  <AppHeader @performSearch="search" />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>