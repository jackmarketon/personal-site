import React, { Component } from 'react';
import matter from 'gray-matter';
import Link from 'next/link';

export default class extends Component {
  static async getInitialProps() {
    // Get Posts from folder
    const posts = (ctx => {
      const keys = ctx.keys();
      const values = keys.map(ctx);

      return keys.map((key, idx) => {
        // Slug from file name
        const slug = key
          .replace(/^.*[\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.');
        const { default: value } = values[idx];

        const document = matter(value);

        return { document, slug };
      });
    })(require.context('../posts', true, /\.md$/));

    return { posts };
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        <h1>Posts</h1>
        {posts.map(({ document: { data: { title } }, slug }) => (
          <Link href={{ pathname: '/post', query: { id: slug } }} key={slug}>
            <h2>{title}</h2>
          </Link>
        ))}
      </>
    );
  }
}
