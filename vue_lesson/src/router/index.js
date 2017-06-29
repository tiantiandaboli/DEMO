import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import lesson10 from '@/components/lesson10'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lesson10',
      name: 'lesson10',
      component: lesson10
    }
  ]
})
