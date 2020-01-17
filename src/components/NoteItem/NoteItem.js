import React, { Component } from 'react'
import moment from 'moment';
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
                <p>{moment(created).format('DD MMM YYYY')}</p>
                <button type='button' className="liButton" onClick={() => {this.context.deleteNote(noteId)}}>delete</button>
            </li>
            
          );
    }
}
 
export default NoteItem;