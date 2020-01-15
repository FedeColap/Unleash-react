import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PersonalContext from '../../PersonalContext'
import './Commands.css';

class Commands extends Component {
    static contextType = PersonalContext;
    handleLogoutClick = e => {
        e.preventDefault()
        console.log('performing logging out')
        this.context.logginOut()
        // const { history } = this.props
        // console.log(history)
        // history.push('/')
        // this.props.history.push('/')
    }
    renderLogoutLink() {
        return (
          <div className='Header__logged-in'>
            <p className='commands'><Link to='/add'>Add a note</Link></p>
            <p className='commands' onClick={this.handleLogoutClick}><Link 
                to='/'
            >Logout</Link></p>
            
          </div>
        )
      }

      renderLoginLink() {
        return (
          <div className='Header__not-logged-in'>
            <p className='commands'><Link to='/register'>Register</Link></p>
            <p className='commands'><Link to='/login'>Log in</Link></p>
          </div>
        )
      }
    render() { 
        return ( 
            <div className="commands">
                {this.context.isLogged
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </div>
                

        );
    }
}
 
export default Commands;