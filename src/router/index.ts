import { createRouter, createWebHistory } from 'vue-router'
import Parents from  '../views/Parents.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Parents',
      component: Parents
    },
  ]
})

export default router
