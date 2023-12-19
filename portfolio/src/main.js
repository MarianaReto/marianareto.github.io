import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Works from "@/components/Works.vue";
import Contact from "@/components/Contact.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: App},
        {path: '/about', component: About},
        {path: '/skills', component: Skills},
        {path: '/works', component: Works},
        {path: '/contact', component: Contact}
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
