import { combineReducers } from 'redux'
import navShow from './navShow'
import pageNum from './pageNum'
import tags from './tags'

export default combineReducers({ navShow, pageNum, tags })
