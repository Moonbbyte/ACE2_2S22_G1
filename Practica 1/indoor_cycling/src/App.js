import './App.css';
import React from 'react';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Principal from './components/Principal';
//BOOTSTRAPT
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
