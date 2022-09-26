import Layout from '@/layout'

const codeRouter = {
  path: '/charts',
  component: Layout,
  redirect: '/charts/bar-charts',
  name: 'Charts',
  meta: { title: '视图模型', icon: 'el-icon-s-data', roles: 'admin' },
  children: [
    {
      path: 'pictorial-bar',
      component: () => import('@/views/charts/pictorial-bar'),
      name: 'PictorialBar',
      meta: { title: '驼峰' }
    },
    {
      path: 'bar-charts',
      component: () => import('@/views/charts/bar-charts'),
      name: 'BarCharts',
      meta: { title: '柱状图' }
    },
  ]
}

export default codeRouter
