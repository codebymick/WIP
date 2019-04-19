import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import skills from '@/components/skills'
import contact from '@/components/contact'
import about from '@/components/about'
import projects from '@/components/projects'
import projectsChild from '@/components/projectsChild'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/projects/:name',
      name: 'Projects',
      component: projects,
      children: [
        {
          path: 'child',
          component: projectsChild
        }
      ]
    }
  ]
})
