import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../pages/Home.vue'), // Substitua pelo caminho real do seu componente Home
  },
//   {
//     path: '/',
//     name: 'Login',
//     component: () => import('~/pages/Login.vue'), // Página de login
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
