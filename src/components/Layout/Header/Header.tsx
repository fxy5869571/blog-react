import { Col, Layout, Row } from 'antd'
import * as React from 'react'

import { Link } from 'react-router-dom'
import './style.less'
const { Header } = Layout
const HeaderDom = () => {
  const headerTitle = [
    { title: '主页', icon: { __html: '&#xe600;' }, link: '/' },
    { title: '文章', icon: { __html: '&#xe643;' }, link: '/' },
    { title: '归档', icon: { __html: '&#xe660;' }, link: '/time-file' },
    { title: '说说', icon: { __html: '&#xe6a1;' }, link: '/' },
    { title: '简历', icon: { __html: '&#xe60e;' }, link: '/resume' }
  ]
  return (
    <div className="header">
      <Header>
        <Row>
          <Col xs={1} sm={1} md={1} lg={1} xl={3} xxl={5} />
          <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={14}>
            <div className="header-logo">
              <div>
                <span>Ma</span>
                <span>cro</span>
              </div>
              <span>我想去天堂，但我不想死</span>
            </div>
          </Col>
        </Row>
      </Header>
      <Row className="header-footer">
        <Col xs={1} sm={1} md={1} lg={1} xl={4} xxl={5} />
        <Col xs={22} sm={22} md={22} lg={22} xl={18} xxl={14}>
          {headerTitle.map(item => (
            <div key={item.title} className="header-title-item">
              <Link to={item.link}>
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
