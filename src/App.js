import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './views/home';
import AddList from './views/add-list';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient();

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Router>
            <Home path="/" />
            <AddList path="add" />
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
