import React, { Component } from 'react'
import JokeField from '../../components/JokeField/JokeField'

class LandingPage extends Component {
    state = {  }
    render() { 
        return (
            <div className="content">
                <JokeField />
            </div>
        );
    }
}
 
export default LandingPage;