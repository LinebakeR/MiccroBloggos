import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../../src/App.css';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: '',
      id: '',
      email: ''
    };
  }
  componentDidMount() {
    if (!localStorage.getItem('jwtSecret')) {
      this.props.history.push('/login');
    }
    axios
      .get('http://localhost:4242/api/users')
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className='container col-sm-12'>
        {this.state.users.map(user => {
          return (
            <table
              class='table table-dark'
              style={{ marginTop: 50, backgroundColor: '#373E46' }}
            >
              <thead>
                <tr>
                  <th scope='col'>FirstName</th>
                  <th scope='col'>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    );
  }
}
