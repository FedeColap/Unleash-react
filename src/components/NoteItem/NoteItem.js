import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        // console.log(created)
        return (
            
            <li className="personalNotes">
                <p>{this.props.content}</p>
                <p className="date">{moment(created).format('DD MMM YYYY')}</p>
                <button type='button' className="liButton" onClick={() => {this.context.deleteNote(noteId)}}>delete</button>
                {/* <button type='button' className="liButton" onClick={() => {this.context.updateNote(noteId)}}>update</button> */}
                <p className="redirects"><Link to={`/update/${noteId}`}>update</Link></p>
            </li>
            
          );
    }
}
 
export default NoteItem;