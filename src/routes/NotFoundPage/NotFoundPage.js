import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFoundPage extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            {/* <img src={require('./emoji.png')} alt="evil smile emoji" /> */}
            <h1>Page not Found</h1>
            <div className="content">
                <p>Sorry Dude, please go back</p>
                <p class="action"><Link to='/'>Cancel</Link></p>
            </div>
           </>
         );
    }
}
 
export default NotFoundPage;