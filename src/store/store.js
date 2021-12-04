import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import allRudecers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(
  allRudecers,
  composeWithDevTools(applyMiddleware(thunk))
)
// Redux库提供的createStore函数：
// 第一个参数代表更新状态的reducer，
// 第二个参数是状态的初始值，
// 第三个参数可选，代表StoreEnhancer。
// 状态通过getStore()获取
// 在 Redux 的整个工作过程中，数据流是严格单向的。
