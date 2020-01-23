import React, { Component } from 'react'
import ValidationError from '../ValidationError/ValidationError'
import TokenService from '../../services/token-service'
import PersonalContext from '../../PersonalContext'
import '../RegistrationForm/RegistrationForm.css'

class LoginForm extends Component {
  static contextType = PersonalContext;

  static defaultProps = {
    onLoginSuccess: () => {},
    loggingIn: () => {}
  }

    constructor(props) {
        super(props);
        this.state = {
          username: {
            value: "",
            touched: false
          },
          password: {
            value: "",
            touched: false
          },
        };
      }
    
      updateName(username) {
        this.setState({ username: { value: username, touched: true } });
      }
    
      updatePassword(password) {
        this.setState({
          password: { value: password, touched: true }
        });
      }
    
      
    
      handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
    
        console.log("Username: ", username.value);
        console.log("Password: ", password.value);
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )
        this.props.onLoginSuccess()
        this.context.loggingIn()
      }
    
      validateName() {
        const username = this.state.username.value.trim();
        if (username.length === 0) {
          return "Name is required";
        } else if (username.length < 3) {
          return "Name must be at least 3 characters long";
        }
      }
    
      validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
          return "Password is required";
        } else if (password.length < 6 || password.length > 20) {
          return "Password must be between 6 and 20 characters long";
        } else if (!password.match(/[0-9]/)) {
          return "Password must contain at least one number";
        }
      }
    
      render() {
        const nameError = this.validateName();
        const passwordError = this.validatePassword();
    
        return (
          <form className="login" onSubmit={e => this.handleSubmit(e)}>
            <h2>Login</h2>
            <div className="form-group">
                <input
                    type="text"
                    className="registration__control"
                    name="name"
                    id="name"
                    onChange={e => this.updateName(e.target.value)}
                />
                <label htmlFor="name">Name *</label>
                {this.state.username.touched && <ValidationError message={nameError} />}
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="registration__control"
                    name="password"
                    id="password"
                    onChange={e => this.updatePassword(e.target.value)}
                />
                <label htmlFor="password">Password *</label>
                {this.state.password.touched && <ValidationError message={passwordError} />}
            </div>
    
            <div className="login__button__group">
              <button type="reset" className="login__button">
                clear
              </button>
              <button
                type="submit"
                className="login__button"
                disabled={
                  this.validateName() ||
                  this.validatePassword()
                }
              >
                login
              </button>
            </div>
          </form>
        );
      }
    // state = {  }
    // render() { 
    //     return (
    //         <form class="demo-form" action="/some-server-endpoint" method ="post">
    //             <h1>Welcome back! Please log in.</h1>
    //             <fieldset name="contact-info">

    //                 <label for="nick-name">Nickname</label>
    //                 <input type="text" name="nick-name" id="nick-name" />
                        
    //                 <label for="password" required>Password (8 characters minimum)</label>
    //                 <input type="password" pattern="^[1-9]\d{2}-\d{3}-\d{4}" name="password" id="password" title="Select your password" minlength="8" />
    //             </fieldset>
    //         </form>
    //       );
    //}
}
 
export default LoginForm;