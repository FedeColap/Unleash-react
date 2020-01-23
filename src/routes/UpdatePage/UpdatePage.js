import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PersonalContext from '../../PersonalContext'
import configuration from '../../configuration'
import TokenService from '../../services/token-service'


class UpdatePage extends Component {
    static contextType = PersonalContext;
    state = { 
        id: "",
        content: "",
        created: null
    }
    componentDidMount() {
        const { noteId } = this.props.match.params
        fetch(`${configuration.API_ENDPOINT}/notes/${noteId}`, {
          method: 'GET',
          headers: {
            // 'authorization': `Bearer ${configuration.API_KEY}`
            'authorization': `basic ${TokenService.getAuthToken()}`,
          }
        })
        .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
    
            return res.json()
        })
        .then(responseData => {
            this.setState({
              id: responseData.id,
              content: responseData.content,
              created: responseData.created,
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { noteId } = this.props.match.params
        const { id, content, created } = this.state
        const newNote = { id, content, created }
        fetch(`${configuration.API_ENDPOINT}/notes/${noteId}`, {
            method: 'PATCH',
            body: JSON.stringify(newNote),
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
                // 'authorization': `Bearer ${configuration.API_KEY}`
            },
        })
        .then(res => {
            if (!res.ok)
            return res.json().then(error => Promise.reject(error))
        })
        .then(() => {
            this.resetFields(newNote)
            this.context.updateNote(newNote)
            this.props.history.push('/landing')
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }
    resetFields = (newFields) => {
        this.setState({
          id: newFields.id || '',
          content: newFields.content || '',
          created: newFields.created || '',
        })
    }
            
    
    render() { 
        const {note} = this.state
        return (
            <>
            <div className='content'>
                <h2>Throw your sh*t</h2>
                <form className="registration"
                    onSubmit={this.handleSubmit}>                 
                        <input type="text" className="registration__control"name="thoughts" id="thoughts" value={note} onChange={this.handleChange}/>  
                        <label for="thoughts">Correct your thoughts</label>
                    <button>Submit </button>
                    <button type='button' onClick={this.handleClickCancel}>
                        Cancel
                    </button>
                </form>

            </div>
            <Link to='/landing'>Go back</Link>
            </>
          );
    }
}
 
export default UpdatePage;