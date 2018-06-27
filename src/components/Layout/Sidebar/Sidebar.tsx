import { Card, Tag } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { headerImg } from '../../../common'
import './style.less'

const { Meta } = Card
interface ITag {
  title: string
  color: string
}
export interface IInfo {
  classList: string[]
  tag: ITag[]
  ArticleNum: string
  click: number
  present: string
  github: string
  name: string
  authorImg: string
}
export interface IProps {
  info: IInfo
  articleTitle: string[]
}
const Sidebar = (props: IProps) => {
  const { articleTitle, info } = props
  const { tag, github, present, click, ArticleNum, name, authorImg } = info
  const gitList = [0, 90, 180, 270]
  return (
    <div className="Sidebar">
      <Card hoverable={true} className="card" cover={<img src={headerImg} />}>
        <div className="authorImg">
          <img src={authorImg} alt="" />
        </div>
        <Meta
          title={
            <div>
              <span className="card-title">{name}</span>
            </div>
          }
          description={
            <div>
              <p>{present}</p>
              <p>
                <span>文章 - {ArticleNum}</span>
                <span style={{ marginRight: 10, marginLeft: 10 }}>|</span>
                <span>访问 - {click}</span>
              </p>
            </div>
          }
        />
      </Card>
      <Card title="FOLLOW ME" hoverable={true} className="card">
        <div className="icon-git-wrp">
          {gitList.map(item => (
            <div
              key={item}
              className="iconfont icon-git"
              style={{ transform: `rotate(${item}deg)` }}>
              <a href={github}> &#xea0a;</a>
            </div>
          ))}
        </div>
      </Card>
      <Card title="云标签" hoverable={true} className="card">
        {tag &&
          tag.map(item => (
            <Tag key={item.title} color={item.color} className="tag">
              {item.title}
            </Tag>
          ))}
      </Card>
      <Card title="文章列表" hoverable={true} className="card">
        <ul>
          {articleTitle &&
            articleTitle.map((item, index) => (
              <li key={index} className="tag">
                <Link to={item}>{item}</Link>
              </li>
            ))}
        </ul>
      </Card>
    </div>
  )
}

export default Sidebar
