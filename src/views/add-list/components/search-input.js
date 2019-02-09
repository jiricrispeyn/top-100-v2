import React from 'react';
import styled from '@emotion/styled';
import colors from '../../../helpers/colors';
import { Input } from '../../../components/form';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 100%;
  border: 0;
  padding: 1.5rem;
  padding-left: 3.4375rem;
`;

const Icon = styled.i`
  position: absolute;
  left: 1.25rem;
  font-size: 1.25rem;
  color: ${colors.black3};
`;

export const SearchInput = props => (
  <Container>
    <Icon className="mdi mdi-magnify" />
    <StyledInput {...props} />
  </Container>
);
