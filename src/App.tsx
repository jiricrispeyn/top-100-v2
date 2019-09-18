import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import Home from './views/home';
import AddList from './views/add-list';
import './App.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Home path="/" />
            <AddList path="add" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
