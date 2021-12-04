// import { Button } from 'antd'

import './index.css'

const MyCard = props => {
  const list = [
    '<h1 style="color:white">VAN</h1>',
    '<h1 style="color:white">two years</h1>',
    '<h1 style="color:white">24</h1>',
    '<h1 style="color:white">111</h1>',
    '<h1 style="color:white">111</h1>'
  ]
  return (
    <>
      <div className=''>
        {/* <Button type="primary">111</Button> */}
        <img
          className='avatar'
          src='https://joeschmoe.io/api/v1/random'
          alt=''
        />
        {/* 自我介绍 */}
        <ul className='primary-font-color'>
          {list.map((item, index) => {
            return (
              <li
                className=''
                key={index + item}
                dangerouslySetInnerHTML={{ __html: item }}
              ></li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default MyCard
