import React from 'react';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

const Ticket = (props) => (
    <div className="container mt-4">
        <ListGroupItem className="bloggos">
            <h5>{props.description}</h5>
            <a style={{color: "red", marginLeft: 1000}}>{props.name}</a> 
            <br></br> 
            <Button href={"/edit/"+props.id}>Edit</Button>
        </ListGroupItem>
    </div>
);

export default Ticket