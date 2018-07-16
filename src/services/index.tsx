import 'whatwg-fetch'
import { blogFetch } from '../common'
import { IPayload } from '../types'
export const fetchArticles = (payLoad: IPayload) =>
  blogFetch('/get-articles', payLoad)

export const fetchInfo = () => blogFetch('/get-info')

export const fetchResume = () => blogFetch('/get-resume')

export const fetchArticle = (Id: string) => blogFetch('/get-article', { Id })
export const getSay = (payLoad: object) => blogFetch('/get-say', payLoad)
export const fetchCollect = (payload: object) =>
  blogFetch('/get-collect', payload)
