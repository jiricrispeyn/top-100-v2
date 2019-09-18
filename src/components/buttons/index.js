import React from 'react';
import { Link } from '@reach/router';
import { StyledMediumButton } from './style';

const Children = ({ children, icon }) => (
  <>
    {icon && <i className={`mdi mdi-${icon}`} />}
    {children}
  </>
);

export const MediumButton = props => (
  <StyledMediumButton>
    <Children {...props} />
  </StyledMediumButton>
);

export const MediumLink = ({ to, ...props }) => (
  <StyledMediumButton as={Link} to={to}>
    <Children {...props} />
  </StyledMediumButton>
);
