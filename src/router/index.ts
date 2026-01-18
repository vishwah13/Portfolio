import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/Resume.vue')
  },
  {
    path: '/game-projects',
    name: 'GameProjects',
    component: () => import('@/views/GameProjects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/BlogList.vue')
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('@/views/BlogPost.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
