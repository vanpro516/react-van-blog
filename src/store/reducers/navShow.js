import { SET_NAV_SHOW } from '../actionTypes'
const defaultState = true

// action构造函数
// reducer(state,action)
export default function addReducer (preState = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case SET_NAV_SHOW:
      return data
    default:
      return preState
  }
}
