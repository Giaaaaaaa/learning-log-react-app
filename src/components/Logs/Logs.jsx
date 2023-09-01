import React, { useState } from 'react'
import "./Logs.css"
import LogItem from './LogItem/LogItem'
import Card from '../../UI/Card/Card'
import LogFilter from './LogFilter/LogFilter'

const Logs = (props) => {
    const [year, setYear] = useState(0)
    const yearChangeHandler =(selectedYear) => {
        setYear(selectedYear)
    }
    const filteredData = props.logsData.filter(item=>{
        if(year===0){
            return props.logsData
        } 
        return item.date.getFullYear()===year
    })
    const logItems = filteredData.map(item=>{
        return <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} onDel={()=>{props.onDel(item.id)}}/>
     })
    return (
        <Card className='logs'>
        <LogFilter onYearChange={yearChangeHandler}/>
        {logItems.length===0?<p className='no-log'>No log</p>:logItems}
        </Card>
    )
}

export default Logs