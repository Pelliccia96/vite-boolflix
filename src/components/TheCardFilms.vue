<template>
    <div class="card mb-3">
        <img v-if="film.poster_path == null" :src="'https://picsum.photos/194/291'" alt="" class="card-img">
        <img v-else :src="store.img.link + store.img.size + film.poster_path" alt="" class="card-img">
        <div class="card-img-overlay p-2 overflow-auto">
            <h4><strong>Titolo:</strong> {{ film.original_title }}</h4>
            <p><strong>Lingua:</strong> {{ film.original_language }} <span :class="getFlag.icon"></span></p>
            <div class="stars-container mb-2">
                <i class="text-warning fa-star" v-for="star in movieStars"
                    :class="{ 'fa-solid': star === true, 'fa-regular': star === false, 'fa-solid fa-star-half-stroke': star === 'half' }"></i>
            </div>
            <p><strong>Overview:</strong> {{ film.overview }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    props: {
        film: {
            type: Object,
            vote: Number,
            required: true,
        },
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        movieStars() {
            const toReturn = [];
            const voteRow = this.film.vote_average / 2;
            const vote = Math.floor(voteRow);

            for (let i = 0; i < 5; i++) {
                let toPush = i < vote;
                const decimal = voteRow % 1;

                if (vote === i && decimal) {
                    toPush = "half";
                }

                toReturn.push(toPush);
            }
            return toReturn;
        },
        getFlag() {
            let toReturn = { icon: `fi fi-${this.film.original_language}` };
            if (this.film.original_language == "en") {
                toReturn = { icon: "fi fi-gb" }
            } else if (this.film.original_language == "ja") {
                toReturn = { icon: "fi fi-jp" }
            } else if (this.film.original_language == "ko") {
                toReturn = { icon: "fi fi-kr" }
            };
            return toReturn
        },
    },
}
</script>

<style scoped>

</style>
