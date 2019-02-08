import React from 'react';
import { StyledMediumButton, StyledMediumLink } from './style';

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
  <StyledMediumLink to={to}>
    <Children {...props} />
  </StyledMediumLink>
);
