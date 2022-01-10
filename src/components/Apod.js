import { Image, Descriptions,Button} from 'antd';


function Apod({data}) {
  
    var rows = []
    for (var i = 0;i < data.length; i++){
    var index = i
    rows.push(
        <div key={index}>
     <Button type="primary" href='/'>Back</Button>
     <Image width={"100vw"} height={"auto"} src={data[index].hdurl} fallback alt="space"/>
     <Descriptions
      title="APOD Descriptions" 
      bordered
      column={{ xxl: "4vw", xl: "3vw", lg: "3vw", md: "3vw", sm: "2vw", xs: "1vw" }}
    >
    <Descriptions.Item label="Copyright">{data[index].copyright}</Descriptions.Item>
    <Descriptions.Item label="Date">{data[index].date}</Descriptions.Item>
    <Descriptions.Item label="Title">{data[index].title}</Descriptions.Item>
    <Descriptions.Item label="Explanation">{data[index].explanation}</Descriptions.Item>
    </Descriptions>
        </div> 
    )
    }
    return (
     
        (data[index] ?
      [rows]
        : 
        <div>
     <Image width={"100vw"} height={"auto"}src={data.hdurl} fallback alt="space"/>
     <Descriptions
      title="APOD Descriptions"
      bordered
      column={{ xxl: "4vw", xl: "3vw", lg: "3vw", md: "3vw", sm: "2vw", xs: "1vw" }}
    >
    <Descriptions.Item label="Copyright">{data.copyright}</Descriptions.Item>
    <Descriptions.Item label="Date">{data.date}</Descriptions.Item>
    <Descriptions.Item label="Title">{data.title}</Descriptions.Item>
    <Descriptions.Item label="Explanation">{data.explanation}</Descriptions.Item>
    </Descriptions>
        </div>
    )
    
    )
}

export default Apod
