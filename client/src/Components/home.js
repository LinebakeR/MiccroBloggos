import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Ticket from "./ticket";
import axios from "axios";
import {getUser} from "../Utils/auth";


export default class Home extends React.Component {
    state = {
        ticket: []
    };

    componentDidMount() {
        const user = getUser();
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
            className="container jumbotron"
            style={{marginTop: 50, backgroundColor: "#373E46"}}>
            {this.state.ticket.map((ticket) => <Ticket
                id={ ticket._id }
                description={ticket.content}/>)}
            <a className="mt-3 ml-3 btn btn-success" href="/create" role="button">Create Post</a>
        </div> : <div className="jumbotron text-center">Connectez vous pour pouvoir poster !</div>

    }
}
