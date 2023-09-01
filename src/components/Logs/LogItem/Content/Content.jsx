import React from 'react'
import './Content.css'

const Content = (props) => {
    return (
        <div className='content'>
            <div className='desc'>{props.desc}</div>
            <div className='time'>{props.time} mins</div>

        </div>
    )
}

export default Content