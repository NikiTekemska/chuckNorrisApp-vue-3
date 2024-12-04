import { defineStore } from 'pinia';

export const useFavouritesStore = defineStore('favourites', {

  state: () => ({

    favourites: [],

  }),

  getters: {

    isFavourite: (state) => (id) => {
      return state.favourites.some((joke) => joke.id === id)
    }
  },

  actions: {

    addFav(joke) {
      this.favourites.push(joke)
      localStorage.setItem('favourites', JSON.stringify(this.favourites));
      
    },

    removeFav(id) {
      this.favourites = this.favourites.filter((joke) => joke.id !== id);
      localStorage.setItem('favourites', JSON.stringify(this.favourites));
      
    },

    toggleFav(joke) {

      if (this.isFavourite(joke.id)) {
        this.removeFav(joke.id);
      } else {
        this.addFav(joke);
      }

    }

  }
})
