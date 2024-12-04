<template>
    <div class="joke-container">
        <div class="joke-selection">
            <select class="select-box" name="categories" v-model="selected">
                <option v-for="category in categories" :key="category" :model="category">{{ category }}</option>
            </select>
            <GenericButton buttonText="Get anoter one" @getJoke="getAJoke" />
        </div>

        <JokeCard :joke="joke" />
    </div>
</template>

<script>
import GenericButton from '@/components/GenericButton.vue';
import JokeCard from '@/components/JokeCard.vue';

export default {
    components: { GenericButton, JokeCard },
    data() {
        return {
            categories: [],
            joke: {},
            url: 'https://api.chucknorris.io/jokes/',
            selected: '',

        }
    },


    methods: {

        async fetchData(query) {
            try {
                const response = await fetch(this.url + query);
                const data = await response.json();
                return data
            } catch (err) {
                console.log(err)
            }
        },

        async fetchCategories() {
            const data = await this.fetchData('categories');
            if (data) {
                this.categories = data;
            }
        },

        async fetchJokes() {
            const data = await this.fetchData('random')
            if (data) {
                this.joke = data;
            }
        },

        async getAJoke() {
            if (this.selected == "") {
                this.fetchJokes()
            } else {
                const data = await this.fetchData(`random?category=${this.selected}`);
                this.joke = data;
            }
        },

    },

    async mounted() {
        await this.fetchCategories();
        await this.fetchJokes();

    }
}
</script>

<style scoped>

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
