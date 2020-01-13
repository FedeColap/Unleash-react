import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav';
import WelcomePage from './routes/WelcomePage/WelcomePage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import LoginPage from './routes/LoginPage/LoginPage'
import LandingPage from './routes/LandingPage/LandingPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <main className="playground">
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/register' component={RegistrationPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/landing' component={LandingPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
  
}

export default App;
