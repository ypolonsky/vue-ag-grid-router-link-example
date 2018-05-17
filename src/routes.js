import Vue from 'vue'
import Router from 'vue-router'
import Master from './Master.vue'
import Details from './Details.vue'

Vue.use(Router)

export default new Router(
  {
    routes: [
      {
        path: '/',
        name: 'grid',
        component: Master
      },
      {
        path: '/details',
        name: 'entry',
        component: Details
      }
    ]
  }
)
