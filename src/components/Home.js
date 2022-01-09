import React from 'react'
import{useState,useEffect} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Apod from '../components/Apod';
import { Input,Button,Form,message} from 'antd';
import 'antd/dist/antd.css';
import '../App.css'





function Home() {
    const[data,setData]= useState([]);
    const[startDate, setStartDate] = useState('');
    const[endDate,setEndDate] = useState('');
   
    const getDataFromServer = async () => {
        try {
          const resp = await axios.get("https://api.nasa.gov/planetary/apod?api_key=HNJPsMkBus0CpQus1r46maNZ99qnd57MeaiaXO2q")
          setData([resp.data])
        } catch (err) {
          console.log(err)
        }
      }
      
    const getDataForDate = async () => {
        try {
          const resp = await axios.get("https://api.nasa.gov/planetary/apod?api_key=HNJPsMkBus0CpQus1r46maNZ99qnd57MeaiaXO2q&start_date=" + startDate + "&end_date=" + endDate)
          setData([resp.data])
          message.success('Date parameters added');
        } catch (err) {
          console.log(err)
        }
      }
   
  useEffect(() => {
  getDataFromServer();
    }, []);
  
    const listItems =  data.map(inner => [inner].map(data =>
   
    <Apod key={uuidv4()} data={data}/>
    
  ));

  const DateItems =  data.map(inner => [inner].map((data) =>
   
    <Apod key={uuidv4()} data={data} />
    
  ));


  const submitAction = (e) => {
 e.preventDefault()
 setStartDate(startDate) 
 setEndDate(endDate) 
 getDataForDate()
 message.success('Please wait a moment',10);
 setEndDate('')
 setStartDate('')
  }

  
    return (
      <div className="App">
      <div className="content">
     <div>Get the APOD of specific periods by specifying the start and end date in YYYY-MM-DD Format</div>
     <Form onFinish={submitAction}>
     <Input style={{width: "40vw",marginBottom: 10}} placeholder="Start Date" allowClear value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
     <br/>
     <Input style={{width: "40vw", marginBottom: 10}} placeholder="End Date" allowClear value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
     <br/>
      <Button type="primary" onClick={submitAction} style={{width: "40vw", marginBottom: 10}} >Submit</Button>
      </Form> 
      <div>Today's APOD </div>
      </div>
   {(!{listItems} ? <>{listItems}</>  : <>{DateItems}</> )}
      </div>
    );
  }

export default Home
