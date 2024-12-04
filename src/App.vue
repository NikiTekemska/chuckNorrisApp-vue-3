<template>
    <div class="app-wrapper">
        <header>
            <img alt="ChuckNorris logo" class="logo" src="@/assets/chuckNorris.png" width="200" height="200" />

            <div class="nav-wrapper">
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/jokes">Jokes</RouterLink>
                    <RouterLink to="/favourites">Favourites</RouterLink>
                </nav>
            </div>

        </header>
        <RouterView />
    </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

</script>


<style>
header {

    display: flex;
    place-items: center;
    background-color: rgba(248, 109, 67, 0.85);
    justify-content: space-between;
}

.logo {
    margin: 0 2rem 0 0;
}

.nav-wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
}

nav {
    width: 100%;
    text-align: left;
    margin-left: 10rem;
    font-size: 1rem;
    padding: 1rem 2rem;
    margin-top: 1rem;
    background-color: rgb(214, 84, 23);
    color: white;
    text-decoration: none;
    border-radius: 10px;
}

nav a {
    text-decoration: none;
    display: inline-block;
    padding: 0 1rem;
    color: #ffffff;
}


.welcomeItem {
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    align-items: center;
}

.app-warapper {
    height: 100vh;

}
</style>
