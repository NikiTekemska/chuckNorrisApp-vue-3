<template>
    <div class="joke-box">
        <span class="joke">{{ joke.value }}</span>
        <div class="fav-toggle" @click="toggleFav(joke)">
            <span style="font-size: 48px; color: #f86d43;">
                <i v-if="isFavourite(joke.id)" class="fa-solid fa-star"></i>
                <i v-else class="fa-regular fa-star"></i>
            </span>
        </div>
    </div>
</template>

<script>
import { useFavouritesStore } from '@/stores/favouritesCollection';

export default {
    props: ['joke'],
    data() {
        return {
            favouritesStore: useFavouritesStore(),
        }
    },
    computed: {
        isFavourite() {
            return this.favouritesStore.isFavourite;
        }
    },
    methods: {

        toggleFav(joke) {
            this.favouritesStore.toggleFav(joke);
        },

    }
}
</script>

<style></style>