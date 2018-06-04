import 'whatwg-fetch'

export const api = 'http://localhost:8000'
export const fetchArticles = (pageIndex: number, pageSize: number) => {
  return fetch(
    `${api}/articles?pageIndex=${pageIndex}&pageSize=${pageSize}`
  ).then(response => response.json())
}
export const fetchInfo = () => {
  return fetch(`${api}/info`).then(response => response.json())
}
export const fetchArticle = (Id: string) => {
  return fetch(`${api}/article?Id=${Id}`).then(response => response.json())
}
