<template>
    <div id="shit">
        <div class="center">
            <kopyatic-header> </kopyatic-header>
            <h1 id="subtitle">I'm an indie developer. Here are some of my projects.</h1>
            <div id="container">
                <link-button
                    class="item"
                    buttonText="Funnyman"
                    link="/funnyman/"
                    buttonDesc="My first discord bot.
                    Currently private."
                />
                <link-button
                    class="item"
                    buttonText="Carin'"
                    link="/carin/"
                    buttonDesc="My first public discord bot. Still actively being worked on. 
                        Click here to add to your server!"
                />
                <link-button
                    class="item"
                    buttonText="CookieClicker"
                    link="/cookieclickerbot/"
                    buttonDesc="My second attempt at a discord bot. Unfinished."
                />
                <link-button
                    class="item"
                    buttonText="2D Platformer"
                    link="/2DPlatformer/"
                    buttonDesc="2D platformer made in godot"
                />
                <link-button
                    class="item"
                    buttonText="This webpage!"
                    link="/home/"
                    buttonDesc="This is my latest project!"
                />
                <link-button class="item" buttonText="About me" link="/about/" buttonDesc="" />
            </div>

            <div class="center">
                <h1>Hampter</h1>
                <router-link to="/hampter/">
                    <img src="@/assets/hampter.jpg" alt="hampter" id="hampter" />
                </router-link>
                <p>Note: I did not make hampter.</p>
            </div>

            <socials-footer />
        </div>
    </div>
</template>

<script>
import LinkButton from "@/components/InternalLinkButton.vue";
import KopyaticHeader from "@/components/Header.vue";
import SocialsFooter from "@/components/SocialsFooter.vue";

export default {
    components: { LinkButton, KopyaticHeader, SocialsFooter },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Press+Start+2P&family=Rock+Salt&display=swap");

#shit {
    font-size: large;
    background-image: linear-gradient(red, orange, yellow, green, blue, purple);
    color: rgb(255, 255, 255);
    font-family: "Balsamiq Sans", cursive;
    /* text-align: center; */
}

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

#hampter {
    max-width: 100%;
    height: auto;
    width: auto;
    transition-duration: 0.3s;
}
#hampter:hover {
    transform: scale(1.05);
}
</style>
