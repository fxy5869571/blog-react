import { Icon, Pagination, Timeline } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IPayload } from '../../types'
import './style.less'
interface IArticle {
  _id: string
  title: string
  create_at: string
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
class TimeFile extends React.Component<IArticles> {
  public state = {
    pageIndex: 1,
    pageSize: 15,
    timeFile: true
  }
  public componentDidMount() {
    this.props.fetchArticle(this.state)
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
  public timeView = () => {
    const { articles = [] } = this.props
    const timeItems: any[] = []
    const colorArr = ['red', 'blue', 'green']
    articles.forEach((item, index, arr) => {
      const timeStr = item.create_at.substring(
        0,
        item.create_at.lastIndexOf('-')
      )
      if (
        index === 0 ||
        timeStr !==
          arr[index - 1].create_at.substring(
            0,
            arr[index - 1].create_at.lastIndexOf('-')
          )
      ) {
        timeItems.push({
          key: timeStr,
          type: 'time'
        })
        timeItems.push({
          _id: item._id,
          color: colorArr[index % 3],
          title: item.title,
          type: 'item'
        })
      } else {
        timeItems.push({
          _id: item._id,
          color: colorArr[index % 3],
          title: item.title,
          type: 'item'
        })
      }
    })
    return (
      <Timeline>
        {timeItems.map(article => {
          return article.type === 'time' ? (
            <Timeline.Item
              className="item"
              key={article.key}
              color="blue"
              dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              <p className="time">{article.key}</p>
            </Timeline.Item>
          ) : (
            <Timeline.Item key={article._id} color={article.color}>
              <Link to={`/article/${article._id}`}>
                <p className='title'>{article.title}</p>
              </Link>
            </Timeline.Item>
          )
        })}
      </Timeline>
    )
  }

  public render() {
    const { total } = this.props
    const { pageIndex, pageSize } = this.state
    return (
      <div className="time-file">
        {this.timeView()}
        <div className="Pagination">
          <Pagination
            current={pageIndex}
            pageSize={pageSize}
            total={total}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}
export default TimeFile
