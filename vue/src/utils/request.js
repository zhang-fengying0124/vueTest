import axios from 'axios'

export const get = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      baseURL: 'http://5c92dbfae7b1a00014078e61.mockapi.io',
      headers: {
        'Content-Type': 'application/json'// axios默认类型是json
      }
    }).then((response) => {
      resolve(response.data)
    }, error => {
      reject(error)
    })
  })
}
