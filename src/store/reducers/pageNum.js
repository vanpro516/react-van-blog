import { SET_HOME_ARTICLE_PAGE, SET_TAG_PAGE } from '../actionTypes'

const defaultState = {
  homeArticlePage: 1,
  tagPage: 1
}

export default function addReducer (preState = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case SET_HOME_ARTICLE_PAGE:
      return {
        homeArticlePage: data,
        tagPage: preState.tagPage
      }
    case SET_TAG_PAGE:
      return {
        homeArticlePage: preState.homeArticlePage,
        tagPage: data
      }
    default:
      return preState
  }
}
// Reudcer只是返回了更改的数据，但是并没有更改store中的数据，store拿到了Reducer的数据，自己对自己进行了更新。
