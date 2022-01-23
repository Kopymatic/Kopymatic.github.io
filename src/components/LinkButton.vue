<template>
    <a v-bind:href="link">
        <base-button :buttonText="buttonText" :buttonDesc="buttonDesc"> <slot /> </base-button>
    </a>
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
