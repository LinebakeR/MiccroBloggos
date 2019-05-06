import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        console.log(this.props);
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

                    <div className='collapse navbar-collapse justify-content-md-center' id='navbar1'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Item href="/">
                                    <Nav.Link href="/profile">Profile</Nav.Link>
                                    <Nav.Link href="/members">Members</Nav.Link>
                                    const loginRegLink = (
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                        <Button onClick={()=> {
                                            localStorage.removeItem('jwtSecret');
                                            this.props.history.push("/");
                                        }}>Logout</Button>
                                    </Nav.Item>
                                </Nav>
                            </li> 
                        </ul>
                    </div>
                </Nav>
            </div>
        )
    }
}

export default withRouter(Navbar)