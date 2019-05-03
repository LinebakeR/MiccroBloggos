import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Form} from 'react-bootstrap';

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.onChange = this
            .onChange
            .bind(this)
        this.onSubmit = this
            .onSubmit
            .bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    onSubmit(e) {
        e.preventDefault()
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios
            .post('http://127.0.0.1:4242/api/users', user)
            .then(res => {
                this.props.history.push('/login');
                console.log('Registration success')
                return res.data
            })
    }

    render() {
        return (
            <div className="container col-sm-5">
                <Form
                    method="POST"
                    style={{
                    marginTop: 120
                }}>
                    <Form.Group controlId="formBasicEmail0">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            type="username"
                            placeholder="Enter your username"
                            value={this.state.username}
                            onChange={this.onChange}/>
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.onChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.onChange}/>
                    </Form.Group>
                    <Button variant="dark" type="submit" onClick={this.onSubmit}>Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
