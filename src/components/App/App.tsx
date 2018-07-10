import { Col, Layout, Row } from 'antd'
import * as React from 'react'
import { ReactHTML } from 'react'
import Header from '../Layout/Header/Header'
import Sidebar, { IInfo } from '../Layout/Sidebar/Sidebar'
import './style.less'

const { Footer, Content } = Layout
interface ILocation {
  pathname: string
}
interface IProps {
  info: IInfo
  articleTitle: string[]
  children: ReactHTML
  location: ILocation
}
class App extends React.Component<IProps> {
  public render() {
    const { info, articleTitle, children, location } = this.props
    const isResume = location.pathname === '/resume'
    return !isResume ? (
      <Layout>
        <Header />

        <Layout>
          <Content>
            <Row>
              <Col xs={1} sm={1} md={1} lg={1} xl={3} xxl={5} />
              <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={14}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                    {children}
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={{ span: 6, offset: 1 }}
                    xl={{ span: 6, offset: 1 }}
                    xxl={{ span: 6, offset: 1 }}>
                    <Sidebar info={info} articleTitle={articleTitle} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    ) : (
      <div>{children}</div>
    )
  }
}

export default App
