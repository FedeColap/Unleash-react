import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import PersonalContext from '../../PersonalContext'

class LoginPage extends Component {
    static contextType = PersonalContext;
    state = {  }
    render() { 
        return (
            <>
                <img src={require("./evil-spongebob.png")} alt="evil spongebob smiling" />
                <h1>This is the login page of Unleash</h1>
                <div className="content">  
                    <LoginForm />
                    <section class="buttonSpace">
                        <p class="action"><Link to='/landing' onClick={this.context.loggingIn}>Submit </Link></p>
                        <p class="action"><Link to='/'>Cancel</Link></p>
                    </section>
                </div>  
            </>
          );
    }
}
 
export default LoginPage;