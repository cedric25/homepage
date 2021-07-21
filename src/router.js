import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  {
    name: 'prisma-talk',
    path: '/2021-07/prisma-talk',
    beforeEnter() {
      console.log('plop ?')
      window.location.replace('https://prisma-talk.netlify.app/')
    },
  },
  {
    path: '/prisma-talk',
    beforeEnter() {
      console.log('plop 2 ?')
      window.location.replace('https://prisma-talk.netlify.app/')
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
