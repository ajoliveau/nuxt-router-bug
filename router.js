import Vue from 'vue'
import Router from 'vue-router'

import FirstPage from '~/components/pages/FirstPage.vue'
import SecondPage from '~/components/pages/SecondPage.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/page1',
        component: FirstPage
      },
      {
        path: '/page2',
        component: SecondPage
      },
    ]
  })
}
