import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const AuthLogin = () => import('./packages/auth/login/AuthLogin.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/auth/login',
    component: AuthLogin,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
