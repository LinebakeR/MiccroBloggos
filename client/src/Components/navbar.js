import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter, Link } from 'react-router-dom';
import logo from "../logo.png";
import logo2 from "../Logo3.png";

class Navbar extends React.Component {

    render() {

        console.log(this.props);
        const loginRegLink = (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    <a className="navbar-nav" href="/">
                        <img src={logo2} className="App-logo navbar navbar-lg" alt="logo"/>
                    </a>
                    <a className="navbar-brand" href="/register">Register</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/profile">Profile <span className="sr-only"></span></a>
                                </li>
                                <li className="nav-item">
                                    <Link to ={"/members"}>Members</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={()=> {
                                        localStorage.removeItem('jwtSecret');
                                        this.props.history.push("/login");
                                    }}>Logout</a>
                                </li>
                            </ul>
                        </div>
                </nav>
            </>
        );
        const userLink = (
            <>
                <nav class="navbar navbar-expand-lg navbar navbar-dark bg-info">
                    <a className="navbar-nav" href="/">
                        <img src={logo} className="App-logo navbar navbar-lg" alt="logo"/></a>
                    <a class="navbar-brand" href="/register">Register</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
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
        );
        return (
            <div>
                    <button className='navbar navbar-toggler fixed-top'
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
