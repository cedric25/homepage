import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  {
    name: 'prisma-talk',
    path: '/2021-07/prisma-talk',
    beforeEnter() {
      window.location.replace('https://prisma-talk.netlify.app/')
    },
  },
  { path: '/prisma-talk', redirect: { name: 'prisma-talk' } },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
})

export default router
