import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: { title: '表格管理', icon: 'el-icon-s-claim' },
  children: [
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: '复合表格' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: '拖拽表格' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: '编辑表格' }
    },
    {
      path: 'currency-table',
      component: () => import('@/views/table/currency-table'),
      name: 'CurrencyTable',
      meta: { title: '通用表格' }
    },
    {
      path: 'upload-excel',
      component: () => import('@/views/table/upload-excel'),
      name: 'UploadExcel',
      meta: { title: '导入表格' }
    }
  ]
}

export default tableRouter
