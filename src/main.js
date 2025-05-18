import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// Piniaストアを作成
const pinia = createPinia()

// Vueアプリケーションを作成
const app = createApp(App)

// PiniaをVueアプリケーションに登録
app.use(pinia)
app.use(router)

// アプリケーションをマウント
app.mount('#app')