<template>
    <div style="all">
        <div class="center">
            <kopyatic-header> </kopyatic-header>
            <h1 id="subtitle">I'm an indie developer. Here are some of my projects.</h1>
            <div class="grid">
                <div class="center">
                    <link-button
                        buttonText="Funnyman"
                        link="/funnyman/"
                        buttonDesc="My first discord bot.
                    Currently private."
                    >
                    </link-button>
                </div>
                <div class="center">
                    <link-button
                        buttonText="CookieClicker"
                        link="/cookieclickerbot/"
                        buttonDesc="My second attempt at a discord bot. Unfinished."
                    >
                    </link-button>
                </div>
                <div class="center">
                    <link-button
                        buttonText="Carin'"
                        link="/carin/"
                        buttonDesc="My second functional discord bot. Still actively being worked on. 
                        Click here to add to you server!"
                    >
                    </link-button>
                </div>
                <div class="center">
                    <link-button
                        buttonText="2D Platformer"
                        link="/2DPlatformer/"
                        buttonDesc="2D platformer made in godot"
                    >
                    </link-button>
                </div>
                <div class="center">
                    <link-button
                        buttonText="This webpage!"
                        link="/home/"
                        buttonDesc="This is my latest project!"
                    >
                    </link-button>
                </div>
            </div>

            <div class="center">
                <h1>Hampter</h1>
                <a href="https://youtu.be/dQw4w9WgXcQ">
                    <img src="@/assets/hampter.jpg" alt="hampter" />
                </a>
                <p>Note: I did not make hampter.</p>
            </div>
        </div>
    </div>
</template>

<script>
import LinkButton from "@/components/InternalLinkButton.vue";
import KopyaticHeader from "@/components/Header.vue";

export default {
    components: { LinkButton, KopyaticHeader },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Press+Start+2P&family=Rock+Salt&display=swap");

.invisiblelink {
    text-decoration: none;
}

#subtitle {
    font-size: 200%;
}

#carin-buttons {
    height: 100%;
    padding: 5px 100px;
    display: grid;
    grid-gap: 20px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

.grid {
    /* display: grid;
    grid-template-columns: grid-auto-columns;
    grid-template-rows: 1fr;
    place-items: center; */
    height: 110%;
    margin: 1% 5%;
    display: grid;
    grid-gap: 20px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

img {
    max-width: 100%;
    height: auto;
    width: auto\9; /* ie8 */
}
</style>

<style>
#all {
    font-size: large;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-family: "Balsamiq Sans", cursive;
}
</style>
