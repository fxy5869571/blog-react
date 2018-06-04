import { Col, Layout, Row } from 'antd'
import * as React from 'react'

import { Link } from 'react-router-dom'
import './style.less'
const { Header } = Layout
const HeaderDom = () => {
  const headerTitle = [
    { title: '主页', icon: { __html: '&#xe600;' } },
    { title: '文章', icon: { __html: '&#xe643;' } },
    { title: '归档', icon: { __html: '&#xe660;' } },
    { title: '慢生活', icon: { __html: '&#xe6a1;' } }
  ]
  return (
    <div className="header">
      <Header>
        <Row>
          <Col span={6} />
          <Col span={12}>
            <div className="header-logo">
              <div>
                <span>Ma</span>
                <span>cro</span>
              </div>
              <span>我想去天堂，但我不想死</span>
            </div>
          </Col>
          <Col span={6} />
        </Row>
      </Header>
      <Row className="header-footer">
        <Col span={6} />
        <Col span={14}>
          {headerTitle.map(item => (
            <div key={item.title} className="header-title-item">
              <Link to="article">
                <span
                  className="iconfont"
                  style={{ marginRight: 5 }}
                  dangerouslySetInnerHTML={item.icon}
                />
                {item.title}
              </Link>
            </div>
          ))}
        </Col>
        <Col span={4} />
      </Row>
    </div>
  )
}

export default HeaderDom
