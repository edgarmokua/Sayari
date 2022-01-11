import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Statistic, Card, Row, Col,Divider } from 'antd';
import { Typography} from 'antd';

function CoronalAnalysesDisplay({data}) {
    const { Text} = Typography;
    var rows  = []
   for (var i = 0;i < data.length; i++){
  var index = i
  for (var j = 0;j < data[index].length; j++){
      var indexes = j   
      var info = data[index][indexes]  
      rows.push(
          <div key = {uuidv4()}>
              <Divider orientation="left" plain>
    <div style={{fontSize: 30}}>CME ID: {info.associatedCMEID}</div>
    </Divider>
    <div className="site-statistic-demo-card">
    <Text keyboard style={{fontSize: 20}}>Catalog: {info.catalog}</Text>
        <Row>
        <Card title="Note"  style={{ color: '#3f8600',width : 300,marginBottom: 20}}>
          <div style={{fontSize: 15}}> {info.note}</div>
        </Card>
        <Card title="Most Accurate"  style={{ color: '#3f8600',width : 300,marginBottom: 20}}>
          <div style={{fontSize: 30}}>{(info.isMostAccurate === true ? <div> True</div> : <div> False</div>)}</div>
        </Card>
        </Row>
        <Row gutter={16}> 
        <Col span={"4vw"}>
    <Card>
          <Statistic
            title="Half Angle"
            value= {info.halfAngle}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
          </Card>
          </Col>
          <Col span={"4vw"}>
    <Card>
           <Statistic
            title="Latitude"
            value= {info.latitude}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
          </Card>
          </Col>
          <Col span={"4vw"}>
    <Card>
           <Statistic
            title="Longitude"
            value= {info.longitude}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
          </Card>
          </Col>
          <Col span={"4vw"}>
    <Card>
           <Statistic
            title="Speed"
            value= {info.speed}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
          </Card>
          </Col>
          <Col span={"4vw"}>
    <Card>
           <Statistic
            title="Time"
            value= {info.time21_5}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
          </Card>
          </Col>
          <Col span={"4vw"}>
    <Card>
           <Statistic
            title="Type"
            value= {info.type}
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

export default CoronalAnalysesDisplay
