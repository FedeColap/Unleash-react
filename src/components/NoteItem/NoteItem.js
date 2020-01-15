import React, { Component } from 'react'
import { format } from 'date-fns'
import PersonalContext from '../../PersonalContext'
import './NoteItem.css'

class NoteItem extends Component {
    static contextType = PersonalContext;
    state = {  }
    render() { 
        const noteId = this.props.id
        // console.log(noteId)
        const created = this.props.created
        console.log(created)
        return (
            
            <li className="personalNotes">
                <p>{this.props.content}</p>
                {/* <p>{format(created, 'YYYY-MM')}</p> */}
                <p className="date">{created}</p>
                <button type='button' onClick={() => {this.context.deleteNote(noteId)}}>delete</button>
            </li>
            
          );
    }
}
 
export default NoteItem;