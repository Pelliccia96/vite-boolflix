<template>
    <section>
        <div class="container bg-dark rounded-2 my-5">
            <h2 v-if="store.display" class="text-danger p-3 fw-semibold">Films</h2>
            <div class="row">
                <div v-for="(film,i) in store.movies" :key="i + film.id" class="col-3 d-flex flex-column g-5">
                    <div class="card mb-3">
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
            <h2 v-if="store.display" class="text-danger p-3 fw-semibold">Tv-Series</h2>
            <div class="row">
                <div v-for="(serie,i) in store.seriesTv" :key="i + serie.id" class="col-3 d-flex flex-column g-5">
                    <div class="card mb-3">
                        <img :src="store.img.link + store.img.size + serie.poster_path" alt="" class="img-fluid">
                        <div class="p-2">
                            <h3><strong>Titolo:</strong> {{serie.name}}</h3>
                            <p class="text-secondary"><strong>Titolo originale:</strong> {{serie.original_name}}</p>
                            <p class="text-secondary"><strong>Lingua:</strong> {{serie.original_language}}</p>
                            <p class="text-secondary"><strong>Voto:</strong> {{serie.vote_average}}</p>
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