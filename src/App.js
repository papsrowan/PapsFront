import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
// import Login from './Pages/Login/Login';
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import BroadCast from './Pages/Broadcast/BroadCast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Register login={true}/>}/>
        <Route path='/about' element = {<About />} />
        <Route path='/service' element = {<Service />}/>
        <Route path='/broadcast' element = {<BroadCast />}/>
      </Routes>
    </Router>
  );
}

export default App;
