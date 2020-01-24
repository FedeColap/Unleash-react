import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationPage extends Component {
    handleRegistrationSuccess = () => {
        const { history } = this.props
        history.push('/login')
    }
    render() { 
        return (
            <>
                <img src={require("./join.png")} alt="evil smile emoji" />
                <div className="content">
                    <RegistrationForm 
                        onRegistrationSuccess={this.handleRegistrationSuccess}
                    />
                    <section class="buttonSpace">
                        <p>Please press Submit to go to the Login Page... the "Save" button doesn't work for now</p>
                        <p class="action"><Link to='/login'>Submit</Link></p>
                        <Link className="action" to='/'>Cancel</Link>
                    </section>

                </div>
            </>
          );
    }
}
 
export default RegistrationPage;