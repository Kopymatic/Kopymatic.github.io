<template>
    <a v-bind:href="link">
        <button>
            <h1>{{ buttonText }}</h1>
            <p>{{ buttonDesc }}</p>
        </button>
    </a>
</template>

<script>
export default {
    name: "LinkButton",
    props: {
        buttonText: String,
        buttonDesc: String,
        link: String,
        buttonStyle: CSSRuleList,
    },
};
</script>

<style scoped>
button {
    font-size: large;
    font-family: "Balsamiq Sans", cursive;
    border-color: rgb(212, 3, 29);
    border-width: 4px;
    border-style: groove;
    border-radius: 16px;
    width: 90%;
    height: 90%;
    transition-duration: 0.4s;
    background-color: rgb(48, 48, 48);
    color: white;
}

button:hover {
    background-color: black;
    width: 95%;
    height: 95%;
}
</style>
