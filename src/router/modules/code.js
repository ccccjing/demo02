import Layout from '@/layout'

const codeRouter = {
  path: '/code',
  component: Layout,
  redirect: '/code/qr-code',
  name: 'Code',
  meta: { title: '条码管理', icon: 'el-icon-postcard', roles: 'admin' },
  children: [
    {
      path: 'qr-code',
      component: () => import('@/views/code/qr-code'),
      name: 'QrCode',
      meta: { title: '二维码' }
    },
    {
      path: 'bar-code',
      component: () => import('@/views/code/bar-code'),
      name: 'BarCode',
      meta: { title: '条形码' }
    }
  ]
}

export default codeRouter
