import React from 'react';
import jwt_decode from 'jwt-decode';
import {Card} from 'react-bootstrap';
import Axios from 'axios';

export default class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            username:'',
            email:'',
            id:''
        }
        

    }
    componentDidMount() {
        const token = localStorage.getItem('jwtSecret');
        console.log(token);
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.username, 
            email: decoded.email,
            ìd: decoded.id
        })
    // Axios.get('http://localhost:4242/api/auth', {params: {id: this.state.id}})
    // .then(res =>{
    //     this.setState({
    //         username,
    //         email,
    //     })
    // })
    }
    

    render() {
        return (
            <div className='container mt-5 ml-5'>
                <Card
                    bg="dark"
                    text="white"
                    style={{width: '18rem'}}>
                    <Card.Header>Your Profile</Card.Header>
                    <Card.Body>
                        <Card.Title>Hello {this.state.username} !</Card.Title>
                        <Card.Text>
                            <tr>
                                <td>Your username is:</td>
                                <td>{this.state.username}</td>
                            </tr>
                            <tr>
                                <td>Your email is:</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
            </div>
        )

    }
}