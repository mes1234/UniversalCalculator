import Vue from 'vue'
import Router from 'vue-router'
import Calc from './components/Calc.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/calc',
      name: 'calc',
      component: Calc
    }
  ]
})
