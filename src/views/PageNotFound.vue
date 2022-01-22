<template>
    <div>
        <kopymatic-header> </kopymatic-header>
        <h1>404 - Page Not Found</h1>
        <p>This page no longer exists or was moved to another location.</p>
        <return-home> </return-home>
    </div>
</template>

<script>
import ReturnHome from "@/components/ReturnHome.vue";
import KopymaticHeader from "@/components/Header.vue";

export default {
    components: { ReturnHome, KopymaticHeader },
};
</script>
