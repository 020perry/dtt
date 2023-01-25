import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeOverview.vue'

const routes = [
  {
    path: '/',
    name: 'HomeOverview',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/create',
    name: 'HouseCreate',
    component: () => import(/* webpackChunkName: "create" */ '../views/HouseCreate.vue')
  },
  {
    path: '/show/:id',
    name: 'HouseShow',
    component: () => import(/* webpackChunkName: "show" */ '../views/HouseShow.vue')
  },
  { path: '/edit/:id',
    name: 'HouseEdit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/HouseEdit.vue'),

}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
     mode: 'history'
})

export default router
