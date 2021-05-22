import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Help from '@/views/Help.vue'
import Auth from '@/views/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'Main'
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      layout: 'Main'
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      layout: 'Auth'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
