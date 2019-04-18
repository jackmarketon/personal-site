import React from 'react';
import NextApp, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/globalStyle';
import Menu from '../components/menu';
import theme from '../config/theme';

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={{ ...theme }}>
        <Container>
          <GlobalStyle />
          <Menu />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
