import React,{useState} from 'react'
import{message,Form,Input,Button} from 'antd'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import AsteroidsDisplay from './AsteroidsDisplay';


function Asteroids() {
    const[data,setData]= useState([]);
    const[date,setDate] = useState([]);
    const[startDate, setStartDate] = useState('');
    const[endDate,setEndDate] = useState('');
    const getDataForDate = async () => {
        try {
          const resp = await axios.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=" + startDate + "&end_date=" +endDate +"&api_key=HNJPsMkBus0CpQus1r46maNZ99qnd57MeaiaXO2q")
          setData([resp.data])
          message.success('Date parameters added');
        } catch (err) {
          console.log(err)
        }
      }
console.log(data)
const asteroidItems =  data.map(inner => [inner].map((data) =>
<AsteroidsDisplay key={uuidv4()} data={data} date={[date]}/>

));
const submitAction = (e) => {
    e.preventDefault()
    setStartDate(startDate) 
    setEndDate(endDate) 
    setDate(startDate,endDate)
    getDataForDate()
    message.success('Please wait a moment',2);
    setEndDate('')
    setStartDate('')
   
     }
    return (
        <div>
             <Form onFinish={submitAction}>
     <Input style={{width: "40vw",marginBottom: 10}} placeholder="Start Date" allowClear value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
     <br/>
     <Input style={{width: "40vw", marginBottom: 10}} placeholder="End Date" allowClear value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
     <br/>
      <Button type="primary" onClick={submitAction} style={{width: "40vw", marginBottom: 10}} >Submit</Button>
      </Form> 
      {asteroidItems}
        </div>
    )
}

export default Asteroids
