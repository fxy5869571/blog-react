import {  Pagination, Timeline } from 'antd'
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
        <Timeline className="time-line">
          {say &&
            say.map(item => (
              <Item key={item._id}>
                <div className="item">
                  <div dangerouslySetInnerHTML={{ __html: item.say }} />
                  <span className="posted">
                    发表于：{new Date(item.create_at).toLocaleString()}
                  </span>
                </div>
              </Item>
            ))}
          <div className="pagination">
            <Pagination
              current={pageIndex}
              pageSize={pageSize}
              total={total}
              showSizeChanger={true}
              onChange={this.onChange}
              onShowSizeChange={this.onShowSizeChange}
            />
          </div>
        </Timeline>
      </div>
    )
  }
}

export default Say
