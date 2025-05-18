import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Overview from './components/Overview.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/overview', component: Overview }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router