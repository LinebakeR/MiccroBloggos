import React from 'react';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

const Ticket = (props) => (
    <div className="container">
        <ListGroupItem className="bloggos">
            <p>{props.description}</p>
            <Button href={"/edit/"+props.id}>Edit</Button>
        </ListGroupItem>
    </div>
);

export default Ticket