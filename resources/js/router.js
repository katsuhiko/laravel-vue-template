import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/pages/HomePage.vue'
import Abount from './components/pages/AboutPage.vue'

Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: Abount
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
