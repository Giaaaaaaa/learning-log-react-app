import React, { useState } from 'react'
import './LogItem.css'
import Calenda from './Calenda/Calenda'
import Content from './Content/Content'
import Card from '../../../UI/Card/Card'
import Popup from '../../../UI/Popup/Popup'

const LogItem = (props) => {
    const [showPopup, setShowPopup] = useState(false)

    const xHandler = () => {
        setShowPopup(true)
    }

    const noHandler = () => {
        setShowPopup(false)
    }

    const yesHandler = () => {
        props.onDel()
        setShowPopup(false)
    }

    return (
        <Card className='log-item'>
            {showPopup&&<Popup onYes={yesHandler} onNo={noHandler} yesText={'是的'} noText={'再想想'} text={'确定删除吗？'} showYesBtn={true}/>}
            <Calenda date={props.date}/>
            <Content desc={props.desc} time={props.time}/>
            <div>
                <div className='x-btn' onClick={xHandler}>X</div>
            </div>
            
        </Card>
    )
}

export default LogItem