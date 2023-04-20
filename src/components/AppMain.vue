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
        <div class="container">
            <h3>Movies</h3>
            <!-- Row -->
            <div class="row row-cols-5 g-3">
                <!-- Column -->
                <div class="col" v-for="movie in store.movies" :key="movie.id">
                    <!-- Movie -->
                    <AppCard :movie="movie" />
                </div>
            </div>
            <!-- End Row -->
        </div>
        <!-- End Container -->
    </main>
</template>

<style scoped lang="scss">
main {
    padding-top: 80px;
}

.container {
    h3 {
        color: white;
    }
}
</style>