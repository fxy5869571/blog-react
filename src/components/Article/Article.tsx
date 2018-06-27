import { Card } from 'antd'
import * as React from 'react'
import './style.less'
interface IArticle {
  _id: string
  title: string
  create_at: string
  updated_at: string
  access: string
  type: string
  content: string
}
interface IParams {
  Id: string
}
interface IMatch {
  params: IParams
}
interface IProps {
  fetchArticle: (Id: string) => any
  article: IArticle
  match: IMatch
}
class Article extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }
  public componentDidMount() {
    this.props.fetchArticle(this.props.match.params.Id)
  }
  public render() {
    const {
      title,
      create_at,
      updated_at,
      access,
      type,
      content = ''
    } = this.props.article
    return (
      <Card>
        <div>
          <span>{title}</span>
          <span>{create_at}</span>
          <span>{updated_at}</span>
          <span>{type}</span>
          <span>{access}</span>
        </div>
        <div
          className="dark"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </Card>
    )
  }
}

export default Article
