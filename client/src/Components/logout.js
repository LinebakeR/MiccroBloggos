import React from 'react';
import {Link} from "react-router-dom";


export default class LogOut extends React.Component {
    constructor(props){
        super()
        localStorage.removeItem('jwtSecret');
    }

    render(){
        return(
            <div>
            <Link to='/'></Link>
            </div>
        )
    }
}
        
  
