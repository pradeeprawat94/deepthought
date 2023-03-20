import React from 'react'
import './rightbar.css'

const RightBar = () => {

  return (
    <div>
      <div className="rightbar-left">
        <div className='close-btn'>
          <p>X</p>
        </div>
        <div className='notice'>
          <p className='notice-word'>N</p>
          <p className='notice-word'>o</p>
          <p className='notice-word'>t</p>
          <p className='notice-word'>i</p>
          <p className='notice-word'>c</p>
          <p className='notice-word'>e</p>
        </div>
        <div className='board'>
          <p className='notice-word'>B</p>
          <p className='notice-word'>o</p>
          <p className='notice-word'>a</p>
          <p className='notice-word'>r</p>
          <p className='notice-word'>d</p>
        </div>
      </div>
      <div className="rightbar-right"></div>
    </div>
  )
}

export default RightBar