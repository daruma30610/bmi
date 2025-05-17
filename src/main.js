import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Piniaストアを作成
const pinia = createPinia()

// Vueアプリケーションを作成
const app = createApp(App)

// PiniaをVueアプリケーションに登録
app.use(pinia)

// アプリケーションをマウント
app.mount('#app')