import {
  RECEIVE_ARTICLE,
  RECEIVE_ARTICLES,
  RECEIVE_INFO,
  REQUEST_ARTICLE,
  REQUEST_ARTICLES,
  REQUEST_INFO,
} from '../constants'
import { IPayload } from '../types'

// blog articles action
export interface IRequestArticles {
  type: REQUEST_ARTICLES
  payload: IPayload
}
export interface IReceiveArticles {
  type: RECEIVE_ARTICLES
  payload: IPayload
  total: number
  articles: object[]
}
export type ArticlesAction = IRequestArticles | IReceiveArticles

// blog info action
export interface IRequestInfo {
  type: REQUEST_INFO
}
export interface IReceiveInfo {
  type: RECEIVE_INFO
  info: object
}
export type InfoAction = IRequestInfo | IReceiveInfo

// blog article action
export interface IRequestArticle {
  type: REQUEST_ARTICLE
  Id: string
}
export interface IReceiveArticle {
  type: RECEIVE_ARTICLE
  Id: string
  article: object[]
}
export type ArticleAction = IRequestArticle | IReceiveArticle
