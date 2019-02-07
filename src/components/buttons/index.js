import React from 'react';
import { StyledMediumButton } from './style';

export const MediumButton = ({ icon, children }) => (
  <StyledMediumButton>
    {icon && <i className={`mdi mdi-${icon}`} />}
    {children}
  </StyledMediumButton>
);
