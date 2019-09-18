import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './views/home';
import AddList from './views/add-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <AddList path="add" />
        </Router>
      </div>
    );
  }
}

export default App;
