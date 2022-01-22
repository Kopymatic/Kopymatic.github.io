<template>
    <body>
        <div class="center">
            <kopymatic-header> </kopymatic-header>
            <h1 id="subtitle">Funnyman</h1>
            <p>
                My first discord bot. Currently private. <br />V2 source code
                <a href="https://github.com/Kopymatic/FunnymanBot">here</a> <br />V3 (unfinished)
                source code
                <a href="https://github.com/Kopymatic/Funnyman">here</a>
            </p>
            <return-home></return-home>
        </div>
    </body>
</template>

<script>
import ReturnHome from "@/components/ReturnHome.vue";
import KopymaticHeader from "@/components/Header.vue";

export default {
    components: { ReturnHome, KopymaticHeader },
};
</script>
