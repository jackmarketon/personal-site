import { format } from 'date-fns';
import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from '../components/hero';
import Body from '../components/body';
import ListTitle from '../components/listTitle';
import loadedPosts from '../src/posts';

const Anchor = styled.a`
  cursor: pointer;
  display: inline;
  text-direction: none;
`;

const LinkWrapper = styled.div`
  margin: 1rem 0 1rem 1rem;
`;

const PostTitle = styled.span`
  font-size: 1.2rem;
`;

const PostedDate = styled.span`
  font-style: italic;
  padding: 0 0 0 0.5rem;
`;

const ShortDescription = styled.span`
  display: block;
  padding: 0.5rem 0 0;
`;

const Post = ({ title, date, shortDescription = false }) => (
  <>
    <PostTitle>{title}</PostTitle>
    <PostedDate>{format(date, 'MMM D, YY')}</PostedDate>
    {shortDescription && (
      <ShortDescription>{shortDescription} Read More...</ShortDescription>
    )}
  </>
);
export default class extends Component {
  static async getInitialProps() {
    // Get Posts from folder
    return { posts: loadedPosts };
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        <Hero image="blog" tagline="Reveries and Contemplation" />
        <Body>
          <ListTitle>Blog</ListTitle>
          {Object.keys(posts).map(slug => (
            <LinkWrapper key={slug}>
              <Link
                href={{ pathname: '/post', query: { id: slug } }}
                as={`/post/${slug}`}
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Anchor>
                  <Post {...posts[slug]} />
                </Anchor>
              </Link>
            </LinkWrapper>
          ))}
        </Body>
      </>
    );
  }
}
