import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import PersonalContext from '../../PersonalContext'

class LoginPage extends Component {
    static contextType = PersonalContext;
    state = {  }
    handleLoginSuccess = () => {
        const { history } = this.props
        console.log(history)
        history.push('/landing')
    }
    render() { 
        return (
            <>
                <img src={require("./evil-spongebob.png")} alt="evil spongebob smiling" />

                <div className="content">  
                    <LoginForm 
                        onLoginSuccess={this.handleLoginSuccess}
                        loggingIn = {this.props.loggingIn}
                    />
                    <section className="buttonSpace">
                        {/* <p>Please press Submit to go to the Landing Page... the "login" button doesn't work for now</p>
                        <p class="action"><Link to='/landing' onClick={this.context.loggingIn}>Submit </Link></p> */}
                        <Link className="action" to='/'>Cancel</Link>
                    </section>
                </div> 
                <div className = "cheating">
                        <p>Wanna play around without Registration? Use these credentials:</p>
                        <p>Name: <strong>Juju</strong> - Password: <strong>qwerty17</strong></p>
                </div> 
            </>
          );
    }
}
 
export default LoginPage;