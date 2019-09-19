import React, { FC } from 'react';
import { Link } from '@reach/router';
import { StyledMediumButton } from './style';

interface ButtonProps {
  children: Element | string;
  icon?: string;
}

type LinkProps = ButtonProps & {
  to: string;
};

const Children: FC<ButtonProps> = ({ children, icon }) => (
  <>
    {icon && <i className={`mdi mdi-${icon}`} />}
    {children}
  </>
);

export const MediumButton: FC<ButtonProps> = props => (
  <StyledMediumButton>
    <Children {...props} />
  </StyledMediumButton>
);

export const MediumLink: FC<LinkProps> = ({ to, ...props }) => (
  <Link to={to}>
    <StyledMediumButton>
      <Children {...props} />
    </StyledMediumButton>
  </Link>
);
