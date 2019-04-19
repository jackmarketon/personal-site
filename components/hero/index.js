import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

import Body from '../body';
import Menu from '../menu';

const HeroWrapper = styled.div`
  background: linear-gradient(
      45deg,
      ${({ theme }) => transparentize(0.2, theme.color.secondary)},
      ${({ theme }) => transparentize(0.1, theme.color.secondary)} 10%
    ),
    url(${({ theme, image }) => theme.heroImage[image]}),
    ${({ theme }) => theme.color.black};
  background-position: center, top;
  background-repeat: no-repeat, no-repeat;
  background-size: auto 100%;
  height: 400px;
  position: relative;
  width: 100%;
  z-index: 0;
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  position: relative;
  width: 100%;
  z-index: 0;
`;

const Hero = styled.div`
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerif};
  font-size: 5rem;
  font-weight: 800;
  line-height: 50px;
  text-transform: uppercase;
  z-index: 0;
`;

const First = styled.span`
  color: ${({ theme }) => theme.color.primary};
  display: block;
  font-size: 5.026rem;
  letter-spacing: 4px;
  position: relative;
  z-index: 2;
`;

const Last = styled.span`
  color: ${({ theme }) => theme.color.ternary};
  display: block;
  letter-spacing: -6px;
  margin-left: -3px;
  position: relative;
  z-index: 1;
`;

const Tagline = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.fontFamily.serif};
  font-size: 2.55rem;
  margin-left: -8px;
  padding: 1rem 0;
`;

export default ({
  image = 'default',
  tagline = 'Software & Product Engineer',
}) => (
  <HeroWrapper image={image}>
    <Body>
      <Menu />
      <TitleWrapper>
        <Hero>
          <First>Jackson</First>
          <Last>Marketon</Last>
        </Hero>
        <Tagline>{tagline}</Tagline>
      </TitleWrapper>
    </Body>
  </HeroWrapper>
);
