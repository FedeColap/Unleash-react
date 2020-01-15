import React, { Component } from 'react'
import JokeField from '../../components/JokeField/JokeField'
import Notelist from '../../components/Notelist/Notelist'

class LandingPage extends Component {
    state = {  }
    render() { 
        return (
            <>
            <div className="content">
                <JokeField />
            </div>
            <div>
                <Notelist />
            </div>
            </>
        );
    }
}
 
export default LandingPage;