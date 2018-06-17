import { Card, Col, Tag } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.less'
const { Meta } = Card
interface ITag {
  title: string
  color: string
}
interface IInfo {
  classList: string[]
  tag: ITag[]
  ArticleNum: string
  click: number
  present: string
  github: string
  name: string
  authorImg: string
}
interface IProps {
  info: IInfo
  articleTitle: string[]
}
const Sidebar = (props: IProps) => {
  const { articleTitle, info } = props
  const { tag, github, present, click, ArticleNum, name, authorImg } = info
  const gitList = [0, 90, 180, 270]
  return (
    <Col span={6} className="Sidebar" offset={1}>
      <Card
        hoverable={true}
        className="card"
        cover={
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527245834290&di=2286cc7354adc925f79b92b719162dd4&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140828%2F0005018403917054_b.jpg" />
        }>
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
    </Col>
  )
}

export default Sidebar
