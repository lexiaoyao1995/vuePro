import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/Homepage'
import Item from '../pages/Item'

Vue.use(Router)

export default new Router({
  model: history,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/item',
      component: Item
    }

  ]
})
