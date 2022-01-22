<template>
    <body>
        <div>
            <div class="center">
                <kopymatic-header> </kopymatic-header>
                <h1 id="subtitle">CookieClickerBot</h1>
                <p>
                    My second attempt at a discord bot. Unfinished. <br />Source code
                    <a href="https://github.com/Kopymatic/CookieClickerBot">here</a>
                </p>
                <return-home></return-home>
            </div>

            <p class="center"></p>
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
