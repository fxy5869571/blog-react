import * as React from 'react'

class Index extends React.Component {
  constructor(props: object) {
    super(props)
  }

  public render() {
    return (
      <div className="index">
        <img
          className="header-img"
          src="http://img.qqzi.com/Content/Upload/2018/07/04/7bef27fa-35e0-470f-8797-3211aa597332.jpg"
          alt="header-img"
        />
        <p className="title">
          生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。
        </p>
        <div className="split" />
        <p>我叫范兴宇</p>
        <p>一名前端研发工程师</p>
        <p>996276475@qq.com</p>
      </div>
    )
  }
}

export default Index
