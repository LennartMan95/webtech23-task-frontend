import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '@/views/Tasks'
import Home from '@/views/Home'
import About from '@/views/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  LinkActiveClass: 'active',
  routes
})

export default router
