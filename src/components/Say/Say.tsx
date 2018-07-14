import { Pagination, Timeline } from 'antd'
import QueueAnim from 'rc-queue-anim'
import * as React from 'react'
import './style.less'
const Item = Timeline.Item

interface ISay {
  say: string
  create_at: string
  _id: string
}
interface IProps {
  payload: any
  total: number
  say: ISay[]
  fetchSay: (payload?: object) => void
}
class Say extends React.Component<IProps> {
  public componentDidMount() {
    this.props.fetchSay({ pageIndex: 1, pageSize: 10 })
  }
  public onChange = (pageIndex: number, pageSize: number) => {
    this.props.fetchSay({ pageIndex, pageSize })
  }
  public onShowSizeChange = (pageIndex: number, pageSize: number) => {
    this.props.fetchSay({ pageIndex, pageSize })
  }
  public render() {
    const { say, total, payload } = this.props
    const { pageIndex, pageSize } = payload
    return (
      <div className="time-line-wrp">
        <div className="time-line">
          <Timeline key="Timeline">
            {say &&
              say.map(item => (
                <Item key={item._id}>
                  <QueueAnim
                    animConfig={[
                      { opacity: [1, 0], translateX: [0, -150] },
                      { opacity: [1, 0], translateX: [0, 150] }
                    ]}
                    duration={1500}>
                    <div className="item" key={item._id}>
                      <div dangerouslySetInnerHTML={{ __html: item.say }} />
                      <span className="posted">
                        发表于：{new Date(item.create_at).toLocaleString()}
                      </span>
                    </div>
                  </QueueAnim>
                </Item>
              ))}
            <QueueAnim className="pagination" delay={1000}>
              <Pagination
                current={pageIndex}
                pageSize={pageSize}
                total={total}
                key="pagination"
                showSizeChanger={true}
                onChange={this.onChange}
                onShowSizeChange={this.onShowSizeChange}
              />
            </QueueAnim>
          </Timeline>
        </div>
      </div>
    )
  }
}

export default Say
