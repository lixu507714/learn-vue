import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Understanding from '@/components/Understanding'
import TodoList from '@/components/TodoList'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index', 
      component: Index
    },
    {
      path: '/understanding',
      name: 'Understanding',
      component: Understanding
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
