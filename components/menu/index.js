import React, { useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import config from './config';

const MenuWrapper = styled.ul`
  border-left: 1px solid ${({ theme }) => theme.color.ternary};
  display: block;
  left: 1rem;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  transform: ${({ active }) => (active ? 'scaleY(0, 1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.25s ease-out;
  top: 3.15rem;
  z-index: 1;
`;

const MenuItem = styled.li`
  margin: 0;
`;

const Anchor = styled.a`
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  display: block;
  height: 100%;
  font-size: 1.4em;
  font-weight: bold;
  line-height: 1.8em;
  letter-spacing: 2px;
  padding: 0 0 0 1rem;
  text-align: left;
  text-decoration: none;
  transition: border 0.5s ease-in-out, margin 0.25s ease-in-out;
  vertical-align: bottom;
  width: 100%;

  &:hover {
    border-left: 1px solid ${({ theme }) => theme.color.primary};
    padding-left: calc(1rem - 1px);
  }
  &:active {
    border-left: 1px solid ${({ theme }) => theme.color.primary};
    padding-left: 1rem;
    margin-right: -1px;
  }
  &.active {
    color: ${({ theme }) => theme.color.ternary};
  }
`;

const MenuButton = styled.button`
  background: ${({ active, theme }) =>
    active ? theme.color.ternary : 'transparent'};
  border: 1px solid ${({ theme }) => theme.color.ternary};
  color: ${({ active, theme }) =>
    active ? theme.color.secondary : theme.color.white};
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerif};
  font-size: 1.5rem;
  font-weight: 800;
  display: block;
  left: 1rem;
  letter-spacing: 2px;
  outline: none;
  padding: 0.1rem 1rem;
  position: absolute;
  text-transform: uppercase;
  top: 1rem;
  transition: all 0.25s ease-in-out;
  z-index: 1;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    border-left-color: ${({ theme }) => theme.color.ternary};
    border-bottom-color: ${({ theme }) => theme.color.ternary};
  }
`;

const { menuItems } = config;

const Menu = ({ router }) => {
  const [menuVisible, toggleMenu] = useState(false);

  return (
    <>
      <MenuButton active={menuVisible} onClick={() => toggleMenu(!menuVisible)}>
        Menu
      </MenuButton>
      <MenuWrapper active={menuVisible}>
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
    </>
  );
};

export default withRouter(Menu);
