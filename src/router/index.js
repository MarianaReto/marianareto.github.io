// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'About',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'Contact',
        name: 'Contact Me',
        component: () => import('@/views/Contact.vue')
      },
      {
        path: 'Projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue')
      },
      {
        path: 'Skills',
        name: 'Skills',
        component: () => import('@/views/Skills.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
