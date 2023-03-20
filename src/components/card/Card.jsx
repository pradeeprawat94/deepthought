import React, { useState } from 'react'
import './card.css'
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BulbIcon from '../../assests/img/bulb.png'
import MsgIcon from '../../assests/img/msg.png'
import QuestionIcon from '../../assests/img/question.png'
import FlowerIcon from '../../assests/img/flower.png'
import Left from '../../assests/img/left.png'
import Right from '../../assests/img/right.png'
import Zoom from '../../assests/img/Icon (2).png'
import Paragraph from '../../assests/img/Paragraph.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Accordion from '../accordion/Accordion';
const Card = ({ data }) => {
    const fnqData = [
        {
            id: 1,
            question: 'Introduction',
            answer: 'The 4SA Method , How to bring a idea into progress ?'
        },
        {
            id: 2,
            question: 'Thread A',
            answer: 'How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?'
        },
        {
            id: 3,
            question: 'Example 1',
            answer: 'You have a concept , How will you put into progress?'
        },
    ]

    const [open, setOpen] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)

    const randumFun = (id) => {
        if (id === 18883) {
            return (
                <iframe width="480" height="290"
                    src={data.asset_content}>
                </iframe>
            )
        }
        if (id === 18884) {
            return (
                <>
                    <div className='box-heading' onClick={() => {
                        setOpen(!open)
                    }}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        <h2>Thread A </h2>
                    </div>
                    <div className={open ? 'trial expand' : 'trial collapse'}>
                        <div className='flex'>
                            <div className="text-aria">
                                <h2 className='text-aria-title'>Sub thread 1</h2>
                                <textarea className='text-aria-input' cols="20" rows="4" placeholder='Enter Text Here'></textarea>
                            </div>
                            <div className="text-aria">
                                <h2 className='text-aria-title'>Sub Interpretation 1</h2>
                                <textarea className='text-aria-input' cols="20" rows="4" placeholder='Enter Text Here'></textarea>
                            </div>
                        </div>
                        <div className='links-box'>
                            <div className="icons">
                                <img src={BulbIcon} alt="" />
                                <img src={MsgIcon} alt="" />
                                <img src={QuestionIcon} alt="" />
                                <img src={FlowerIcon} alt="" />
                            </div>
                            <div className='select-btn'>
                                <p> Select Categ</p>
                                <KeyboardArrowUpIcon style={{ height: '15px' }} />
                            </div>
                            <div className='select-btn'>
                                <p>Select Process</p>
                                <KeyboardArrowUpIcon style={{ height: '15px' }} />
                            </div>
                        </div>
                        <div className='flex'>
                            <button className='sub-thread-btn'>+ Sub-thread</button>
                        </div>

                        <div className='flex'>
                            <div className="text-aria">
                                <h2 className='text-aria-title'>Summary for Thread A</h2>
                                <textarea className='text-aria-input' cols="52" rows="3" placeholder='Enter Text Here'></textarea>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (id === 18885) {
            return (
                <>
                    <hr />
                    <div className='structure-box'>
                        <h3 className='structure-title'>Title</h3>
                        <input className='title-input' type="text" />
                        <h3 className='structure-title'>Content</h3>
                        <div className="file-tools">
                            <div className='options'>
                                <span>File</span>
                                <span>Edit</span>
                                <span>View</span>
                                <span>Insert</span>
                                <span>Format</span>
                                <span>Tools</span>
                                <span>Table</span>
                                <span>Help</span>
                            </div>
                            <div className="signs">
                                <span>
                                    <img src={Left} alt="" />
                                </span>
                                <span>
                                    <img src={Right} alt="" />
                                </span>
                                <span>
                                    <img src={Zoom} alt="" />
                                </span>
                                <span className='paragraph'>
                                    <img src={Paragraph} alt="" />
                                </span>
                                <span className='more-hori'>
                                    <MoreHorizIcon style={{ color: '#616161' }} />
                                </span>
                            </div>
                        </div>
                        <textarea type="text" className='full-text-aria' cols="30" rows="15" />
                    </div>
                </>
            )
        }
        if (id === 18886) {
            return (
                <>
                    <hr style={{ marginTop: '15px' }} />
                    <div className='fnq-box'>
                        {fnqData.map((element,i)=>{
                            return <Accordion key={i} data={element}/>
                        })}
                    </div>
                </>
            )
        }
    }
    return (
        <div className='card'>
            <div className="card-top">
                <p></p>
                <p>{data.asset_title}</p>
                <InfoIcon />
            </div>
            <div className="dis">
                <p ><span className='bold-dis'>Discription:</span> {data.asset_description}</p>
            </div>
            <div className="information">
                {randumFun(data.asset_id)}
            </div>
        </div>
    )
}

export default Card