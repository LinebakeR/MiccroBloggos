import React from 'react';
import {CardGroup} from 'react-bootstrap';
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
        return this.state.ticket.length > 0 ? <CardGroup style={{marginTop: 300}}>
                {this.state.ticket.map((ticket) => <Ticket
                title={ticket.title}
                description={ticket.content}/>)}
                </CardGroup> : <div>Pas encore de ticket</div>

    }
}

