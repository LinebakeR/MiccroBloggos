import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div class="card text-center" style={{backgroundColor: "#373E46"}}>
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Here, you are on a cheap copy of Twitter...</h5>
      <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a> By Levy & Gracias Company </a>
        </MDBContainer>
        
      <a href="/" class="btn btn-primary">Go back Home</a>
    </div>
    <div class="card-footer text-muted">
      ;)
    </div>
  </div>
  );
}

export default Footer;