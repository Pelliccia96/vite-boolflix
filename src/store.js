import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({
    searchText: "",
    movies: [],
    seriesTv: [],
    display: false,
    img: {
        link: "https://image.tmdb.org/t/p/",
        size: "w300",
    }
})

export function fetchMovies() {
    axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: "663e7a923d23d8b8c155747e4a7151c8",
            query: store.searchText,
        }
    })
    .then((resp) => {
        console.log(resp);
        store.movies = resp.data.results;
    })
    .catch((error) => {
        console.log(error);
        console.log("Codice errore: ", error.response.status);
        store.display = false;
    })
}

export function fetchTv() {
    axios.get("https://api.themoviedb.org/3/search/tv", {
        params: {
            api_key: "663e7a923d23d8b8c155747e4a7151c8",
            query: store.searchText,
        }
    })
    .then((resp) => {
        console.log(resp);
        store.seriesTv = resp.data.results;
    })
    .catch((error) => {
        console.log(error);
        console.log("Codice errore: ", error.response.status);
        store.display = false;
    })
}
