import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Router from 'next/router';
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
  margin: 0 0 0 3rem;
`;

const Content = styled(ReactMarkdown)`
  font-size: 1.1rem;
  line-height: 1.7rem;
  padding: 0 3rem;
`;

export default class Post extends Component {
  static getInitialProps = async ({ res, query: { id } }) => {
    if (res && !id) {
      res.writeHead(302, {
        Location: '/blog',
      });
      res.end();
      return {};
    }
    if (!res && !id) {
      Router.push('/blog');
      return {};
    }
    return {
      ...posts[id],
    };
  };

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
          <Content source={document} />
        </Body>
      </>
    );
  }
}
