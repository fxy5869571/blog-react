import { Tooltip } from 'antd'
import * as React from 'react'
const CallMe = () => (
  <div className="call-me">
    <p className="title">联系我</p>
    <div className="tag">
      <span>代码</span>
      <span>灵感</span>
      <span>梦想</span>
      <span>未来</span>
    </div>
    <p> 注重效率，偏爱敏捷开发</p>
    <p> 喜欢尝试，期待新鲜事物</p>
    <p> 前端即兴趣，兴趣即未来</p>
    <p> 行路有良友，便是捷径</p>
    <p>带上我吧，一起看到更大的世界</p>
    <div className="call">
      <Tooltip title="github">
        <a href="https://github.com/fxy5869571">&#xea0a;</a>
      </Tooltip>
      <Tooltip title="个人博客">
        <a>&#xe661;</a>
      </Tooltip>
      <Tooltip
        title={
          <img
            className="wx"
            src="http://img.qqzi.com/Content/Upload/2018/07/11/e2727fb9-17ab-44f6-a7f8-834ef23245fc.png"
            alt="微信"
          />
        }>
        <a>&#xe7e5;</a>
      </Tooltip>
      <Tooltip title="996276475@qq.com">
        <a>&#xe672;</a>
      </Tooltip>
      <Tooltip title="知乎">
        <a href="https://www.zhihu.com/people/fan-xing-yu-8/activities">
          &#xe625;
        </a>
      </Tooltip>
    </div>
    <div className="footer">
      <div className="item">All Rights Reserved</div>
    </div>
  </div>
)

export default CallMe
