import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjectList from './pages/AppProjectList.vue';
import AppProjectShow from './pages/AppProjectShow.vue';
import AppAbout from './pages/AppAbout.vue';
import AppNotFound from './pages/AppNotFound.vue';

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
            path: '/projects/:slug',
            name: 'projects.show',
            component: AppProjectShow
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AppAbout
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: AppNotFound
        }
    ]
})

export { router };