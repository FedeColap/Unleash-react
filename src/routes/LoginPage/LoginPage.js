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

                <div className="content">  
                    <LoginForm />
                    <section class="buttonSpace">
                        <p>Please press Submit to go to the Landing Page... the "login" button doesn't work for now</p>
                        <p class="action"><Link to='/landing' onClick={this.context.loggingIn}>Submit </Link></p>
                        <p class="action"><Link to='/'>Cancel</Link></p>
                    </section>
                </div>  
            </>
          );
    }
}
 
export default LoginPage;