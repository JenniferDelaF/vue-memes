import { createRouter, createWebHistory } from 'vue-router'
import CardsView from '../views/CardsView.vue'
import PaginaView from  '../views/PaginaView.vue'

const routes = [
  {
    path: '/',
    name: 'cards',
    component: CardsView
  },
  {
    path: '/pagina',
    name: 'pagina',
    component: PaginaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
