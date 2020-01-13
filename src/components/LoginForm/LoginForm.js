import React, { Component } from 'react'

class LoginForm extends Component {
    state = {  }
    render() { 
        return (
            <form class="demo-form" action="/some-server-endpoint" method ="post">
                <h1>Welcome back! Please log in.</h1>
                <fieldset name="contact-info">

                    <label for="nick-name">Nickname</label>
                    <input type="text" name="nick-name" id="nick-name" placeholder="Rosy" />
                        
                    <label for="password" required>Password (8 characters minimum)</label>
                    <input type="password" pattern="^[1-9]\d{2}-\d{3}-\d{4}" name="password" id="password" placeholder="888-888-8888" title="Select your password" minlength="8" />
                </fieldset>
            </form>
          );
    }
}
 
export default LoginForm;