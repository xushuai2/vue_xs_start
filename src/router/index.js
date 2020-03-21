import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import xushuaidemo from '@/components/demo2'
import demo3 from '@/components/demo3'
import tableElement from '@/components/table_element'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo3',
      name: 'HelloWorlddemo3',
      component: demo3
    },
    {
      path: '/xu/:userId',
      name: 'xushuaidemo',
      component: xushuaidemo
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },,
    {
      path: '/element',
      name: 'tableElement',
      component: tableElement
    }
  ]
})
