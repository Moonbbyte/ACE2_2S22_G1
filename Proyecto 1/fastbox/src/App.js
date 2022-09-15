import './App.css';
import React from 'react';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
//BOOTSTRAPT
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Principal from './components/Principal';
import Graficas from './components/Graficas'
import Login from './components/Login'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/principal" exact element={<Principal />} />
      <Route path="/graficas" exact element={<Graficas/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
