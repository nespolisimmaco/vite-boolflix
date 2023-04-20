<script>
export default {
    name: "AppCard",
    props: {
        movieTitle: String,
        movieOriginalTitle: String,
        originalLanguage: String,
        vote: Number,
    },
    data() {
        return {
            movieInfos: ["title", "original_title", "original_language", "vote_average"]
        }
    }
}
</script>

<template>
    <!-- Card -->
    <div class="ms_card h-100">
        <!-- Movie infos -->
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
        <div class="vote">Vote: {{ vote }}</div>
    </div>
</template>

<style scoped lang="scss">
.ms_card {
    background-color: red;
    color: white;
}

.language {
    span {
        img {
            width: 20px;
        }
    }
}
</style>