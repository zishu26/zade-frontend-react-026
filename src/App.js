import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layouts/Navbar';
import React, { Component }  from 'react';
import Home from './Pages/Home';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
    </div>

  );
}


export default App;
