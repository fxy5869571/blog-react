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
  public render() {
    return (
      <div className="section-wrap">
        <div className="section section1">1</div>
        <div className="section section2">2</div>
        <div className="section section3">3</div>
        <div className="section section4">4</div>
        <div className="section section5">5</div>
        <div className="section section6">6</div>
      </div>
    )
  }
}

export default Resume
