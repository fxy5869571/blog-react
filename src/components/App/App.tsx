import { Col, Layout, Row } from 'antd'
import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterMap from '../../router/RouterMap'
import Header from '../Layout/Header/Header'
import Sidebar from '../Layout/Sidebar/Sidebar'
import './style.less'

const { Footer, Content } = Layout

const App = (props: any): any => {
  const { info, articleTitle } = props
  return (
    <Router>
      <Layout>
        <Header />
        <Layout>
          <Content>
            <Row>
              <Col span={5} />
              <Col span={14}>
                <Row>
                  <Col span={16}>
                    <RouterMap />
                  </Col>
                  <Sidebar info={info} articleTitle={articleTitle} />
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  )
}

export default App
