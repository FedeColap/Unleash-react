import React, { Component } from 'react'
import PersonalContext from '../../PersonalContext'
import './NoteItem.css'

class NoteItem extends Component {
    static contextType = PersonalContext;
    state = {  }
    render() { 
        const noteId = this.props.id
        console.log(noteId)
        return (
            
            <li className="personalNotes">
                <p>{this.props.content}</p>
                <button type='button' onClick={() => {this.context.deleteNote(noteId)}}>delete</button>
            </li>
            
          );
    }
}
 
export default NoteItem;