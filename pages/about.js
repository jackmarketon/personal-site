import React from 'react';
import styled from 'styled-components';
import Hero from '../components/hero';

const Title = styled.h1``;

export default () => (
  <>
    <Hero image="sd" tagline="Minnesota Born, South Dakota Raised" />
    <Title>About Me</Title>
  </>
);
