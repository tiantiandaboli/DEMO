import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/newlist.vue'
import good from '@/components/good'
import article from '@/components/article'
import userpage from '@/components/userpage'
import mypage from '@/components/mypage'
import share from '@/components/share'

import store from '../router/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history'
});

router.beforeEach((to, from, next) => {
  store.app.$store.dispatch('updateLoadingStatus')
  next()
})

router.afterEach((to)=> {
  setTimeout( function(){
    store.app.$store.dispatch('updateLoadingStatus1')}
    ,500)
})

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: index
    },
    {
    	path: '/good',
    	name: good,
    	component: good
    },
    {
      path: '/topic/:id',
      name: 'Article',
      component: article
    },
    {
      path: '/user/:loginname',
      name: 'Userpage',
      component: userpage
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: mypage
    },
    {
      path: '/share',
      name: 'Myshare',
      component: share
    }
  ]
})
