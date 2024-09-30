import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
