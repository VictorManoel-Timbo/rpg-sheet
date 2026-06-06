import { createRouter, createWebHashHistory } from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'
import Ficha from '../views/Ficha.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicial',
      component: TelaInicial
    },
    {
      path: '/ficha/:id',
      name: 'ficha',
      component: Ficha,
      props: true
    }
  ],
})

export default router