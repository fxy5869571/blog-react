import {
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE,
  REQUEST_INFO,
  RECEIVE_INFO
} from "../constants";

// blog article action
export interface IRequestArticle {
  type: REQUEST_ARTICLE;
}
export interface IReceiveArticle {
  type: RECEIVE_ARTICLE;
  article: Array<object>;
}
export type ArticleAction = IRequestArticle | IReceiveArticle;

//blog info action
export interface IRequestInfo {
  type: REQUEST_INFO;
}
export interface IReceiveInfo {
  type: RECEIVE_INFO;
  info: object;
}
export type InfoAction = IRequestInfo | IReceiveInfo;
