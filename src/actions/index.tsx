import {
  RECEIVE_ARTICLE,
  RECEIVE_ARTICLES,
  RECEIVE_INFO,
  REQUEST_ARTICLE,
  REQUEST_ARTICLES,
  REQUEST_INFO
} from '../constants'

// blog articles action
export interface IRequestArticles {
  type: REQUEST_ARTICLES
  pageIndex: number
  pageSize: number
}
export interface IReceiveArticles {
  type: RECEIVE_ARTICLES
  pageIndex: number
  pageSize: number
  total: number
  articles: object[]
}
export type ArticlesAction = IRequestArticles | IReceiveArticles

export interface IRequestInfo {
  type: REQUEST_INFO
}
export interface IReceiveInfo {
  type: RECEIVE_INFO
  info: object
}
export type InfoAction = IRequestInfo | IReceiveInfo

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
