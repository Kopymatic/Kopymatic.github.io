<template>
    <body>
        <kopymatic-header> </kopymatic-header>
        <h1 class="center" id="subtitle">About Kopymatic</h1>

        <div id="container">
            <empty-button
                class="item"
                buttonText="A human being."
                buttonDesc="I am indeed not an alien from mars."
            />
            <empty-button
                class="item"
                buttonText="I write code."
                buttonDesc="I code mostly in Typescript currently."
            />
            <empty-button
                class="item"
                buttonText="I know many programming languages"
                buttonDesc="I know Java, Kotlin, Typescript, GDScript, and some C#"
            />
            <internal-link-button
                class="item"
                buttonText="I have many projects."
                buttonDesc="Click here to see them."
                link="/home/"
            />
        </div>

        <h1 class="center" id="subtitle">Social Media</h1>

        <div id="container">
            <link-button
                class="item2"
                buttonText="Youtube"
                link="https://www.youtube.com/channel/UCF5_Evvi_JP-j12t-8YbOEA"
            >
                <i class="fab fa-youtube fa-5x" />
            </link-button>
            <link-button class="item2" buttonText="Twitter" link="https://twitter.com/Kopymatic">
                <i class="fab fa-twitter fa-5x" />
            </link-button>
            <link-button class="item2" buttonText="Discord" link="https://discord.gg/QXFkQ8RHMw">
                <i class="fab fa-discord fa-5x" />
            </link-button>
            <link-button class="item2" buttonText="GitHub" link="https://github.com/Kopymatic">
                <i class="fab fa-github fa-5x" />
            </link-button>
        </div>
        <return-home class="center"> </return-home>
    </body>
</template>

<script>
import ReturnHome from "@/components/ReturnHome.vue";
import KopymaticHeader from "@/components/Header.vue";
import InternalLinkButton from "@/components/InternalLinkButton.vue";
import LinkButton from "@/components/LinkButton.vue";
import EmptyButton from "../components/EmptyButton.vue";

export default {
    components: {
        ReturnHome,
        KopymaticHeader,
        InternalLinkButton,
        EmptyButton,
        LinkButton,
    },
};
</script>

<style scoped>
#container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 1% 5% 10% 5%;
    justify-content: center;
}

.item {
    flex: 1 1 32%;
}

.item2 {
    flex: 1 1 24%;
}

@media screen and (max-width: 800px) {
    #container {
        flex-direction: column;
    }
}
</style>
