import styled from '@emotion/styled';
import { rgba, cover } from 'polished';
import colors from '../../helpers/colors';

export const BaseCard = styled.div`
  position: relative;
  padding: 1.5rem;
  background-color: ${colors.white};
  border-radius: 0.0625rem;
  border: 1px solid ${rgba(colors.blue, 0.08)};

  &::before {
    content: '';
    ${cover()};
    bottom: 0.375rem;
    box-shadow: 0 10px 20px 0 ${rgba(colors.blue, 0.07)};
    z-index: -1;
  }
`;

export const StyledIntegrationCard = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 21.5625rem;
  padding: 1.25rem;
  border-radius: 5px;
  border: 1px solid #e0e7ff;

  &:not(:nth-of-type(1)) {
    margin-left: 1.5rem;
  }
`;

export const IntegrationCardAvatar = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 50%;
`;

export const IntegrationCardTitle = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${colors.black};
  line-height: 1.47;
`;

export const IntegrationCardSubtitle = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${colors.black3};
  line-height: 1.47;
`;
