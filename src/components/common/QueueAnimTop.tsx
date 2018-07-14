import QueueAnim from 'rc-queue-anim'
import * as React from 'react'
import { ReactHTML } from 'react'
interface IProps {
  children: ReactHTML
}

const QueueAnimTop = (props: IProps) => (
  <QueueAnim
    animConfig={[
      { opacity: [1, 0], translateY: [0, 50] },
      { opacity: [1, 0], translateY: [0, -50] }
    ]}>
    {props.children}
  </QueueAnim>
)

export default QueueAnimTop
