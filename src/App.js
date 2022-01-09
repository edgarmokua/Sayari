import './App.css';
import{BrowserRouter as  Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import {  MenuUnfoldOutlined} from '@ant-design/icons';
import{useState} from 'react';
import { Drawer,Button } from 'antd';
import './App.css'


function App() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
 <>
 <div className='nav'>
        <div className="navitem1">
          <MenuUnfoldOutlined onClick={showDrawer}/>
          </div>
          <div className="navitem2">
             Sayari
             </div>
        </div>
        <Drawer title="Menu"  theme="dark" placement="left" onClose={onClose} visible={visible}>
      <Button type="primary" href="/">APOD</Button>
      </Drawer>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          </Routes>
      </Router>
    
   </>
  );
}

export default App;
