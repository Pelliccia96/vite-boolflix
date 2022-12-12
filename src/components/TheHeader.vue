<template>
    <div class="container my-5">
        <div class="text-white text-center my-5">
            <h1 class="fw-bold">BOOLFLIX</h1>
        </div>
        <div class="row">
            <div class="col-4 d-flex">
                <input type="text" class="form-control me-4" v-model="searchText">
                <button class="btn btn-primary" @click="onSearchClick">Cerca</button>
            </div>
        </div>
    </div>
</template>

<script>
import { store, fetchMovies } from '../store';
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
        }
    },
}
</script>

<style scoped>
</style>
