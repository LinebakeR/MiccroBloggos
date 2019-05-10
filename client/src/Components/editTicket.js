import React, { Component } from 'react';
import axios from 'axios';

export default class EditTicket extends Component {
  constructor(props) {
    super(props);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      content: ''
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('jwtSecret')) {
      this.props.history.push('/login');
    }

    axios
      .get('http://localhost:4242/api/tickets/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          content: response.data.content
        });
        console.log(this.props.match.params.id, 'props');
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newPost = {
      content: this.state.content
    };
    axios
      .post(
        'http://localhost:4242/api/tickets/update/' +
          this.props.match.params.id,
        newPost
      )
      .then(res => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div className='container col-sm-6 mt-4'>
        <h3>Update Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Content: </label>
            <textarea
              className='form-control'
              value={this.state.content}
              onChange={this.onChangeContent}
              rows='6'
              maxLength={140}
            />
          </div>
          <br />
          <div className='form-group'>
            <input
              type='submit'
              value='Update Post'
              className='btn btn-warning'
            />
          </div>
        </form>
      </div>
    );
  }
}
