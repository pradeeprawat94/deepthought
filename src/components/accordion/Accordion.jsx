import React,{useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './accordion.css'

const Accordion = ({data}) => {
    const [show,setShow] = useState(false)
    return (
        <div>
            <div className="questions" onClick={()=>{setShow(!show)}}>
                {show?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon />}
                <p>{data.question}</p>
            </div>
            <div className={show?"answers-expand" : "answers"}>
                <p className='padding'>{data.answer}</p>
                {(data.id===3)?"":<p className='see-more'>See more</p>}   
            </div>
        </div>
    )
}

export default Accordion