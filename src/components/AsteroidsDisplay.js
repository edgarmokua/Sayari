import React from 'react'
import { Divider } from 'antd';
import '../App.css'
import { v4 as uuidv4 } from 'uuid';
import { Statistic, Card, Row, Col } from 'antd';

function AsteroidsDisplay({data: {element_count,near_earth_objects :{...date}}}){
    const result = Object.keys(date).map((key) => date[key])
var rows  = []
   for (var i = 0;i < result.length; i++){
  var index = i
  for (var j = 0;j < result[index].length; j++){
      var indexes = j   
      var info = result[index][indexes]  

    
      rows.push(
        <div key={uuidv4()}>
    <Divider orientation="left" plain>
    <div style={{fontSize: 30}}>Asteroid: {info.name}</div>
    </Divider>
    <div className="site-statistic-demo-card">
    <Row>
         <Card title="Potentially Hazardous" bordered={false} style={{ color: '#3f8600',width : 300,marginBottom: 20}}>
          <div> {(info.is_potentially_hazardous_asteroid === true ? <div style={{fontSize: 30}}>True</div> : <div style={{fontSize: 30}}>False</div>)}</div>
        </Card>
        <Card title="Close Approach Date and Time" bordered={false} style={{ color: '#3f8600',width : 300,marginBottom: 20}}>
          <div style={{fontSize: 30}}> {info.close_approach_data[0].close_approach_date_full}</div>
        </Card>
        <Card title="Orbiting Body" bordered={false} style={{ color: '#3f8600',width : 300,marginBottom: 20}}>
          <div style={{fontSize: 30}}> {info.close_approach_data[0].orbiting_body}</div>
        </Card>
        <Card title="Sentry Object" bordered={false} style={{ color: '#3f8600',width : 300,marginBottom: 20}}>
          <div> {(info.is_sentry_object === true ? <div style={{fontSize: 30}}>True</div> : <div style={{fontSize: 30}}>False</div>)}</div>
        </Card>
        </Row>
    <Row gutter={16} >
    <Col span={"4vw"}>
    <Card>
          <Statistic
            title="Absolute magnitude"
            value={info.absolute_magnitude_h}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
        </Col>
         <Col span={"4vw"}>
         <Card>
          <Statistic
            title="Minimum diameter(KM)"
            value={info.estimated_diameter.kilometers.estimated_diameter_min}
            precision={10}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col span={"4vw"}>
         <Card>
          <Statistic
            title="Maximum diameter(KM)"
            value={info.estimated_diameter.kilometers.estimated_diameter_max}
            precision={10}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>    
      </Col>
      <Col span={"4vw"}>
         <Card>
          <Statistic
            title="Velocity(KM/HR)"
            value={info.close_approach_data[0].relative_velocity.kilometers_per_hour}
            precision={8}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col span={"4vw"}>
         <Card>
          <Statistic
            title="Miss distance(KM)"
            value={info.close_approach_data[0].miss_distance.kilometers}
            precision={4}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
    </Row>
    </div>
     </div>
    )
}
  

  }


    return (
     <div className="scroll">
     <Card title="Element Count" bordered={false} style={{ color: '#3f8600',width : 300}}>
          <div style={{fontSize: 30}}> {element_count}</div>
        </Card>
      {[rows]}
      </div> 
           

    )
}

export default AsteroidsDisplay
