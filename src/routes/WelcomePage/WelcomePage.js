import React, {Component} from 'react'

class WelcomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            {/* <div className="container">
                <div className="polaroid rotate_right">
                    <img className="imgPolaroid" src={require('./emoji.png')} alt="evil smile emoji" />
                    <p class="caption">Muhahahahaha</p>
                </div>
                <div className="polaroid rotate_left">
                    <img className="imgPolaroid" src={require('./mrevil.png')} alt="evil smile emoji" />
                    <p class="caption">It's Dr. Evil, I didn't spend six years in Evil Medical School to be called "mister", thank you very much.</p>
                </div>
            </div>
            <div className="placeholder"></div> */}
            
            <div className="content">
                <h1>This is the welcome page of Unleash</h1>
                <p>description of what the app does</p>
                <p>Unleash is an app where you can write down all your bad thoughts and vent about people or situation you don't like</p>
                <p> It's fun and therapeutic, you'll feel immediately better!</p>
            </div>
           </>
         );
    }
}
 
export default WelcomePage;