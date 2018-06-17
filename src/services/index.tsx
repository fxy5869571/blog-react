import 'whatwg-fetch'
import { blogFetch } from '../common'
import { IPayload } from '../types'
export const fetchArticles = (payLoad: IPayload) =>
  blogFetch('/articles', payLoad)

export const fetchInfo = () => blogFetch('/info')

export const fetchArticle = (Id: string) => blogFetch('/article', { Id })
