import React from 'react'
import './Calenda.css'

const Calenda = (props) => {
    const month = props.date.toLocaleDateString("en-AU",{month:"short"})
    const year = props.date.toLocaleDateString("en-AU",{year:"numeric"})
    const day = props.date.toLocaleString("zh-CN",{day:"2-digit"})
    const weekday = props.date.toLocaleString("ja-JP",{weekday:"long"})
    return (
        <div className='calenda'>
            <div className='month'>{year}年 {month}</div>
            <div className='day'>{day} {weekday}</div>
        </div>
    )
}

export default Calenda