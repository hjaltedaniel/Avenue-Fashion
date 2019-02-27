import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProductPage from './views/ProductPage.vue'
import GenderCollection from './views/GenderCollection.vue'
import CategoryCollection from './views/CategoryCollection.vue'
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
      path: '/gender/:gender',
      name: 'gender',
      component: GenderCollection,
      props: true
    },
    {
      path: '/category/:gender/:style/:category',
      name: 'category',
      component: CategoryCollection,
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