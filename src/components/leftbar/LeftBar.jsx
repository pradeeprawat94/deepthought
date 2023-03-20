import React, { useState } from 'react'
import './leftbar.css'

const LeftBar = () => {
  const [open, setOpen] = useState(false);
  const toggleBar = () => {
    setOpen(!open)
  }

  return (
    <div className={open ? "left-bar open" : 'left-bar close'} onClick={toggleBar}>
      <div className='left-bar-top'>
        {open ? <p>Journey Board</p> : ''}
      </div>
      <div className='left-bar-bottom'>
        {open ? <>
          <div >
            <ul className='board-items'>
              <li>Explore the world of management</li>
              <li>Technical Project Management</li>
              <li>Threadbuild</li>
              <li>Structure your Pointers</li>
              <li>4SA Method</li>
            </ul>
          </div>
        </>
          : <p>1</p>}

      </div>
    </div>

  )
}

export default LeftBar