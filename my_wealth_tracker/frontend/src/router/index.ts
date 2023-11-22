import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'dashboard' }
    },
    {
      path: '/crypto',
      name: 'crypto',
      component: HomeView,
      meta: { title: 'crypto' }
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: HomeView,
      meta: { title: 'stocks' }
    },
    {
      path: '/cash',
      name: 'cash',
      component: HomeView,
      meta: { title: 'cash' }
    },
    {
      path: '/other-investments',
      name: 'other-investments',
      component: HomeView,
      meta: { title: 'other investments' }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' }
    }
  ]
})

export default router
