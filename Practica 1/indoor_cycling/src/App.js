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
      <Route path="/" exact element={<Principal nameUser="JOSE PEREZ"/>} />
      <Route path="/Dashboard" element ={< Dashboard calQuem="12" tempCor="74 C" ritCard="42" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
