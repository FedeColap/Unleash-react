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
import PersonalContext from './PersonalContext'

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
    const baseUrl = 'http://localhost:8000/api/notes';
    console.log(baseUrl)
    fetch(baseUrl)
        .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
        })
        .then((data) => {
            this.setState({notes: data});
        })
        .catch(error => {
            console.error({error});
        });
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
    note.id = `${Math.floor((Math.random() * 10000) + 1)}`;

    console.log(note)
    console.log('adding the note')
    
    console.log(this.state.notes)
    this.setState({
        notes: [...this.state.notes, note],
    })
  }
  deleteNote = (noteId) => {
    console.log(noteId)
    let notes = this.state.notes.filter(note => {
      return note.id !== noteId
    });
    this.setState({
      notes: notes
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
      deleteNote: this.deleteNote
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
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
      </PersonalContext.Provider>
    );
  }
  
}

export default App;
