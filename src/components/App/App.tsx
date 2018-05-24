import * as React from "react";
import { Layout, Row, Col } from "antd";
import "./style.less";
const { Header, Footer, Content } = Layout;
interface IInfo {
  info: object;
}
class App extends React.Component<IInfo> {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Layout>
          <Header>
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
          </Header>
          <Layout>
            <Content>
              <Row>
                <Col span={6} />
                <Col span={12}>222</Col>
                <Col span={6}>333</Col>
              </Row>
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
