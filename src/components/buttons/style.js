import styled from '@emotion/styled';
import { Link } from '@reach/router';
import colors from '../../helpers/colors';

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
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }

  .mdi {
    margin-right: 0.625rem;
    font-size: 1rem;
  }
`;

export const StyledMediumLink = styled(StyledMediumButton)`
  text-decoration: none;
`.withComponent(Link);
