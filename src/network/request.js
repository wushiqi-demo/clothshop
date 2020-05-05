import axios from 'axios'
export  function request(config) {
  const instance = axios.create({
    baseURL:'',
    timeout: 3000
  })
  //拦截器，request请求
  instance.interceptors.request.use(config => {
    return config
  }, err => {})
  //拦截器，响应 response
  instance.interceptors.response.use(res => {
    return res.data
  },err=>{})
  //发送真正的网络请求
  return instance(config)
}