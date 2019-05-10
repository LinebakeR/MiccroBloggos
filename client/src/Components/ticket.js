import React from 'react';
import { Link } from 'react-router-dom';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

const Ticket = props => (
  <div className='container mt-4'>
    <ul className=''>
      <li>{props.description}</li>
      <Link to='/profile' style={{ color: 'red', marginLeft: 1000 }}>
        {props.name}
      </Link>
      <br />
      <Button className='btn btn-primary' style={{ backgroundColor: 'white' }}>
        <Link to={'/edit/' + props.id}>Edit</Link>
      </Button>
    </ul>
  </div>
);

export default Ticket;
