import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Video from '@/pages/Video'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {path:'/',alias:'/home',components:Home},
    {
        path:'/video',
        name:'Video',
        component: Video
    }
  ]
})
