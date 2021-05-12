import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Demo from '~/pages/demo'
import Session from '~/pages/session'
import Inscription from '~/pages/inscription'
import Connexion from '~/pages/connexion'
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
      name: 'session',
      path: '/session',
      component: Session
      },
      {
        name: 'inscription',
        path: '/inscription',
        component: Inscription
      },
      {
        name: 'connexion',
        path: '/connexion',
        component: Connexion
      },
      {
        name: 'error404',
        path: '*',
        component: Error404
      }
    ]
  })
}