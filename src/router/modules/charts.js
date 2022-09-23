import Layout from '@/layout'

const codeRouter = {
  path: '/charts',
  component: Layout,
  redirect: '/charts/pictorial-bar',
  name: 'Charts',
  meta: { title: '视图模型', icon: 'el-icon-postcard', roles: 'admin' },
  children: [
    {
      path: 'pictorial-bar',
      component: () => import('@/views/charts/pictorial-bar'),
      name: 'PictorialBar',
      meta: { title: '驼峰' }
    },
  ]
}

export default codeRouter
