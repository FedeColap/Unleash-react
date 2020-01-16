import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationPage extends Component {
    state = {  }
    render() { 
        return (
            <>
                <img src={require("./join.png")} alt="evil smile emoji" />
                <div className="content">
                    <RegistrationForm />
                    <section class="buttonSpace">
                        <p>Please press Submit to go to the Login Page... the "Save" button doesn't work for now</p>
                        <p class="action"><Link to='/login'>Submit</Link></p>
                        <p class="action"><Link to='/'>Cancel</Link></p>
                    </section>

                </div>
            </>
          );
    }
}
 
export default RegistrationPage;