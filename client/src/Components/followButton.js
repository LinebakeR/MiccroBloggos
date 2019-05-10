import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default class followButton extends Component{
    render(){
        return(

            <div className='d-inline-block mt-5'>
            <button className="btn btn-success">Follow</button>
            <button className="btn btn-success">Unfollow</button>
            </div>
        );
    }
    
}