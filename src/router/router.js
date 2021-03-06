// import HelloWorld from '@/components/HelloWorld'
// import Main from '@/views/Main.vue'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  hidden: true,
  redirect: 'noredirect',
  meta: {
    title: 'Login - 登录'
  },
  component: () => import('@/views/login')
};
import Layout from '../views/layout/Layout'

export const mainRoute={

    path: '/index',

    name: 'index',
    component: Layout,
    meta: {
      title: '首页',
      icon:'el-icon-menu',
    },
    children: [
      {
        path: 'index',
        name: 'Form',
        meta: {
          title: '首页',
          icon:'el-icon-menu',
        },

        component: () => import('@/components/HelloWorld')
      }
    ]

}
export const page404 = {
  path: '/*',
  name: 'error-404',
  hidden: true,
  meta: {
    title: '404-页面不存在',

  },
  component: () => import('@/views/error-page/404.vue')
};

// export const page403 = {
//   path: '/403',
//   meta: {
//     title: '403-权限不足'
//   },
//   name: 'error-403',
//   component: () => import('@/views/error-page/403.vue')
// };

// export const page500 = {
//   path: '/500',
//   meta: {
//     title: '500-服务端错误'
//   },
//   name: 'error-500',
//   component: () => import('@/views/error-page/500.vue'),
// };

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
// export const otherRouter = {
//   path: '/',
//   name: 'otherRouter',
//   redirect: '/home',
//   component: Main,
//   children: [
//     { path: 'home', title: '首页', name: 'home_index', component: () => import('@/views/home/home.vue') },
//     { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space') },
//     { path: 'add-article', title: '创建文章', name: 'add_article', component: () => import('@/views/articles/add-article.vue') },
//     { path: 'preview', title: '文章预览', name: 'preview_article', component: () => import('@/views/articles/preview.vue') },
//   ]
// };

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/mm',
    meta:{ icon: 'el-icon-menu', title: '面板',},
    name: 'dashboard',
    component: Layout,
    // redirect: 'noredirect',
    children: [
          {  meta:{icon:'el-icon-menu',title: '首页',}, path: 'home',  name: 'articles', component: () => import('@/components/HelloWorld') },
          {  meta:{icon:'el-icon-menu',title: '个人中心',},path: 'ownspace', title: '个人中心', name: 'categories', component: () => import('@/components/HelloWorld') },
          {  meta:{icon:'el-icon-menu',title: '创建文章',},path: 'add-article', title: '创建文章', name: 'friendslinks', component: () => import('@/components/HelloWorld') },
          {  meta:{icon:'el-icon-menu',title: '文章预览',},path: 'preview', title: '文章预览', name: 'systems', component: () => import('@/components/HelloWorld') },
    ]


  },

  page404

];
export const routers = [
  loginRouter,
  mainRoute,
  // preview,
  // otherRouter,
  // ...appRouter,
  // page500,
  // page403,
];



