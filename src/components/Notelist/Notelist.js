import React, { Component } from 'react'
import NoteItem from '../NoteItem/NoteItem'
import PersonalContext from '../../PersonalContext'

class Notelist extends Component {
    static contextType = PersonalContext;
    state = {  }
    render() { 

        return (
        <ul>
            {
                this.context.notes.map((note, index) =>
                <NoteItem
                  key={index}
                  id={note.id}
                  content={note.content}
                  created={note.created}
                />)
            }
        </ul>
          );
    }
}
 
export default Notelist;