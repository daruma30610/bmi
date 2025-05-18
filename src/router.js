import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import Overview from './components/Overview.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/overview', component: Overview }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router