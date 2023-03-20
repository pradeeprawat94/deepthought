import React from 'react'
import Header from '../../components/header/Header'
import LeftBar from '../../components/leftbar/LeftBar'
import './home.css'
import data from '../../data.json'
import RightBar from '../../components/rightbar/RightBar'
import Card from '../../components/card/Card'
import FooterIcon from '../../components/footericon/FooterIcon'

const Home = () => {
  const taskTitle = data.tasks[0].task_title
  const taskDiscription = data.tasks[0].task_description
  const assets = data.tasks[0].assets


  return (
    <div style={{position:'relative'}}>
      <Header />
      <div className="wrapper">
        <div className="side-menu">
          <LeftBar />
        </div>
        <div className="middle">
          <div className="heading">
            <h2 className='title'>Technical Project Management</h2>
            <button className='submit-btn'>Submit Task</button>
          </div>
          <div className="sub-heading">
            <h2 className='info'>{taskTitle}</h2>
            <p className='discription'>{taskDiscription}</p>
          </div>

          <div className="cards">
            {assets?.map((asset, i) => {
              return <Card data={asset} key={i} />

            })}
          </div>
        </div>
        <div className="right-bar">
          <RightBar />
        </div>
      </div>
      <FooterIcon/>
    </div>
  )
}

export default Home