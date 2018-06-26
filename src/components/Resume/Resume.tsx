import { Tooltip } from 'antd'
import * as React from 'react'
import './style.less'
interface IResume {
  contact: object
  default: object
  info: object
  skill: object
  titleList: object[]
  works: object
}
interface IProps {
  resume: IResume
}
class Resume extends React.Component<IProps> {
  public timer: any
  public state = {
    currPage: 0,
    dotList: [
      { icon: '&#xe600;', label: '首页' },
      { icon: '&#xe63e;', label: '关于我' },
      { icon: '&#xe7b6;', label: '技能栈' },
      { icon: '&#xe7a2;', label: '经历' },
      { icon: '&#xe619;', label: '作品' },
      { icon: '&#xe601;', label: '联系我' }
    ],
    pageList: [
      { className: 'curr-page' },
      { className: 'next-page' },
      { className: 'page-section' },
      { className: 'page-section' },
      { className: 'page-section' },
      { className: 'prev-page' }
    ]
  }
  public onWheel = (e: any): void => {
    const { deltaY } = e
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      const { pageList } = this.state

      this.setState(
        {
          pageList: pageList.map((item, index, arr) => {
            if (deltaY > 0) {
              if (index === 0) {
                return arr[arr.length - 1]
              } else {
                return arr[index - 1]
              }
            } else {
              if (index === arr.length - 1) {
                return arr[0]
              } else {
                return arr[index + 1]
              }
            }
          })
        },
        () => {
          this.state.pageList.forEach((item, index) => {
            if (item.className === 'curr-page') {
              this.setState({ currPage: index })
            }
          })
        }
      )
    }, 300)
  }
  public render() {
    const { pageList, dotList, currPage } = this.state
    return (
      <div className="section-wrap" onWheel={this.onWheel}>
        {pageList.map((item, index) => (
          <div
            className={`section section${index} ${item.className}`}
            key={index}>
            {index}
          </div>
        ))}
        <div className="dot-wrap">
          {dotList.map((item, index) => {
            return currPage === index ? (
              <div key={index}>
                <Tooltip placement="left" title={item.label}>
                  <span
                    className="iconfont dot"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                </Tooltip>
              </div>
            ) : (
              <div key={index} className="item" />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Resume
