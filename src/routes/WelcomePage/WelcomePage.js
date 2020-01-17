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
                <p>When you receive so many automated calls on your phone<br />
                   When your group decides to enter in a pub, but you forgot your ID and the guy at the entrance won't let you in <br />
                   When you're stuck in traffic and a champion cuts the line and gets ahead of you<br />
                   And yes, even when your boss says something mean, in front of everyone</p>
                <p>Although we should all be nice and optimistic, we're humans. Wrong things can happen, and we need a stress relief.</p>
                <p>Unleash is an app where you can write down all your bad thoughts and vent about people or situation you don't like</p>
                <p>It's fun and therapeutic, you'll feel immediately better!</p>
            </div>
           </>
         );
    }
}
 
export default WelcomePage;