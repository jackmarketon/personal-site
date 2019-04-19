import React from 'react';
import styled from 'styled-components';
import Hero from '../components/hero';
import Body from '../components/body';

const Title = styled.h1``;

export default () => (
  <>
    <Hero image="sd" tagline="Minnesota Born, South Dakota Raised" />
    <Body>
      <Title>About Me</Title>
    </Body>
  </>
);
