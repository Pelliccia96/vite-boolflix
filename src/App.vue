<template>
  <TheHeader @performSearch="onSearch"></TheHeader>
  <TheMain></TheMain>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue';
import { store, fetchMovies, fetchTv } from './store'

export default {
  components: { TheHeader, TheMain },

  data() {
    return {
      store,
    }
  },
  methods: {
    onSearch() {
      fetchMovies();
      fetchTv();
    }
  },
}
</script>

<style lang="scss">
@use "./styles/general.scss";
</style>
