import React, {Component} from 'react'

class WelcomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <img src={require('./emoji.png')} alt="evil smile emoji" />
            <h1>This is the welcome page of Unleash</h1>
            <div className="content">
                <p>description of what the app does</p>
                <p>Unleash is an app where you can write down all your bad thoughts and vent about people or situation you don't like</p>
                <p> It's fun and therapeutic, you'll feel immediately better!</p>
            </div>
           </>
         );
    }
}
 
export default WelcomePage;