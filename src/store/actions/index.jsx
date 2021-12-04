import { GET_TAGS, SET_NAV_SHOW, SET_HOME_ARTICLE_PAGE } from '../actionTypes'

// 获得所有标签
export const getTags = data => ({
  type: GET_TAGS,
  data
})
// action：对变化的描述
export const setNavShow = data => ({
  type: SET_NAV_SHOW,
  data
})

// 页码相关
export const setHomeArticlePage = data => ({
  type: SET_HOME_ARTICLE_PAGE,
  data
})
