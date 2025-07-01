import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import Skills from '../pages/Skills.vue'
import Experience from '../pages/Experience.vue'
import Contacts from '../pages/Contacts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/experience', component: Experience },
  { path: '/contacts', component: Contacts },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
