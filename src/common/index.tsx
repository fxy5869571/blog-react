import 'whatwg-fetch'
// export const api = 'http://localhost:8001/api'
export const api = 'http://132.232.34.190/api'
export const headerImg =
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527245834290&di=2286cc7354adc925f79b92b719162dd4&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140828%2F0005018403917054_b.jpg'
export const format = (date: string): string => {
  const myDate = new Date(date)
  const year = myDate.getFullYear()
  const month = myDate.getMonth() + 1
  const day = myDate.getDate()
  return `${year}-${month}-${day}`
}

export const dataToString = (data: object) => {
  const array: any = []
  let index = 0
  for (const item in data) {
    if (data[item]) {
      array[index++] = [item, data[item]]
    }
  }
  return new URLSearchParams(array).toString()
}

export const blogFetch = (
  url: string,
  data?: object,
  method: string = 'GET'
): Promise<Response> => {
  let initObj = {}
  url = api + url
  let dataStr = ''
  if (data) {
    dataStr = dataToString(data)
  }
  if (method === 'GET') {
    if (data) {
      if (url.indexOf('?') > -1) {
        url += '&' + dataStr
      } else {
        url += '?' + dataStr
      }
    }
  } else {
    initObj = {
      body: dataStr,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      method
    }
  }
  return fetch(url, initObj).then(response => response.json())
}
