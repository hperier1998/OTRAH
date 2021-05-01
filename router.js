import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Demo from '~/pages/demo'
import Register from '~/pages/register'
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
        name: 'demo',
        path: '/demo',
        component: Demo
      },
      {
        name: 'resgister',
        path: '/register',
        component: Register
      },
      {
        name: 'error404',
        path: '*',
        component: Error404
      }
    ]
  })
}