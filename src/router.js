import Vue from 'vue'
import Router from 'vue-router'
import Calc from './components/Calc.vue'
import Login from './components/Login.vue'
import { store } from './store/store';

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
      component: Calc,
      beforeEnter: (to, from, next) => {
        if(!store.state.token) {
          next('/');
       } else {
         next();
       }
      }
    }
  ]
})
