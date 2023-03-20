import React from 'react'
import './footericon.css';
import Question from '../../assests/img/question-mark.png'
import Schedule from '../../assests/img/schedule.png'
import Meeting from '../../assests/img/meeting.png'

const FooterIcon = () => {
  return (
    <div className='footer-icon'>
            <span className='background'>
                <img src={Question} alt="" />
            </span>
            <span className='background'>
                <img src={Schedule} alt="" />
            </span>
            <span className='background'>
                <img src={Meeting} alt="" />
            </span>
    </div>
  )
}

export default FooterIcon