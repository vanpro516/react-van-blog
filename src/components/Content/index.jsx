import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../../pages/Home'
import ArticleTag from '../../pages/ArticleTag'
import Link from '../../pages/Link'
import Log from '../../pages/Log'
import Msg from '../../pages/Msg'
import Say from '../../pages/Say'

import './index.css'

const Content = () => {
  return (
    <>
      <div className='content-box secondary-color'>
        <div className='content-center'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/articleTag' component={ArticleTag} />
            <Route path='/link' component={Link} />
            <Route path='/log' component={Log} />
            <Route path='/msg' component={Msg} />
            <Route path='/say' component={Say} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </>
  )
}

export default Content
