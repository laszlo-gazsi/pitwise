import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: '/vehicles',
    },
    {
      path: '/makes',
      name: 'Makes',
      component: () => import('@/views/MakesView.vue'),
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: () => import('@/views/VehiclesView.vue'),
    },
  ],
});

export default router;
