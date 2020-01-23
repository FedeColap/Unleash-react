import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PersonalContext from '../../PersonalContext'
import TokenService from '../../services/token-service'
import './Commands.css';

class Commands extends Component {
    static contextType = PersonalContext;
    handleLogoutClick = e => {
        e.preventDefault()
        console.log('performing logging out')
        this.context.logginOut()
        TokenService.clearAuthToken()
        // const { history } = this.props
        // console.log(history)
        // history.push('/')
        // this.props.history.push('/')
    }
    renderLogoutLink() {
        return (
          <div className='subcommands'>
            <p className='redirects'><Link to='/add'>Add a note</Link></p>
            <p className='redirects' onClick={this.handleLogoutClick}><Link 
                to='/'
            >Logout</Link></p>
            
          </div>
        )
      }

      renderLoginLink() {
        return (
          <div className='subcommands'>
            <p className='redirects'><Link to='/register'>Sign up</Link></p>
            <p className='redirects'><Link to='/login'>Log in</Link></p>
          </div>
        )
      }
    render() { 
        return ( 
            <div className="commands">
                {/* {this.context.isLogged
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()} */}
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </div>
                

        );
    }
}
 
export default Commands;