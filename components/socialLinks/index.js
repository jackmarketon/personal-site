import React from 'react';
import styled from 'styled-components';
import { Github, Twitter, Linkedin } from 'styled-icons/fa-brands';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.color.ternary};
  display: block;
  height: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.5s ease-in-out, margin 0.25s ease-in-out;
  width: 1.5rem;

  &:first-child {
    margin-left: none;
  }
  &:last-child {
    margin-right: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
    margin-top: -2px;
  }
`;

export default () => (
  <Wrapper>
    <Link
      href="http://github.com/jackmarketon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github />
    </Link>
    <Link
      href="https://www.linkedin.com/in/jacksonmarketon/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin />
    </Link>
    <Link
      href="https://twitter.com/jackmarketon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter />
    </Link>
  </Wrapper>
);
