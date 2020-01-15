import React, { Component } from 'react'
import JokeField from '../../components/JokeField/JokeField'
import Foaas from '../../components/Foaas/Foaas'
import Notelist from '../../components/Notelist/Notelist'

class LandingPage extends Component {
    state = {  }
    render() { 
        return (
            <>
            <div className="content">
                <JokeField />
                <Foaas />
            </div>
            <div>
                <Notelist />
            </div>
            </>
        );
    }
}
 
export default LandingPage;