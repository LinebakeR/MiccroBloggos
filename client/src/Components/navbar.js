import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link, withRouter, Li} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                    <button className='navbar-toggler'
                            type='button'
                            data-toogle='collapse'
                            data-target='#navbar1'
                            aria-expanded='false'
                            aria-lable='Toogle navigation'>
                            <span className='navbar-toogler-icons'></span>
                    </button>

                    <div className='collapse navbar-collapse justify-content-md-center' id='navbar1'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                            <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/members">Members</Nav.Link>
                        </Nav>
                            </li>
                        </ul>
                    </div>
                </Nav>
            </div>
        )
    }
}
