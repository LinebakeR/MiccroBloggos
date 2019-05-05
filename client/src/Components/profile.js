import React from 'react';
import jwt_decode from 'jwt-decode';
import {Card} from 'react-bootstrap';
import {getUser} from "../Utils/auth";

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
        const user = getUser();
        this.setState({
            username: user.username,
            email: user.email,
            ìd: user.id
        })
    }

    render() {
        return (
            <div className='container mt-5 ml-5'>
                <Card
                    bg="dark"
                    text="white"
                    style={{width: '50rem'}}>
                    <Card.Header>Your Profile</Card.Header>
                    <Card.Body>
                        <Card.Title style={{textAlign: "center"}}>Hello {this.state.username} !</Card.Title>
                        <Card.Text>
                            <tr>
                                <td>Your username is :</td>
                                <td> {this.state.username}</td>
                            </tr>
                            <tr>
                                <td>Your email is :</td>
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