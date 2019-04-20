import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Hero from '../components/hero';
import Body from '../components/body';
import ListTitle from '../components/listTitle';
import posts from '../src/posts';

const Byline = styled.span`
  border: 1px solid ${({ theme }) => theme.color.ternary};
  border-bottom: none;
  border-right: none;
  border-top: none;
  padding: 0 0 0 0.8rem;
`;
export default class Post extends Component {
  static getInitialProps = async ({ query: { id } }) => ({
    ...posts[id],
  });

  render() {
    const {
      title,
      overrideTitle = 'Reveries and Contemplation',
      writtenBy,
      date,
      document,
    } = this.props;
    return (
      <>
        <Hero image="blog" tagline={overrideTitle} />
        <Body>
          <ListTitle>{title}</ListTitle>
          <Byline>
            {writtenBy} | {date}
          </Byline>
          <ReactMarkdown source={document} />
        </Body>
      </>
    );
  }
}
