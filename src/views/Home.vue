<template>
    <div style="all">
        <div class="center">
            <kopyatic-header> </kopyatic-header>
            <h1 id="subtitle">I'm an indie developer. Here are some of my projects.</h1>
            <div class="grid">
                <div class="center">
                    <link-button
                        buttonText="Funnyman"
                        link="Funnyman.vue"
                        buttonDesc="My first discord bot.
                    Currently private."
                    >
                    </link-button>
                </div>
                <div class="center">
                    <a href="projects/CookieClickerBot.html">
                        <button>
                            <h1>CookieClicker</h1>
                            <p>My second attempt at a discord bot. Unfinished.</p>
                        </button>
                    </a>
                </div>
                <div class="center">
                    <a href="projects/Carin.html">
                        <button>
                            <h1>Carin'</h1>
                            <p>
                                My second functional discord bot. Still actively being worked on.
                                <br />Click me to add to you server!
                            </p>
                        </button>
                    </a>
                </div>
                <div class="center">
                    <a href="projects/2DPlatformer.html">
                        <button>
                            <h1>2D Platformer</h1>
                            <p>A 2D platformer made in Godot. Indefinitely suspended.</p>
                        </button>
                    </a>
                </div>
                <div class="center">
                    <a href="index.html">
                        <button>
                            <h1>This webpage!</h1>
                            <p>This webpage is my latest project!</p>
                        </button>
                    </a>
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
import LinkButton from "@/components/LinkButton.vue";
import KopyaticHeader from "@/components/Header.vue";

export default {
    components: { LinkButton, KopyaticHeader },
    name: "HelloWorld",
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Press+Start+2P&family=Rock+Salt&display=swap");

/* unvisited link */
a:link {
    color: white;
    text-decoration: underline;
}

/* visited link */
a:visited {
    color: white;
}

/* mouse over link */
a:hover {
    color: rgb(212, 3, 29);
}

/* selected link */
a:active {
    color: rgb(212, 3, 29);
}

a.no-underline {
    text-decoration: none;
}

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

#return-link {
    display: flex;
    justify-content: center;
}

.center {
    text-align: center;
}

.grid {
    /* display: grid;
    grid-template-columns: grid-auto-columns;
    grid-template-rows: 1fr;
    place-items: center; */
    height: 100%;
    margin: 50px 25px;
    padding: 5px 100px;
    display: grid;
    grid-gap: 20px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
