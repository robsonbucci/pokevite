import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeViews.vue';
import AboutView from '../views/AboutViews.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
