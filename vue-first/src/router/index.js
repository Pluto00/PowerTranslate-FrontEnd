import Vue from 'vue'
import Router from 'vue-router'

import Translate from '@/components/translate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Translate',
      component: Translate
    }
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home,
    //   redirect: 'index',
    //   children: [
    //     {
    //       path: '/index',
    //       name: 'AppIndex',
    //       component: AppIndex,
    //       meta: {
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: '/translate',
    //       name: 'Translate',
    //       component: Translate,
    //       meta: {
    //         requireAuth: true
    //       }
    //     }
    //   ]
    // }
  ]
})
