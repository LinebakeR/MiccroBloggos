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
            <>
                <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <img src={logo} className="App-logo" alt="logo"/>
                    <a class="navbar-brand" href="/">Home</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/profile">Profile <span class="sr-only"></span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/members">Members</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={()=> {
                                        localStorage.removeItem('jwtSecret');
                                        this.props.history.push("/");
                                    }}>Logout</a>
                                </li>
                            </ul>
                        </div>
                </nav>
            </>        
        )
        const userLink = (
            <>
                <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <img src={logo2} className="App-logo navbar navbar-lg" alt="logo"/>
                    <a class="navbar-brand" href="/register">Register</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
        return (
            <div>
                    <button className='navbar-toggler'
                            type='button'
                            data-toogle='collapse'
                            data-target='#navbar1'
                            aria-expanded='false'
                            aria-label='Toogle navigation'>
                    </button>
                {(localStorage.jwtSecret === undefined) ? userLink : loginRegLink}
            </div>
        )
    }

}

export default withRouter(Navbar)
