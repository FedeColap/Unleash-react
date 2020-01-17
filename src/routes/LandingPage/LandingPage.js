import React, { Component } from 'react'
import JokeField from '../../components/JokeField/JokeField'
import Foaas from '../../components/Foaas/Foaas'
import Notelist from '../../components/Notelist/Notelist'
import PersonalContext from '../../PersonalContext'

class LandingPage extends Component {
    static contextType = PersonalContext;
    render() { 
        
        return (

            <>
                <img src={require('./skeletor-laugh.png')} />
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