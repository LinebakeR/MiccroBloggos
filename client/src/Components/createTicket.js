import React, { Component } from 'react';
import {getUser} from "../Utils/auth";
import axios from 'axios';

class createTicket extends Component {
    constructor(props) {
        super(props);

        this.onChangeContent = this.onChangeContent.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            content: '',
            userId: ''
        }
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`content: ${this.state.todo_responsible}`);

        const Ticket = {
            content: this.state.content
        };
        const user = getUser();

        axios.post('http://127.0.0.1:4242/api/tickets/' + user.id, Ticket)
            .then((res) => {
                console.log(res.data);
                this.props.history.push('/');
            });

        this.setState({
            content: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 20}} className="container col-sm-5">
                <h3>Create New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>content: </label>
                        <textarea type="text"
                                  maxLength="140"
                                  className="form-control"
                                  value={this.state.content}
                                  onChange={this.onChangeContent}
                                  rows="10"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Post" className="btn btn-success" />
                    </div>
                </form>
            </div>

        )
    }
}


export default createTicket;


/*
* function nom(param)
* {
*   ...code;
*   return;
* }
*
* function (param)
* {
*   ...code;
*   return;
* }
*
* (param) => {
* ...code;
* return;
* }
*
* param => return;
*
* */