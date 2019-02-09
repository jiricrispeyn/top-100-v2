import React from 'react';
import {
  BaseCard,
  StyledIntegrationCard,
  IntegrationCardAvatar,
  IntegrationCardTitle,
  IntegrationCardSubtitle,
} from './style';

const IntegrationCard = ({ title, subtitle, src, alt }) => (
  <StyledIntegrationCard>
    <IntegrationCardAvatar src={src} alt={alt} />
    <div style={{ flex: 1, marginLeft: '.9375rem' }}>
      <IntegrationCardTitle>{title}</IntegrationCardTitle>
      <IntegrationCardSubtitle>{subtitle}</IntegrationCardSubtitle>
    </div>
  </StyledIntegrationCard>
);

export { BaseCard, IntegrationCard };
