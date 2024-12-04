<template>
  <div class="favourites">
    <div v-for="joke in favourites">
      <JokeCard :joke="joke" />
    </div>
  </div>
</template>

<script>
import JokeCard from '@/components/JokeCard.vue';
import { useFavouritesStore } from '@/stores/favouritesCollection';

export default {

  components: { JokeCard },
  data() {
    
    return {
      favouritesStore: useFavouritesStore()
    }
  },

  computed: {

    favourites() {

      return this.favouritesStore.favourites;

    },

  },

  mounted(){

    if(this.favouritesStore.favourites.length === 0){

      this.favouritesStore.favourites = JSON.parse(localStorage.getItem('favourites'));
    }
    return this.favouritesStore.favourites;
  }

}
</script>

<style>
.favourites {
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
}

.joke-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 10px 10px;
  margin: 40px 10px;
  gap: 5rem;
}

.select-box {
  margin-right: 5rem;
}

.select-box {
  width: 20rem;
  height: 3rem;
}

button {
  width: 20rem;
  height: 3rem;
}

button:hover {
  color: #f86d43;
}


.joke-box {

  border: solid #f86d43;
  border-radius: 20px;
  color: #ffffff;
  width: auto;
  height: auto;
  text-align: center;
  padding: 2rem 1rem 2rem 1rem;


}
</style>
