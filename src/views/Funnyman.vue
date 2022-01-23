<template>
    <body>
        <div class="center">
            <kopymatic-header> </kopymatic-header>
            <h1 id="subtitle">Funnyman</h1>
            <div id="container">
                <base-button
                    class="item"
                    buttonText="My first discord bot."
                    buttonDesc="Started by me in late 2020, the bot has been in development for over a year."
                />
                <base-button
                    class="item"
                    buttonText="Feature Rich!"
                    buttonDesc="Funnyman has many features. Here are a few examples."
                />
                <base-button
                    class="item"
                    buttonText="NoContext"
                    buttonDesc="Probably Funnyman's most unique feature is it's ability to store funny images and show them to you later."
                />

                <base-button
                    class="item"
                    buttonText="Hug commands!"
                    buttonDesc="Ever wanted to hug or cuddle your long distance friends? Funnyman can help you!"
                />
                <base-button
                    class="item"
                    buttonText="Open source!"
                    buttonDesc="If you want, you can even look at my garbage source code by clicking one of the buttons at the bottom!"
                />
                <base-button
                    class="item"
                    buttonText="Want it?"
                    buttonDesc="Well you cant have it because its way too buggy to be public :)"
                />
            </div>
            <return-home></return-home>
            <div id="container">
                <link-button
                    buttonText="V2 Source code"
                    link="https://github.com/Kopymatic/FunnymanBot"
                />
                <link-button
                    buttonText="V3 WIP Source code"
                    link="https://github.com/Kopymatic/Funnyman"
                />
            </div>
        </div>
    </body>
</template>

<script>
import ReturnHome from "@/components/ReturnHome.vue";
import KopymaticHeader from "@/components/Header.vue";
import BaseButton from "../components/EmptyButton.vue";
import LinkButton from "../components/LinkButton.vue";

export default {
    components: { ReturnHome, KopymaticHeader, BaseButton, LinkButton },
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

@media screen and (max-width: 800px) {
    #container {
        flex-direction: column;
    }
}
</style>
