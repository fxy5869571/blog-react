// blog COLLECT payload
interface IPayload {
  pageIndex?: number
  pageSize?: number
  timeFile?: boolean
  id?: string
}

// blog COLLECT const
const REQUEST_COLLECT = 'REQUEST_COLLECT'
type REQUEST_COLLECT = typeof REQUEST_COLLECT
const RECEIVE_COLLECT = 'RECEIVE_COLLECT'
type RECEIVE_COLLECT = typeof RECEIVE_COLLECT
const DELETE_COLLECT = 'DELETE_COLLECT'
type DELETE_COLLECT = typeof DELETE_COLLECT
const ADD_COLLECT = 'ADD_COLLECT'
type ADD_COLLECT = typeof ADD_COLLECT

// blog COLLECT action
interface IAddCollect {
  type: ADD_COLLECT
  payload: object
}
interface IRequestCollect {
  type: REQUEST_COLLECT
  payload: IPayload
}
interface IDeleteCollect {
  type: DELETE_COLLECT
  payload: object
}
interface IReceiveCollect {
  type: RECEIVE_COLLECT
  payload: IPayload
  total: number
  collect: object[]
}

type collectAction = IRequestCollect | IReceiveCollect
export {
  ADD_COLLECT,
  collectAction,
  DELETE_COLLECT,
  REQUEST_COLLECT,
  RECEIVE_COLLECT,
  IPayload,
  IAddCollect,
  IDeleteCollect
}
