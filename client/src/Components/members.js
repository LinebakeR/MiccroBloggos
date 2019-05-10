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
      <div className='container col-sm-6 align-left'>
        {this.state.users.map(user => {
          return (
            <div className="table" id="results">
              <div className='theader'>
                <div className='table_header'>Username</div>
                <div className='table_header'>Email</div>
              </div>
              <div className='table_row'>
                <div className='table_small'>
                  <div className='table_cell'></div>
                  <div className='table_cell'>{user.username}</div>
                </div>
                <div className='table_small'>
                  <div className='table_cell'></div>
                  <div className='table_cell'>{user.email}</div>
                </div>
                </div>
                </div>
          );
        })}    
      </div>
    );
  } 
}


