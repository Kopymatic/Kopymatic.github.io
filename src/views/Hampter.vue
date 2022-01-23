<template>
    <body>
        <h1>Welcome to the hampter cult. We hope you enjoy your stay.</h1>
        <div class="content">
            <!-- <img src="@/assets/hampter.jpg" alt="hampter" /> -->

            <marquee><img src="@/assets/hampter.jpg" alt="hampter scroll" /></marquee>
        </div>
        <return-home class="center"> </return-home>
    </body>
</template>

<script>
import ReturnHome from "@/components/ReturnHome.vue";

export default {
    components: { ReturnHome },
};
</script>

<style scoped>
h1 {
    text-align: center;
    text-shadow: 5px 5px black;
}

body {
    overflow: hidden;
    background-image: url("../assets/hampter.jpg");
    background-size: 100px;
}
.content {
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: fit-content;
    height: 100vh;
    flex-direction: column;
    margin: auto;
}

img {
    max-width: 100%;
    height: auto;
    width: auto\9; /* ie8 */
}
</style>
