import Vue from 'vue'
import Router from 'vue-router'
import article from '@/components/article'
import news from '@/components/news'
import hello from '@/components/hello'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
      	main: news
      }
    },
    {
    	path: '/topic/:id',
    	name: 'ArticleRoute',
    	components: {
    		main: article
    	}
    },
    {
    	path: '/user/:loginname',
    	name: 'Userpage',
    	components: {
    		main: user
    	}
    },
    {
      path: '/user/:loginname',
      redirect: '/user:loginname'
    }
  ]
})
