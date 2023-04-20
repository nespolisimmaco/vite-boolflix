<script>
export default {
    name: "AppCard",
    props: {
        movie: Object
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
        <div class="title">Title: {{ movie.title }}</div>
        <div class="original-title">Original title: {{ movie.original_title }}</div>
        <div class="language">Language: {{ movie.original_language }}</div>
        <div class="vote">Vote: {{ movie.vote_average }}</div>
    </div>
</template>

<style scoped lang="scss">
.ms_card {
    background-color: red;
    color: white;
}
</style>