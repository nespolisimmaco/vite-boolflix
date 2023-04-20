<script>
import { store } from '../store';
import '@fortawesome/fontawesome-free/css/all.css';
export default {
    name: "AppCard",
    props: {
        movieTitle: String,
        movieOriginalTitle: String,
        originalLanguage: String,
        vote: Number,
        moviePoster: String
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath(image) {
            return (`https://image.tmdb.org/t/p/w342${image}`);
        }
    }
}
</script>

<template>
    <!-- Card -->
    <div class="ms_card h-100">
        <!-- Movie infos -->
        <!-- Movie cover -->
        <div class="movie-cover">
            <img v-if="moviePoster != null" :src="getImagePath(moviePoster)">
            <h2 v-else>{{ movieTitle }}</h2>
        </div>
        <!-- Infos -->
        <div class="movie-infos">
            <div class="title">Title: {{ movieTitle }}</div>
            <div class="original-title">Original title: {{ movieOriginalTitle }}</div>
            <div class="language">
                Language:
                <span v-if="originalLanguage === 'en'"><img src="../img/united-kingdom.png" alt="English"></span>
                <span v-else-if="originalLanguage === 'it'"><img src="../img/italy.png" alt="Italian"></span>
                <span v-else-if="originalLanguage === 'es'"><img src="../img/spain.png" alt="Spanish"></span>
                <span v-else-if="originalLanguage === 'fr'"><img src="../img/france.png" alt="French"></span>
                <span v-else-if="originalLanguage === 'ja'"><img src="../img/japan.png" alt="Japanese"></span>
                <span v-else>{{ originalLanguage }}</span>
            </div>
            <div class="vote">
                Vote:
                <span v-for="num in 5" :key="num"><i class="fa-solid fa-star"
                        :class="{ 'yellow': num <= Math.ceil(vote / 2) }"></i></span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_card {
    color: white;
}

.language {
    span {
        img {
            width: 20px;
        }
    }
}

.yellow {
    color: gold;
}
</style>