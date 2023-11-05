import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layouts/Navbar';
import React, { Component }  from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';
import Login from './Pages/Login';
import './Styles.css';
import RegisterUser from './Pages/RegisterUser';
import AddStudent from './Pages/AddStudent';
import EditStudent from './Pages/EditStudent';
import { Link } from 'react-router-dom';
import Bottom from './Layouts/Bottom';
import { Button } from 'bootstrap';



function App() {
  return (
    <div className='App my-component my-dom-height'>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/addstudent" element={<AddStudent/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/" element={<Bottom/>}></Route>
        {/* <Route exact path="/adduser" element={<AddUser/>}></Route> */}
        <Route exact path='/editstudent/:id' element={<EditStudent/>}></Route>
        {/* <Route exact path='viewuser/:id' element={<ViewUser/>}></Route> */}
      </Routes>
      </Router>
      <Bottom></Bottom>
    </div>

  );
}


export default App;
