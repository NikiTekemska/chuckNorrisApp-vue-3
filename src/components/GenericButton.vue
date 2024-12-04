<template>

    <button class="btn-joke" @click="getAJoke">
        {{ buttonText }}
    </button>

</template>

<script>
export default {

    props: ['buttonText'],

    methods: {
        getAJoke() {
            this.$emit('getJoke');
        }

    }

}
</script>

<style>
.btn-joke {
    width: 20rem;
    height: 3rem;
}

.btn-joke:hover {
    color: #f86d43;
}
</style>