import React, { Component } from 'react'
import Commands from '../Commands/Commands'
import './Nav.css';

class Nav extends Component {

    render() { 
        return (
            <nav>
                <header>Unleash</header>
                <Commands /> 
            </nav>
          );
    }
}
 
export default Nav;