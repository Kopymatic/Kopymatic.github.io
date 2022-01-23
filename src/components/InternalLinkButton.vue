<template>
    <router-link :to="{ path: link }">
        <base-button :buttonText="buttonText" :buttonDesc="buttonDesc"></base-button>
    </router-link>
</template>

<script>
import baseButton from "./BaseButton.vue";

export default {
    components: { baseButton },
    name: "InternalLinkButton",
    props: {
        buttonText: String,
        buttonDesc: String,
        link: String,
    },
};
</script>
