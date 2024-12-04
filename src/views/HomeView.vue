<template>
  <main>
    <div class="home-container">
      <div class="welcomeItem">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam dolores maxime doloremque magnam perspiciatis repellat sed ex sunt eligendi!</span>
        <RouterLink to="/jokes">
          <GenericButton buttonText="Get a joke"/>
        </RouterLink>
      </div>
      <img src="@/assets/chuck-norris.jpg" alt="chukkie">
    </div>
  </main>
</template>

<script>

import GenericButton from '@/components/GenericButton.vue';

 export default {

    components: { GenericButton }

 }

</script>

<style>
.home-container {
  display: flex;
  text-align: center;
  margin: 2rem 2rem 2rem 2rem;
  border: solid #f86d43;
  border-radius: 24px;
  color: #ffffff;
  font-size: 10px;
}

.home-container img {
  margin: 2rem 2rem 2rem;
  border-radius: 16px;
}

.home-container a {
  width: fit-content;
  margin-bottom: 2rem;
}

a :hover {
  color: #f86d43;
  cursor: pointer;
}
.welcomeItem button {
  width: 20rem;
  height: 3rem;
}

.welcomeItem span {
  margin: 2rem 0 1rem 2rem;
}
</style>