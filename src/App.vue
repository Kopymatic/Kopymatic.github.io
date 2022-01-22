<template>
    <router-view />

    <Home style="app"></Home>
</template>

<script>
import Home from "@/views/Home.vue";

export default {
    name: "App",
    components: {
        Home,
    },
};
</script>

<style>
html {
    background: #000000;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    margin-top: 60px;
}
</style>
