import React, {Component} from 'react'

class WelcomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <img src={require('./yes-but-no.png')} alt="another blog page? yes but no" />
            <div className="content">
                <h1>Welcome to Unleash</h1>
                <div className="intro">
                    <p>When you receive so many automated calls on your phone.</p>
                    <p>When your group decides to enter in a pub, but you forgot your ID and the guy at the entrance won't let you in. </p>
                    <p>When you're stuck in traffic and a champion cuts the line and gets ahead of you.</p>
                    <p>And yes, even when your boss says something mean, in front of everyone.</p>
                    <p>Although we should all be nice and optimistic, we're humans. Wrong things can happen, and we need a stress relief.</p>
                    <p>Unleash is an app where you can write down all your bad thoughts and vent about people or situation you don't like. </p>
                    <p>Do it here, so you can save the best side of you for the people you love :-) </p>
                    <p>It's fun and therapeutic, you'll feel immediately better!</p>
                </div>
            </div>
            <div className = "cheating">
                        <p>Ready to start? Click to Sign up in order to register <br /> 
                        or go to Log in and use these credentials:</p>
                        <p>Name: <strong>Juju</strong> - Password: <strong>qwerty17</strong></p>
            </div>
           </>
         );
    }
}
 
export default WelcomePage;