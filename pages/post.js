import React, { Component } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default class Post extends Component {
  static async getInitialProps({ query: { id } }) {
    const post = await import(`../posts/${id}.md`);
    const document = matter(post.default);

    return {
      ...document,
    };
  }

  render() {
    const { data: { title, writtenBy, date } = {}, content = {} } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <i>
          Written By {writtenBy} | {date}
        </i>
        <ReactMarkdown source={content} />
      </>
    );
  }
}
