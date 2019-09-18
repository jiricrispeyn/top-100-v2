import styled from 'styled-components';
import { rgba } from 'polished';
import colors from '../../helpers/colors';

export const Input = styled.input`
  padding: 0.625rem 1rem;
  background-color: ${rgba('#E0E7FF', 0.2)};
  border: 1px solid #e0e7ff;
  border-radius: 0.3125rem;
  font-size: 0.9375rem;
  line-height: 1.375;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: ${colors.black3};
  }
`;
