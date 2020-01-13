import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationPage extends Component {
    state = {  }
    render() { 
        return (
            <>
                <img src={require("./join.png")} alt="evil smile emoji" />
                <h1>This is the register page of Unleash</h1>
                <div className="content">
                    <RegistrationForm />
                    <section class="buttonSpace">
                        <p class="action"><Link to='/login'>Submit</Link></p>
                        <p class="action"><Link to='/'>Cancel</Link></p>
                    </section>

                </div>
            </>
          );
    }
}
 
export default RegistrationPage;