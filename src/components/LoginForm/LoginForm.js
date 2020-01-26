import React, { Component } from 'react'
import ValidationError from '../ValidationError/ValidationError'
import TokenService from '../../services/token-service'
import PersonalContext from '../../PersonalContext'
import AuthApiService from '../../services/auth-api-service'
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
          error: null
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

        //RIVEDERE QUESTO PERCHE PUNTA ALLO STESSO ENDPOINT DELLA REGISTRATION------------VEDI AUT-API-SERVICE
        //POI, SINCE LAVORO SU /LOGIN, CAMBIA IL FETCH IN LOGIN
              AuthApiService.postLogin({
                username: username.value,
                password: password.value,
            })
            .then(res => {
              console.log(res)
              TokenService.saveAuthToken(
                    TokenService.makeBasicAuthToken(res.username, res.password)
                )
                this.props.onLoginSuccess()
                this.context.loggingIn()
                this.context.retrieveTheInfos()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
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
        const { error } = this.state
    
        return (
          <form className="login" onSubmit={e => this.handleSubmit(e)}>
            <h2>Login</h2>
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>
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
}
 
export default LoginForm;