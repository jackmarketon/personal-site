import React, { Component } from 'react';
import Link from 'next/link';

import Hero from '../components/hero';
import Body from '../components/body';
import loadedPosts from '../src/posts';

export default class extends Component {
  static async getInitialProps() {
    // Get Posts from folder
    return { posts: loadedPosts };
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        <Hero image="blog" tagline="Reveries and Ruminations" />
        <Body>
          <h1>Posts</h1>
          {Object.keys(posts).map(slug => (
            <Link
              href={{ pathname: '/post', query: { id: slug } }}
              as={`/post/${slug}`}
              key={slug}
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>{posts[slug].title}</a>
            </Link>
          ))}
        </Body>
      </>
    );
  }
}
