import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProductPage from './views/ProductPage.vue'
import ContentPage from './views/ContentPage.vue'
import UserPage from './views/UserPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductPage,
      props: true
    },
    {
      path: '/:id',
      name: 'content',
      component: ContentPage,
      props: true
    },
    {
      path: '/sign-in',
      name: 'user',
      component: UserPage,
    }
  ]
})