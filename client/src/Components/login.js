import React from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
        email: '',
        password: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
      const user = {
        email: this.state.email,
        password: this.state.password,
    }
    axios.post('http://localhost:4242/api/auth', user)
            .then(res => {
              localStorage.setItem('jwtSecret', res.data.token)
              console.log('you\'re logged in', res.data, user.email)
              this.props.history.push('/profile')
              return res.data;
            }) 
            .catch(err => {
              console.log(err)
            })
  }
  
  render(){
    return(
      <div className="container col-sm-5">
        <Form method='POST'style={{marginTop: 120}}>
            <Form.Group controlId="formBasicEmail2">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              name="email" 
              type="email" 
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.onChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              name='password' 
              type="password" 
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.onChange}/>
            </Form.Group>
            <Button 
            variant="dark" 
            type="submit"
            onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
      </div>)
  }
}