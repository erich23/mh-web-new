import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar.jsx';



class App extends Component {

  fetching(){

    fetch('http://example.com/movies.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });

  }
  



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ display: 'block', width: '90%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '70px', float: 'none' }}>
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
