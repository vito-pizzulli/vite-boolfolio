import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjectList from './pages/AppProjectList.vue';
import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: AppProjectList
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AppAbout
        },
    ]
})

export { router };