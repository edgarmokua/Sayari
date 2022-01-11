import './App.css';
import{BrowserRouter as  Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import {  MenuUnfoldOutlined} from '@ant-design/icons';
import{useState} from 'react';
import { Drawer,Button,Dropdown,Menu } from 'antd';
import Asteroids from './components/Asteroids';
import { DownOutlined } from '@ant-design/icons';
import Coronal from './components/Coronal';
import CoronalAnalyses from './components/CoronalAnalyses';



function App() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const menu = (
    <Menu>
      <Menu.Item key="1"><a href="/asteroids">Asteroids</a></Menu.Item>
      <Menu.Item key="2"><a href="/coronal">Coronal</a></Menu.Item>
      <Menu.Item key="3"><a href="/coronalanalyses">Coronal Analyses</a></Menu.Item>
    </Menu>
  );
  return (
 <>
 <div className='nav'>
        <div className="navitem1">
          <MenuUnfoldOutlined onClick={showDrawer}/>
          </div>
          <div className="navitem2" >
            <a href='/' className='a'>Sayari</a>
             </div>
            <div className="navlink">
             <Dropdown overlay={menu}>
    <Button className="ant-dropdown-link" onClick={e => e.preventDefault() }>
      More<DownOutlined />
    </Button>
  </Dropdown>
  </div>    
        </div>
        <Drawer title="Menu"  theme="dark" placement="left" onClose={onClose} visible={visible}>
      <Button type="primary"  href="/">APOD</Button><br/><br/>
      <Button type="primary" href="/asteroids">Asteroids</Button><br/><br/>
      <Button type="primary" href="/coronal">Coronal</Button><br/><br/>
      <Button type="primary" href="/coronalanalyses">Coronal Analyses</Button>
      </Drawer>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/asteroids" element={<Asteroids/>}/>
          <Route path="/coronal" element={<Coronal/>}/>
          <Route path="/coronalanalyses" element={<CoronalAnalyses/>}/>
          </Routes>
      </Router>
    
   </>
  );
}

export default App;
