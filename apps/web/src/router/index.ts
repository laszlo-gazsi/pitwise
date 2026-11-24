import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/vehicles',
    },
    {
      path: '/makes',
      component: () => import('@/views/MakesView.vue'),
    },
    {
      path: '/vehicles',
      component: () => import('@/views/VehiclesView.vue'),
    },
  ],
});

export default router;
