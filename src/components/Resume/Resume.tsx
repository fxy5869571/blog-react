import { Tooltip } from 'antd'
import * as React from 'react'
import About from './About'
import CallMe from './CallMe'
import Index from './Index'
import Skill from './Skill'
import './style.less'
import Undergo from './Undergo'
import Works from './Works'
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
      { className: 'curr-page', component: <Index /> },
      { className: 'next-page', component: <About /> },
      { className: 'page-section', component: <Skill /> },
      { className: 'page-section', component: <Undergo /> },
      { className: 'page-section', component: <Works /> },
      { className: 'prev-page', component: <CallMe /> }
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
                return { ...item, className: arr[arr.length - 1].className }
              } else {
                return { ...item, className: arr[index - 1].className }
              }
            } else {
              if (index === arr.length - 1) {
                return { ...item, className: arr[0].className }
              } else {
                return { ...item, className: arr[index + 1].className }
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
      <div className="resume">
        <div className="resume-header" />
        <div className="section-wrap" onWheel={this.onWheel}>
          {pageList.map((item, index) => (
            <div
              className={`section section${index} ${item.className}`}
              key={index}>
              {item.component}
            </div>
          ))}
          <div className="dot-wrap">
            {dotList.map((item, index) => {
              return currPage === index ? (
                <div key={index}>
                  <Tooltip placement="left" title={item.label}>
                    <span
                      className="iconfont active"
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
      </div>
    )
  }
}

export default Resume
