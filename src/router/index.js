import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import home from '@/components/home'
import skills from '@/components/skills'
import contact from '@/components/contact'
import about from '@/components/about'
import projects from '@/components/projects'
import mikipedia from '@/components/themes/mikipedia'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/skills',
      name: 'Skills',
      component: skills
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
    {
      path: '/projects',
      name: 'Projects',
      component: projects
    },
    {
      path: '/mikipedia',
      name: 'Mikipedia',
      component: mikipedia
    }
  ]
})
