import { GET_TAGS } from '../actionTypes'

const defaultState = ['js', 'vue', 'react']

export default function addReducer (preState = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case GET_TAGS:
      return data
    default:
      return preState
  }
}
