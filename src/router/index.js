import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Layout/Home.vue'
import About from '@/views/Layout/About.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/Home',
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home
        },
        {
          path: 'About',
          name: 'About',
          component: About
        }
      ]
    }
  ]
})

export default router
