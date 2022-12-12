<template>
    <section>
        <div class="container bg-secondary rounded-2 p-3 my-5">
            <div class="row">
                <div v-for="(film,i) in store.movies" :key="i + film.id" class="col-3 d-flex flex-column g-5">
                    <div class="card">
                        <img :src="store.img.link + store.img.size + film.poster_path" alt="" class="img-fluid">
                        <div class="p-2">
                            <h3><strong>Titolo:</strong> {{film.title}}</h3>
                            <p class="text-secondary"><strong>Titolo originale:</strong> {{film.original_title}}</p>
                            <p class="text-secondary"><strong>Lingua:</strong> {{film.original_language}}</p>
                            <p class="text-secondary"><strong>Voto:</strong> {{film.vote_average}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store';
export default{
    data() {
        return {
            store,
        }
    },
}
</script>

<style scoped>
</style>