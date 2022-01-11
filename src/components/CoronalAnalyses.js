import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import{message,Form,Input,Button} from 'antd'
import { v4 as uuidv4 } from 'uuid';
import { Toggle } from '@fluentui/react/lib/Toggle'
import CoronalAnalysesDisplay from './CoronalAnalysesDisplay'

function CoronalAnalyses() {
    const[startDate,setStartDate] = useState('')
    const[endDate, setEndDate] = useState('')
    const [mostAccurateOnly, setMostAccurateOnly] = useState(true)
    const [completeEntryOnly,setCompleteEntryOnly] = useState(true)
    const [speed,setSpeed] = useState(0)
    const [halfAngle,setHalfAngle] = useState(0)
    const [data,setData] = useState('')
    const onChange = () => {
        setMostAccurateOnly(!mostAccurateOnly)
    }
    const onChange2 = () => {
        setCompleteEntryOnly(!completeEntryOnly)
    }
    const getCoronalAnalyses = async () => {
  try {
      const resp = await axios.get("https://api.nasa.gov/DONKI/CMEAnalysis?startDate=" + startDate + "&endDate=" + endDate + "&mostAccurateOnly=" + mostAccurateOnly + "&speed=" + speed + "&halfAngle=" + halfAngle + "&catalog=ALL&api_key=HNJPsMkBus0CpQus1r46maNZ99qnd57MeaiaXO2q")
      setData([resp.data]);
    ([...resp.data].length === 0 ? message.error("No data in set parameters") : message.success('Data is present in set parameters'))
  } catch (err) {
      console.log(err)
  }
    }
    console.log(data)
    useEffect(() => {
       getCoronalAnalyses()
    }, [])

    const coronalanalyses = [data].map(inner => [inner].map((data) =>
    <CoronalAnalysesDisplay key={uuidv4()} data={data}/>
    ))
    const submitAction = () => {
    setStartDate(startDate)
    setEndDate(endDate)
    getCoronalAnalyses()
    message.success('Parameters added',2)
    setStartDate('')
    setEndDate('')
    setCompleteEntryOnly('')
    setMostAccurateOnly('')
    setHalfAngle('')
    setSpeed('')
    }
    return (
        <div>
                <div>
           
            <div>Get the Coronal Mass Ejection Analyses data of specific periods by specifying the start and end date in <strong>YYYY-MM-DD Format</strong></div>
            <div><strong>Default data is set to current UTC date</strong></div>
           <Form onFinish={submitAction}>
     <Input style={{width: "40vw",marginBottom: 10}} placeholder="Start Date" allowClear value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
     <br/>
     <Input style={{width: "40vw", marginBottom: 10}} placeholder="End Date" allowClear value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
     <br/>
     <Toggle label="Most Accurate" onText="False" offText="True" onChange={onChange} checked={mostAccurateOnly} />
     <Toggle label="Complete Entry Only" onText="False" offText="True" onChange={onChange2} checked={completeEntryOnly} />
     <Input style={{width: "40vw",marginBottom: 10}} placeholder="Speed" allowClear value={speed} onChange={(e) => setSpeed(e.target.value)}/>
     <br/>
     <Input style={{width: "40vw",marginBottom: 10}} placeholder="Half Angle" allowClear value={halfAngle} onChange={(e) => setHalfAngle(e.target.value)}/>
     <br/>
      <Button type="primary" onClick={submitAction} style={{width: "40vw", marginBottom: 10}} >Submit</Button>
      </Form> 
   {coronalanalyses}
  </div> 
        </div>
    )
}

export default CoronalAnalyses
