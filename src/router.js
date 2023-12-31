import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import oprojektu from './components/OProjektu.vue';
import ChuckNorris from './components/ChuckNorris.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/chuck-norris', component: ChuckNorris },
    { path: '/oprojektu', component: oprojektu }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
