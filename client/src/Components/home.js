import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Ticket from "./ticket";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import {getUser} from "../Utils/auth";


export default class Home extends React.Component {
    state = {
        ticket: [],
        username: ''
    };

    componentDidMount() {
        const user = getUser();
        const token = localStorage.getItem('jwtSecret');
        console.log(token);
        const decoded = jwt_decode(token)
        this.setState({username: decoded.username})

        if(user) {
            axios
                .get('http://127.0.0.1:4242/api/tickets/user/'+ user.id)
                .then(res => {
                    console.log('ticket successfully get', res.data);
                    this.setState({ticket: res.data})
                })
        }
    }

    render(){
        return this.state.ticket.length > 0 ? <div
            className="jumbotron"
            style={{marginTop: 50, backgroundColor: "#5bc0de"}}>
            {this.state.ticket.map((ticket) => <Ticket
                id={ ticket._id }
                name={this.state.username}
                description={ticket.content}/>)}
            <a className="mt-3 ml-3 btn btn-success" href="/create" role="button">Create Post</a>
        </div> : <div className="container jumbotron text-center mt-4"
                      style={{fontWeight: "bold"}}>
            Connectez vous pour pouvoir poster !
        </div>

    }
}
