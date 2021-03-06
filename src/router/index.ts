import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      //name: 'home',
      //component: () => import('../views/HomeView.vue')
      name: 'home',
      component: () => import('../views/My01View.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/my01',
      name: 'my01',
      component: () => import('../views/My01View.vue')
    }
  ]
})

export default router
