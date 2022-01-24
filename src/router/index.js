import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Funnyman from "@/views/Funnyman.vue";
import CookieClicker from "@/views/CookieClicker.vue";
import Carin from "@/views/Carin.vue";
import twpDPlatformer from "@/views/2DPlatformer.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Hampter from "@/views/Hampter.vue";
import About from "@/views/About.vue";
import Shit from "@/views/Shit.vue";

const routes = [
    {
        path: "/",
        redirect: "/home/",
    },
    {
        path: "/home/",
        name: "Home",
        component: Home,
    },
    {
        path: "/funnyman/",
        name: "Funnyman",
        component: Funnyman,
    },
    {
        path: "/cookieclickerbot/",
        name: "CookieClickerBot",
        component: CookieClicker,
    },
    {
        path: "/carin/",
        name: "Carin'",
        component: Carin,
    },
    {
        path: "/2DPlatformer/",
        name: "2D Platformer",
        component: twpDPlatformer,
    },
    {
        path: "/hampter/",
        name: "Hampter",
        component: Hampter,
    },
    {
        path: "/about/",
        name: "About Me",
        component: About,
    },
    {
        path: "/shit/",
        name: "shitty website",
        component: Shit,
    },
    {
        path: "/:catchAll(.*)*",
        name: "PageNotFound",
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    base: "/home/",
});

router.beforeEach(() => {
    window.scrollTo(0, 0);
});

export default router;
