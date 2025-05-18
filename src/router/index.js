import { createRouter, createWebHashHistory } from 'vue-router'
import BmiMain from '../components/BmiMain.vue'
import Overview from '../components/Overview.vue'

const routes = [
  { path: '/', component: BmiMain },
  { path: '/overview', component: Overview }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router