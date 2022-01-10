import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';
import { Statistic, Card, Row, Col,Divider } from 'antd';
import { Typography, Space } from 'antd';



function CoronalDisplay({data}) {
    const { Text} = Typography;
    var rows  = []
   for (var i = 0;i < data.length; i++){
  var index = i
  for (var j = 0;j < data[index].length; j++){
      var indexes = j   
      var info = data[index][indexes]  
      rows.push(
        <div key={uuidv4()}>
    <Divider orientation="left" plain>
    <div style={{fontSize: 30}}>Activity ID: {info.activityID}</div>
    </Divider>
    <div className="site-statistic-demo-card">
    <Text keyboard style={{fontSize: 20}}>Catalog: {info.catalog}</Text>
            <Row>
         <Card title="Note"  style={{ color: '#3f8600',width : 300,marginBottom: 20}}>
          <div style={{fontSize: 15}}> {info.note}</div>
        </Card>
        <Card title="CME Analyses"  style={{ color: '#3f8600',width : 300,marginBottom: 20}}>
        <div>Half angle: {info.cmeAnalyses[0].halfAngle}</div>
            {(info.cmeAnalyses[0].isMostAccurate === true ? <div>Most Accurate: True</div> : <div>Most Accurate: False</div>)}
            <div>Latitude: {info.cmeAnalyses[0].latitude}</div>
            <div>Longitude: {info.cmeAnalyses[0].longitude}</div>
            <div>Note: {info.cmeAnalyses[0].note}</div>
            <div>Speed: {info.cmeAnalyses[0].speed}</div>
            <div>Time: {info.cmeAnalyses[0].time21_5}</div>
            <div>Type: {info.cmeAnalyses[0].type}</div>
            <div>Level of data: {info.cmeAnalyses[0].levelOfData}</div>
            </Card>
        </Row>
        <Row gutter={16}> 
        <Col span={"4vw"}>
    <Card>
          <Statistic
            title="Instruments Display Name"
            value= {info.instruments[0].displayName }
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
        </Col>   <Col span={"4vw"}>
    <Card>
          <Statistic
            title="Source Location"
            value= {info.sourceLocation}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
        </Col>
        <Col span={"4vw"}>
    <Card>
          <Statistic
            title="Source Location"
            value= {info.sourceLocation}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
        </Col>
        <Col span={"4vw"}>
    <Card>
          <Statistic
            title="Start Time"
            value={info.startTime}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
        </Col>
        </Row>
        </div>
        </div>
      )}}
    return (
        <div>
            {[rows]}
        </div>
    )
}

export default CoronalDisplay
