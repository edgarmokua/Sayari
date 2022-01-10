import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import{message,Form,Input,Button} from 'antd'
import { v4 as uuidv4 } from 'uuid';
import CoronalDisplay from './CoronalDisplay';

function Coronal() {
const[data,setData] = useState('')
const[startDate, setStartDate] = useState('');
const[endDate,setEndDate] = useState('');
const getCoronalData = async() =>{
    try {
    const resp = await axios.get("https://api.nasa.gov/DONKI/CME?start_date=" + startDate + "&end_date=" +endDate +"&api_key=HNJPsMkBus0CpQus1r46maNZ99qnd57MeaiaXO2q")
    setData([resp.data])
    message.success('Data parameters received',2);
    } catch (err) {
        console.log(err)
    }
}
useEffect(() => {
  getCoronalData()
}, [])
const coronalItems =  [data].map(inner => [inner].map((data) =>
<CoronalDisplay key={uuidv4()} data={data}/>

));
const submitAction = (e) => {
    e.preventDefault()
    setStartDate(startDate) 
    setEndDate(endDate) 
    getCoronalData()
    message.success('Please wait a moment',2);
    setEndDate('')
    setStartDate('')
   
     }

    return (
        <div>
            <div className="content">
            <div>Get the Coronal Mass Ejection data of specific periods by specifying the start and end date in YYYY-MM-DD Format</div>
           <Form onFinish={submitAction}>
     <Input style={{width: "40vw",marginBottom: 10}} placeholder="Start Date" allowClear value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
     <br/>
     <Input style={{width: "40vw", marginBottom: 10}} placeholder="End Date" allowClear value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
     <br/>
      <Button type="primary" onClick={submitAction} style={{width: "40vw", marginBottom: 10}} >Submit</Button>
      </Form> 
  </div>
    {coronalItems}

        </div>
    )
}

export default Coronal
