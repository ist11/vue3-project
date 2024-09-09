import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//引入持久化插件
import persist from 'pinia-plugin-persistedstate'

//要求pinia使用持久化插件
app.use(createPinia().use(persist))

app.use(router)

app.mount('#app')
