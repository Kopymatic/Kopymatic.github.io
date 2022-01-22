<template>
    <body>
        <div>
            <div class="center">
                <kopymatic-header> </kopymatic-header>
                <h1 id="subtitle">2D Platformer</h1>
                <p>
                    A 2D platformer made in the Godot game engine. Currently suspended in favor of
                    other projects.
                </p>
                <return-home> </return-home>
            </div>
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
