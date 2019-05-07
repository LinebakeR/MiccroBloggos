import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Components/home';
import Login from './Components/login';
import List from './Components/members';
import Profile from './Components/profile';
import Register from './Components/register';
import createTicket from "./Components/createTicket";
import editTicket from "./Components/editTicket";
import Layout from "./Components/layout";


function App() {
    return (
        <div className="App">
            <Router>
                <Layout exact path="/" component={Home} />
                <Layout exact path="/login" component={Login} />
                <Layout exact path="/register" component={Register} />
                <Layout exact path="/profile" component={Profile} />
                <Layout exact path="/members" component={List} />
                <Layout exact path="/create" component={createTicket} />
                <Layout exact path="/edit/:id" component={editTicket} />
            </Router>
        </div>
    );
}

export default App;
