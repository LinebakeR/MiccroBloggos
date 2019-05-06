import React from 'react';
import jwt_decode from 'jwt-decode';
import {Button, Modal, Card, Form} from 'react-bootstrap';
import axios from 'axios';


export default class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            id: '',
            show: false,
        }
        this.onChange = this.onChange.bind(this)
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleShow() {
        this.setState({ show: true });
      }
    handleClose() {
      this.setState({ show: false });
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        const token = localStorage.getItem('jwtSecret');
        console.log(token);
        const decoded = jwt_decode(token)
        this.setState({username: decoded.username, email: decoded.email, ìd: decoded.id})
        this.setState({name: this.props.name});
        this.setState({newName: this.props.name});
        this.setState({email: this.props.email});
        this.setState({newEmail: this.props.email});
    }
    editProfile = editUser => {
        this.setState({username: this.state.newName});
        this.setState({email: this.state.newEmail});
        
        axios
            .put('http://127.0.0.1:4242/api/users', editUser)
            .then(res => {
                this.props.history.push('/profile');
                console.log('Updated with success')
                return res.data
            })
    }

    render() {
        return (
            <div className='container mt-5 ml-5'>
                <Card
                    bg="dark"
                    text="white"
                    style={{
                    width: '50rem'
                }}>
                    <Card.Header>Your Profile</Card.Header>
                    <Card.Body>
                        <Card.Title
                            style={{
                            textAlign: "center"
                        }}>Hello {this.state.username}
                            !</Card.Title>
                        <Card.Text>
                            <tr>
                                <td>Your username is :</td>
                                <td>
                                    {this.state.username}</td>
                            </tr>
                            <tr>
                                <td>Your email is :</td>
                                <td>{this.state.email}</td>
                            </tr>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                 <Button variant="primary" onClick={this.handleShow}>
                    Edit
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit your Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Control
                    name="username"
                    type="username"
                    placeholder="Enter your new Username"
                    value={this.state.newName}
                    onChange={this.onChange}/>
                <Form.Text className="text-muted"></Form.Text>
                    </Modal.Body>
                    <Modal.Body>
                    <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter your new Email"
                    value={this.state.newEmail}
                    onChange={this.onChange}/>
                <Form.Text className="text-muted"></Form.Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button 
                        variant="primary" 
                        onClick={this.editProfile}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );

    }
}