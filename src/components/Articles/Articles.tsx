import { Card, Pagination } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { format } from '../../common'
import { IPayload } from '../../types'
import './style.less'
interface IArticle {
  _id: string
  tag: ITag
  title: string
  create_at: string
  access: string
  type: string
  abstract: string
}
interface ITag {
  color: string
  title: string
}
interface IHistory {
  push: (pathname: string) => void
}
interface IArticles {
  articles: IArticle[]
  history: IHistory
  total: number
  fetchArticle: (payload: IPayload) => void
}
class Articles extends React.Component<IArticles> {
  public state = {
    pageIndex: 1,
    pageSize: 10
  }
  public onChange = (page: number, pageSize: number) => {
    this.setState(
      {
        pageIndex: page,
        pageSize
      },
      () => {
        this.props.fetchArticle(this.state)
      }
    )
  }
  public componentDidMount() {
    this.props.fetchArticle(this.state)
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
            className="article"
            type="inner">
            <div>
              <h3>{item.title}</h3>
              <p className="tag">
                <span>发表于：{format(item.create_at)}</span>
                <span>分类：{item.type}</span>
                <span>浏览：{item.access}</span>
              </p>
              <div className="abstract">{item.abstract} ...</div>
              <Link to={`/article/${item._id}`}>
                <span className="link">阅读全文 >></span>
              </Link>
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
