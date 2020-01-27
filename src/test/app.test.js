import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from '../App';
import Nav from '../components/Nav/Nav'
import Commands from '../components/Commands/Commands'
import Foaas from '../components/Foaas/Foaas'
import JokeField from '../components/JokeField/JokeField'
import LoginForm from '../components/LoginForm/LoginForm'
import Notelist from '../components/Notelist/Notelist'
import NoteItem from '../components/NoteItem/NoteItem'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import ValidationError from '../components/ValidationError/ValidationError'
import AddPage from '../routes/AddPage/AddPage'



it('App component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it.skip('Nav component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Commands component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Commands /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Foaas component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Foaas /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('JokeField component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JokeField />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('LoginForm component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><LoginForm /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Notelist component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Notelist /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('NoteItem component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NoteItem /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('RegistrationForm component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('ValidationError component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ValidationError />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('AddPage component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AddPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
