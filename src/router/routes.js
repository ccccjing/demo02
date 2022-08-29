import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

import Layout from '@/layout'

import tableRouter from "./modules/table";
import exportRouter from "./modules/export";
import codeRouter from "./modules/code";

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error/401.vue'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  tableRouter,
  exportRouter
]

export const asyncRoutes = [
  codeRouter
]

let routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err);
}

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})