import 'whatwg-fetch'

export const api = 'http://localhost:8000'
export const fetchArticles = (
  pageIndex: number,
  pageSize: number,
  timeFile: boolean = false
) => {
  return fetch(
    `${api}/articles?pageIndex=${pageIndex}&pageSize=${pageSize}&timeFile=${timeFile}`
  ).then(response => response.json())
}
export const fetchInfo = () => {
  return fetch(`${api}/info`).then(response => response.json())
}
export const fetchArticle = (Id: string) => {
  return fetch(`${api}/article?Id=${Id}`).then(response => response.json())
}
