import { Carousel, Dropdown, Icon, Menu, Tooltip } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
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
interface IE {
  deltaY: number
}
class Resume extends React.Component<IProps> {
  public carousel: any
  public pageList = [
    { color: '#85ada3', component: <Index />, title: '首页' },
    { color: '#0e8d82', component: <About />, title: '关于我' },
    { color: '#4b5b8a', component: <Skill />, title: '技能栈' },
    { color: '#925b4b', component: <Undergo />, title: '经历' },
    { color: '#48829c', component: <Works />, title: '作品集' },
    { color: '#9d946d', component: <CallMe />, title: '联系我' }
  ]
  public dotList = [
    { icon: '&#xe600;', label: '首页' },
    { icon: '&#xe63e;', label: '关于我' },
    { icon: '&#xe7b6;', label: '技能栈' },
    { icon: '&#xe7a2;', label: '经历' },
    { icon: '&#xe619;', label: '作品' },
    { icon: '&#xe601;', label: '联系我' }
  ]
  public state = {
    currentIndex: 0
  }
  public constructor(props: IProps) {
    super(props)
  }
  public onWheel = (e: IE) => {
    if (e.deltaY > 0) {
      this.carousel.next()
    } else {
      this.carousel.prev()
    }
  }
  public dotClick = (index: number): void => {
    this.carousel.goTo(index)
    this.setState({ currentIndex: index })
  }
  public render() {
    const menu = (
      <Menu>
        {this.pageList.map((item, index) => (
          <Menu.Item key={item.color} onClick={() => this.dotClick(index)}>
            <div>{item.title}</div>
          </Menu.Item>
        ))}
      </Menu>
    )
    const { currentIndex } = this.state
    const settings = {
      beforeChange: (currentSlide: number, nextSlide: number) => {
        this.setState({ currentIndex: nextSlide })
      },
      dots: false,
      infinite: false
    }
    return (
      <div className="resume" onWheel={this.onWheel}>
        <div className="resume-header">
          <Tooltip title="博客首页" placement="rightBottom">
            <Link to="/">
              <img
                src="http://img.qqzi.com/Content/Upload/2018/07/04/7bef27fa-35e0-470f-8797-3211aa597332.jpg"
                alt=""
              />
            </Link>
          </Tooltip>
          <div className="resume-menu-button">
            <Dropdown overlay={menu} trigger={['click']}>
              <Icon type="bars" className="menu-button" />
            </Dropdown>
          </div>
        </div>
        <Carousel
          vertical={true}
          {...settings}
          ref={ref => (this.carousel = ref)}>
          {this.pageList.map((item, index) => (
            <div key={index} className={`item${index}`}>
              <div className="resume-item">{item.component}</div>
            </div>
          ))}
        </Carousel>
        <div className="resume-dots">
          {this.dotList.map((item, index) => (
            <div
              className="dot-wrp"
              key={index}
              onClick={() => this.dotClick(index)}>
              <Tooltip placement="left" title={item.label}>
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                  className={currentIndex === index ? 'dot' : 'item'}
                />
              </Tooltip>
            </div>
          ))}
        </div>
        {currentIndex < 5 && (
          <div className="next" onClick={() => this.carousel.next()}>
            &#xe681;
          </div>
        )}
      </div>
    )
  }
}

export default Resume
