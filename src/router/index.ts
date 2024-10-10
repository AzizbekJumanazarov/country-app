import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import main from '@/router/routes/main';

const routes: Array<RouteRecordRaw> = [...main];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
