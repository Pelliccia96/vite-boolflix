<template>
    <div class="container my-5">
        <div class="text-danger text-center my-5">
            <h1 class="fw-bold">BOOLFLIX</h1>
        </div>
        <div class="row">
            <div class="col-5 d-flex">
                <input type="text" class="form-control me-4" v-model="searchText">
                <button class="btn btn-dark text-white fw-semibold" @click="onSearchClick">Cerca</button>
            </div>
        </div>
    </div>
</template>

<script>
import { store, fetchMovies, fetchTv } from '../store';
export default{
    data() {
        return {
            store,
            searchText:"",
        }
    },
    methods: {
        onSearchClick () {
            this.store.searchText = this.searchText;
            fetchMovies();
            fetchTv();
            this.store.display = true;
        }
    },
}
</script>

<style scoped>
</style>
