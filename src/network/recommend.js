import {
  request
} from 'network/request.js'
export function getRecommend() {
  return request({
    url: '/recommend',
  })
}