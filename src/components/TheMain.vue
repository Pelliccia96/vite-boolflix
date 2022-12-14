<template>
    <section>
        <div class="container bg-dark rounded-2 my-5">
            <h2 v-if="store.display" class="text-danger p-3 fw-bold pt-3">Films:</h2>
            <div class="row">
                <div v-for="(films,i) in store.movies" :key="i + films.id" class="col-3 d-flex flex-column g-5">
                    <TheCardFilms :film="films"></TheCardFilms>
                </div>
            </div>
            <h2 v-if="store.display" class="text-danger p-3 fw-bold pt-5">Tv-Series:</h2>
            <div class="row">
                <div v-for="(series,i) in store.seriesTv" :key="i + series.id" class="col-3 d-flex flex-column g-5">
                    <TheCardSeries :serie="series"></TheCardSeries>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store';
import TheCardFilms from './TheCardFilms.vue';
import TheCardSeries from './TheCardSeries.vue'
export default{
    components: { TheCardFilms, TheCardSeries },

    data() {
        return {
            store,
        };
    },
}
</script>

<style scoped>
</style>