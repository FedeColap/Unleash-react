import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PersonalContext from '../../PersonalContext'


class AddPage extends Component {
    static contextType = PersonalContext;
    state = { 
        id: "",
        content: ""
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        
        // AGGIUNGI UN RANDOM UUID ------------------------- E POI SET STATE
        // const idNumber = Math.floor((Math.random() * 1000) + 1);
        // console.log(idNumber)
        // this.setState({
        //     id: `${idNumber}`
        // })
        // console.log(this.state.id)
        const note = this.state
        this.props.history.push('/landing')
        this.context.addNote(note)
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
            </>
          );
    }
}
 
export default AddPage;