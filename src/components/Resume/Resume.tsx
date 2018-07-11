import { Carousel, Tooltip } from 'antd'
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
interface IE {
  deltaY: number
}
class Resume extends React.Component<IProps> {
  public carousel: any
  public pageList = [
    { color: '#85ada3', component: <Index /> },
    { color: '#0e8d82', component: <About /> },
    { color: '#4b5b8a', component: <Skill /> },
    { color: '#925b4b', component: <Undergo /> },
    { color: '#48829c', component: <Works /> },
    { color: '#9d946d', component: <CallMe /> }
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
    this.setState({ currentIndex: index }, () => {
      this.carousel.goTo(index)
    })
  }
  public render() {
    const { currentIndex } = this.state
    const settings = {
      beforeChange: (currentSlide: number, nextSlide: number) => {
        this.setState({ currentIndex: nextSlide }, () => {
          console.log(this.state.currentIndex)
        })
      },
      dots: false,
      infinite: false
    }
    return (
      <div className="resume" onWheel={this.onWheel}>
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
