import React, { Component } from 'react'
import './RegistrationForm.css'
import ValidationError from '../ValidationError/ValidationError'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: {
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
    
      updateName(name) {
        this.setState({ name: { value: name, touched: true } });
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
        const { name, password, repeatPassword } = this.state;
    
        console.log("Name: ", name.value);
        console.log("Password: ", password.value);
        console.log("Repeat Password: ", repeatPassword.value);
      }
    
      validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
          return "Name is required";
        } else if (name.length < 3) {
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
            <h2>Register here</h2>
            <p className="registration__hint">* required field</p>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                className="registration__control"
                name="name"
                id="name"
                onChange={e => this.updateName(e.target.value)}
              />
              {this.state.name.touched && <ValidationError message={nameError} />}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                className="registration__control"
                name="password"
                id="password"
                onChange={e => this.updatePassword(e.target.value)}
              />
              <div className="registration__hint">
                6 to 72 characters, must include a number
              </div>
              {this.state.password.touched && <ValidationError message={passwordError} />}
            </div>
            <div className="form-group">
              <label htmlFor="repeatPassword">Repeat Password *</label>
              <input
                type="password"
                className="registration__control"
                name="repeatPassword"
                id="repeatPassword"
                onChange={e => this.updateRepeatPassword(e.target.value)}
              />
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
    // state = {  }
    // render() { 
    //     return (
    //         <form class="demo-form" action="/some-server-endpoint" method ="post">
    //             <h1>Welcome! Please fill this form.</h1>
    //             <fieldset name="contact-info">
    //                 <label for="nick-name">Nickname</label>
    //                 <input type="text" name="nick-name" id="nick-name" placeholder="Rosy" />
                        
    //                 <label for="email">Email</label>
    //                 <input type="email" name="email" id="email" placeholder="rosy@example.com"/>
                        
    //                 <label for="password" required>Password (8 characters minimum)</label>
    //                 <input type="password" pattern="^[1-9]\d{2}-\d{3}-\d{4}" name="password" id="password" placeholder="SomeSort_ofPassword1" title="Select your password" minlength="8" />

    //                 <label for="confirm-password" required>Confirm Password</label>
    //                 <input type="password" pattern="^[1-9]\d{2}-\d{3}-\d{4}" name="confirm-password" id="confirm-password" placeholder="SomeSort_ofPassword1" title="Confirm your password" minlength="8" />
                        
    //             </fieldset>
    //         </form>
    //       );
    // }
}
 
export default RegistrationForm;