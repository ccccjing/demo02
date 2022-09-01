import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/api/article/list',
    method: 'get',
    params: query
  })
}

export function getStaffList(query) {
  return request({
    url: '/api/article/staffList',
    method: 'get',
    params: query
  })
}
