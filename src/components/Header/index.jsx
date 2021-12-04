import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setNavShow } from '../../store/actions'
import { Popover } from 'antd'
import { GithubOutlined, WechatOutlined } from '@ant-design/icons'
import { weChatQRCode } from '../../utils/constant'
import './index.css'

const Header = props => {
  const weChat = <img src={weChatQRCode} alt='weChat' className='QR-code' />
  const { setNavShow, navShow, history } = props
  useEffect(() => {
    document.body.onmousewheel = event => {
      event = event || window.event
      setNavShow(window.event.wheelDeltaY > 0)
    }
  }, [])
  const navArr = [
    { id: 1, name: '说说', to: '/say' },
    { id: 2, name: '留言', to: '/msg' },
    { id: 3, name: '友链', to: '/link' },
    { id: 4, name: '建站', to: '/log' },
    { id: 5, name: '关于', to: '/about' }
  ]
  const lenNav = navArr.length
  const secondNavArr = [
    { id: 0, name: '找文章', to: '/articles' },
    { id: 1, name: '分类', to: '/classes' },
    { id: 2, name: '标签', to: '/tags' }
  ]
  return (
    <>
      <nav className='nav-pc primary-color' id={navShow ? '' : 'hiddenNav'}>
        <div className='nav-content'>
          <div className='nav-left'>
            <div
              className='home-btn primary-hover'
              onClick={() => history.push('/')}
            >
              {/* 个性化图标 */}
              <img
                src='https://ppoffice.github.io/hexo-theme-minos/images/logo.png'
                alt='toHome'
              />
            </div>
            {/* 联系方式 */}
            <Popover
              className='social-btn'
              color='#19aeae'
              content={weChat}
              overlayClassName='social-btn-card'
            >
              <WechatOutlined />
            </Popover>
            <Popover
              className='social-btn'
              color='#19aeae'
              content={weChat}
              overlayClassName='social-btn-card'
            >
              <GithubOutlined />
            </Popover>
          </div>

          <div className='nav-right'>
            <div className='nav-btn primary-hover articles-btn'>
              <div className='articels-second'>
                {secondNavArr.map(item => (
                  <NavLink
                    className='articels-second-item primary-color primary-hover'
                    activeClassName='primary-btn'
                    to={item.to}
                    key={item.id}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              文章
            </div>
            {navArr.map((item, index) => (
              <NavLink
                className={
                  index === lenNav - 1
                    ? 'nav-btn primary-hover margin-0'
                    : 'nav-btn primary-hover'
                }
                activeClassName='primary-btn'
                to={item.to}
                key={item.id}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default withRouter(
  connect(
    state => ({
      navShow: state.navShow
    }),
    { setNavShow }
  )(Header)
)
