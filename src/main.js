import './styles/my.css'
import './styles/mysmall.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Menu from './components/Menu.vue'
import Pre from './components/Pre.vue'
// import LectureRecord from './views/LectureRecord.vue'

if (!sessionStorage.getItem('page-loaded')) {
  document.body.classList.add('lock-scroll')
}

// 先 createApp
const app = createApp(App)

// 再註冊全局元件
app.component('Menu', Menu)
app.component('Pre', Pre)

// 再使用 router
app.use(router)

// 最後 mount
app.mount('#app')
