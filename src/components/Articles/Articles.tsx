import { Card, Pagination } from 'antd'
import * as React from 'react'
import { format } from '../../common'

import './style.less'
interface IArticle {
  _id: string
  content: string
  title: string
  create_at: string
  updated_at: string
  access: string
  type: string
}
interface IHistory {
  push: (pathname: string) => void
}
interface IArticles {
  articles: IArticle[]
  history: IHistory
  total: number
  fetchArticle: (pageIndex: number, pageSize: number) => void
}
class Articles extends React.Component<IArticles> {
  public state = {
    pageIndex: 1,
    pageSize: 5
  }
  public goArticle = (id: string) => {
    this.props.history.push(`/article/${id}`)
  }
  public onChange = (page: number, pageSize: number) => {
    this.setState(
      {
        pageIndex: page,
        pageSize
      },
      () => {
        this.props.fetchArticle(page, pageSize)
      }
    )
  }
  public componentDidMount() {
    const { pageIndex, pageSize } = this.state
    this.props.fetchArticle(pageIndex, pageSize)
  }
  public render() {
    const { articles = [], total } = this.props
    const { pageIndex, pageSize } = this.state
    return (
      <>
        {articles.map(item => (
          <Card
            key={item._id}
            bordered={false}
            hoverable={true}
            className="article"
            actions={[
              <span key={item.create_at}>
                创建于：{format(item.create_at)}
              </span>,
              <span key={item.updated_at}>
                修改时间：{format(item.updated_at)}
              </span>
            ]}>
            <div onClick={this.goArticle.bind(this, item._id)}>
              <h2>{item.title}</h2>
              <p>
                <span key={item.access} style={{ marginRight: 20 }}>
                  浏览：{item.access}
                </span>
                <span key={item.type}>分类于：{item.type}</span>
              </p>
              <p
                className="content"
                dangerouslySetInnerHTML={{ __html: item.content + '...' }}
              />
            </div>
          </Card>
        ))}
        <div className="Pagination">
          <Pagination
            current={pageIndex}
            pageSize={pageSize}
            total={total}
            onChange={this.onChange}
          />
        </div>
      </>
    )
  }
}
export default Articles
