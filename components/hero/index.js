import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  height: 400px;
  width: 100%;
`;

const HeroImg = styled.img`
  height: 100%;
  width: 100%;
`;

export default () => (
  <HeroWrapper>
    <HeroImg alt="Badlands South Dakota" src="/static/southDakota.jpg" />
  </HeroWrapper>
);
