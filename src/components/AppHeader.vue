<script>
import { store } from '../store';
export default {
    name: "AppHeader",
    emits: ["performSearch"],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header class="d-flex align-items-center">
        <!-- Container -->
        <div class="container d-flex justify-content-between align-items-center">
            <!-- Logo -->
            <div class="logo">
                <img src="../img/Boolflix_logo.png" alt="Boolflix logo">
            </div>
            <!-- Search bar -->
            <div class="search-bar">
                <input class="me-2 rounded border-0" type="text" placeholder="Cerca film o serie tv"
                    v-model.trim="store.searchText" @keyup.enter="$emit('performSearch')">
                <button class="btn" @click="$emit('performSearch')">Cerca</button>
            </div>
        </div>
        <!-- End Container -->
    </header>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

header {
    height: 80px;
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 0.6);
    position: fixed;
    z-index: 99;
}

.search-bar {
    input {
        padding: 7px 5px;
    }

    button {
        background-color: $main-color;
        color: white;
    }
}
</style>