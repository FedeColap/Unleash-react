import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PersonalContext from '../../PersonalContext'


class AddPage extends Component {
    static contextType = PersonalContext;
    state = { 
        id: "",
        content: "",
        created: null
    }
    

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            content : e.target.value
        })
        const d = new Date();
        // console.log(d);
        const date = d.toISOString();
        // console.log(date);
        this.setState({
            created: date
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const note = this.state
        console.log(note)
        this.context.addNote(note)
        this.props.history.push('/landing')
    }
            
    
    render() { 
        const {note} = this.state
        return (
            <>
            <h1>This is the add-note page of Unleash</h1>
            <div className='content'>
                <h2>Throw your sh*t</h2>
                <form
                    onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label for="thoughts">Vent here your thoughts</label>
                        <input type="text" name="thoughts" id="thoughts" value={note} onChange={this.handleChange}/>  
                    </fieldset>
                    <button>Submit </button>
                </form>
            </div>
            <Link to='/landing'>Go back</Link>
            </>
          );
    }
}
 
export default AddPage;