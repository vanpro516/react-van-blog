import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './index.css'

const TagCard = props => {
  console.log(props)
  const { history, tags } = props
  const toSomeArts = tag => {
    history.push(`/articleTag?tag=${tag}`)
  }
  return (
    <>
      <div className='TagCard-box primary-color'>
        {tags.map(item => (
          <span
            className='theTag primary-hover'
            key={item._id}
            onClick={() => toSomeArts(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  )
}

export default withRouter(
  connect(
    state => ({
      tags: state.tags
    }),
    {}
  )(TagCard)
)
