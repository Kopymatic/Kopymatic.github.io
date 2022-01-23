<template>
    <body>
        <div class="center">
            <kopymatic-header> </kopymatic-header>
            <h1 id="subtitle">Funnyman</h1>
            <div class="flex-column">
                <div class="flex-row">
                    <base-button
                        buttonText="My first discord bot."
                        buttonDesc="Started by me in late 2020, the bot has been in development for over a year."
                    />
                    <base-button
                        buttonText="Feature Rich!"
                        buttonDesc="Funnyman has many features. Here are a few examples."
                    />
                    <base-button
                        buttonText="NoContext"
                        buttonDesc="Probably Funnyman's most unique feature is it's ability to store funny images and show them to you later."
                    />
                </div>
                <div class="flex-row">
                    <base-button
                        buttonText="Hug commands!"
                        buttonDesc="Ever wanted to hug or cuddle your long distance friends? Funnyman can help you!"
                    />
                    <base-button
                        buttonText="Open source!"
                        buttonDesc="If you want, you can even look at my garbage source code by clicking one of the buttons at the bottom!"
                    />
                    <base-button
                        buttonText="Want it?"
                        buttonDesc="Well you cant have it because its way too buggy to be public :)"
                    />
                </div>
            </div>
            <return-home></return-home>
            <div class="flex-column">
                <div class="flex-row">
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
        </div>
    </body>
</template>

<script>
import ReturnHome from "@/components/ReturnHome.vue";
import KopymaticHeader from "@/components/Header.vue";
import BaseButton from "../components/BaseButton.vue";
import LinkButton from "../components/LinkButton.vue";

export default {
    components: { ReturnHome, KopymaticHeader, BaseButton, LinkButton },
};
</script>

<style scoped>
.flex-column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    align-self: center;
    gap: 12px;
    justify-content: center;
}
.flex-row {
    gap: 12px;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-basis: 0;
    align-self: center;
    justify-content: center;
}

@media screen and (max-width: 800px) {
    .flex-row {
        flex-direction: column;
    }
}

/* .flex-row > base-button {
    flex-grow: 1;
    flex-basis: 0;
} */
</style>
