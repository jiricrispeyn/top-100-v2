import styled from 'styled-components';
import { Link } from '@reach/router';
import colors from '../../helpers/colors';
import { rgba } from 'polished';

export const StyledMediumButton = styled.button`
  appearance: none;
  background-color: ${colors.blue};
  padding: 10px;
  min-width: 12.5rem;
  border-radius: 0.25rem;
  border: 0;
  font-size: 0.9375rem;
  color: ${colors.white};
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  transition: all 0.15s ease;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover,
  &:focus {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px ${rgba(colors.blue, 0.2)};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px ${rgba(colors.blue, 0.4)};
  }

  .mdi {
    margin-right: 0.625rem;
    font-size: 1rem;
  }
`;

export const StyledMediumLink = styled(StyledMediumButton)`
  text-decoration: none;
`.withComponent(Link);
