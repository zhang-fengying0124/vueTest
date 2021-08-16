import axios from 'axios'
import { ElMessage } from 'element-plus'
// import store from '@/store'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://5c92dbfae7b1a00014078e61.mockapi.io', // 可以扩展变量，方便分环境测试
  timeout: 5000 // 请求超时时间
})

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 判断返回结果是否为空.
    if (!res) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    }
    return res
  },
  error => {
    console.log('err' + error)
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
