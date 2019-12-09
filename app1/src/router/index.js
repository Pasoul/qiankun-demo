import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '../about'
Vue.use(Router)

export default new Router({
  // base: window.__POWERED_BY_QIANKUN__ ? '/app1' : '/',
  base: 'app1',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/app1/about',
      name: 'about',
      component: About
    }
  ]
})
