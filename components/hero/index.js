import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

const HeroWrapper = styled.div`
  align-items: center;
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
  display: flex;
  height: 400px;
  flex-direction: column;
  justify-content: center;
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
  letter-spacing: 0px;
  position: relative;
  z-index: 2;
`;

const Last = styled.span`
  color: ${({ theme }) => theme.color.ternary};
  letter-spacing: -10px;
  margin-left: -5px;
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
    <Hero>
      <First>Jackson</First>
      <Last>Marketon</Last>
    </Hero>
    <Tagline>{tagline}</Tagline>
  </HeroWrapper>
);
