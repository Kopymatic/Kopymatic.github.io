<template>
    <body>
        <div class="center">
            <kopymatic-header> </kopymatic-header>
            <h1 id="subtitle">Carin'</h1>
        </div>
        <div id="container">
            <empty-button
                class="item"
                buttonText="A bot that cares about you."
                buttonDesc="Carin' is a bot that wants the best for you, with various features to check in on you and your server members."
            />
            <empty-button
                class="item"
                buttonText="Mood Logger"
                buttonDesc="Carin' has a mood logger, to help you track how you're feeling. Get started with /moodlog."
            />
            <empty-button
                class="item"
                buttonText="Reminders"
                buttonDesc="Carin' has reminders built in. To use them, do /remind."
            />
            <empty-button
                class="item"
                buttonText="Water reminders"
                buttonDesc="Carin' can remind you to drink water every 30 minutes, or at an interval of your choosing. Do /watercheck."
            />
            <empty-button
                class="item"
                buttonText="Daily Check-ins"
                buttonDesc="Soon, Carin' will be able to check in on you or your server members, each day!"
            />
            <empty-button
                class="item"
                buttonText="Still in development"
                buttonDesc="Carin' is still in active development, meaning that new features are coming frequently!"
            />
            <link-button
                class="item"
                buttonText="Sounds cool?"
                buttonDesc="Awesome! Click here to add Carin' to your server!"
                link="https://discord.com/api/oauth2/authorize?client_id=932449751197155329&permissions=8&scope=applications.commands%20bot"
            />
            <link-button
                class="item"
                buttonText="Open source!"
                buttonDesc="Click here to view the source code on GitHub!"
                link="https://www.github.com/Kopymatic/Carin"
            ></link-button>
        </div>
        <return-home class="center"> </return-home>
    </body>
</template>

<script>
import ReturnHome from "@/components/ReturnHome.vue";
import KopymaticHeader from "@/components/Header.vue";
import LinkButton from "@/components/LinkButton.vue";
import EmptyButton from "../components/EmptyButton.vue";

export default {
    components: { ReturnHome, KopymaticHeader, LinkButton, EmptyButton },
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
