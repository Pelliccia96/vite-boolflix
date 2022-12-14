<template>
    <div class="card mb-3">
        <img v-if="serie.poster_path == null" :src="'https://picsum.photos/194/291'" alt="">
        <img v-else :src="store.img.link + store.img.size + serie.poster_path" alt="" class="img-fluid">
        <div class="p-2">
            <h3><strong>Titolo:</strong> {{ serie.name }}</h3>
            <p class="text-secondary"><strong>Titolo originale:</strong> {{ serie.original_name }}</p>
            <p class="text-secondary"><strong>Lingua:</strong> {{ serie.original_language }}</p>
            <div class="stars-container">
                <i class="text-warning fa-star" v-for="star in movieStars"
                :class="{'fa-solid': star === true, 'fa-regular': star === false, 'fa-solid fa-star-half-stroke': star === 'half'}"></i>
            </div>
        </div>
    </div>
</template>

<script>
import  { store } from '../store';
export default {
    props: {
        serie: {
            type: Object,
            vote: Number,
            required: true,
        }
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        movieStars() {
            const toReturn = [];
            const voteRow = this.serie.vote_average / 2;
            const vote = Math.floor(voteRow);

            for (let i = 0; i < 5; i++) {
                let toPush =  i < vote;
                const decimal = voteRow % 1;

                if (vote === i && decimal) {
                    toPush = "half";
                }

                toReturn.push(toPush);
            }
            return toReturn;
        }
    },
}
</script>

<style scoped>
</style>
