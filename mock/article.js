const Mock = require('mockjs')

const list = []
const count = 100

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    name: '@cname',
    'sex|1': ['男', '女'],
    'tel|11': /\d/,
    datetime: '@datetime("yyyy-MM-dd")'
  }))
}

const staffList = []

for (let i = 0; i < count; i++) {
  staffList.push(Mock.mock({
    workNumber: '@increment',
    name: '@cname',
    'sex|1': ['男', '女'],
    birthday: '@datetime("yyyy-MM-dd")',
    'tel|11': /\d/,
    country: '@county(true)',
    email: '@email("qq.com")'
  }))
}

module.exports = [
  {
    url: '/api/article/list',
    type: 'get',
    response: config => {
      const { currentPage = 1, pageSize = 10 } = config.query

      const pageList = list.filter((item, index) => index < currentPage * pageSize && index >= pageSize * (currentPage - 1))

      return {
        code: 200,
        data: {
          items: pageList,
          total: list.length
        },
      }
    }
  },
  {
    url: '/api/article/staffList',
    type: 'get',
    response: config => {
      const { currentPage = 1, pageSize = 10 } = config.query

      const pageList = staffList.filter((item, index) => index < currentPage * pageSize && index >= pageSize * (currentPage - 1))

      return {
        code: 200,
        data: {
          items: pageList,
          total: staffList.length
        },
      }
    }
  },
]
