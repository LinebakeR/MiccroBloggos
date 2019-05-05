import React from 'react';
import {Card} from "react-bootstrap";

const Ticket = (props) => (
    <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Ticket