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
        moviePoster: String,
        movieOverview: String,
        movieID: Number
    },
    emits: ["showMore"],
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath(image) {
            return (`https://image.tmdb.org/t/p/w342${image}`);
        },
    }
}
</script>

<template>
    <!-- Card -->
    <div class="ms_card h-100">
        <!-- Movie infos -->
        <!-- Movie cover -->
        <div class="movie-cover h-100 ">
            <img class="h-100" v-if="moviePoster != null" :src="getImagePath(moviePoster)">
            <h2 v-else>{{ movieTitle }}</h2>
        </div>
        <!-- Infos -->
        <div class="movie-infos text-center ">
            <h5 class="title"> {{ movieTitle }}</h5>
            <div class="original-title">
                <div>Titolo originale:</div>
                {{ movieOriginalTitle }}
            </div>
            <div class="language">
                <span v-if="originalLanguage === 'en'"><img src="../img/united-kingdom.png" alt="English"></span>
                <span v-else-if="originalLanguage === 'it'"><img src="../img/italy.png" alt="Italian"></span>
                <span v-else-if="originalLanguage === 'es'"><img src="../img/spain.png" alt="Spanish"></span>
                <span v-else-if="originalLanguage === 'fr'"><img src="../img/france.png" alt="French"></span>
                <span v-else-if="originalLanguage === 'ja'"><img src="../img/japan.png" alt="Japanese"></span>
                <span v-else>{{ originalLanguage }}</span>
            </div>
            <div class="vote">
                <span v-for="num in 5" :key="num"><i class="fa-solid fa-star"
                        :class="{ 'yellow': num <= Math.ceil(vote / 2) }"></i></span>
            </div>
            <div class="overview">
                Trama:
                <p>{{ movieOverview }}</p>
            </div>
            <!-- Show more -->
            <button class="show-more my-1" @click="$emit('showMore', movieID, movieTitle)">Mostra di più</button>
            <div v-show="store.showmore" class="actors">
                <ul v-if="movieID === store.movieID" class="list-group">
                    <h5>Cast</h5>
                    <li v-for="actor in store.actors">{{ actor.name }}</li>
                </ul>
            </div>
        </div>
        <!-- End Infos -->
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.ms_card {
    color: white;
    position: relative;

}

.language {
    span {
        img {
            width: 20px;
        }
    }
}

.movie-infos {
    background-color: $card-infos;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    padding: 1rem 5px 10px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;

        &-thumb {
            background-color: $scrollbar-color;
            border-radius: 20px;
        }
    }
}

.ms_card:hover {
    .movie-infos {
        opacity: 1;
        visibility: visible;
    }
}

.overview {

    p {
        font-size: 0.8rem;
        margin-bottom: 0;
    }
}

.yellow {
    color: gold;
}

.show-more {
    background-color: $scrollbar-color;
    color: white;
    border-radius: 20px;
    font-size: 0.8rem;
    border: none;
}
</style>