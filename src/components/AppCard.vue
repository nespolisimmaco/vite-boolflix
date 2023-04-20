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
        <div class="language">Language: {{ originalLanguage }}</div>
        <div class="vote">Vote: {{ vote }}</div>
    </div>
</template>

<style scoped lang="scss">
.ms_card {
    background-color: red;
    color: white;
}
</style>