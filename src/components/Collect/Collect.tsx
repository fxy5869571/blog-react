import { Card, Col, Modal, Pagination, Row } from 'antd'
import QueueAnim from 'rc-queue-anim'
import * as React from 'react'

import { format } from '../../common'
import './style.less'
const confirm = Modal.confirm
interface ICollect {
  content: string
  _id: string
  create_at: string
  title: string
}
interface IPayload {
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
  public componentDidMount() {
    this.props.fetchCollect()
  }
  public cardClick = (id: string) => {
    confirm({
      onOk: () => {
        this.props.deleteCollect(id)
      },
      title: '确定删除这条收藏?'
    })
  }
  public onChange = (pageIndex: number, pageSize: number) => {
    this.props.fetchCollect({ pageIndex, pageSize })
  }
  public render() {
    const { collect, total, payload } = this.props
    const { pageIndex, pageSize } = payload
    const replaceHtml = /<(?:.|\s)*?>/g
    return (
      <div className="collect">
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
                    onClick={() => this.cardClick(item._id)}>
                    <div className="title">{item.title}</div>
                    <span className="create_at">{format(item.create_at)}</span>
                    <div className="collect-content">
                      {item.content.replace(replaceHtml, '')}
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
