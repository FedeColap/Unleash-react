import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav';
import WelcomePage from './routes/WelcomePage/WelcomePage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import LoginPage from './routes/LoginPage/LoginPage'
import LandingPage from './routes/LandingPage/LandingPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import AddPage from './routes/AddPage/AddPage'
import UpdatePage from './routes/UpdatePage/UpdatePage'
import PersonalContext from './PersonalContext'
import configuration from './configuration'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      error: null,
      isLogged: false, 
    }
    this.loggingIn = this.loggingIn.bind(this)
    this.logginOut = this.logginOut.bind(this)
  }

  retrieveTheInfos = () => {
    console.log(configuration.API_ENDPOINT)
    fetch(`${configuration.API_ENDPOINT}/notes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${configuration.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          console.log(res)
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then((data) => {
        console.log(data)
          this.setState({notes: data});
          })
      .catch(error => {
        console.error(error)
        this.setState({ error })
      })
  }


  loggingIn () {
    console.log('loggingIn!')
    this.setState({
      isLogged: true
    })
    console.log(this.state.isLogged)
  }
  logginOut () {
    console.log('get outta here!')
    this.setState({
      isLogged: false
    })
    console.log(this.state.isLogged)
  }

  addNote = note => {
    console.log('adding the note')
    console.log(this.state.notes)
    this.setState({
        notes: [...this.state.notes, note],
    })
  }
  deleteNote = (noteId) => {
    let notes = this.state.notes.filter(note => {
      return note.id !== noteId
    });
    this.setState({
      notes: notes
    })

  };

  updateNote = updatedNote => {
       const newNotes = this.state.notes.map(nt =>
         (nt.id === updatedNote.id)
           ? updatedNote
           : nt
       )
       this.setState({
        notes: newNotes
       })
  };

  componentDidMount() {
    this.retrieveTheInfos()
  }
  
  render () {

    const value = {
      notes: this.state.notes,
      isLogged: this.state.isLogged,
      loggingIn: this.loggingIn,
      logginOut: this.logginOut,
      addNote: this.addNote,
      deleteNote: this.deleteNote,
      updateNote: this.updateNote
    }
    return (
      <PersonalContext.Provider value={value}>
      <div className='App'>
        <Nav />
        <main className="playground">
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/register' component={RegistrationPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/landing' component={LandingPage} />
            <Route path='/add' component={AddPage} />
            <Route path='/update/:noteId' component={UpdatePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
      </PersonalContext.Provider>
    );
  }
  
}

export default App;
