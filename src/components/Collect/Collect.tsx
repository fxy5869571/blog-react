import { Card, Col, Modal, Pagination, Row } from 'antd'
import QueueAnim from 'rc-queue-anim'
import * as React from 'react'

import { format } from '../../common'
import './style.less'
export interface ICollect {
  content?: string
  _id?: string
  create_at?: string
  title?: string
}
interface IState {
  collectItem: ICollect
  visible: boolean
}
export interface IPayload {
  pageIndex: number
  pageSize: number
}
interface IProps {
  collect: ICollect[]
  payload: IPayload
  total: number
  deleteCollect: (id: string) => void
  fetchCollect: (payload?: object) => void
}
class Collect extends React.Component<IProps> {
  public state: IState = {
    collectItem: {},
    visible: false
  }
  public componentDidMount() {
    this.props.fetchCollect()
  }
  public cardClick = (item: ICollect) => {
    this.setState({
      collectItem: item,
      visible: true
    })
  }
  public onChange = (pageIndex: number, pageSize: number) => {
    this.props.fetchCollect({ pageIndex, pageSize })
  }
  public render() {
    const { visible, collectItem } = this.state
    const { collect, total, payload } = this.props
    const { pageIndex, pageSize } = payload
    const replaceHtml = /<(?:.|\s)*?>/g
    return (
      <div className="collect">
        <Modal
          title={<span className="title">{collectItem.title}</span>}
          visible={visible}
          footer={false}
          bodyStyle={{ padding: '6px 20px 15px 20px', overflow: 'hidden' }}
          onCancel={() => {
            this.setState({ visible: false })
          }}
          wrapClassName="collect-card-wrp">
          <div className="collect-card">
            <span className="create_at">
              发表于：{collectItem.create_at && format(collectItem.create_at)}
            </span>
            {collectItem.content && (
              <div dangerouslySetInnerHTML={{ __html: collectItem.content }} />
            )}
            <div className="collect-author">Apple</div>
          </div>
        </Modal>
        <QueueAnim
          duration={1500}
          animConfig={[
            { opacity: [1, 0], translateX: [0, 150] },
            { opacity: [1, 0], translateX: [0, -150] }
          ]}>
          <Row className="collect-card-wrp" key="collect-card-wrp">
            {collect &&
              collect.map(item => (
                <Col key={item._id} sm={22} md={11} offset={1}>
                  <Card
                    key={item._id}
                    hoverable={true}
                    bordered={false}
                    className="collect-card"
                    type="inner"
                    onClick={() => this.cardClick(item)}>
                    <div className="title">{item.title}</div>
                    <span className="create_at">
                      {item.create_at && format(item.create_at)}
                    </span>
                    <div className="collect-content">
                      {item.content && item.content.replace(replaceHtml, '')}
                    </div>
                    <div className="author">Apple</div>
                  </Card>
                </Col>
              ))}
          </Row>
        </QueueAnim>
        <div className="pagination">
          <Pagination
            current={pageIndex}
            pageSize={pageSize}
            total={total}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}

export default Collect
