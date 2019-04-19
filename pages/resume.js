import React from 'react';
import styled from 'styled-components';
import Hero from '../components/hero';
import Body from '../components/body';

const Title = styled.h1``;

export default () => (
  <>
    <Hero image="street" tagline="Currently Working for OpenTable" />
    <Body>
      <Title>Resume</Title>
    </Body>
  </>
);
