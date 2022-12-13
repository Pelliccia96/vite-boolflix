<template>
    <div class="card mb-3">
        <img :src="store.img.link + store.img.size + film.poster_path" alt="" class="img-fluid">
        <div class="p-2">
            <h3><strong>Titolo:</strong> {{ film.title }}</h3>
            <p class="text-secondary"><strong>Titolo originale:</strong> {{ film.original_title }}</p>
            <p class="text-secondary"><strong>Lingua:</strong> {{ film.original_language }}</p>
            <p class="text-secondary"><strong>Voto:</strong> {{ film.vote_average }}</p>
        </div>
    </div>
</template>

<script>
import  { store } from '../store';
export default {
    props: {
        film: {
            type: Object,
        }
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<style scoped>
</style>
