import React from 'react';
import jwt_decode from 'jwt-decode';
import { Button, Modal, Card, Form } from 'react-bootstrap';
import axios from 'axios';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      show: false
    };
    this.onChange = this.onChange.bind(this);
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
    });
  }

  componentDidMount() {
    if (!localStorage.getItem('jwtSecret')) {
      this.props.history.push('/login');
    } else {
      const token = localStorage.getItem('jwtSecret');
      console.log(token);
      const decoded = jwt_decode(token);
      this.setState({
        username: decoded.username,
        email: decoded.email,
        id: decoded.id
      });
      //  this.setState({newName: this.props.username});
      //  this.setState({newEmail: this.props.email});
    }
  }
  editProfile = e => {
    const profile = {
      username: this.state.username,
      email: this.state.email
    };
    const token = localStorage.getItem('jwtSecret');
    axios
      .put('http://127.0.0.1:4242/api/users/edit', profile, {headers: { 'x-auth-token': token }
      })
      .then(res => {
        console.log('Updated !');
        localStorage.removeItem('jwtSecret');
        this.props.history.push('/login');
        console.log(profile);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  };
  deleteUser = e => {
    const userDel = this.state.id;
    const token = localStorage.getItem('jwtSecret');
    console.log(userDel);
    axios
      .delete('http://localhost:4242/api/users/delete', {headers: { 'x-auth-token': token }
      })
      .then(res => {
       console.log('User deleted');
        localStorage.removeItem('jwtSecret');
        this.props.history.push('/register');
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='container mt-5 ml-5'>
        <Card
          bg='dark'
          text='white'
          style={{ width: '50rem', backgroundColor: '#373E46' }}
        >
          <Card.Header
            style={{ textAlign: 'center', backgroundColor: '#373E46' }}
          >
            Your Profile
          </Card.Header>
          <Card.Body
            style={{ textAlign: 'center', backgroundColor: '#373E46' }}
          >
            <Card.Title
              style={{ textAlign: 'center', backgroundColor: '#373E46' }}
            >
              Hello {this.state.username}!
            </Card.Title>
            <Card.Text
              style={{ textAlign: 'center', backgroundColor: '#373E46' }}
            >
              <tr>
                <td>Your username is :</td>
                <td>{this.state.username}</td>
              </tr>
              <tr>
                <td>Your email is :</td>
                <td>{this.state.email}</td>
              </tr>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Button variant='primary' onClick={this.handleShow}>
          Edit
        </Button>

        <Modal method='POST' show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              name='username'
              type='username'
              placeholder='Enter your new Username'
              value={this.state.username}
              onChange={this.onChange}
            />
            <Form.Text className='text-muted' />
          </Modal.Body>
          <Modal.Body>
            <Form.Control
              name='email'
              type='email'
              placeholder='Enter your new Email'
              value={this.state.email}
              onChange={this.onChange}
            />
            <Form.Text className='text-muted' />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleClose}>
              Close
            </Button>
            <Button type='submit' variant='primary' onClick={this.editProfile}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <button
          type='button'
          onClick={this.deleteUser}
          className='btn btn-danger'
        >
          Delete
        </button>
      </div>
    );
  }
}
