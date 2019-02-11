import React from 'react';
import { AppHeader } from './style';
import { H3 } from '../../components/headings';
import { MediumLink } from '../../components/buttons';

const Home = () => {
  return (
    <AppHeader>
      <H3>Top 100</H3>
      <MediumLink as="div" icon="plus" to="add">
        Add top 10
      </MediumLink>
    </AppHeader>
  );
};

export default Home;