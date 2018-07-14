import { Col, Dropdown, Icon, Layout, Menu, Row } from 'antd'
import * as React from 'react'

import { Link } from 'react-router-dom'
import './style.less'
const { Header } = Layout
const HeaderDom = () => {
  const headerTitle = [
    { title: '主页', icon: { __html: '&#xe600;' }, url: '/' },
    { title: '文章', icon: { __html: '&#xe643;' }, url: '/articles' },
    { title: '归档', icon: { __html: '&#xe660;' }, url: '/time-file' },
    { title: '说说', icon: { __html: '&#xe6a1;' }, url: '/say' },
    { title: '简历', icon: { __html: '&#xe60e;' }, url: '/resume' }
  ]
  const menu = (
    <Menu className="menu">
      {headerTitle.map(item => (
        <Menu.Item key={item.title} className="header-title-item">
          <Link to={item.url}>
            <span
              className="icon-font"
              style={{ marginRight: 5 }}
              dangerouslySetInnerHTML={item.icon}
            />
            {item.title}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <div className="header">
      <Header>
        <Row>
          <Col md={0} lg={1} xl={3} xxl={5} />
          <Col md={22} lg={20} xl={18} xxl={14}>
            <div className="header-logo-wrp">
              <div className="header-logo">
                <div>
                  <span>Ap</span>
                  <span>ple</span>
                </div>
                <span>我想去天堂，但我不想死</span>
              </div>
              <div className="menu-button-wrp">
                <Dropdown overlay={menu} trigger={['click']}>
                  <Icon type="bars" className="menu-button" />
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </Header>
      <Row className="header-footer">
        <Col lg={1} xl={4} xxl={5} />
        <Col lg={22} xl={18} xxl={14}>
          {headerTitle.map(item => (
            <div key={item.title} className="header-title-item">
              <Link to={item.url}>
                <span
                  className="icon-font"
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
