import { useState } from 'react'
import './App.css'
import Logs from "./components/Logs/Logs"
import LogsForm from './components/LogsForm/LogsForm'
import Popup from './UI/Popup/Popup'

function App() {
  const [logsData, setLogsData] = useState([
    {
        id: '001',
        date: new Date(2021, 9, 20, 18, 30),
        desc: '买菜',
        time: 30
    },
    {
        id: '002',
        date: new Date(2020, 1, 2, 10, 12, 30),
        desc: '洗碗',
        time: 50
    },
    {
        id: '003',
        date: new Date(2023, 4, 27, 11, 30),
        desc: '扫地',
        time: 70
    },
    {
        id: '004',
        date: new Date(2022, 6, 5, 10, 30),
        desc: '浇花',
        time: 100
    }
])

const addNewLog = (newLog) => {
  setLogsData((prevState)=>[newLog,...prevState])
}

const delHandler = (id) => {
  setLogsData(prevState=>{
    return prevState.filter(item=>{
      return item.id !== id
    })
  })
}

  return (
    <div className='app'>
      <LogsForm onAddNewLog={addNewLog}/>
      <Logs logsData={logsData} onDel={delHandler}/>
    </div>
  )
}

export default App
