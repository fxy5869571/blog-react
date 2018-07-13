import { Card } from 'antd'
import * as React from 'react'
import Highlight from 'react-highlight'
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
  public componentDidMount() {
    this.props.fetchArticle(this.props.match.params.Id)
  }
  public addCode = (content: string) => {
    return content
      .replace('<pre>', '<pre><code>')
      .replace('</pre>', '</pre></code>')
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
        <Highlight innerHTML={true} className="javascript">
          {this.addCode(content)}
        </Highlight>
      </Card>
    )
  }
}

export default Article
