import React, { Component } from 'react';
import BookList from './firebase/firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className='App-logo' alt='' />
          <h1>Firebase Practice</h1>
        </div>
        <BookList />
      </div>
    );
  }
}

export default App;