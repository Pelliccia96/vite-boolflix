<template>
    <div class="card mb-3">
        <img v-if="serie.poster_path == null" :src="'https://picsum.photos/194/291'" alt="">
        <img v-else :src="store.img.link + store.img.size + serie.poster_path" alt="" class="img-fluid">
        <div class="p-2">
            <h3><strong>Titolo:</strong> {{ serie.name }}</h3>
            <p class="text-secondary"><strong>Titolo originale:</strong> {{ serie.original_name }}</p>
            <p class="text-secondary"><strong>Lingua:</strong> {{ serie.original_language }}</p>
            <p class="text-secondary"><strong>Voto:</strong> {{ serie.vote_average }}</p>
        </div>
    </div>
</template>

<script>
import  { store } from '../store';
export default {
    props: {
        serie: {
            type: Object,
            required: true,
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
