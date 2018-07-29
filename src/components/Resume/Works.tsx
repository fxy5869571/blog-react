import * as React from 'react'
const list = [
  {
    content:
      '自己第一个基于typescript全栈项目，项目采用前后端分离，代码符合tslint规范，后端采用技术栈有koa2，mongoose,koa-jwt,' +
      '后端采用技术栈有react，redux,redux-saga,',
    title: '个人博客系统及其后台管理端',
    url: 'https://github.com/fxy5869571'
  },
  {
    content:
      '针对圈子金服app的后台管理系统，包括p2p审核、放款，圈子管理，运营统计，代理商管理，会员信息，' +
      '各个模块的数据管理，权限设置等，为圈子金服提供基于互联网运营的整体方案。',
    title: '圈子金服后台管理系统',
    url: 'http://adm.qqzi.com/react'
  },
  {
    content:
      '圈子金服针对微信平台推出的圈子金服微信运营端，功能包括p2p申请，加会申请，p2p投标，会员信息，' +
      '为圈子金服提供基于互联网运营的整体解决方案。',
    title: '圈子金服微信运营端',
    url: 'http://www.qqzi.com/vue/index'
  },
  {
    content:
      '圈子金服基于weex框架推出App版本，App同时兼容ios和安卓系统，' +
      '功能包括p2p申请，加会申请，p2p投标，会员信息，' +
      '致力于为消费者提供各种互联网金融服务',
    title: '圈子金服App版本',
    url: 'http://www.ziebao.com/Home/getapp'
  }
]
const Works = () => {
  return (
    <div className="works">
      <p className="title">作品集</p>
      <div className="cards">
        {list.map((item, index) => (
          <div key={index} className="item">
            <span className="work-title">{item.title}</span>
            <p>{item.content}</p>
            <a className="work-link" href={item.url} target="view_window">
              &#xe626;
            </a>
          </div>
        ))}
      </div>
      <p>
        <a
          href="https://github.com/fxy5869571"
          style={{
            color: '#fff',
            cursor: 'pointer'
          }}>
          在github上查看更多
        </a>
      </p>
    </div>
  )
}

export default Works
