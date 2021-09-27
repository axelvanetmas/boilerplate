import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "/src/pages/Home.vue";
import Team from "/src/pages/Team.vue";
import Actuality from '/src/pages/Actuality.vue'
const routes = [{
    path: "/",
    name: "Home",
    component: Home,
}, {
    path: "/team",
    name: "Team",
    component: Team,
}, {
    path: "/actuality",
    name: "Actuality",
    component: Actuality,
}, ];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;