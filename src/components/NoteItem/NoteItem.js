import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import PersonalContext from '../../PersonalContext'
import configuration from '../../configuration'
import TokenService from '../../services/token-service'
import './NoteItem.css'



class NoteItem extends Component {
    static contextType = PersonalContext;

    preDeleteNote(noteId) {
        console.log(noteId)
    fetch(`${configuration.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
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
        console.log(res)
      })
      .then(data => {
        this.context.deleteNote(noteId)
      })
      .catch(error => {
        console.error(error)
      })
    }

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
                <div className="listCommands">
                    <button type='button' className="liButton" onClick={() => {this.preDeleteNote(noteId)}}>delete</button>
                    {/* <button type='button' className="liButton" onClick={() => {this.context.updateNote(noteId)}}>update</button> */}
                    <p className="update"><Link to={`/update/${noteId}`}>update</Link></p>
                </div>
            </li>
            
          );
    }
}
 
export default NoteItem;