import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  // base: window.__POWERED_BY_QIANKUN__ ? '/app2' : '/',
  mode: 'hash',
  base: '/app2',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
