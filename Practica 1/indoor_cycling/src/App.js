import './App.css';
import React from 'react';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
//PAGINAS
import Principal from './components/Principal';
import Dashboard from './components/Dashboard'
//BOOTSTRAPT
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Principal />} />
      <Route path="/Dashboard" element ={< Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
