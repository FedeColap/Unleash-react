import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Commands.css';

class Commands extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="commands">
                <Link to='/register'>Register</Link>
                <Link to='login'>Log in</Link>
            </div>
                

        );
    }
}
 
export default Commands;