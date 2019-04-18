import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import posts from '../src/posts';

export default class Post extends Component {
  static getInitialProps = async ({ query: { id } }) => ({
    ...posts[id],
  });

  render() {
    const { title, writtenBy, date, document } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <i>
          Written By {writtenBy} | {date}
        </i>
        <ReactMarkdown source={document} />
      </>
    );
  }
}
