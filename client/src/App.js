import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, withRouter, Li} from "react-router-dom";
import Home from './Components/home';
import Login from './Components/login';
import List from './Components/members';
import Navbar from './Components/navbar';
import Profile from './Components/profile';
import Register from './Components/register';
import LogOut from './Components/logout';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
     <Router>
     <Navbar />
     <Route exact path="/" component={Home}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/register" component={Register}/>
     <Route exact path="/profile" component={Profile}/>
     <Route exact path="/members" component={List}/>
     <Route exact path="/" component={LogOut}/>
     </Router>
    </div>
  );
}

export default App;
