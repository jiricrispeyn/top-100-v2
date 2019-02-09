import styled from '@emotion/styled';
import { darken } from 'polished';
import { Link } from '@reach/router';

export const StyledLink = styled(Link)`
  font-size: 0.9375rem;
  color: #b0bac9;
  text-decoration: none;
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-left: 0.9375rem;

  &:hover {
    color: ${darken(0.2, '#b0bac9')};
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  overflow: auto;
  margin-top: 2.25rem;
  padding-bottom: 17px;
`;
