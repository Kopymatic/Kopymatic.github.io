<template>
    <button>
        <slot />
        <h1>{{ buttonText }}</h1>
        <p>{{ buttonDesc }}</p>
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        buttonText: String,
        buttonDesc: String,
    },
};
</script>

<style scoped>
button {
    font-size: large;
    font-family: "Balsamiq Sans", cursive;
    border-color: rgb(212, 3, 29);
    border-width: 4px;
    border-style: solid;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    transition-duration: 0.3s;
    background-color: rgb(48, 48, 48);
    color: white;
}

button:hover {
    background-color: black;
    width: 102%;
    height: 102%;
}
</style>
