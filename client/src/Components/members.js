import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import '../../src/App.css';


export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            username: '',
            id:'',
            email: ''
        }
    }
        componentDidMount() {    
            axios.get('http://localhost:4242/api/users')
                .then(res => {
                    console.log(res);
                        this.setState({users: res.data});                 
                })
                .catch(function (error) {
                    console.log(error);
                })
            }


        deleteUser = e => {
            const userDel = this.state.id
            const token = localStorage.getItem('jwtSecret');
            const decoded = jwt_decode(token).id
            this.setState({id: decoded.id})
            console.log(userDel)
            axios.delete('http://localhost:4242/api/users/delete', decoded, {headers: {'x-auth-token': token}})
            .then(res =>{
                res.send('User deleted');
                console.log(res)
            })
            .catch(function(error){
                console.log(error);
            })
        
        }
        render() {
            return (
                <div className='container col-sm-12'>
                {this.state.users.map((user)=> {
                    return(
                        <table class="table table-dark" style={{marginTop: 50, backgroundColor: "#373E46"}}>
                            <thead>
                                <tr>
                                <th scope="col">FirstName</th>
                                <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <button type="button" onClick={this.deleteUser} class="btn" style={{backgroundColor: '#17A2B8'}}>Delete</button>
                                </tr>
                            </tbody>
                        </table>
                    );
                })}
                </div>

            )
        } 
}  


