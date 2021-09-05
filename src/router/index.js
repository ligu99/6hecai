import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/record',
    name: 'Record',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Record" */ '../views/Record.vue')
  },
  {
    path: '/trend',
    name: 'Trend',
    component: () => import(/* webpackChunkName: "Trend" */ '../views/Trend.vue')
  },
  {
    path: '/selectcode',
    name: 'selectCode',
    component: () => import(/* webpackChunkName: "Trend" */ '../views/selectCode.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
