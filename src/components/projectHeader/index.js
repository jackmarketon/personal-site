import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

import DefaultBody from '../body';

const Body = styled(DefaultBody)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProjectHeader = styled.div`
  background: linear-gradient(
      45deg,
      ${({ theme }) => transparentize(0.2, theme.color.secondary)},
      ${({ theme }) => transparentize(0.1, theme.color.secondary)} 10%
    ),
    ${({ theme }) => theme.color.black};
  background-position: center, top;
  background-repeat: no-repeat, no-repeat;
  background-size: auto 100%;
  height: 50px;
  position: relative;
  width: 100%;
  z-index: 0;
`;

const Title = styled.h2`
  display: block;
  color: ${({ theme }) => theme.color.ternary};
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerif};
  font-size: 20px;
  line-height: 14px;
`;

export default ({
  pageTitle = 'Project'
}) => (
  <ProjectHeader>
    <Body>
      <Title>{pageTitle}</Title>
    </Body>
  </ProjectHeader>
);