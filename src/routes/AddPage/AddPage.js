import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import configuration from '../../configuration';
import TokenService from '../../services/token-service'
import PersonalContext from '../../PersonalContext'


class AddPage extends Component {
    static contextType = PersonalContext;
    state = { 
        content: ""
    }
    

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const note = this.state
        fetch(`${configuration.API_ENDPOINT}/notes`, {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`,
            // 'authorization': `bearer ${configuration.API_KEY}`
        }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => Promise.reject(error))
            }
            return res.json()
        })
        .then(data => {
            this.context.addNote(data)
            this.props.history.push('/landing')
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }
            
    
    render() { 
        const {note} = this.state
        return (
            <>
            <img src={require("./bomb.png")} alt="nuclear bomb" />
            <div className='content'>
                <h2>Drop your bomb here - not literally though!- </h2>
                <form className="registration"
                    onSubmit={this.handleSubmit}>                 
                        <input type="text" className="registration__control"name="thoughts" id="thoughts" value={note} onChange={this.handleChange}/>  
                        <label for="thoughts">Vent here your thoughts</label>
                    <button className="buttonSpace">Submit </button>
                </form>
            </div>
            <Link to='/landing'>Go back</Link>
            </>
          );
    }
}
 
export default AddPage;