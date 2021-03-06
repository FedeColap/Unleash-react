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
                    <section className="buttonSpace">
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
 
export default RegistrationPage;