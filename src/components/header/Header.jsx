import React from 'react'
import './header.css'
import Logo from '../../assests/img/logo.svg'
import HomeIcon from '../../assests/img/home.png'
import ToolIcon from '../../assests/img/tools.png'
import ProfilePic from '../../assests/img/profile.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="left-header">
          <img className='logo' src={Logo} alt="" />
        </div>
        <div className="right-header">
          <ul className='menu'>
            <li className='link'><a href="#">
              <img className='link-icon' src={HomeIcon} alt="" />
            </a></li>
            <li className='link'><a href="#">
              <img className='link-icon' src={ToolIcon} alt="" />
            </a></li>
            <li className='link'><a href="#">
              <NotificationsIcon style={{ color: 'white' }} />
            </a></li>
            <li className='menu-item'><a href="#">
              <img src={ProfilePic} alt="" />
            </a></li>
            <li className='menu-item'><a href="#">
              <MoreVertIcon style={{ color: '#3683F0' }} />
            </a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header