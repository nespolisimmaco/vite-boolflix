<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
export default {
    name: "AppMain",
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <!-- Container -->
        <div class="container" v-show="store.loaded">
            <!-- Movies -->
            <div class="movie" v-show="store.movies != ''">
                <h3>Film</h3>
                <!-- Row -->
                <div class="row row-cols-5 g-3">
                    <!-- Column -->
                    <div class="col" v-for="movie in store.movies" :key="movie.id">
                        <!-- Movie -->
                        <AppCard :movieTitle="movie.title" :movieOriginalTitle="movie.original_title"
                            :originalLanguage="movie.original_language" :vote="movie.vote_average"
                            :moviePoster="movie.poster_path" />
                    </div>
                </div>
                <!-- End Row -->
            </div>
            <!-- End Movies -->
            <!-- Series -->
            <div class="series mt-4" v-show="store.series != ''">
                <h3>Serie TV</h3>
                <!-- Row -->
                <div class="row row-cols-5 g-3">
                    <!-- Column -->
                    <div class="col" v-for="series in store.series" :key="series.id">
                        <!-- Movie -->
                        <AppCard :movieTitle="series.name" :movieOriginalTitle="series.original_name"
                            :originalLanguage="series.original_language" :vote="series.vote_average"
                            :moviePoster="series.poster_path" />
                    </div>
                </div>
                <!-- End Row -->
            </div>
            <!-- End Series -->
        </div>
        <!-- End Container -->
    </main>
</template>

<style scoped lang="scss">
main {
    padding: 80px 0 30px;
}

.container {
    h3 {
        color: white;
    }
}
</style>