import request from '@/utils/request'

export function getUser () {
  return request({
    url: '/owners', // http://5c92dbfae7b1a00014078e61.mockapi.io
    method: 'get'
  })
}
