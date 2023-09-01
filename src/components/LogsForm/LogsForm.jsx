import React from 'react'
import Card from '../../UI/Card/Card'
import "./LogsForm.css"
import { useState } from 'react'
import Popup from '../../UI/Popup/Popup'


const LogsForm = (props) => {
    // 获取数据
    const [date, setDate] = useState('')
    const [desc, setDesc] = useState('')
    const [time, setTime] = useState('')
    const [showPopup, setShowPopup] = useState(false)

    const getDate = (e) => {
        setDate(e.target.value)
    }
    const getDesc = (e) => {
        setDesc(e.target.value);
    }
    const getTime = (e) => {
        setTime(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (date === '' || desc === '' || time === '') {
            setShowPopup(true)

        } else {
            const newLog = {
                date: new Date(date), //把之前的字符串变成date格式
                desc,
                time,
                id: +Date.now() //时间戳当id
            }
            //clear input
            setDate('')
            setDesc('')
            setTime('')

            props.onAddNewLog(newLog)
        }


    }

    const closePopup = () => {
        setShowPopup(false)
    }

    return (
        <Card className="logs-form">

            <form autoComplete='off' onSubmit={submitHandler}>

                <div className='form-item'>

                    <label htmlFor='date'>Date</label>
                    {/* 把value设置为date（state）才能实现双向绑定，在e.target.value中获得value的值 */}
                    <input id='date' type='date' autoComplete='off' onChange={getDate} value={date} />
                </div>
                <div className='form-item'>

                    <label htmlFor='desc'>Description</label>
                    <input id='desc' type='text' autoComplete='off' onChange={getDesc} value={desc} />
                </div>
                <div className='form-item'>
                    <label htmlFor='length'>Length</label>
                    <input id='length' type='number' autoComplete='off' onChange={getTime} value={time} />
                </div>
                <div className='form-btn'>
                    <button> Submit </button>
                </div>
            </form>
            {showPopup && <Popup text={'something is missing'} showYesBtn={false} noText={'try again'} onNo={closePopup} />}
        </Card>
    )
}

export default LogsForm

