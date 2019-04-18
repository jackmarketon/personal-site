import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import config from './config';

const MenuWrapper = styled.ul`
  background: linear-gradient(
    ${({ theme }) => theme.color.primary.dark},
    10%,
    ${({ theme }) => theme.color.primary.light}
  );
  border-right: 2px solid ${({ theme }) => theme.color.grey.dark};
  border-bottom: 2px solid ${({ theme }) => theme.color.grey.dark};
  color: ${({ theme }) => theme.color.grey.dark};
  width: 100%;
  height: 2.6em;
  display: flex;
  margin: 0 0 0 -1rem;
  padding: 0 2rem 0 1rem;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0;
  height: 100%;
  width: 100%;
`;

const Anchor = styled.a`
  color: ${({ theme }) => theme.color.grey.dark};
  border-bottom: 2px solid ${({ theme }) => theme.color.grey.dark};
  cursor: pointer;
  display: block;
  height: 100%;
  font-size: 1.4em;
  font-weight: bold;
  line-height: 1.8em;
  margin: 0 10px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: bottom;
  width: 100%;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    border-bottom: 2px solid ${({ theme }) => theme.color.highlight};
    transition: border-bottom 0.5s ease-in-out, color 0.25s ease-in-out;
  }
  &:active {
    color: ${({ theme }) => theme.color.highlight};
    border-bottom: 2px solid ${({ theme }) => theme.color.red.light};
    transition: border-bottom 0.05s ease-in-out, color: 0.5s ease-in-out;
  }
  &.active {
    color: ${({ theme }) => theme.color.white};
    border-bottom: 2px solid ${({ theme }) => theme.color.red.dark};
  }
`;

const { menuItems } = config;

const Menu = ({ router }) => (
  <MenuWrapper>
    {menuItems.map(({ link: href, title }) => (
      <MenuItem key={title}>
        <Link href={{ pathname: href }} key={title}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Anchor className={router.pathname === href ? 'active' : ''}>
            {title}
          </Anchor>
        </Link>
      </MenuItem>
    ))}
  </MenuWrapper>
);

export default withRouter(Menu);
