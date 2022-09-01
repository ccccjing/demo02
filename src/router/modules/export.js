import Layout from '@/layout'

const exportRouter = {
  path: '/export',
  component: Layout,
  redirect: '/export/word-file',
  name: 'Export',
  meta: { title: '文件管理', icon: 'el-icon-folder-opened' },
  children: [
    {
      path: 'word-file',
      component: () => import('@/views/export/word-file'),
      name: 'WordFile',
      meta: { title: 'Word' }
    },
    {
      path: 'excel-file',
      component: () => import('@/views/export/excel-file'),
      name: 'ExcelFile',
      meta: { title: 'Excel' }
    },
    {
      path: 'word-table-file',
      component: () => import('@/views/export/word-table-file'),
      name: 'WordTableFile',
      meta: { title: 'WordTable' }
    },
  ]
}

export default exportRouter
