<template>
    <div>
        <base-button :buttonText="buttonText" :buttonDesc="buttonDesc"></base-button>
    </div>
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
