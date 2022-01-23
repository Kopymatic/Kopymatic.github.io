<template>
    <body>
        <div class="center">
            <kopymatic-header> </kopymatic-header>
            <h1 id="subtitle">Funnyman</h1>
            <div class="grid">
                <base-button
                    buttonText="My first discord bot."
                    buttonDesc="Started by me in late 2020, the bot has been in development for over a year."
                />
                <base-button
                    buttonText="Feature Rich!"
                    buttonDesc="Funnyman has many features. Here are a few examples."
                />
                <base-button
                    buttonText="NoContext."
                    buttonDesc="Probably Funnyman's biggest feature, the ability to store funny images and show them to you later."
                />
                <base-button
                    buttonText="People!"
                    buttonDesc="Using the same code, you can store pictures of yourself or friends!"
                />
                <base-button
                    buttonText="Hug commands!"
                    buttonDesc="Ever wanted to hug or cuddle your long distance friends? Funnyman can help you!"
                />
                <link-button
                    buttonText="Open source!"
                    buttonDesc="If you want, you can even look at my garbage source code by clicking here!"
                    link="https://github.com/Kopymatic/FunnymanBot"
                />
                <base-button
                    buttonText="Want it?"
                    buttonDesc="Well you cant have it because its way too buggy to be public :)"
                />
            </div>
            <return-home></return-home>
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
.grid {
    height: 100%;
    margin: 1% 5% 10% 5%;
    gap: 25px;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.flex {
    height: 100%;
    margin: 1% 5% 10% 5%;
    gap: 25px;
    display: flex;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
