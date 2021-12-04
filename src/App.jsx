// import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { Button } from 'antd'
import Header from './components/Header'
import Content from './components/Content'
import './App.css'

const App = props => {
  // const [classes, setClasses] = useState('')
  // useEffect(() => {}, [])
  return (
    <div className='App'>
      <Header />
      <Content/>
    </div>
  )
}

export default connect()(App)
