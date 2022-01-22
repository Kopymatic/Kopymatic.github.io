<template>
    <body>
        <div class="center">
            <kopymatic-header> </kopymatic-header>
            <h1 id="subtitle">Carin'</h1>
            <p>My second functional discord bot. Still actively being worked on.</p>
        </div>
        <div id="carin-buttons">
            <link-button
                buttonText="Add Carin' to your server!"
                buttonDesc=""
                link="https://discord.com/api/oauth2/authorize?client_id=932449751197155329&permissions=8&scope=applications.commands%20bot"
            ></link-button>
            <internal-link-button
                buttonText="Back to main page"
                buttonDesc=""
                link="/home/"
            ></internal-link-button>
            <link-button
                buttonText="View the source code on GitHub!"
                buttonDesc=""
                link="https://www.github.com/Kopymatic/Carin"
            ></link-button>
        </div>
        <return-home> </return-home>
    </body>
</template>

<script>
import ReturnHome from "@/components/ReturnHome.vue";
import KopymaticHeader from "@/components/Header.vue";
import LinkButton from "@/components/LinkButton.vue";
import InternalLinkButton from "@/components/InternalLinkButton.vue";

export default {
    components: { ReturnHome, KopymaticHeader, LinkButton, InternalLinkButton },
};
</script>
