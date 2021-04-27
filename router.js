import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Test from '~/pages/testpage'
import Error404 from '~/pages/error404'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'index',
        path: '/',
        component: Index
      },
      {
        name: 'testpage',
        path: '/testpage',
        component: Test
      },
      {
        name: 'error404',
        path: '*',
        component: Error404
      }
    ]
  })
}