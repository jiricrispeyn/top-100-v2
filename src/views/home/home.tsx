import React, { FC, useEffect } from 'react';
import { HomeProps } from '.';
import { AppHeader } from './style';
import { H3 } from '../../components/headings';
import { MediumLink } from '../../components/buttons';

const Home: FC<HomeProps> = ({ get }) => {
  useEffect(() => {
    get();
  }, []);

  return (
    <AppHeader>
      <H3>Top 100</H3>
      <MediumLink icon="plus" to="add">
        Add top 10
      </MediumLink>
    </AppHeader>
  );
};

export default Home;
