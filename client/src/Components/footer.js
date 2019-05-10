import React from 'react';
import { MDBContainer } from 'mdbreact';

const Footer = () => {
  return (
    <div className='card text-center' style={{ backgroundColor: '#bbc1cb' }}>
      <div className='card-header'>Featured</div>
      <div className='card-body'>
        <h5 className='card-title'>
          Here, you are on a cheap copy of Twitter...
        </h5>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='!#'> By Levy & Gracias Company </a>
        </MDBContainer>

        <a href='/' className='btn btn-primary'>
          Go back Home
        </a>
      </div>
      <div className='card-footer text-muted'>;)</div>
    </div>
  );
};

export default Footer;
