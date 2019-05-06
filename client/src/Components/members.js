import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            username: '',
            email: ''
        }
    }
    
        componentDidMount() {
            axios.get('http://localhost:4242/api/users')
                .then(res => {
                    console.log(res);
                        this.setState({users: res.data});                 
                    console.log('ca marche');
                })
                .catch(function (error) {
                    console.log(error);
                })
            }

        render() {
            return (
                <div className='container col-sm-10'style={{marginTop: 110}}>
                {this.state.users.map((user)=> {
                    return(
                    <Table striped bordered hover variant="dark">
                        <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                          </tr>
                        </tbody>
                    </Table>
                    );
                })}
                </div>

            )
        } 
}  