import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { withRouter } from 'react-router-dom';
import logo from "../logo.png";
import logo2 from "../morty.png";
class Navbar extends React.Component {

    render() {

        console.log(this.props);
        const loginRegLink = (
                    <div className='navbar navbar-expand-lg' id='navbar1'>
                        <img src={logo} className="App-logo" alt="logo" />
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/profile">Profile</Nav.Link>
                                    <Nav.Link href="/members">Members</Nav.Link>
                                        <Button onClick={()=> {
                                            localStorage.removeItem('jwtSecret');
                                            this.props.history.push("/");
                                        }}>Logout</Button>
                                </Nav>
                            </li> 
                        </ul>
                    </div>         
        )
        const userLink = (
            <>
                <img src={logo2} className="App-logo" alt="logo" />
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </>
        )
        return (
            <div>
                <Nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">

                    <button className='navbar-toggler'
                            type='button'
                            data-toogle='collapse'
                            data-target='#navbar1'
                            aria-expanded='false'
                            aria-label='Toogle navigation'>
                    </button>
                </Nav>
                {(localStorage.jwtSecret === undefined) ? userLink : loginRegLink}
            </div>
        )
    }

}

export default withRouter(Navbar)