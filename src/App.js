import React, { Component } from 'react';
import './App.css';
import styled from '@emotion/styled';
import { H3 } from './components/headings';
import { MediumButton } from './components/buttons';

const AppHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader>
          <H3>Top 100</H3>
          <MediumButton icon="plus">Add top 10</MediumButton>
        </AppHeader>
      </div>
    );
  }
}

export default App;
