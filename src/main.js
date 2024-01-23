// main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from './stores'
import App from './App.vue'
import PageOne from './views/PageOne.vue'
import PageTwo from './views/PageTwo.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', component: PageOne },
  { path: '/stranica1', component: PageOne },
  { path: '/stranica2', component: PageTwo },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(useStore).use(router).mount('#app')
