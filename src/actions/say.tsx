// blog say payload
interface IPayload {
  pageIndex?: number
  pageSize?: number
}

// blog say const
const REQUEST_SAY = 'REQUEST_SAY'
type REQUEST_SAY = typeof REQUEST_SAY
const RECEIVE_SAY = 'RECEIVE_SAY'
type RECEIVE_SAY = typeof RECEIVE_SAY

// blog say action
interface IRequestSAY {
  type: REQUEST_SAY
  payload: IPayload
}

interface IReceiveSAY {
  type: RECEIVE_SAY
  payload: IPayload
  total: number
  say: object[]
}

type SAYAction = IRequestSAY | IReceiveSAY
export {
  SAYAction,
  REQUEST_SAY,
  RECEIVE_SAY,
  IPayload
}
