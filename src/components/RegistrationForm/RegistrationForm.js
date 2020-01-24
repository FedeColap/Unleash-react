import React, { Component } from 'react'
import './RegistrationForm.css'
import ValidationError from '../ValidationError/ValidationError'
import AuthApiService from '../../services/auth-api-service'


class RegistrationForm extends Component {

  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }
  
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
          repeatPassword: {
            value: "",
            touched: false
          }
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
    
      updateRepeatPassword(repeatPassword) {
        this.setState({
          repeatPassword: {
            value: repeatPassword,
            touched: true
          }
        });
      }
    
      handleSubmit(event) {
          event.preventDefault();
          const { username, password, repeatPassword } = this.state;
      
          console.log("Username: ", username.value);
          console.log("Password: ", password.value);
          console.log("Repeat Password: ", repeatPassword.value);
          this.setState({ error: null })
          AuthApiService.postUser({
              username: username.value,
              password: password.value,
          })
          .then(user => {
              username.value = ''
              password.value = ''
              this.props.onRegistrationSuccess()
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
    
      validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
    
        if (repeatPassword !== password) {
          return "Passwords do not match";
        }
      }
    
      render() {
        const nameError = this.validateName();
        const passwordError = this.validatePassword();
        const repeatPasswordError = this.validateRepeatPassword();
    
        return (
          <form className="registration" onSubmit={e => this.handleSubmit(e)}>
            <h2>Welcome!</h2>
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
                <div className="registration__hint">
                  6 to 72 characters, must include a number
                </div>
                {this.state.password.touched && <ValidationError message={passwordError} />}
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="registration__control"
                    name="repeatPassword"
                    id="repeatPassword"
                    onChange={e => this.updateRepeatPassword(e.target.value)}
                />
                <label htmlFor="repeatPassword">Repeat Password *</label>
                {this.state.repeatPassword.touched && <ValidationError message={repeatPasswordError} />}
            </div>
    
            <div className="registration__button__group">
              <button type="reset" className="registration__button">
                Clear
              </button>
              <button
                type="submit"
                className="registration__button"
                disabled={
                  this.validateName() ||
                  this.validatePassword() ||
                  this.validateRepeatPassword()
                }
              >
                Save
              </button>
            </div>
          </form>
        );
      }
}
 
export default RegistrationForm;