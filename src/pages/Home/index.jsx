import { connect } from 'react-redux'
import { setNavShow, setHomeArticlePage } from '../../store/actions'
import Articles from './Articles'
import MyCard from '../../components/Content/MyCard'
import TagCard from '../../components/Content/TagCard'
import './index.css'

const Home = props => {
  return (
    <>
      <div className='home-top'>
        <span className=''>小站</span>
        <span className=''>welcome</span>
        {/* 每日一句 */}
        {/* <span className=''>{content}</span> */}
      </div>
      <div className='home-box'>
        <div className='aside'>
          <MyCard />
          <TagCard />
        </div>
        <Articles />
      </div>
    </>
  )
}

export default connect(
  state => ({
    homeArticlePage: state.pageNum.homeArticlePage
  }),
  { setNavShow, setHomeArticlePage }
)(Home)
