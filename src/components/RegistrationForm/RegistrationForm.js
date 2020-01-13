import React, { Component } from 'react'

class RegistrationForm extends Component {
    state = {  }
    render() { 
        return (
            <form class="demo-form" action="/some-server-endpoint" method ="post">
                <h1>Welcome! Please fill this form.</h1>
                <fieldset name="contact-info">
                    <label for="nick-name">Nickname</label>
                    <input type="text" name="nick-name" id="nick-name" placeholder="Rosy" />
                        
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="rosy@example.com"/>
                        
                    <label for="password" required>Password (8 characters minimum)</label>
                    <input type="password" pattern="^[1-9]\d{2}-\d{3}-\d{4}" name="password" id="password" placeholder="SomeSort_ofPassword1" title="Select your password" minlength="8" />

                    <label for="confirm-password" required>Confirm Password</label>
                    <input type="password" pattern="^[1-9]\d{2}-\d{3}-\d{4}" name="confirm-password" id="confirm-password" placeholder="SomeSort_ofPassword1" title="Confirm your password" minlength="8" />
                        
                </fieldset>
            </form>
          );
    }
}
 
export default RegistrationForm;